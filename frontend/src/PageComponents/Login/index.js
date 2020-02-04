import React from "react";

const Login = () => {
  return (
    <div className="page-container container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
            <div className="form-wrapper flex-auto px-4 lg:px-10 py-10 pt-0">
              <label className="text-gray-600 text-sm font-bold">
                Please sign in
              </label>
              <form className="form-container relative w-full mb-3">
                <div>
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="px-3 py-3  text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    type="email"
                    placeholder="email"
                  ></input>
                </div>
                <div>
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="px-3 py-3  text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    type="password"
                    placeholder="Password"
                  ></input>
                </div>
                <div className="btnWrapper text-center mt-6">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
