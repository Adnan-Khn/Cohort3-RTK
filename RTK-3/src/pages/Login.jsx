import { useState } from 'react'
import { useAuth } from '../hooks/authHook';
import { Mail,Eye, EyeOff, Lock } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {navigate, register,reset,handleSubmit,errors,loginUser} = useAuth();
  return (
    <section className="min-h-screen bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
        <div className="flex items-center justify-center px-8 py-12 w-1/2">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold text-white">Sign In</h2>

            <p className="text-zinc-400 mt-2">
              Welcome back! Please login to your account.
            </p>

            <form className="mt-10 space-y-6" onSubmit={handleSubmit(loginUser)}>
              <div>
                <label className="text-sm text-zinc-300">Email Address</label>

                <div className="mt-2 flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">
                  <Mail className="text-zinc-400" size={20} />
                  <input
                  {...register("email",{
                    required:"Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                  })}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder:text-zinc-500"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-300 text-xs my-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-zinc-300">Password</label>

                <div className="mt-2 flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">
                  <Lock className="text-zinc-400" size={20} />

                  <input
                    {...register("password",{
                      required:"Password is required!!!"
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder:text-zinc-500"
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
              <button className="w-full rounded-xl bg-emerald-500 py-4 font-semibold text-white hover:bg-emerald-600 transition">
                Login
              </button>
            </form>
            <p className="mt-8 text-center text-zinc-400">
              Don't have an account?
              <button className="ml-2 text-emerald-400 hover:text-emerald-300 font-medium"
              onClick={()=>navigate("/register")}
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login