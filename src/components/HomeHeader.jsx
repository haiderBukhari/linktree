import * as React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="flex gap-5 justify-between max-md:flex-wrap px-10 mt-2">
            <div className="flex gap-5 justify-between px-5 my-auto whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="my-auto text-2xl font-semibold text-center text-black">
                    EGO
                </div>
                <div className="flex gap-10 justify-between text-xl font-normal leading-8 text-zinc-800 max-md:flex-wrap max-md:max-w-full">
                    <div className="ml-4">
                    <Link to='/'>Home</Link>
                    </div>
                    <div>
                    <Link to='/pricing'>Pricing</Link>
                    </div>
                    <div>
                    <Link to='/about'>About</Link>
                    </div>
                    <Link to='/faqs'>FAQs</Link>
                </div>
            </div>
            <div className="flex gap-5 justify-between px-5 text-xl font-medium leading-8">
                <a href="/login" className="my-auto text-zinc-800">Login</a>
                <a href="/register" className="justify-center px-6 py-2 text-center text-white bg-indigo-400 rounded max-md:px-5">
                    Book a Demo
                </a>
            </div>
        </div>
    );
}

