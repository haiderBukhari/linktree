import { useState } from "react";
import AsideHeader from "../../components/AsideHeader";

export default function GameManagement() {
    const [selectedRow, setSelectedRow] = useState(1);
    const temp = {
        value: ''
    };
    const [data, setData] = useState(new Array(8).fill(temp))
    const [uploadLogo, setUploadLogo] = useState(true);
    return (
        <div className="flex mb-20">
            <AsideHeader />
            <div className="flex w-full flex-col items-center mt-4 max-md:mt-10 max-md:max-w-full">
                <div className="justify-center text-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950">
                    Game Management
                </div>
                <div className="mt-2 text-2xl font-bold leading-10 text-black">
                    Set up your landing page
                </div>
                <div className="flex gap-5 justify-between mt-12 text-xl font-semibold tracking-tight text-blue-950 max-md:flex-wrap max-md:mt-10">
                    <div onClick={() => { setSelectedRow(1) }} className={`cursor-pointer justify-center px-5 py-2.5  ${selectedRow === 1 ? 'bg-indigo-400 text-white' : 'text-black'} rounded-3xl`}>
                        Page Content
                    </div>
                    <div onClick={() => { setSelectedRow(2) }} className={`cursor-pointer justify-center px-5 py-2.5 whitespace-nowrap ${selectedRow === 2 ? 'bg-indigo-400 text-white' : 'text-black'} rounded-3xl`}>
                        Design
                    </div>
                    <div onClick={() => { setSelectedRow(3) }} className={`cursor-pointer justify-center px-5 py-2.5 ${selectedRow === 3 ? 'bg-indigo-400 text-white' : 'text-black'} rounded-3xl`}>
                        Social Media links
                    </div>
                </div>

                <div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                    {
                        selectedRow === 1 && (
                            <>
                                <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                    <div className="text-2xl max-md:max-w-full">Brand Name</div>
                                    <div className="flex flex-col items-start pr-20 mt-3.5 text-base max-md:pr-5 max-md:max-w-full ">
                                        <div onClick={() => { setUploadLogo(true) }} className="flex gap-3 justify-center">
                                            <input type='radio' className="w-[20px] ml-1" id="uploadLogo" name="selection" checked={uploadLogo} />
                                            <label htmlFor="uploadLogo" id="uploadLogo" className="my-auto">Upload logo</label>
                                        </div>
                                        <div onClick={() => { setUploadLogo(false) }} className="flex gap-3 justify-center mt-1.5">
                                            <input type='radio' className="w-[20px] ml-1" id="enterBrandName" name="selection" checked={!uploadLogo} />
                                            <label htmlFor="enterBrandName" id="enterBrandName" className="my-auto">Enter brand name</label>
                                        </div>
                                    </div>
                                </div>

                                {
                                    uploadLogo ? (<div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                                        <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                                <div className="shrink-0 rounded-full bg-zinc-300 h-[100px] w-[100px] max-md:mt-10" />
                                                <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
                                                    <div className="justify-center self-stretch px-0.5 py-2.5 my-auto w-full text-base font-semibold leading-6 text-center text-white whitespace-nowrap bg-indigo-400 rounded-xl max-md:mt-10">
                                                        Upload
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>) : (<div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                                        <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                                <div className="mt-4 text-base font-medium leading-5 text-black w-full">
                                                    Brand Name
                                                    <input className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter your Brand Name`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }

                                <div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                                    <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                        <div className="text-2xl font-medium leading-8 text-black max-md:max-w-full">
                                            Options for the fortune wheel
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            {
                                                data.map((Item, index) => (
                                                    <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                        Option {index + 1}
                                                        <input className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter your option ${index + 1}`} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }

                    {
                        selectedRow === 2 && (
                            <>
                                <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                    <div className="text-2xl max-md:max-w-full">Wheel Color</div>
                                    <div className="flex gap-3 justify-start mt-4">
                                        <div className="w-[20px] h-[20px] bg-[#8497FC]"></div>
                                        <label htmlFor="uploadLogo" className="my-auto">Blue</label>
                                    </div>
                                    <div className="flex gap-3 justify-start mt-1.5">
                                        <div className="w-[20px] h-[20px] bg-[#FDFDAF]"></div>
                                        <label htmlFor="enterBrandName" className="my-auto">Yellow</label>
                                    </div>
                                </div>


                                <div className="flex flex-col mt-10 p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                    <div className="text-2xl max-md:max-w-full">Page Color</div>
                                    <div className="flex gap-3 justify-start mt-4">
                                        <div className="w-[20px] h-[20px] bg-[#fff]" style={{ border: "1px solid #ccc" }}></div>
                                        <label htmlFor="uploadLogo" className="my-auto">White</label>
                                    </div>
                                </div>
                            </>
                        )
                    }

                    {
                        selectedRow === 3 && (
                            <>
                                <div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                                    <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                        <div className="text-2xl font-medium leading-8 text-black max-md:max-w-full">
                                            Links of Social Media Platform
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                Instagram
                                                <input className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter link`} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                TikTok
                                                <input className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter link`} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                Facebook
                                                <input className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter link`} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                Google Maps
                                                <input className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter link`} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                Twitter
                                                <input className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter link`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                                    <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                        <div className="text-2xl font-medium leading-8 text-black max-md:max-w-full">
                                            Unique URL for Landing Page
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                Landing Page URL
                                                <input className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter link`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col mt-9 w-full max-w-[1050px] max-md:max-w-full">
                                    <div className="flex flex-col p-5 font-medium text-black bg-white leading-[140%] max-md:max-w-full mr-2 md:mr-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                        <div className="text-2xl font-medium leading-8 text-black max-md:max-w-full">
                                            Email Content
                                        </div>
                                        <div className="flex flex-col mt-3.5 max-md:max-w-full">
                                            <div className="mt-4 text-base font-medium leading-5 text-black max-md:max-w-full">
                                                Content
                                                <textarea rows="6" cols="30" className="flex flex-col justify-center px-3.5 py-2.5 mt-3 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400 max-md:max-w-full outline-none w-full" type="text" placeholder={`Enter content`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    }

                </div>
            </div>
        </div>
    );
}

