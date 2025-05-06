import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import Axios from 'axios';
const SERVER_URL = 'http://127.0.0.1:5000';

function SignUp(){
    const [ responseData, setResponseData ] = useState(''); 

    const { setSessionValue } = useContext(SessionContext);

    // Form Submission
    const navigate = useNavigate();

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const details = {
        name: name,
        email: email,
        password: password,
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // POST email, password to 'SERVER_URL' using Axios
        try{
            Axios.post(SERVER_URL+'/signup', details, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then(response => {
                setResponseData(response.data)

                const code = response.data.code;
                const message = response.data.message;
                const session_value = response.data.session_value;

                console.log(code)
                console.log(message)
                console.log(session_value)

                // Save session_value to localStorage
                localStorage.setItem('sessionToken', session_value);
                setSessionValue(session_value); // ✅ this triggers a re-render immediately

                if (code === 'signup_error'){
                    navigate('/signup');
                } else if(code === 'signup_success'){
                    navigate('/');
                }
            })
        } catch(error){
            console.error(error);
        }
    };

    // Navigation handlers
    const handleclick0 = () => {
        navigate('/login');
    }

    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">

            <div className="mx-auto w-full max-w-sm">
                <h2 className="mt-10 text-center text-3xl font-semibold text-gray-900">
                    New to Moodify ?
                </h2>
            </div>

            <div className="mt-10 mx-auto w-full max-w-sm">

                <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="text" className="block text-base font-medium text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-4">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                autoComplete="text"
                                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                value={name} onChange={handleNameChange}
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-base font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-4">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                value={email} onChange={handleEmailChange}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-base font-medium text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-4">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                value={password} onChange={handlePasswordChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-500 hover:bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign Up
                        </button>
                    </div>
                    {/* Error handling */}
                    { responseData.code === 'signup_error' && (
                        <div className="signup_error bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
                            <p className="font-medium">{responseData.message}</p>
                        </div>
                    )}
                </form>

                <p className="mt-5 text-center text-base text-gray-500">
                    Already have an account?{' '}
                    <button onClick={handleclick0} className="font-semibold text-indigo-500 hover:text-indigo-600">
                        Log in Here
                    </button>
                </p>

            </div>
        </div>
    )
}

export default SignUp;