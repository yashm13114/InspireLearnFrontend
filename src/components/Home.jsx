import React from 'react';

export const Home = () => {
    return (
        <>
            <div className="bg-gray-900 bg-no-repeat bg-cover bg-center text-white h-screen flex items-center justify-center"
                 style={{ backgroundImage: "" }}>
                <div className="text-center">
                    <p className='lg:text-3xl text-5xl font-bold text-white opacity-80'>InspireLearn</p>
                    <p className='text-white text-3xl font-bold opacity-80 mt-4'>A results-driven business dedicated to helping clients achieve their goals</p>
                </div>
            </div>
        </>
    );
};
