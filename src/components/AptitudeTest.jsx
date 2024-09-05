import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AptitudeTest = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]); // Track multiple selected options
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Redirect to login if not authenticated
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/login'); // Redirect to login page if user is not logged in
        }

        // Fetch questions (or use a static list)
        const fetchQuestions = async () => {
            try {
                const response = await fetch('http://localhost:3000/mcqs'); // Adjust the URL as needed
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                if (Array.isArray(data)) {
                    setQuestions(data);
                } else {
                    console.error('Unexpected data format:', data);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching questions:', error);
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [navigate]);

    if (loading) return <div>Loading...</div>;

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOptions([]); // Reset selected options for the next question
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOptions([]); // Reset selected options for the previous question
        }
    };

    // Handle selecting and deselecting options
    const handleOptionClick = (optionKey) => {
        setSelectedOptions(prevSelectedOptions =>
            prevSelectedOptions.includes(optionKey)
                ? prevSelectedOptions.filter(option => option !== optionKey) // Deselect option if already selected
                : [...prevSelectedOptions, optionKey] // Select option if not already selected
        );
    };

    const handleSubmit = () => {
        // Handle test submission logic here
        console.log('Selected options for current question:', selectedOptions);
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="font-sans bg-gray-100 text-gray-800 min-h-screen flex flex-col">
            {/* Header Section */}

            {/* Main Test Area */}
            <main className="flex-grow flex justify-center items-center p-4">
                <div className="bg-white p-8 w-full max-w-4xl rounded-lg shadow-md text-center">
                    <h1 className="text-2xl font-bold mb-4">Aptitude Test</h1>
                    <div className="bg-gray-300 rounded-full h-5 mb-4">
                        <div className="bg-green-600 h-full rounded-full" style={{ width: `${(currentQuestionIndex + 1) / questions.length * 100}%` }}></div>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Question {currentQuestionIndex + 1} of {questions.length}</h2>
                        <p className="mt-2">{currentQuestion?.questionText || 'Loading question...'}</p>
                    </div>
                    <div className="space-y-2 mb-4">
                        {currentQuestion && Object.entries(currentQuestion.options).map(([key, value], index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(key)} // Handle option click
                                className={`w-full py-2 px-4 border rounded-md ${selectedOptions.includes(key) ? 'bg-green-200 border-green-400' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                                {value}
                            </button>
                        )) || <p>Loading options...</p>}
                    </div>
                    <div className="flex justify-between">
                        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400">Previous</button>
                        <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1} className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400">Next</button>
                        {currentQuestionIndex === questions.length - 1 && (
                            <button onClick={handleSubmit} className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">Submit</button>
                        )}
                    </div>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white text-center p-4">
                <p>Need help? Contact support at support@example.com</p>
            </footer>
        </div>
    );
};

export default AptitudeTest;
