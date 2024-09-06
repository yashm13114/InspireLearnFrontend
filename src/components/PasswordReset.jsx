import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const PasswordReset = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const setVal = (e) => {
        setEmail(e.target.value);
    };

    const sendLink = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Email is required!", { position: "top-center" });
        } else if (!email.includes("@")) {
            toast.warning("Please include '@' in your email!", { position: "top-center" });
        } else {
            try {
                const res = await fetch("https://meciabackend.onrender.com/auth/sendpasswordlink", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                });

                const data = await res.json();

                if (data.status === "SUCCESS") {
                    setEmail("");
                    setMessage("Password reset link sent successfully to your email.");
                } else {
                    toast.error(data.message, { position: "top-center" });
                }
            } catch (error) {
                toast.error("An error occurred. Please try again.", { position: "top-center" });
            }
        }
    };

    return (
        <>
            <section>
                <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                    <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                        <div className="flex flex-col">
                            <div>
                                <h2 className="text-4xl text-black">Reset Password</h2>
                            </div>
                        </div>
                        {message && <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>}
                        <form>
                            <div className="mt-4 space-y-6">
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600">Email</label>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={setVal}
                                        placeholder=""
                                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-full">
                                    <button
                                        type="submit"
                                        onClick={sendLink}
                                        className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-purple-500 border-2 border-purple-600 rounded-full inline-flex hover:bg-transparent hover:border-purple-600 hover:text-purple-500 focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </section>
        </>
    );
};
