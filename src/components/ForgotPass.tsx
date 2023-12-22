import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ForgotPass: React.FC = () => {
    const [email, setEmail] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            alert("Please fill in all fields!")
        }
        const formData = { email};
        console.log(formData);
    }

    return (

        <div className="flex h-screen w-screen bg-gradient-to-t from-blue-300 via-purple-300 to-pink-300 ">
            <div className="flex justify-center items-center  h-screen w-2/5">

                <div className="flex items-center justify-center h-screen w-2/4">
                    <div>
                        <h1 className="flex justify-center text-white text-5xl font-bold py-3">SMS-iT</h1>
                        <span className="flex justify-center text-6xl font-bold py-4">Reset Password</span>
                        <span className="text-lg font-medium py-5">Did you forgot your password? You can use this form to reset your password now.</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center rounded-l-3xl h-screen w-3/5 bg-gray-700">
                <div className="flex justify-center items-center"></div>
                <form onSubmit={handleSubmit} className="w-4/5 px-4">
                       
                        <input
                            className="w-full rounded-md p-2 px-3 mb-6 font-semibold text-black bg-gray-500  focus:bg-white focus:outline-none"
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                     
                        <div className="flex items-center space-x-1 mb-6">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-5 rounded border-gray-300 "
                            />
                            <span className="text-white font-semibold">Remember Me</span>
                        </div>
                        <button className="w-full rounded-md p-2 mb-6 bg-white font-extrabold text-lg text-black">RESET</button>
                        <div className="flex items-center space-x-3 mb-6">
                            <span className="text-white text-sm font-semibold ">Know Your Password?
                            <Link to="/login"> Login</Link></span>
                            <span className="text-white text-sm font-semibold">Dont't Have An Account?
                                <Link to="/signup"> Sign Up</Link>
                            </span>
                        </div>
                    </form>
                </div>
            

        </div>

    )
}

export default ForgotPass;