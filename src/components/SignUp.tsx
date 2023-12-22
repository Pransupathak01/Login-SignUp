import React, { useState } from "react";
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
    const [uname, setUname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmpass, setConfirmPass] = useState<string>("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!uname || !email || !phone || !password || !confirmpass) {
            alert("Please fill in all fields!")
        }
        const formData = { uname, email, phone, password, confirmpass };
        console.log(formData);
    }
    return (
        <div className="flex h-screen w-screen bg-gradient-to-t from-blue-300 via-purple-300 to-pink-300 ">
        <div className="flex justify-center items-center  h-screen w-2/5">

            <div className="flex items-center justify-center h-screen w-2/4">
                <div>
                    <h1 className="flex justify-center text-white text-5xl font-bold py-3">SMS-iT</h1>
                    <span className="flex justify-center text-6xl font-bold py-5">SignUp</span>
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
                <div className="flex justify-center items-center"></div>
                <form onSubmit={handleSubmit} className="w-4/5 px-4">
                    <input
                        className="w-full rounded-md p-2 px-3 mb-6 font-semibold text-black bg-gray-500 focus:bg-white focus:outline-none"
                        value={uname}
                        type="text"
                        onChange={(e) => setUname(e.target.value)}
                        placeholder="Name"
                    />
                    <input
                        className="w-full rounded-md p-2 px-3 mb-6 font-semibold text-black bg-gray-500 focus:bg-white focus:outline-none"
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        className="w-full rounded-md p-2 px-3 mb-6 font-semibold text-black bg-gray-500  focus:bg-white focus:outline-none"
                        value={phone}
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number"
                    />

                    <input
                        className="w-full rounded-md p-2 px-3 mb-6 font-semibold text-black bg-gray-500  focus:bg-white focus:outline-none"
                        value={password.toString()}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <input
                        className="w-full rounded-md p-2 px-3 mb-6 font-semibold text-black bg-gray-500  focus:bg-white focus:outline-none"
                        value={confirmpass.toString()}
                        type="password"
                        onChange={(e) => setConfirmPass(e.target.value)}
                        placeholder="Confirm Password"
                    />
                    <select className="w-full rounded-md p-2 px-3 mb-6 font-normal text-black bg-white">
                        <option value="option1">(UTC-11:00) Midway Island</option>
                        <option value="option2">(UTC-11:00)Samoa</option>
                        <option value="option3">(UTC-11:00)Hawaii</option>
                        {/* Add more options as needed */}
                    </select>
                    <div className="flex items-start space-x-3 mb-6 p-1">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 rounded border-gray-300 mt-1"
                        />
                        <span className="text-white font-semibold text-sl">
                            I agree to the
                            <span className="text-blue-700"> Main Services Agreement</span>.
                            By registering, you confirm that you agree to the storing and processing of
                            your personal data by SMS-iT as described in the
                            <span className="text-blue-700"> Privacy Statement</span>.
                        </span>
                    </div>
                    <button className="w-full rounded-md p-2 mb-6 bg-white font-extrabold text-lg text-black">REGISTER</button>
                    <div className="flex items-center space-x-1 mb-6">
                        <span className="text-white text-sl font-semibold ">Forgot Your Password? </span>

                        <span className="text-white text-sl font-semibold">
                            <Link to="/login">Login</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
