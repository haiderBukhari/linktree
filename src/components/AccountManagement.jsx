import * as React from "react";
import AsideHeader from "./AsideHeader";

function AccountManagement() {
    // Sample data object with row names and corresponding values

    const data = [
        { name: "tastychef92", email: "tastychef92@example.com", plan: "Monthly", status: "Active", lastlogin: "2024-03-06" },
        { name: "anotheruser", email: "anotheruser@example.com", plan: "Yearly", status: "Inactive", lastlogin: "2024-03-10" },
        { name: "anotheruser", email: "anotheruser@example.com", plan: "Yearly", status: "Inactive", lastlogin: "2024-03-10" },
        { name: "anotheruser", email: "anotheruser@example.com", plan: "Yearly", status: "Inactive", lastlogin: "2024-03-10" },
        // Add more objects as needed
    ];

    const columns = [
        "Name",
        "Email Address",
        "Subscription Plan",
        "Account Status",
        "Last Login Date"
    ]

    return (
        <div className="flex mb-20">
            <AsideHeader />
            <div className="w-full mt-6 mx-5">
                <div className="flex items-end justify-between">
                    <div className="justify-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950">
                        Account Management
                    </div>
                    <div className="flex gap-px p-2.5 text-base font-bold tracking-tight text-white bg-indigo-400 rounded-md h-[46px]">
                        <div>Add new account</div>
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
        </div>
    );
}

export default AccountManagement;