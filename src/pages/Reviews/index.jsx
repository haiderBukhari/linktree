import React from 'react'
import AsideHeader from '../../components/AsideHeader'

const index = () => {
    return (
        <div className="flex mb-20">
            <AsideHeader />
            <div className="flex w-full flex-col items-center mt-4 max-md:mt-10 max-md:max-w-full">
                <div className="justify-center text-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950">
                    Customer Reviews
                </div>
                <div className="flex flex-col w-full max-w-4xl mt-10 text-base font-medium leading-6 text-black">
                    <div className="flex w-full gap-5 justify-between p-5 font-bold bg-white max-md:flex-wrap shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] mb-6">
                        <div className='flex-1'>Name</div>
                        <div className='flex-1'>Rating</div>
                        <div className='flex-1'>Submission Date</div>
                        <div className='flex-1'>Submission Time</div>
                        <div className='flex-1'>Review</div>
                    </div>
                    <div className="flex flex-col gap-5 w-full bg-white shadow-sm max-md:flex-wrap">
                        <div className="flex items-center justify-between p-5 border-b max-md:flex-col max-md:gap-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                            <div className='flex-1'>Emily Johnson</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b1ab9c48b83ac22f54653e15661d64fa78a3388e1bb4da1b797ea2176d093f8?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-[5] w-[auto] text-center"
                            />
                            <div className='flex-1 text-center'>March 6, 2024</div>
                            <div className='flex-1 text-center'>12:30 PM</div>
                            <div className="leading-6 flex-1 text-start">
                                Great experience! The food was delicious and the service was
                                excellent. Will definitely be coming back.
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-5 border-b max-md:flex-col max-md:gap-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                            <div className='flex-1'>Emily Johnson</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b1ab9c48b83ac22f54653e15661d64fa78a3388e1bb4da1b797ea2176d093f8?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-[5] w-[auto] text-center"
                            />
                            <div className='flex-1 text-center'>March 6, 2024</div>
                            <div className='flex-1 text-center'>12:30 PM</div>
                            <div className="leading-6 flex-1 text-start">
                                Great experience! The food was delicious and the service was
                                excellent. Will definitely be coming back.
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-5 border-b max-md:flex-col max-md:gap-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                            <div className='flex-1'>Emily Johnson</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b1ab9c48b83ac22f54653e15661d64fa78a3388e1bb4da1b797ea2176d093f8?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-[5] w-[auto] text-center"
                            />
                            <div className='flex-1 text-center'>March 6, 2024</div>
                            <div className='flex-1 text-center'>12:30 PM</div>
                            <div className="leading-6 flex-1 text-start">
                                Great experience! The food was delicious and the service was
                                excellent. Will definitely be coming back.
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-5 border-b max-md:flex-col max-md:gap-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                            <div className='flex-1'>Emily Johnson</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b1ab9c48b83ac22f54653e15661d64fa78a3388e1bb4da1b797ea2176d093f8?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-[5] w-[auto] text-center"
                            />
                            <div className='flex-1 text-center'>March 6, 2024</div>
                            <div className='flex-1 text-center'>12:30 PM</div>
                            <div className="leading-6 flex-1 text-start">
                                Great experience! The food was delicious and the service was
                                excellent. Will definitely be coming back.
                            </div>
                        </div>
                    </div>
                    {/* Repeat this structure for other reviews */}
                </div>
            </div>
        </div>
    )
}

export default index
