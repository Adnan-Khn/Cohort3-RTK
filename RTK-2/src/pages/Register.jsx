import { useState } from "react";
import { ShoppingBag, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../hooks/authHook";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    navigate,
    reset,
    watch,
    registerUser,
    errors,
    handleSubmit,
  } = useAuth();
  const password = watch("password");
  return (
    <section className="min-h-screen bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
        <div className="flex items-center justify-center px-8 py-12 w-1/2">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold text-white">Create Account</h2>
            <form
              className="mt-8 space-y-5"
              onSubmit={handleSubmit(registerUser)}
            >
              {/* Full Name */}
              <div>
                <label className="text-sm text-zinc-300">Full Name</label>

                <div className="mt-2 flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">
                  <User size={20} className="text-zinc-400" />

                  <input
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Name should be atleast have 3 character",
                      },
                      pattern: {
                        value: /^[A-Za-z ]+$/,
                        message: "Only letters and spaces are allowed",
                      },
                    })}
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent px-3 py-4 outline-none text-white placeholder:text-zinc-500"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-300 text-xs my-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-zinc-300">Email Address</label>

                <div className="mt-2 flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">
                  <Mail size={20} className="text-zinc-400" />

                  <input
                    {...register("email", {
                      required: "Email is Required!!!",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-3 py-4 outline-none text-white placeholder:text-zinc-500"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-300 text-xs my-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-zinc-300">Password</label>

                <div className="mt-2 flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">
                  <Lock size={20} className="text-zinc-400" />

                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="w-full bg-transparent px-3 py-4 outline-none text-white placeholder:text-zinc-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff size={20} className="text-zinc-400" />
                    ) : (
                      <Eye size={20} className="text-zinc-400" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-300 text-xs my-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm text-zinc-300">
                  Confirm Password
                </label>

                <div className="mt-2 flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">
                  <Lock size={20} className="text-zinc-400" />

                  <input
                    {...register("cnfPassword", {
                      required: "Must be same!!!",
                      validate: (val) =>
                        val === password || "Password must be same",
                    })}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full bg-transparent px-3 py-4 outline-none text-white placeholder:text-zinc-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} className="text-zinc-400" />
                    ) : (
                      <Eye size={20} className="text-zinc-400" />
                    )}
                  </button>
                </div>
                {errors.cnfPassword && (
                  <p className="text-red-300 text-xs my-2">
                    {errors.cnfPassword.message}
                  </p>
                )}
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-600 transition rounded-xl py-4 font-semibold text-white mt-2">
                Create Account
              </button>
            </form>
            <p className="mt-8 text-center text-zinc-400">
              Already have an account?
              <button
                className="ml-2 text-emerald-400 hover:text-emerald-300 font-medium"
                onClick={() => navigate("/")}
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
