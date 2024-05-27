import React, { useEffect } from 'react'
import { useState } from 'react';
import './index.css'
import AsideHeader from '../../components/AsideHeader';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { format, subDays } from 'date-fns';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const generateData = () => {
    const labels = [];
    const values = [];
    for (let i = 0; i < 10; i++) {
        const date = subDays(new Date(), 10 * i);
        labels.unshift(format(date, 'dd-MM-yyyy'));
        values.unshift(Math.floor(Math.random() * 100)); // Random value for demonstration
    }
    return { labels, values };
};

const { labels, values } = generateData();

const data = {
    labels,
    datasets: [
        {
            label: 'Value',
            data: values,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 8,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Reviews Analytics',
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Date',
            },
        },
        y: {
            title: {
                display: true,
                text: 'Value',
            },
            beginAtZero: true,
        },
    },
};

const SpreadGraph = () => (
    <div style={{ width: '1000px', height: '400px' }}>
        <Line data={data} options={options} />
    </div>
);

const AdminDashboard = () => {
    const [progressValue, setProgressValue] = useState(0);
    const progressEndValue = 100;
    const speed = 50;
    const [completionRate, setCompletitionRate] = useState(0);


    useEffect(() => {
        const completionRate1 = (22 / 100) * 100 || 0;
        setCompletitionRate(completionRate1.toFixed(0))
        const progress = setInterval(() => {
            setProgressValue((prevValue) => {
                if (prevValue < progressEndValue) {
                    return prevValue + 1;
                } else {
                    clearInterval(progress);
                    return prevValue;
                }
            });
        }, speed);

        return () => {
            clearInterval(progress);
        };
    }, [progressValue]); // Run the effect only once when the component mounts


    return (
        <div className='flex flex-row'>
            <AsideHeader />
            <div className="flex flex-col mb-20">
                <div>
                    <div className="flex flex-col gap-5 px-7 py-6 bg-white shadow-sm max-w-[356px]">
                        <div className="justify-center text-center self-start p-2.5 mt-6 text-lg font-medium tracking-wide leading-6 text-blue-950">
                            Dashboard
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex justify-center shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] p-3 rounded-md w-[500px]'>
                                <div className="w-[130px] flex flex-col justify-center items-center flex-1">
                                    <div className="justify-center text-xl font-medium leading-6 text-black">
                                        Active Users
                                    </div>
                                    <div className="flex flex-col mt-7 whitespace-nowrap">
                                        <div className="justify-center text-3xl font-bold tracking-tighter leading-8 text-zinc-900">
                                            23,543
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[130px] flex flex-1 gap-2.5 self-end mt-6 ml-5">
                                    <div className="shrink-0 bg-indigo-400 rounded-lg h-[91px] w-[11px]" />
                                    <div className="shrink-0 self-end mt-7 w-3 h-16 bg-blue-300 rounded-lg" />
                                    <div className="shrink-0 self-start mt-4 bg-blue-300 rounded-lg h-[74px] w-[11px]" />
                                    <div className="shrink-0 self-end mt-16 h-7 bg-indigo-400 rounded-lg w-[11px]" />
                                    <div className="shrink-0 self-end mt-11 w-3 bg-indigo-400 rounded-lg h-[49px]" />
                                    <div className="shrink-0 self-start mt-1.5 bg-blue-300 rounded-lg h-[85px] w-[11px]" />
                                </div>
                            </div>
                            <div className='flex justify-center shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] p-3 rounded-md'>
                                <div className="w-[130px] flex flex-col justify-center items-center flex-1">
                                    <div className="justify-center text-xl font-medium leading-6 text-black">
                                        Revenue
                                    </div>
                                    <div className="flex flex-col mt-7 whitespace-nowrap">
                                        <div className="justify-center text-3xl font-bold tracking-tighter leading-8 text-zinc-900">
                                            543
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[130px] flex flex-1 gap-2.5 self-end mt-6 ml-5">
                                    <div className="shrink-0 bg-indigo-400 rounded-lg h-[91px] w-[11px]" />
                                    <div className="shrink-0 self-end mt-7 w-3 h-16 bg-blue-300 rounded-lg" />
                                    <div className="shrink-0 self-start mt-4 bg-blue-300 rounded-lg h-[74px] w-[11px]" />
                                    <div className="shrink-0 self-end mt-16 h-7 bg-indigo-400 rounded-lg w-[11px]" />
                                    <div className="shrink-0 self-end mt-11 w-3 bg-indigo-400 rounded-lg h-[49px]" />
                                    <div className="shrink-0 self-start mt-1.5 bg-blue-300 rounded-lg h-[85px] w-[11px]" />
                                </div>
                            </div>
                            <div className='flex justify-center shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] p-3 rounded-md'>
                                <div className="w-[130px] flex flex-col justify-center items-center flex-1">
                                    <div className="justify-center text-xl font-medium leading-6 text-black">
                                        Total Clients
                                    </div>
                                    <div className="flex flex-col mt-7 whitespace-nowrap">
                                        <div className="justify-center text-3xl font-bold tracking-tighter leading-8 text-zinc-900">
                                            2
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[130px] flex flex-1 gap-2.5 self-end mt-6 ml-5">
                                    <div className="shrink-0 bg-indigo-400 rounded-lg h-[91px] w-[11px]" />
                                    <div className="shrink-0 self-end mt-7 w-3 h-16 bg-blue-300 rounded-lg" />
                                    <div className="shrink-0 self-start mt-4 bg-blue-300 rounded-lg h-[74px] w-[11px]" />
                                    <div className="shrink-0 self-end mt-16 h-7 bg-indigo-400 rounded-lg w-[11px]" />
                                    <div className="shrink-0 self-end mt-11 w-3 bg-indigo-400 rounded-lg h-[49px]" />
                                    <div className="shrink-0 self-start mt-1.5 bg-blue-300 rounded-lg h-[85px] w-[11px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='mx-auto w-full'> */}
                <SpreadGraph />
                {/* </div> */}
            </div>
        </div>
    )
}

export default AdminDashboard