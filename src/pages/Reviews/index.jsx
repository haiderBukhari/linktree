import React, { useEffect, useState } from 'react'
import AsideHeader from '../../components/AsideHeader'
import axios from 'axios'
import { useSelector } from 'react-redux';
import './index.css'

const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
    ));

    return <div className="star-rating">{stars}</div>;
};

const Index = () => {
    const [data, setData] = useState(null);
    const userId = useSelector(state => state.authentication.userId);
    useEffect(() => {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_PORT}/review/${userId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                setData(res.data);
            })
        } catch (error) {
            console.error("error");
        }
    }, [])
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
                        {
                            data?.map((Item) => (
                                <div className="flex items-center justify-between p-5 border-b max-md:flex-col max-md:gap-5 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]">
                                    <div className='flex-1'>{Item.name}</div>
                                    <div className='flex-1'><StarRating rating={Item.rating} /></div>
                                    <div className='flex-1 text-center'>{Item.reviewDate?.slice(0, 10)}</div>
                                    <div className='flex-1 text-center'>{Item.reviewTime}</div>
                                    <div className="leading-6 flex-1 text-start">{Item.text}</div>
                                </div>
                            ))
                        }
                    </div>
                    {/* Repeat this structure for other reviews */}
                </div>
            </div>
        </div>
    )
}

export default Index