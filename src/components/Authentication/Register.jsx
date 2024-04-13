import * as React from "react";

export default function Login() {
    return (
        <div className="h-full flex justify-center items-center mt-10">
            <div className="flex flex-col bg-white rounded-3xl shadow-xl max-w-[400px] w-full">
                <div className="flex flex-col w-full text-center bg-white">
                    <div className="flex flex-col px-6 pt-6 w-full bg-white">
                        <div className="flex flex-col">
                            <div className="text-lg font-semibold leading-7 text-gray-900">
                                Sign in to your account
                            </div>
                            <div className="mt-1 text-sm leading-5 text-slate-600">
                                Welcome back! Please enter your details.
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-white min-h-[20px]" />
                </div>
                <div className="flex flex-col justify-center px-6 w-full">
                    <div className="flex flex-col rounded-xl">
                        <div className="flex flex-col">
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <div className="text-sm font-medium leading-5 text-black">
                                        Email
                                    </div>
                                    <input className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm" type="email" placeholder="Enter your email"/>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center mt-4 whitespace-nowrap">
                                <div className="flex flex-col">
                                    <div className="text-sm font-medium leading-5 text-black">
                                        Password
                                    </div>
                                    <input className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm" type="password" placeholder="••••••••"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-0 pr-2 mt-5 text-sm leading-5 justify-between items-center" >
                            <div className="flex gap-1 py-0.5 font-medium text-black">
                                <input type="checkbox" className="flex-auto my-auto mr-1" checked/>
                                <div className="flex-auto my-auto">Remember me</div>
                            </div>
                            <div className="justify-end font-semibold text-indigo-400">
                                Forgot password?
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pt-8 w-full text-base font-semibold leading-6 whitespace-nowrap">
                    <div className="flex flex-col px-6 pb-6 w-full bg-white">
                        <div className="justify-center text-center items-center px-5 py-2.5 text-white bg-indigo-400 rounded-lg shadow-sm">
                            Confirm
                        </div>
                        <div className="justify-center text-center items-center px-5 py-2.5 mt-3 text-black bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

