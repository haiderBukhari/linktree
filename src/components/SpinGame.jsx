import React, { useEffect, useState } from 'react'
import './index.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SpinGame = () => {
    const { id } = useParams();
    const [gameFormat, setGameFormate] = useState([])
    const [isSpined, setIsSpined] = useState(false)
    const [email, setEmail] = useState('')
    const Navigate = useNavigate();

    const [selectedIndex, setSelectedIndex] = useState(-1)
    useEffect((Item) => {
        if (id) {
            try {
                axios.get(`${process.env.REACT_APP_BACKEND_PORT}/game/update?pageId=${id}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then((res) => {
                    setGameFormate(res.data)
                })
            } catch (error) {
                console.error("Error sending email");
            }
        }
    }, [id])

    const spinedClick = () => {
        if (!isSpined) {
            setIsSpined(true)
            const wheel = document.querySelector('.wheel');
            const options = [0, 45, 90, 135, 180, 225, 270, 315];
            // Rotate the wheel
            const randomNumber = Math.floor(Math.random() * 8);
            setSelectedIndex(randomNumber);
            wheel.style.transition = 'transform 5s ease-in-out';
            wheel.style.transform = `rotate(${360 * 3 + options[randomNumber]}deg)`;
        } else {
            alert('Already spined');
        }
    };

    const sendEmail = () => {
        if (selectedIndex !== -1 && email) {
            try {
                axios.post(`${process.env.REACT_APP_BACKEND_PORT}/result`, {
                    email: email,
                    selectedGift: gameFormat.options[`option${selectedIndex + 1}`],
                    message: gameFormat.content,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then((res) => {
                    Navigate('/')
                })
            } catch (error) {
                console.error("Error sending email");
            }
        }
    }

    return (
        <div>
            <div className='flex justify-center mt-3'>
                {
                    gameFormat.logo ? <img src={gameFormat.logo} alt="logo" className="shrink-0 rounded-full bg-zinc-300 h-[100px] w-[100px] max-md:mt-10" /> : <h1 className='font-bold font-sans text-2xl italic'>{gameFormat?.brandName}</h1>
                }
            </div>
            <div className='flex max-w-[900px] justify-between mx-auto items-center mt-5'>
                <div className="container mt-10 mr-10">
                    <div className="spinBtn" onClick={spinedClick}></div>
                    <div className="wheel">
                        <div className="number" style={{ '--i': 1, '--clr': '#8497FC' }}>
                            <span>{gameFormat?.options?.option1 || 'option 1'}</span>
                        </div>
                        <div className="number" style={{ '--i': 2, '--clr': '#FDFDAF' }}>
                            <span>{gameFormat?.options?.option2 || 'option 2'}</span>
                        </div>
                        <div className="number" style={{ '--i': 3, '--clr': '#8497FC' }}>
                            <span>{gameFormat?.options?.option3 || 'option 3'}</span>
                        </div>
                        <div className="number" style={{ '--i': 4, '--clr': '#FDFDAF' }}>
                            <span>{gameFormat?.options?.option4 || 'option 4'}</span>
                        </div>
                        <div className="number" style={{ '--i': 5, '--clr': '#8497FC' }}>
                            <span>{gameFormat?.options?.option5 || 'option 5'}</span>
                        </div>
                        <div className="number" style={{ '--i': 6, '--clr': '#FDFDAF' }}>
                            <span>{gameFormat?.options?.option6 || 'option 6'}</span>
                        </div>
                        <div className="number" style={{ '--i': 7, '--clr': '#8497FC' }}>
                            <span>{gameFormat?.options?.option7 || 'option 7'}</span>
                        </div>
                        <div className="number" style={{ '--i': 8, '--clr': '#FDFDAF' }}>
                            <span>{gameFormat?.options?.option8 || 'option 8'}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col font-medium text-black leading-[140%] max-w-[454px]">
                    <div className="w-full text-3xl font-bold text-center">
                        Try Your Luck for a Reward!
                    </div>
                    <div className="mt-8 w-full text-xl text-center">
                        Get Spinning: Drop Your Email!
                    </div>
                    <div className="mt-8 w-full text-sm leading-5">Email</div>
                    <input onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your email' className="justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-zinc-400" value={email} />
                    <div onClick={sendEmail} className="justify-center items-center px-5 py-2.5 mt-8 w-full text-base font-semibold leading-6 text-white whitespace-nowrap text-center bg-indigo-400 rounded-lg shadow-sm">
                        Confirm
                    </div>
                    <div className="mt-8 w-full text-xl text-center">
                        Note: One Spin per Participant Only
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <Link to="/" className="justify-center items-center px-5 py-2.5 mt-8 w-[300px] mx-auto text-base font-semibold leading-6 text-white whitespace-nowrap text-center bg-indigo-400 rounded-lg shadow-sm">
                    Create your Own Page
                </Link>
            </div>
            <div className="flex gap-4 justify-center my-10">
                <a href={gameFormat?.instagram} target="_blank"><img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/357f101341ddf98f66af8d3f23083bbaca5abcfd9acc131ab16b4f86548f66e9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 aspect-square w-[25px]"
                /></a>
                <a href={gameFormat?.facebook} target="_blank"><img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bf7478fb7f2a263892712e4aa14999672df84ec24dda36a9b73c6b87ab35cfa?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 aspect-square w-[25px]"
                /></a>
                <a href={gameFormat?.googleMaps} target="_blank"><img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad647feebebd6e3ac712531bcfe244603e99a1e02f585c4702345d935b2f1dd6?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 aspect-square w-[25px]"
                /></a>
                <a href={gameFormat?.twitter} target="_blank"><img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/981bbe54100ad5fb3359a76a6d80f34022804d47da69407e294c32b6b305e5f3?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 aspect-square w-[25px]"
                /></a>
            </div>
        </div>
    )
}

export default SpinGame