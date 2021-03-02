import React, { useEffect, useState } from "react"
import { useAuthHook } from "hooks/authHook"

export const Login: React.FC = () => {
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-red text-xs italic">{emailError}</p>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red text-xs italic">{passwordError}</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue hover:bg-blue-dark font-bold py-2 px-4 rounded"
          type="button"
          onClick={handleLogin}
        >
          Sign In
        </button>
        <button
          className="bg-blue hover:bg-blue-dark font-bold py-2 px-4 rounded"
          type="button"
          onClick={handleSignup}
        >
          Sign In
        </button>
        {/* Forgot Password? */}
      </div>
    </div>
  );
};
