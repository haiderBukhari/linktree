import { useState } from "react";
import AsideHeader from "../../components/AsideHeader";
import Switch from '@mui/material/Switch';

function Index() {
    // Sample data object with row names and corresponding values

    const data = [
        { name: "tastychef92", email: "tastychef92@example.com", plan: "+92 383627882t7", status: "owner", lastlogin: 5 },
        { name: "anotheruser", email: "anotheruser@example.com", plan: "+92 383627882t7", status: "owner", lastlogin: 5 },
        { name: "anotheruser", email: "anotheruser@example.com", plan: "+92 383627882t7", status: "owner", lastlogin: 5 },
        { name: "anotheruser", email: "anotheruser@example.com", plan: "+92 383627882t7", status: "owner", lastlogin: 5 },
        // Add more objects as needed
    ];

    const columns = [
        "Name",
        "Email Address",
        "Phone Number",
        "Access Level",
        "Restaurant Pages"
    ];

    // State to store the checked state for each row
    const [checkedStates, setCheckedStates] = useState(data.map(() => true));

    const handleChange = (index) => {
        setCheckedStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

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

                {data.map((row, index) => (
                    <div key={index} className="flex gap-5 justify-between items-center p-5 mt-5 bg-white max-md:flex-wrap shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                        {Object.keys(row).map((key, idx) => (
                            <div key={idx}>
                                {row[key]}
                            </div>
                        ))}
                        <div className="flex">
                            {/* <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8d85938fe63f5efcc5d81cafc206f082dca5d1a7778857dc6bafcf7f366e76?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="shrink-0 aspect-square w-[25px] mr-4"
                            /> */}
                            <Switch
                                checked={checkedStates[index]}
                                onChange={() => handleChange(index)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <button className="justify-center self-stretch p-2.5 font-semibold text-center text-white whitespace-nowrap bg-indigo-400 rounded-xl border-2 border-indigo-400 border-solid">
                                Blocked
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;
