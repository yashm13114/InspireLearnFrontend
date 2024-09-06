// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AptitudeTest = () => {
//     const navigate = useNavigate();
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [questions, setQuestions] = useState([]);
//     const [selectedOptions, setSelectedOptions] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Redirect to login if not authenticated
//         const user = JSON.parse(localStorage.getItem('user'));
//         if (!user) {
//             navigate('/login');
//         }

//         // Fetch questions
//         const fetchQuestions = async () => {
//             try {
//                 const response = await fetch('http://localhost:3000/aptitudeque12');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 if (Array.isArray(data)) {
//                     setQuestions(data);
//                 } else {
//                     console.error('Unexpected data format:', data);
//                 }
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching questions:', error);
//                 setLoading(false);
//             }
//         };

//         fetchQuestions();
//     }, [navigate]);

//     if (loading) return <div>Loading...</div>;

//     const handleNext = () => {
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//             setSelectedOptions([]);
//         }
//     };

//     const handlePrevious = () => {
//         if (currentQuestionIndex > 0) {
//             setCurrentQuestionIndex(currentQuestionIndex - 1);
//             setSelectedOptions([]);
//         }
//     };

//     const handleOptionClick = (optionKey) => {
//         setSelectedOptions(prevSelectedOptions => {
//             if (prevSelectedOptions.includes(optionKey)) {
//                 return prevSelectedOptions.filter(option => option !== optionKey);
//             } else if (prevSelectedOptions.length < 5) {
//                 return [...prevSelectedOptions, optionKey];
//             }
//             return prevSelectedOptions;
//         });
//     };

//     const handleSubmit = () => {
//         // Get the current question
//         const currentQuestion = questions[currentQuestionIndex];
//         if (!currentQuestion) return;

//         // Determine next page based on user selection
//         const selectedOption = selectedOptions[0]; // Assuming single selection for simplicity

//         if (currentQuestion.questionNumber === 1) {
//             if (selectedOption === 'g') {
//                 navigate('/specific-page-for-other'); // Redirect for "Other (Specify)"
//             } else {
//                 navigate(`/specific-page-for-${selectedOption}`); // Redirect based on the selected stream
//             }
//         } else {
//             // Handle other questions and navigation logic as needed
//             console.log('Selected options for current question:', selectedOptions);
//             // Example: navigate to a summary page or results page
//             navigate('/summary');
//         }
//     };

//     const currentQuestion = questions[currentQuestionIndex];

//     return (
//         <div className="font-sans bg-gray-100 text-gray-800 min-h-screen flex flex-col">
//             <main className="flex-grow flex justify-center items-center p-4">
//                 <div className="bg-white p-8 w-full max-w-4xl rounded-lg shadow-md text-center">
//                     <h1 className="text-2xl font-bold mb-4">Aptitude Test</h1>
//                     <div className="bg-gray-300 rounded-full h-5 mb-4">
//                         <div className="bg-green-600 h-full rounded-full" style={{ width: `${(currentQuestionIndex + 1) / questions.length * 100}%` }}></div>
//                     </div>
//                     <div className="mb-4">
//                         <h2 className="text-xl font-semibold">Question {currentQuestionIndex + 1} of {questions.length}</h2>
//                         <p className="mt-2">{currentQuestion?.questionText || 'Loading question...'}</p>
//                     </div>
//                     <div className="space-y-2 mb-4">
//                         {currentQuestion && Object.entries(currentQuestion.options).map(([key, value], index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => handleOptionClick(key)}
//                                 className={`w-full py-2 px-4 border rounded-md ${selectedOptions.includes(key) ? 'bg-green-200 border-green-400' : 'bg-gray-100 hover:bg-gray-200'}`}
//                                 disabled={!selectedOptions.includes(key) && selectedOptions.length >= 5}
//                             >
//                                 {value}
//                             </button>
//                         )) || <p>Loading options...</p>}
//                     </div>
//                     <div className="flex justify-between">
//                         <button 
//                             onClick={handlePrevious} 
//                             disabled={currentQuestionIndex === 0} 
//                             className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400"
//                         >
//                             Previous
//                         </button>
//                         <button 
//                             onClick={handleNext} 
//                             disabled={selectedOptions.length === 0 || currentQuestionIndex === questions.length - 1} 
//                             className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400"
//                         >
//                             Next
//                         </button>
//                         {currentQuestionIndex === questions.length - 1 && (
//                             <button 
//                                 onClick={handleSubmit} 
//                                 disabled={selectedOptions.length === 0} 
//                                 className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
//                             >
//                                 Submit
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </main>
//             <footer className="bg-gray-800 text-white text-center p-4">
//                 <p>Need help? Contact support at support@example.com</p>
//             </footer>
//         </div>
//     );
// };

// export default AptitudeTest;


// import React, { useState } from 'react';

// const AptitudeTest = () => {
//     const [currentStep, setCurrentStep] = useState(0);
//     const [userSelections, setUserSelections] = useState({});
//       const questions = [
//         {
//             id: 1,
//             questionText: 'Which of the following general topics do you enjoy or feel drawn to? (Select as many as you like or skip if unsure)',
//             options: {
//                 a: 'Technology (e.g., gadgets, coding, AI)',
//                 b: 'Arts and Literature (e.g., painting, writing, music)',
//                 c: 'Science and Engineering (e.g., physics, engineering, biology)',
//                 d: 'Business and Finance (e.g., entrepreneurship, stocks, marketing)',
//                 e: 'Social Sciences (e.g., psychology, history, sociology)',
//                 f: 'Health and Wellness (e.g., fitness, mental health, nutrition)',
//                 g: 'Other (Specify)',
//                 h: "I'm not sure"
//             }
//         },
//         {
//             id: 2,
//             questionText: 'If "I\'m not sure" is selected: Which of these do you spend most of your free time on?',
//             options: {
//                 a: 'Using or exploring new technology',
//                 b: 'Reading or consuming arts and literature',
//                 c: 'Watching science documentaries or engaging in experiments',
//                 d: 'Following the stock market or business news',
//                 e: 'Reading about social issues or history',
//                 f: 'Exercising, eating healthy, or learning about wellness',
//                 g: 'None of the above'
//             },
//             dependsOn: { id: 1, option: 'h' }
//         },
//         {
//             id: 3,
//             questionText: 'What do you usually do in your free time? (Open-ended question)',
//             type: 'text',
//             dependsOn: { id: 2, option: 'g' }
//         },
//         // Technology-specific follow-up questions
//         {
//             id: 4,
//             questionText: 'Within Technology, what specifically interests you?',
//             options: {
//                 a: 'Programming/Coding',
//                 b: 'Emerging Technologies (e.g., AI, Blockchain)',
//                 c: 'Gadgets/Consumer Electronics',
//                 d: 'Cybersecurity',
//                 e: 'Tech News/Trends',
//                 f: "I'm not sure"
//             },
//             dependsOn: { id: 1, option: 'a' }
//         },
//         {
//             id: 5,
//             questionText: 'Would you like to explore more about:',
//             options: {
//                 a: 'How technology is evolving?',
//                 b: 'Learning to code?',
//                 c: 'How technology affects everyday life?',
//                 d: 'How to protect your privacy online?'
//             },
//             dependsOn: { id: 4, option: 'f' }
//         },
//         // Continue adding specific interest questions for Arts, Science, Business, etc.
//         {
//             id: 6,
//             questionText: 'Would you prefer resources that are:',
//             options: {
//                 a: 'Beginner-friendly',
//                 b: 'Intermediate',
//                 c: 'Advanced',
//                 d: "I'm not sure"
//             }
//         },
//         {
//             id: 7,
//             questionText: 'How often do you engage with this interest?',
//             options: {
//                 a: 'Daily',
//                 b: 'Weekly',
//                 c: 'Occasionally',
//                 d: 'Rarely',
//                 e: 'Never'
//             }
//         },
//         {
//             id: 8,
//             questionText: 'How comfortable do you feel when discussing or reading about [chosen topic]?',
//             options: {
//                 a: 'Very comfortable—I can easily follow and contribute to conversations.',
//                 b: 'Somewhat comfortable—I understand most of the content but sometimes need clarification.',
//                 c: 'Not very comfortable—I often need help to grasp the concepts.',
//                 d: 'Uncomfortable—I usually avoid discussing or reading about it.'
//             }
//         },
//         {
//             id: 9,
//             questionText: 'How often do you seek out information or updates related to [chosen topic]?',
//             options: {
//                 a: 'Regularly—I keep up with the latest news and developments.',
//                 b: 'Occasionally—I check in on it when something catches my attention.',
//                 c: 'Rarely—I only look into it if it\'s necessary or someone else brings it up.',
//                 d: 'Never—I don\'t actively seek out information on this topic.'
//             }
//         },
//         {
//             id: 10,
//             questionText: 'When you encounter a problem or challenge related to [chosen topic], how do you typically respond?',
//             options: {
//                 a: 'I can usually solve it on my own or with minimal help.',
//                 b: 'I try to solve it but often need guidance or resources.',
//                 c: 'I rely heavily on others for help or need detailed instructions.',
//                 d: 'I avoid dealing with it if possible.'
//             }
//         },
//         {
//             id: 11,
//             questionText: 'If you were asked to explain a concept within [chosen topic] to someone else, how confident would you feel?',
//             options: {
//                 a: 'Very confident—I could explain it clearly and accurately.',
//                 b: 'Somewhat confident—I could explain it, but might struggle with details.',
//                 c: 'Not very confident—I would need to review or look up information first.',
//                 d: 'Not confident at all—I wouldn’t know where to start.'
//             }
//         },
//         {
//             id: 12,
//             questionText: 'Have you ever completed any projects, assignments, or activities related to [chosen topic]?',
//             options: {
//                 a: 'Yes, and they were successful.',
//                 b: 'Yes, but I needed help or didn’t finish.',
//                 c: 'I’ve started but never completed any.',
//                 d: 'No, I’ve never attempted any.'
//             }
//         }
//     ];

//     const handleSelection = (questionId, option) => {
//         setUserSelections({
//             ...userSelections,
//             [questionId]: option
//         });
        
//         // Move to the next step
//         if (questions[currentStep + 1]) {
//             setCurrentStep(currentStep + 1);
//         }
//     };

//     const handlePrevious = () => {
//         if (currentStep > 0) {
//             setCurrentStep(currentStep - 1);
//         }
//     };

//     const handleNext = () => {
//         if (questions[currentStep + 1]) {
//             setCurrentStep(currentStep + 1);
//         }
//     };

//     const renderQuestion = () => {
//         const currentQuestion = questions[currentStep];
    
//         // Ensure currentQuestion is defined
//         if (!currentQuestion) {
//             return <div>Loading...</div>;
//         }
    
//         // Skip dependent questions if condition isn't met
//         if (currentQuestion.dependsOn) {
//             const { id, option } = currentQuestion.dependsOn;
//             if (userSelections[id] !== option) {
//                 // Skip this question and move to the next one
//                 if (questions[currentStep + 1]) {
//                     setCurrentStep(currentStep + 1);
//                 }
//                 return null;
//             }
//         }
    
//         if (currentQuestion.type === 'text') {
//             return (
//                 <div>
//                     <h2 className="text-xl mb-4">{currentQuestion.questionText}</h2>
//                     <textarea
//                         className="block w-full p-2 bg-gray-200 rounded-md"
//                         placeholder="Your answer"
//                         onBlur={(e) => handleSelection(currentQuestion.id, e.target.value)}
//                     />
//                 </div>
//             );
//         }

//         return (
//             <div>
//                 <h2 className="text-xl mb-4">{currentQuestion.questionText}</h2>
//                 <div className="space-y-2">
//                     {Object.entries(currentQuestion.options).map(([key, value]) => (
//                         <button
//                             key={key}
//                             className="block w-full p-2 bg-gray-200 hover:bg-gray-300 rounded-md"
//                             onClick={() => handleSelection(currentQuestion.id, key)}
//                         >
//                             {value}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="p-6">
//             <h1 className="text-3xl mb-6">Aptitude Test</h1>
//             {renderQuestion()}
//             <div className="flex justify-between mt-4">
//                 {currentStep > 0 && (
//                     <button 
//                         className="bg-gray-500 text-white py-2 px-4 rounded-md" 
//                         onClick={handlePrevious}
//                     >
//                         Previous
//                     </button>
//                 )}
//                 {currentStep < questions.length - 1 ? (
//                     <button 
//                         className="bg-blue-500 text-white py-2 px-4 rounded-md" 
//                         onClick={handleNext}
//                     >
//                         Next
//                     </button>
//                 ) : (
//                     <button 
//                         className="bg-green-500 text-white py-2 px-4 rounded-md" 
//                         onClick={() => alert('Test submitted')}
//                     >
//                         Submit Test
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AptitudeTest;


import React, { useState } from 'react';

const AptitudeTest = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [userSelections, setUserSelections] = useState({});
    const [selectedFields, setSelectedFields] = useState([]);
    
    const questions = [
        {
            id: 1,
            questionText: 'Which of the following general topics do you enjoy or feel drawn to? (Select as many as you like or skip if unsure)',
            options: {
                a: 'Technology (e.g., gadgets, coding, AI)',
                b: 'Arts and Literature (e.g., painting, writing, music)',
                c: 'Science and Engineering (e.g., physics, engineering, biology)',
                d: 'Business and Finance (e.g., entrepreneurship, stocks, marketing)',
                e: 'Social Sciences (e.g., psychology, history, sociology)',
                f: 'Health and Wellness (e.g., fitness, mental health, nutrition)',
                g: 'Other (Specify)',
                h: "I'm not sure"
            }
        },
        {
            id: 2,
            questionText: 'If "I\'m not sure" is selected: Which of these do you spend most of your free time on?',
            options: {
                a: 'Using or exploring new technology',
                b: 'Reading or consuming arts and literature',
                c: 'Watching science documentaries or engaging in experiments',
                d: 'Following the stock market or business news',
                e: 'Reading about social issues or history',
                f: 'Exercising, eating healthy, or learning about wellness',
                g: 'None of the above'
            },
            dependsOn: { id: 1, option: 'h' }
        },
        {
            id: 3,
            questionText: 'What do you usually do in your free time? (Open-ended question)',
            type: 'text',
            dependsOn: { id: 2, option: 'g' }
        },
        // Technology-specific follow-up questions
        {
            id: 4,
            questionText: 'Within Technology, what specifically interests you?',
            options: {
                a: 'Programming/Coding',
                b: 'Emerging Technologies (e.g., AI, Blockchain)',
                c: 'Gadgets/Consumer Electronics',
                d: 'Cybersecurity',
                e: 'Tech News/Trends',
                f: "I'm not sure"
            },
            dependsOn: { id: 1, option: 'a' }
        },
        {
            id: 5,
            questionText: 'Would you like to explore more about:',
            options: {
                a: 'How technology is evolving?',
                b: 'Learning to code?',
                c: 'How technology affects everyday life?',
                d: 'How to protect your privacy online?'
            },
            dependsOn: { id: 4, option: 'f' }
        },
        // Arts-specific follow-up questions
        {
            id: 6,
            questionText: 'Within Arts and Literature, what specifically interests you?',
            options: {
                a: 'Painting/Drawing',
                b: 'Writing/Creative Writing',
                c: 'Music Composition/Performance',
                d: 'Art History/Criticism',
                e: 'Literature Analysis',
                f: "I'm not sure"
            },
            dependsOn: { id: 1, option: 'b' }
        },
        // Science-specific follow-up questions
        {
            id: 7,
            questionText: 'Within Science and Engineering, what specifically interests you?',
            options: {
                a: 'Physics',
                b: 'Engineering',
                c: 'Biology',
                d: 'Mathematics',
                e: 'Environmental Science',
                f: "I'm not sure"
            },
            dependsOn: { id: 1, option: 'c' }
        },
        // Business-specific follow-up questions
        {
            id: 8,
            questionText: 'Within Business and Finance, what specifically interests you?',
            options: {
                a: 'Entrepreneurship',
                b: 'Stock Market',
                c: 'Marketing',
                d: 'Financial Planning',
                e: 'Economics',
                f: "I'm not sure"
            },
            dependsOn: { id: 1, option: 'd' }
        },
        // Social Sciences-specific follow-up questions
        {
            id: 9,
            questionText: 'Within Social Sciences, what specifically interests you?',
            options: {
                a: 'Psychology',
                b: 'Sociology',
                c: 'History',
                d: 'Political Science',
                e: 'Cultural Studies',
                f: "I'm not sure"
            },
            dependsOn: { id: 1, option: 'e' }
        },
        // Health and Wellness-specific follow-up questions
        {
            id: 10,
            questionText: 'Within Health and Wellness, what specifically interests you?',
            options: {
                a: 'Fitness',
                b: 'Nutrition',
                c: 'Mental Health',
                d: 'Yoga/Meditation',
                e: 'Public Health',
                f: "I'm not sure"
            },
            dependsOn: { id: 1, option: 'f' }
        },
        {
            id: 11,
            questionText: 'Would you prefer resources that are:',
            options: {
                a: 'Beginner-friendly',
                b: 'Intermediate',
                c: 'Advanced',
                d: "I'm not sure"
            }
        },
        {
            id: 12,
            questionText: 'How often do you engage with this interest?',
            options: {
                a: 'Daily',
                b: 'Weekly',
                c: 'Occasionally',
                d: 'Rarely',
                e: 'Never'
            }
        },
        {
            id: 13,
            questionText: 'How comfortable do you feel when discussing or reading about [chosen topic]?',
            options: {
                a: 'Very comfortable—I can easily follow and contribute to conversations.',
                b: 'Somewhat comfortable—I understand most of the content but sometimes need clarification.',
                c: 'Not very comfortable—I often need help to grasp the concepts.',
                d: 'Uncomfortable—I usually avoid discussing or reading about it.'
            }
        },
        {
            id: 14,
            questionText: 'How often do you seek out information or updates related to [chosen topic]?',
            options: {
                a: 'Regularly—I keep up with the latest news and developments.',
                b: 'Occasionally—I check in on it when something catches my attention.',
                c: 'Rarely—I only look into it if it\'s necessary or someone else brings it up.',
                d: 'Never—I don\'t actively seek out information on this topic.'
            }
        },
        {
            id: 15,
            questionText: 'When you encounter a problem or challenge related to [chosen topic], how do you typically respond?',
            options: {
                a: 'I can usually solve it on my own or with minimal help.',
                b: 'I try to solve it but often need guidance or resources.',
                c: 'I rely heavily on others for help or need detailed instructions.',
                d: 'I avoid dealing with it if possible.'
            }
        },
        {
            id: 16,
            questionText: 'If you were asked to explain a concept within [chosen topic] to someone else, how confident would you feel?',
            options: {
                a: 'Very confident—I could explain it clearly and accurately.',
                b: 'Somewhat confident—I could explain it, but might struggle with details.',
                c: 'Not very confident—I would need to review or look up information first.',
                d: 'Not confident at all—I wouldn’t know where to start.'
            }
        },
        {
            id: 17,
            questionText: 'Have you ever completed any projects, assignments, or activities related to [chosen topic]?',
            options: {
                a: 'Yes, and they were successful.',
                b: 'Yes, but I needed help or didn’t finish.',
                c: 'I’ve started but never completed any.',
                d: 'No, I’ve never attempted any.'
            }
        }
    ];

    const handleSelection = (questionId, option) => {
        if (questionId === 1) {
            // Handle multiple selections for the first question
            const newSelections = { ...userSelections, [questionId]: [...(userSelections[questionId] || []), option] };
            setUserSelections(newSelections);
            setSelectedFields([...new Set([...selectedFields, option])]);
        } else {
            setUserSelections({
                ...userSelections,
                [questionId]: option
            });
        }
        
        // Move to the next step
        if (questions[currentStep + 1]) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleNext = () => {
        if (questions[currentStep + 1]) {
            setCurrentStep(currentStep + 1);
        }
    };

    const renderQuestion = () => {
        const currentQuestion = questions[currentStep];
    
        // Ensure currentQuestion is defined
        if (!currentQuestion) {
            return <div>Loading...</div>;
        }
    
        // Skip dependent questions if condition isn't met
        if (currentQuestion.dependsOn) {
            const { id, option } = currentQuestion.dependsOn;
            if (!userSelections[id]?.includes(option)) {
                // Skip this question and move to the next one
                if (questions[currentStep + 1]) {
                    setCurrentStep(currentStep + 1);
                }
                return null;
            }
        }
    
        if (currentQuestion.type === 'text') {
            return (
                <div>
                    <h2 className="text-xl mb-4">{currentQuestion.questionText}</h2>
                    <textarea
                        className="block w-full p-2 bg-gray-200 rounded-md"
                        placeholder="Your answer"
                        onBlur={(e) => handleSelection(currentQuestion.id, e.target.value)}
                    />
                </div>
            );
        }

        return (
            <div>
                <h2 className="text-xl mb-4">{currentQuestion.questionText}</h2>
                <div className="space-y-2">
                    {Object.entries(currentQuestion.options).map(([key, value]) => (
                        <button
                            key={key}
                            className="block w-full p-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                            onClick={() => handleSelection(currentQuestion.id, key)}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            {renderQuestion()}
            <div className="flex justify-between mt-4">
                {currentStep > 0 && (
                    <button
                        className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md"
                        onClick={handlePrevious}
                    >
                        Previous
                    </button>
                )}
                {currentStep < questions.length - 1 && (
                    <button
                        className={`p-2 bg-blue-500 text-white rounded-md ${!userSelections[questions[currentStep].id] ? 'cursor-not-allowed opacity-50' : ''}`}
                        onClick={handleNext}
                        disabled={!userSelections[questions[currentStep].id]}
                    >
                        Next
                    </button>
                )}
                {currentStep === questions.length - 1 && (
                    <button
                        className="p-2 bg-green-500 text-white rounded-md"
                        onClick={() => alert('Test submitted!')}
                    >
                        Submit Test
                    </button>
                )}
            </div>
        </div>
    );
};

export default AptitudeTest;
