import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AsideHeader = () => {
    const Location = useLocation();
    const Navigate = useNavigate();
    return (
        <div className="flex flex-col mr-10 leading-[100%] max-w-[280px] w-full">
            <div className="flex flex-col px-5 pt-5 pb-20 w-full bg-gray-100">
                <div className="flex gap-2 self-start ml-5 text-xs font-bold whitespace-nowrap">
                    <div className="flex justify-center items- w-6 py-1 text-white rounded-full bg-[linear-gradient(90deg,#F6F7FC_0%,#4F5A96_100%)]">
                        E
                    </div>
                    <div className="my-auto tracking-wide bg-clip-text bg-[linear-gradient(90deg,#F6F7FC_0%,#4F5A96_100%)]">
                        EGO
                    </div>
                </div>
                <div className="flex flex-col justify-center mt-12">
                    <div className="justify-center p-2.5 text-xs tracking-wider whitespace-nowrap text-teal-950">
                        MENU
                    </div>
                    <div className="flex flex-col mt-2.5 ml-3 text-xs tracking-wide text-slate-800">
                        <div className="flex gap-3 p-2.5 whitespace-nowrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/83bf9071f71546dfc5b8154f9dafac814829352ac2910b0ca1f7089e28c2a851?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div className="my-auto">Dashboard</div>
                        </div>
                        <div className="flex gap-3 p-2.5 mt-3.5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b017c6aca6b5480099eb7c245d9d9b5d6b002f158d1c92cff798a8725015ad0?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div className="my-auto">Account Management</div>
                        </div>
                        <div onClick={()=>{Navigate('/game')}} className={`flex gap-3 p-2.5 mt-3.5 cursor-pointer ${Location.pathname ==='/game' && 'bg-[#8497FC] bg-opacity-25'}`}>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e5b60070049e5d2d007c6439222d7b9c7350335eaf8564e414d56c4facca8e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div className="flex-auto my-auto">Game Management</div>
                        </div>
                        <div className="flex gap-3 p-2.5 mt-3.5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfe905d3fddf8af89b233e4ae1f7f3edf0f522538d19de6bffa145b688697ee2?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div className="my-auto">Flyer Customization</div>
                        </div>
                        <div onClick={()=>{Navigate('/reviews')}} className={`flex gap-3 p-2.5 cursor-pointer mt-3.5 ${Location.pathname ==='/reviews' && 'bg-[#8497FC] bg-opacity-25'}`}>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d20cffe5d2d85d40bbd4885090ef46de93a89d1ba8a5332cdd99874ab3f44be9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div className="my-auto">Customer Reviews</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-3.5 mb-60 text-xs tracking-wide text-slate-800">
                    <div className="justify-center p-2.5 text-xs tracking-wider whitespace-nowrap text-teal-950">
                        OTHERS
                    </div>
                    <div className="flex flex-col mt-2.5 ml-3">
                        <div onClick={()=>{Navigate('/settings')}} className={`flex gap-3 p-2.5 cursor-pointer mt-3.5 ${Location.pathname ==='/settings' && 'bg-[#8497FC] bg-opacity-25'}`}>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8eb21f38b279ed6c9265babf52586876a1bd635c06970b30dc5bb859ad1222bc?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div className="my-auto">Settings</div>
                        </div>
                        <div className="flex gap-3 p-2.5 mt-3.5 rounded-md">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/18169ef36f571eb46211b765f3f3e4e2f435ec3daf87ae648872bd24ba147897?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div className="my-auto">Payment History</div>
                        </div>
                    </div>
                    <div className="flex gap-3 p-2.5 mt-2.5 ml-3 whitespace-nowrap">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a34cdd663df3ea160a5e3efb6d2b67c3621b6cb392ffec29be33774096da946f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 aspect-square w-[18px]"
                        />
                        <div className="my-auto">Logout</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsideHeader