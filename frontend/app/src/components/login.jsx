import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function LogIn(){
    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">

            <div className="mx-auto w-full max-w-sm">
                <h2 className="mt-10 text-center text-3xl font-semibold text-gray-900">
                    Welcome Back!
                </h2>
            </div>

            <div className="mt-16 mx-auto w-full max-w-sm">

                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-base font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-4">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-base font-medium text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="text-base font-medium text-indigo-600">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-4">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-base font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Log in
                        </button>
                    </div>
                </form>

                <p className="mt-5 text-center text-base text-gray-500">
                    Not a member?{' '}
                    <a href="#" className="font-semibold text-indigo-500">
                        Join Moodify Today
                    </a>
                </p>

            </div>
        </div>
    )
}

export default LogIn;