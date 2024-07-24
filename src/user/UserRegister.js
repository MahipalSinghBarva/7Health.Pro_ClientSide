
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const UserRegister = () => {



    return (
        <section>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <div className="mb-2 flex justify-center">
                        
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight text-white">
                        Sign up to create account
                    </h2>
                    <p className="mt-2 text-center text-base text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login"
                            href="#"
                            title=""
                            className="font-medium text-blue-900 font-extrabold  transition-all duration-200 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                    <form action="#" method="POST" className="mt-8" >
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="text-base font-medium text-white">
                                    {' '}
                                    Full Name{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="fflex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white placeholder:text-blue-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="username"
                                        placeholder="Full Name"
                                        id="username"

                                        value=""
                                        name="username"

                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-base font-medium text-white">
                                    {' '}
                                    Email address{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-blue-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                        value=""
                                        name="email"

                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-base font-medium text-white">
                                        {' '}
                                        Password{' '}
                                    </label>
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
                                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:text-blue-200 hover:bg-blue-700/80"
                                >
                                    Create Account <ArrowRight className="ml-2 bg-transparent" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}



export default UserRegister
