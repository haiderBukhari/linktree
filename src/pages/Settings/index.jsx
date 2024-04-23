import React from 'react'
import AsideHeader from '../../components/AsideHeader'

const Index = () => {
    return (
        <div className="flex mb-20">
            <AsideHeader />
            <div className="flex w-full flex-col items-center mt-4 max-md:mt-10 max-md:max-w-full">
                <div className="justify-center text-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950">
                    Customer Reviews
                </div>
                <div className="pr-6 mt-10 bg-white shadow-sm w-full max-md:pr-5 ">
                    <div className="flex justify-center gap-5 max-md:flex-col shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] max-md:gap-0">
                        <div className="flex flex-col max-md:ml-0 w-full">
                            <div className="flex flex-col grow p-6 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                <div className="text-2xl font-semibold text-center text-black max-md:max-w-full">
                                    Basic Information
                                </div>
                                <div className="flex flex-col mt-5 w-full">
                                    <div className="flex w-full flex-col justify-center max-md:max-w-full">
                                        <div className="flex flex-col max-md:max-w-full">
                                            <div className="text-sm font-medium leading-5 text-slate-700 max-md:max-w-full">
                                                Name*
                                            </div>
                                            <div className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm max-md:max-w-full">
                                                <div className="justify-center max-md:max-w-full">
                                                    Enter your name
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center mt-4 max-md:max-w-full">
                                        <div className="flex flex-col max-md:max-w-full">
                                            <div className="text-sm font-medium leading-5 text-slate-700 max-md:max-w-full">
                                                Email*
                                            </div>
                                            <div className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm max-md:max-w-full">
                                                <div className="justify-center max-md:max-w-full">
                                                    Enter your email
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center mt-4 max-md:max-w-full">
                                        <div className="flex flex-col max-md:max-w-full">
                                            <div className="text-sm font-medium leading-5 text-slate-700 max-md:max-w-full">
                                                Phone Number*
                                            </div>
                                            <div className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm max-md:max-w-full">
                                                <div className="justify-center max-md:max-w-full">
                                                    Enter your phone number
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center mt-4 max-md:max-w-full">
                                        <div className="flex flex-col max-md:max-w-full">
                                            <div className="text-sm font-medium leading-5 text-slate-700 max-md:max-w-full">
                                                Username
                                            </div>
                                            <div className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm max-md:max-w-full">
                                                <div className="justify-center max-md:max-w-full">
                                                    Enter Username
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 max-w-[300px] w-full max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto text-center max-md:mt-10">
                                <div className="text-2xl font-semibold text-black">
                                    Profile Picture
                                </div>
                                <div className="shrink-0 mt-6 rounded-full bg-zinc-300 h-[198px] w-[198px] mx-auto" />
                                <div className="justify-center self-center px-6 py-4 mt-6 text-base font-bold leading-4 text-white whitespace-nowrap bg-indigo-400 rounded-xl max-md:px-5">
                                    Upload
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-10 mr-2 bg-white w-full max-md:px-5">
                    <div className='p-6 mx-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]'>
                        <div className="text-2xl font-semibold text-black max-md:max-w-full">
                            Change password
                        </div>
                        <div className="flex flex-col mt-5 max-md:max-w-full">
                            <div className="flex flex-col justify-center max-md:max-w-full">
                                <div className="flex flex-col max-md:max-w-full">
                                    <div className="text-sm font-medium leading-5 text-slate-700 max-md:max-w-full">
                                        Current Password*
                                    </div>
                                    <div className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm max-md:max-w-full">
                                        <div className="justify-center max-md:max-w-full">
                                            Enter your current password
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-1.5 max-md:max-w-full">
                                        <div className="flex flex-col max-md:max-w-full">
                                            <div className="text-sm font-medium leading-5 text-slate-700 max-md:max-w-full">
                                                New Password*
                                            </div>
                                            <div className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm max-md:max-w-full">
                                                <div className="justify-center max-md:max-w-full">
                                                    Create a new password
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-1.5 text-sm leading-5 text-slate-600 max-md:max-w-full">
                                            Must be at least 8 characters.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center mt-4 max-md:max-w-full">
                                <div className="flex flex-col max-md:max-w-full">
                                    <div className="text-sm font-medium leading-5 text-slate-700 max-md:max-w-full">
                                        Confirm Password*
                                    </div>
                                    <div className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm max-md:max-w-full">
                                        <div className="justify-center max-md:max-w-full">
                                            Enter password to confirm
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index