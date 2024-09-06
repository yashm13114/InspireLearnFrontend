import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
    
        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }
    
        try {
            setLoading(true);
            const response = await fetch('https://meciabackend.onrender.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            const data = await response.json();
    
            if (data.error) {
                alert(data.error); // Show error message from backend
            } else {
                // Save user data in local storage
                localStorage.setItem('user', JSON.stringify(data.user)); // Save user data
    
                // Save JWT token if returned
                if (data.token) {
                    localStorage.setItem('token', data.token);
                }
    
                alert("Login successful");
                navigate('/aptitude2'); // Redirect to the dashboard or any other page
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="py-16 flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg lg:max-w-2xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/024/775/531/non_2x/browse-online-listings-registration-or-register-user-interface-users-use-secure-logins-and-passwords-online-registration-collection-sign-flat-illustration-on-white-background-vector.jpg')" }}
                >
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-700 text-center mb-4">InspireLearn</h2>
                    <p className="text-lg text-gray-600 text-center mb-8">Welcome back!</p>

                    <form onSubmit={handleLogin}>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-3 px-4 block w-full appearance-none" type="email" />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <NavLink className="text-sm text-[#7747ff]" to={"/password-reset"}>
                                    Forgot your password?
                                </NavLink>
                            </div>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-3 px-4 block w-full appearance-none" type="password" />

                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-gray-700 text-white font-bold py-3 px-4 w-full rounded hover:bg-gray-600 disabled:bg-gray-400"
                            >
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <a href="/signup" className="text-xs text-gray-500 uppercase">or sign up</a>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
