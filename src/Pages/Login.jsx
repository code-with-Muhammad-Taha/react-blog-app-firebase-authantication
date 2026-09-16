import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import App from "../firebase/config";

const auth = getAuth(App);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [user,setUser]=useState(null)
const navigate = useNavigate()

  const loginHandler = () => {
    console.log("Login kr raha hon");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if(user){
          navigate("/")
        }
        console.log("User Login Successfully");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("Error Code:", errorCode);
        console.log("Error Message:", errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Login to continue to your account
          </p>
        </div>

        <div className="space-y-5">
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter Your Email..."
          />

          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
          />

          <button
            className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-500 active:scale-[0.98]"
            onClick={loginHandler}
          >
            Login
          </button>

          <div className="relative flex items-center py-2">
            <div className="h-px flex-1 bg-slate-800"></div>
            <span className="px-3 text-xs text-slate-500">OR</span>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>

          <Link to="/SignUp" className="block">
            <button className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 active:scale-[0.98]">
              Go to Sign Up Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;