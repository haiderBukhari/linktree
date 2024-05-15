import { useEffect, useState } from "react";
import AsideHeader from "../../components/AsideHeader";
import axios from "axios";

function Index() {
    // Sample data object with row names and corresponding values

    const [data, setData] = useState(null);
    const [fetchUser, setFetchUser] = useState(false);

    const columns = [
        "Name",
        "Email Address",
        "Resturant Name",
        "Request Date",
    ];

    useEffect(() => {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_PORT}/auth/trial`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                setData(res.data);
                // console.log(res.data);
            })
        } catch (error) {
            console.error("error");
        }
    }, [fetchUser])


    // // State to store the checked state for each row
    // const [checkedStates, setCheckedStates] = useState(data?.map(() => true));

    // const handleChange = (index) => {
    //     setCheckedStates(prevStates => {
    //         const newStates = [...prevStates];
    //         newStates[index] = !newStates[index];
    //         return newStates;
    //     });
    // };

    const approveUser = async (id) => {
        try {
            axios.patch(`${process.env.REACT_APP_BACKEND_PORT}/auth/trial?id=${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                setFetchUser(!fetchUser)
                // console.log(res.data);
            })
        } catch (error) {
            console.error("error");
        }
    }

    return (
        <div className="flex mb-20">
            <AsideHeader />
            <div className="w-full mt-6 mx-5">
                <div className="flex items-end justify-between">
                    <div className="justify-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950">
                        User Management
                    </div>
                </div>
                <div className="flex gap-5 mt-10 justify-between items-center p-5 bg-white shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] max-md:flex-wrap">
                    {columns.map((key, idx) => (
                        <div key={idx} className="font-bold">{key}</div>
                    ))}
                    <div className="w-[60px]"></div>
                </div>

                {data?.map((item, index) => (
                    <div key={index} className="flex gap-5 justify-between items-center p-5 mt-5 bg-white max-md:flex-wrap shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                        <div className="flex justify-between w-full pr-20">
                            <div>{item.name}</div>
                            <div>{item.email}</div>
                            <div>{'-'}</div>
                            <div>{item.createdAt.slice(0, 10)}</div>
                        </div>
                        {
                            item.isTrialVerified ? <div className="flex">
                                <button className="justify-center self-stretch p-2.5 font-semibold text-center text-white whitespace-nowrap bg-indigo-400 rounded-xl border-2 border-indigo-400 border-solid">
                                    Approved
                                </button>
                            </div> : <div onClick={() => {approveUser(item._id)}} className="flex">
                                <button className="justify-center self-stretch p-2.5 font-semibold text-center text-black whitespace-nowrap rounded-xl border-2 border-indigo-400 border-solid bg-white">
                                    Approve
                                </button>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;