import { LogOut, ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { useAuth } from "../hooks/authHook";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const {logoutUser} = useAuth()
  return (
    <div className="sticky top-0 z-50 bg-zinc-950/60 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold text-xl">
            S
          </div>

          <h1 className="text-2xl font-bold text-white">
            Sky<span className="text-emerald-400">Mart</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-zinc-300 font-medium">
          <NavLink
            to="/main"
            className={({ isActive }) =>
              `transition hover:text-emerald-400 ${
                isActive ? "text-emerald-400" : ""
              }`
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/main/shop"
            className={({ isActive }) =>
              `transition hover:text-emerald-400 ${
                isActive ? "text-emerald-400" : ""
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            className={({ isActive }) =>
              `transition hover:text-emerald-400 ${
                isActive ? "text-emerald-400" : ""
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* User & Actions */}
        <div className="flex items-center gap-5">
          {/* User */}
          <div className="flex items-center gap-3 bg-zinc-900 px-3 py-2 rounded-xl border border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold">
              {user.name[0].toUpperCase()}
            </div>

            <div className="hidden md:block">
              <p className="text-xs text-zinc-400">Welcome</p>
              <p className="text-white font-medium">{user.name}</p>
            </div>
          </div>

          {/* Cart */}
          <button className="relative w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-emerald-500 hover:text-white transition duration-300 cursor-pointer">
            <ShoppingCart size={20} />
          </button>

          {/* Logout */}
          <button className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-400 hover:bg-rose-300 hover:text-red-600 transition duration-300 cursor-pointer"
          onClick={() => logoutUser()}>
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
