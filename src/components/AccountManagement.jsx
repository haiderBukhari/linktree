import React, {useState, useEffect} from "react";
import AsideHeader from "./AsideHeader";
import AddAcccountModel from "./AddAccount";
import axios from 'axios';
import { useSelector } from 'react-redux';

function AccountManagement() {
    // Sample data object with row names and corresponding values
    const [open, setOpen] = useState(false)
    const userId = useSelector(state => state.authentication.userId);
    const [data, setData] = useState([]);

    const columns = [
        "Name",
        "Email Address",
        "Subscription Plan",
        "Account Status",
        "Last Login Date"
    ]

    useEffect(() => {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_PORT}/sub/auth/${userId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                // console.log(res);
                const updatedData = res.data?.map((Item) => {
                    return { name: Item.name, email: Item.email, subScriptionPlan: Item.subScriptionPlan, status: Item.status, lastlogin: Item.lastlogin }
                })
                setData(updatedData);
            })
        } catch (error) {
            console.error("error");
        }
    }, [])

    return (
        <div className="flex mb-20">
            <AsideHeader />
            <div className="w-full mt-6 mx-5">
                <div className="flex items-end justify-between">
                    <div className="justify-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950">
                        Account Management
                    </div>
                    <div className="flex gap-px p-2.5 text-base font-bold tracking-tight text-white bg-indigo-400 rounded-md h-[46px]">
                        <div onClick={() => setOpen(!open)} className="cursor-pointer">Add new account</div>
                    </div>
                </div>
                <div className="flex gap-5 mt-10 justify-between items-center p-5 bg-white shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] max-md:flex-wrap">
                    {columns.map((key, idx) => (
                        <div key={idx} className="font-bold">{key}</div>
                    ))}
                    <div className="w-[40px]"></div>
                </div>

                {data?.map((row, index) => (
                    <div key={index} className="flex gap-5 justify-between items-center p-5 mt-5 bg-white max-md:flex-wrap shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                        <div className="flex justify-between w-full pr-20">
                            <div>{row.name}</div>
                            <div>{row.email}</div>
                            <div>{row.subScriptionPlan}</div>
                            <div>{row.status}</div>
                            <div>{row.lastlogin || '-'}</div>
                        </div>
                        <div className="flex">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8d85938fe63f5efcc5d81cafc206f082dca5d1a7778857dc6bafcf7f366e76?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[25px] mr-4"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/49d8fa0ee334eeb1c577a52f2430e7ac742d5fef669e229aacdb4a6b7d9a9437?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[25px]"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <AddAcccountModel open={open} setOpen={setOpen} />
        </div>
    );
}

export default AccountManagement;