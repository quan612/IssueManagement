import React from "react";

const Login = () => {
  return (
    <div className="page-container container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
            <FormWrapper className="form-wrapper">
              <LoginLabel>Please sign in </LoginLabel>
              <LoginForm>
                <div>
                  <label>Email</label>
                  <input type="email" placeholder="email"></input>
                </div>
                <div>
                  <label>Password</label>
                  <input type="password" placeholder="Password"></input>
                </div>
                <div className="btnWrapper">
                  <button type="submit">Sign in</button>
                </div>
              </LoginForm>
            </FormWrapper>
            {/* </div>
        </div>
        </div>
    </div> */}
          </div>
        </LoginContainer>
      </div>
    </div>
  );
};

export default Login;
