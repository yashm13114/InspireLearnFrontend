import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", password: "", cpassword: ""
    });
    const [loading, setLoading] = useState(false);
    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = user;

        if (!name || !email || !password || !cpassword) {
            alert("Please fill all the fields");
            return;
        }

        if (password !== cpassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            setLoading(true);
            const res = await fetch('https://meciabackend.onrender.com/auth/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            });

            const data = await res.json();

            if (data.status === "FAILED") {
                alert(data.message); // Showing error from the backend
            } else {
                localStorage.setItem('user', JSON.stringify({ name, email }));
                alert("Registered successfully");
                navigate('/login');
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred during registration");
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                       
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">
                                Sign up
                            </h1>
                            <form onSubmit={postData} className="w-full flex-1 mt-8">
                                <div className="mx-auto max-w-xs">
                                    <input
                                        value={user.name}
                                        onChange={handleInputs}
                                        name='name'
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text"
                                        placeholder="Name"
                                    />
                                    <input
                                        value={user.email}
                                        onChange={handleInputs}
                                        name='email'
                                        className="w-full mt-6 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <input
                                        value={user.password}
                                        onChange={handleInputs}
                                        name='password'
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <input
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                        name='cpassword'
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password"
                                        placeholder="Confirm Password"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                    >
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">
                                            Sign Up
                                        </span>
                                    </button>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                       Already have an account? <a href="/login">Signin</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}
                        >
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default SignUp;
