import React, { useEffect, useState } from "react";
import { useAuthHook } from "hooks/authHook";

export const Login: React.FC = () => {
  const authHook = useAuthHook();

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Username"
          value={authHook.email}
          onChange={(e) => authHook.setEmail(e.target.value)}
        />
        <p className="text-red text-xs italic">{authHook.emailError}</p>
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
          value={authHook.password}
          onChange={(e) => authHook.setPassword(e.target.value)}
        />
        <p className="text-red text-xs italic">{authHook.passwordError}</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue hover:bg-blue-dark font-bold py-2 px-4 rounded"
          type="button"
          onClick={authHook.handleLogin}
        >
          Sign In
        </button>
        <button
          className="bg-blue hover:bg-blue-dark font-bold py-2 px-4 rounded"
          type="button"
          onClick={authHook.handleSignup}
        >
          Sign Up
        </button>
        {/* Forgot Password? */}
      </div>
    </div>
  );
};
