import * as React from "react";
import women from '../assets/women.png'

export default function PricingHeader() {
    return (
        <div className="flex justify-center items-center self-stretch px-16 py-14 mt-5 w-full bg-[linear-gradient(90deg,#F6F7FC_0%,#4F5A96_100%)]  max-md:px-5 max-md:max-w-full">
            <div className="w-full max-w-[1060px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src={women}
                            alt=""
                            className="max-w-[380px] h-auto aspect-square max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                    <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                            <div className="text-3xl font-bold leading-2 max-md:max-w-full max-md:text-4xl mb-4">
                                Subscription Options
                            </div>
                            <div className="mt-3.5 text-lg font-medium leading-2 max-md:max-w-full">
                                Explore Flexible Monthly and Yearly Plans Tailored to Your Needs              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

