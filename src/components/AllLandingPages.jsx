import { useEffect, useState } from "react";
import AsideHeader from "./AsideHeader";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllLandingPages() {
    // Sample data object with row names and corresponding values
    const userId = useSelector(state => state.authentication.userId);
    const [data, setData] = useState();
    const Navigate = useNavigate();

    useEffect(() => {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_PORT}/game?owner=${userId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                const FData = res.data?.map((Item, index) => {
                    return { pageNo: index + 1, createdDate: Item.createdAt?.slice(0, 10), id: Item._id }
                })
                setData(FData);
                console.log(res.data);
            })
        } catch (error) {
            console.error("error");
        }
    }, [])


    // const data = [
    //     { plan: "Yearly", ammount: "$988", Date: "2024-03-06", method: "Stripe" },
    //     { plan: "Monthly", ammount: "$98", Date: "2024-03-06", method: "Stripe" },
    //     { plan: "Monthly", ammount: "$98", Date: "2024-03-06", method: "Stripe" },
    //     { plan: "Monthly", ammount: "$98", Date: "2024-03-06", method: "Stripe" },
    //     { plan: "Monthly", ammount: "$98", Date: "2024-03-06", method: "Stripe" },
    //     { plan: "Monthly", ammount: "$98", Date: "2024-03-06", method: "Stripe" },
    //     { plan: "Monthly", ammount: "$98", Date: "2024-03-06", method: "Stripe" },
    //     // Add more objects as needed
    // ];

    const columns = [
        "Page Number",
        "Created Date",
    ]

    return (
        <div className="flex mb-20">
            <AsideHeader />
            <div className="w-full mt-6 mx-5">
                <div className="flex items-end justify-between">
                    <div className="justify-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950">
                        Payment History
                    </div>
                </div>
                <div className="w-[900px] m-auto">
                    <div className="flex gap-5 mt-10 justify-between items-center p-5 bg-white shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] max-md:flex-wrap">
                        {columns?.map((key, idx) => (
                            <div key={idx} className="font-bold">{key}</div>
                        ))}
                        <div className=""></div>
                    </div>
                    {data?.map((item, index) => (
                        <div key={index} className="flex gap-5 justify-between items-center p-5 mt-5 bg-white max-md:flex-wrap shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                            <div className="flex justify-between w-full pr-20">
                                <div>{item.pageNo}</div>
                                <div>{item.createdDate}</div>
                            </div>
                            <div className="flex">
                                <button onClick={()=>{Navigate(`/game/${item.id}`)}} className="justify-center self-stretch p-2.5 font-semibold text-center text-black whitespace-nowrap rounded-xl mr-6 border-2 border-indigo-400 border-solid bg-white">
                                    Edit
                                </button>
                            </div>
                            <div className="flex">
                                <button onClick={()=>{navigator.clipboard.writeText(`${window.location.origin}/spin/game/${item.id}`)}} className="justify-center self-stretch p-2.5 font-semibold text-center text-white whitespace-nowrap bg-indigo-400 mr-6 rounded-xl border-2 border-indigo-400 border-solid hover:opacity-65 transition-all ">
                                    Copy Link
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllLandingPages;