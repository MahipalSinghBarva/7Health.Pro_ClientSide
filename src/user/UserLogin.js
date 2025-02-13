import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'


import { useAlert } from "react-alert";




const UserLogin = () => {

    const alert = useAlert();

    const navigate = useNavigate();

    return (
        <section>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <div className="mb-2 flex justify-center">

                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight text-white">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 ">
                        Don&apos;t have an account?{' '}
                        <Link to="/register"


                            className="font-extrabold text-red-600 transition-all duration-200 hover:underline "
                        >
                            Create a free account
                        </Link>
                    </p>
                    <form action="#" method="POST" className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="" className="text-base font-medium text-white">
                                    {' '}
                                    Email address{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-blue-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        value=""
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="" className="text-base font-medium text-white">
                                        {' '}
                                        Password{' '}
                                    </label>
                                    <a href="#" title="" className="text-sm font-semibold text-red-900 hover:underline">
                                        {' '}
                                        Forgot password?{' '}
                                    </a>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-blue-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Password"
                                        value=""
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:text-black hover:bg-blue-300/80"
                                >
                                    Sign In<ArrowRight className="ml-2 bg-transparent" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default UserLogin
