const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");

const UserMutation = {
  async signup(parent, args, ctx, info) {
    // lowercase the email
    args.email = args.email.toLowerCase();

    // check if there is an email in the system
    const isExist = await ctx.prisma.user({
      email: args.email,
    });

    if (isExist) throw new Error(`This email ${args.email} was used.`);

    // hash user password
    const hashPassword = await bcrypt.hash(args.password, 10);

    // create the user with that hashed password
    const user = await ctx.prisma.createUser(
      {
        ...args,
        password: hashPassword,
        permissions: { set: ["USER"] },
      },
      info
    );

    // return the user
    return user;
  },

  async signin(parent, args, ctx, info) {
    const { email, password } = args;

    // check if there is an email in the system
    const user = await ctx.prisma.user({
      email: email,
    });

    if (!user) throw new Error(`There is no user with this email: ${email}`);

    // check if the password is correct by comparing the its hashed password with the database
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Password is incorrect.");

    // generate the JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // set the cookie with the token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      // secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7, // cookie for 7 days
    });

    return user;
  },

  signout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "User is logged out!" };
  },

  async resetPassword(parent, args, ctx, info) {
    const { email, password, confirmPassword } = args;
    //check if pw and confirm pw match
    if (password !== confirmPassword) throw new Error("Password and Confirm password must match");

    //find the user
    const user = await ctx.prisma.user({
      email: email,
    });
    if (!user) throw new Error(`There is no user with email ${email}!`);

    // now user exists and password is good then we hashed this password
    const hashedPassword = await bcrypt.hash(password, 10); //10 is salt
    const updatedUser = await ctx.prisma.updateUser(
      {
        where: {
          email: email,
        },
        data: {
          password: hashedPassword,
        },
      },
      info
    );

    return updatedUser;
  },

  async updateUserInfo(parent, args, ctx, info) {
    const { email, name, avatar } = args;

    //find the user
    const user = await ctx.prisma.user({
      email: email,
    });
    if (!user) throw new Error(`There is no user with email ${email}!`);

    let updateData = {};
    if (name) updateData = { ...updateData, name: name };
    if (avatar) updateData = { ...updateData, avatar: avatar };

    const updatedUser = await ctx.prisma.updateUser(
      {
        where: {
          email: email,
        },
        data: updateData,
      },
      info
    );

    return updatedUser;
  },
};

module.exports = UserMutation;
