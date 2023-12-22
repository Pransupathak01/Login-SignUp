import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPass] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill in all fields!")
        }

        const formData = { email, password };
        console.log(formData);
    }

    return (

        <div className="flex h-screen w-screen bg-gradient-to-t from-blue-300 via-purple-300 to-pink-300 ">
            <div className="flex justify-center items-center  h-screen w-2/5">

                <div className="flex items-center justify-center h-screen w-2/4">
                    <div>
                        <h1 className="flex justify-center text-white text-5xl font-bold py-3">SMS-iT</h1>
                        <span className="flex justify-center text-6xl font-bold py-5">Login</span>
                        <span className="text-lg font-bold py-5">WITH SMS-iT YOU CAN START BUILDING:</span>
                        <ul className="list-disc px-4">
                            <li className="text-lg font-medium ">14 days FREE TRIAL</li>
                            <li className="text-lg font-medium ">SMS | Email | MMS | Fax | Voice | Social Media Marketing </li>
                            <li className="text-lg font-medium"> Wokflow Automations </li>
                            <li className="text-lg font-medium ">Artificial Intelligence</li>
                            <li className="text-lg font-medium ">Omnichannel Contact Center</li>
                            <li className="text-lg font-medium ">Call Tracking</li>
                            <li className="text-lg font-medium ">Smart Engagement Tools</li>
                            <li className="text-lg font-medium ">Push Notification</li>
                            <li className="text-lg font-medium ">Iteractive Elements/Videos</li>
                            <li className="text-lg font-medium ">Alerts and Notifications</li>
                            <li className="text-lg font-medium ">Phone Verification</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="flex justify-center items-center rounded-l-3xl h-screen w-3/5 bg-gray-700">
                <div className="flex justify-center items-center">
                    <form onSubmit={handleSubmit} className="w-7/8 px-4">
                       
                        <input
                            className="w-full rounded-md p-2 px-3 mb-6 font-semibold text-black bg-gray-500  focus:bg-white focus:outline-none"
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <input
                            className="w-full rounded-md p-2 px-3 mb-6 font-semibold text-black bg-gray-500 focus:bg-white focus:outline-none"
                            value={password.toString()}
                            type="password"
                            onChange={(e) => setPass(e.target.value)}
                            placeholder="Password"
                        />
                        <div className="flex items-center space-x-1 mb-6">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-5 rounded border-gray-300 "
                            />
                            <span className="text-white font-semibold">Remember Me</span>
                        </div>
                        <button className="w-full rounded-md p-2 mb-6 bg-white font-extrabold text-lg text-black">LOGIN</button>
                        <div className="flex items-center space-x-6 mb-6">
                            <span className="text-white text-sl font-semibold "><Link to="/forgotpassword">Forgot Your Password?</Link></span>
                            <span className="text-white text-sl font-semibold">Dont't Have An Account?
                                <Link to="/signup"> Sign Up</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default Login;