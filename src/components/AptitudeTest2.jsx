// import React, { useState } from 'react';

// const AptitudeTest = () => {
//     const [currentStep, setCurrentStep] = useState(0);
//     const [userSelections, setUserSelections] = useState({});
//     const [selectedFields, setSelectedFields] = useState([]);
//     const [showVideos, setShowVideos] = useState(false);
//     const [difficultyLevel, setDifficultyLevel] = useState(null);


//     const questions = [
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
//         // Arts-specific follow-up questions
//         {
//             id: 6,
//             questionText: 'Within Arts and Literature, what specifically interests you?',
//             options: {
//                 a: 'Painting/Drawing',
//                 b: 'Writing/Creative Writing',
//                 c: 'Music Composition/Performance',
//                 d: 'Art History/Criticism',
//                 e: 'Literature Analysis',
//                 f: "I'm not sure"
//             },
//             dependsOn: { id: 1, option: 'b' }
//         },
//         // Science-specific follow-up questions
//         {
//             id: 7,
//             questionText: 'Within Science and Engineering, what specifically interests you?',
//             options: {
//                 a: 'Physics',
//                 b: 'Engineering',
//                 c: 'Biology',
//                 d: 'Mathematics',
//                 e: 'Environmental Science',
//                 f: "I'm not sure"
//             },
//             dependsOn: { id: 1, option: 'c' }
//         },
//         // Business-specific follow-up questions
//         {
//             id: 8,
//             questionText: 'Within Business and Finance, what specifically interests you?',
//             options: {
//                 a: 'Entrepreneurship',
//                 b: 'Stock Market',
//                 c: 'Marketing',
//                 d: 'Financial Planning',
//                 e: 'Economics',
//                 f: "I'm not sure"
//             },
//             dependsOn: { id: 1, option: 'd' }
//         },
//         // Social Sciences-specific follow-up questions
//         {
//             id: 9,
//             questionText: 'Within Social Sciences, what specifically interests you?',
//             options: {
//                 a: 'Psychology',
//                 b: 'Sociology',
//                 c: 'History',
//                 d: 'Political Science',
//                 e: 'Cultural Studies',
//                 f: "I'm not sure"
//             },
//             dependsOn: { id: 1, option: 'e' }
//         },
//         // Health and Wellness-specific follow-up questions
//         {
//             id: 10,
//             questionText: 'Within Health and Wellness, what specifically interests you?',
//             options: {
//                 a: 'Fitness',
//                 b: 'Nutrition',
//                 c: 'Mental Health',
//                 d: 'Yoga/Meditation',
//                 e: 'Public Health',
//                 f: "I'm not sure"
//             },
//             dependsOn: { id: 1, option: 'f' }
//         },
//         {
//             id: 11,
//             questionText: 'Would you prefer resources that are:',
//             options: {
//                 a: 'Beginner-friendly',
//                 b: 'Intermediate',
//                 c: 'Advanced',
//                 d: "I'm not sure"
//             }
//         },
//         {
//             id: 12,
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
//             id: 13,
//             questionText: 'How comfortable do you feel when discussing or reading about [chosen topic]?',
//             options: {
//                 a: 'Very comfortable—I can easily follow and contribute to conversations.',
//                 b: 'Somewhat comfortable—I understand most of the content but sometimes need clarification.',
//                 c: 'Not very comfortable—I often need help to grasp the concepts.',
//                 d: 'Uncomfortable—I usually avoid discussing or reading about it.'
//             }
//         },
//         {
//             id: 14,
//             questionText: 'How often do you seek out information or updates related to [chosen topic]?',
//             options: {
//                 a: 'Regularly—I keep up with the latest news and developments.',
//                 b: 'Occasionally—I check in on it when something catches my attention.',
//                 c: 'Rarely—I only look into it if it\'s necessary or someone else brings it up.',
//                 d: 'Never—I don\'t actively seek out information on this topic.'
//             }
//         },
//         {
//             id: 15,
//             questionText: 'When you encounter a problem or challenge related to [chosen topic], how do you typically respond?',
//             options: {
//                 a: 'I can usually solve it on my own or with minimal help.',
//                 b: 'I try to solve it but often need guidance or resources.',
//                 c: 'I rely heavily on others for help or need detailed instructions.',
//                 d: 'I avoid dealing with it if possible.'
//             }
//         },
//         {
//             id: 16,
//             questionText: 'If you were asked to explain a concept within [chosen topic] to someone else, how confident would you feel?',
//             options: {
//                 a: 'Very confident—I could explain it clearly and accurately.',
//                 b: 'Somewhat confident—I could explain it, but might struggle with details.',
//                 c: 'Not very confident—I would need to review or look up information first.',
//                 d: 'Not confident at all—I wouldn’t know where to start.'
//             }
//         },
//         {
//             id: 17,
//             questionText: 'Have you ever completed any projects, assignments, or activities related to [chosen topic]?',
//             options: {
//                 a: 'Yes, and they were successful.',
//                 b: 'Yes, but I needed help or didn’t finish.',
//                 c: 'I’ve started but never completed any.',
//                 d: 'No, I’ve never attempted any.'
//             }
//         }
//     ];

//     const courses = {
//         Technology: {
//             beginner: {
//                 'Consumer Electronics': 'https://www.youtube.com/watch?v=r-X9coYTOV4&list=PLah6faXAgguOeMUIxS22ZU4w5nDvCl5gs',
//                 'Internet of Things (IoT)': 'https://www.youtube.com/watch?v=LlhmzVL5bm8&list=PL9ooVrP1hQOGccfBbP5tJWZ1hv5sIUWJl'
//             },
//             intermediate: {
//                 'Consumer Electronics': 'https://www.youtube.com/results?search_query=introduction+to+consumer+electronics+for+intermidiate',
//                 'Internet of Things (IoT)': 'https://www.youtube.com/watch?v=Ic63-yf-zuc&list=PL3uLubnzL2Tm5PAw88N1jR9MLTJpuPEnX'
//             },
//             advanced: {
//                 'Python': 'https://www.youtube.com/watch?v=KSiRzuSx120&list=PL7yh-TELLS1FuqLSjl5bgiQIEH25VEmIc',
//                 'React': 'https://www.youtube.com/watch?v=4p_VWn1AEvg&list=PLjxZxD6BDkeZoRU6v7gMyQ7BirGD6u0Lt'
//             }
//         },
//         Arts: {
//             beginner: {
//                 'Music Theory': 'https://www.coursera.org/learn/edinburgh-music-theory',
//                 'Visual Arts': 'https://www.jerrysartarama.com/free-art-instruction-videos/skill-level',
//                 'Creative Writing': 'https://www.coursera.org/learn/english-composition'
//             },
//             intermediate: {
//                 'Music Theory': 'https://www.coursera.org/learn/music-theory-harmonic-practices',
//                 'Visual Arts': 'https://www.udemy.com/course/complete-drawing-course/',
//                 'Creative Writing': 'https://www.coursera.org/learn/write-your-first-novel'
//             },
//             advanced: {
//                 'Music Composition': 'https://www.coursera.org/learn/composing-music',
//                 'Visual Arts': 'https://visualartspassage.com/illustration/process-skill-and-craft/',
//                 'Advanced Writing': 'https://www.coursera.org/learn/advanced-writing'
//             }
//         },
//         SocialSciences: {
//             beginner: {
//                 'Psychology and Human Behavior': 'https://www.youtube.com/watch?v=8FnFJxx_MGQ',
//                 'Sociology and Social Issues': 'https://www.youtube.com/watch?v=to6dPqKQan0',
//             },
//             intermediate: {
//                 'Psychology and Human Behavior': 'https://www.youtube.com/watch?v=iWZbfreEMhA',
//                 'Sociology and Social Issues': 'https://www.youtube.com/watch?v=J0ssFp7yN8Y',
//             },
//             advanced: {
//                 'Psychology and Human Behavior': 'https://www.youtube.com/watch?v=fIFB6SBw2lU',
//                 'Sociology and Social Issues': 'https://www.youtube.com/watch?v=HaS0xNcAaWo',
//             },
//         },
//         BusinessandFinance: {
//             beginner: {
//                 'Entrepreneurship and Startups': 'https://www.youtube.com/watch?v=tZE_fQFK8EY',
//                 'Investing and Stock Markets': 'https://www.youtube.com/watch?v=R4h7fyAU7GA',
//             },
//             intermediate: {
//                 'Entrepreneurship and Startups': 'https://www.youtube.com/watch?v=HaS0xNcAaWo',
//                 'Investing and Stock Markets': 'https://www.youtube.com/watch?v=8FnFJxx_MGQ',
//             },
//             advanced: {
//                 'Entrepreneurship and Startups': 'https://www.youtube.com/watch?v=DTnCqBUnaRM',
//                 'Investing and Stock Markets': 'https://www.youtube.com/watch?v=8rIviI0ZKNA',
//             },
//         },
//         ScienceandEngineering: {
//             beginner: {
//                 'Chemistry': 'https://www.youtube.com/watch?v=J0ssFp7yN8Y',
//                 'Engineering and Robotics': 'https://www.youtube.com/watch?v=7G3eXI_DPn8',
//             },
//             intermediate: {
//                 'Chemistry': 'https://www.youtube.com/watch?v=K_xIJBlbjg4',
//                 'Engineering and Robotics': 'https://www.youtube.com/watch?v=5QxxaVfgQ3k',
//             },
//             advanced: {
//                 'Chemistry': 'https://www.youtube.com/watch?v=uncBRM9-XZ4',
//                 'Engineering and Robotics': 'https://www.youtube.com/watch?v=j0z4gkDMAzM',
//             },
//         },
//         HealthandWellness: {
//             beginner: {
//                 'Physical Fitness and Exercise': 'https://www.youtube.com/watch?v=tZE_fQFK8EY',
//                 'Nutrition and Diet': 'https://www.youtube.com/watch?v=R4h7fyAU7GA',
//             },
//             intermediate: {
//                 'Physical Fitness and Exercise': 'https://www.youtube.com/watch?v=HaS0xNcAaWo',
//                 'Nutrition and Diet': 'https://www.youtube.com/watch?v=bqPSFw1eiNc',
//             },
//             advanced: {
//                 'Physical Fitness and Exercise': 'https://www.youtube.com/watch?v=DTnCqBUnaRM',
//                 'Nutrition and Diet': 'https://www.youtube.com/watch?v=8FnFJxx_MGQ',
//             },
//         },
//     };

//     const handleSelection = (questionId, option) => {
//         if (questionId === 1) {
//             const newSelections = { ...userSelections, [questionId]: [...(userSelections[questionId] || []), option] };
//             setUserSelections(newSelections);
//             setSelectedFields([...new Set([...selectedFields, option])]);
//         } else {
//             setUserSelections({
//                 ...userSelections,
//                 [questionId]: option
//             });
//         }

//         if (questionId === 11) {
//             setDifficultyLevel(option); // Track difficulty level
//         }

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

//     const handleSubmit = () => {
//         setShowVideos(true);
//     };

//     const renderVideos = () => {
//         if (!difficultyLevel) return null;

//         const level = difficultyLevel === 'a' ? 'beginner' : difficultyLevel === 'b' ? 'intermediate' : 'advanced';
//         return (
//             <div className='bg-gray-300 p-4'>
//                 <h2 className="text-xl mt-4">Recommended Courses for {level.charAt(0).toUpperCase() + level.slice(1)} Level</h2>
//                 {selectedFields.includes('a') && (
//                     <div>
//                         <h3 className="mt-4">Technology</h3>
//                         <ul>
//                             {Object.entries(courses.Technology[level]).map(([topic, url]) => (
//                                 <li key={topic}>
//                                     <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                                         {topic}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//                 {selectedFields.includes('b') && (
//                     <div>
//                         <h3 className="mt-4">Arts and Literature</h3>
//                         <ul>
//                             {Object.entries(courses.Arts[level]).map(([topic, url]) => (
//                                 <li key={topic}>
//                                     <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                                         {topic}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//                 {selectedFields.includes('d') && (
//                     <div>
//                         <h3 className="mt-4">Business and Finance</h3>
//                         <ul>
//                             {Object.entries(courses.BusinessandFinance[level]).map(([topic, url]) => (
//                                 <li key={topic}>
//                                     <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                                         {topic}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//                 {selectedFields.includes('e') && (
//                     <div>
//                         <h3 className="mt-4">Social Sciences</h3>
//                         <ul>
//                             {Object.entries(courses.SocialSciences[level]).map(([topic, url]) => (
//                                 <li key={topic}>
//                                     <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                                         {topic}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//                 {selectedFields.includes('f') && (
//                     <div>
//                         <h3 className="mt-4">Health and Wellness</h3>
//                         <ul>
//                             {Object.entries(courses.HealthandWellness[level]).map(([topic, url]) => (
//                                 <li key={topic}>
//                                     <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                                         {topic}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//                 {/* Add other fields here if necessary */}
//             </div>
//         );
//     };



//     const renderQuestion = () => {
//         const currentQuestion = questions[currentStep];

//         if (!currentQuestion) return <div>Loading...</div>;

//         if (currentQuestion.dependsOn) {
//             const { id, option } = currentQuestion.dependsOn;
//             if (!userSelections[id]?.includes(option)) {
//                 if (questions[currentStep + 1]) {
//                     setCurrentStep(currentStep + 1);
//                 }
//                 return null;
//             }
//         }

//         if (currentQuestion.type === 'text') {
//             return (
//                 <div className=''>
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
//             <div className=' p-10'>
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
//         <div className="p-4 max-w-lg mx-auto">
//             {showVideos ? (
//                 renderVideos()
//             ) : (
//                 <>
//                     {renderQuestion()}
//                     <div className="flex justify-between mt-4">
//                         {currentStep > 0 && (
//                             <button
//                                 className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md"
//                                 onClick={handlePrevious}
//                             >
//                                 Previous
//                             </button>
//                         )}
//                         {currentStep < questions.length - 1 ? (
//                             <button
//                                 className={`p-2 bg-blue-500 text-white rounded-md ${!userSelections[questions[currentStep].id] ? 'cursor-not-allowed opacity-50' : ''}`}
//                                 onClick={handleNext}
//                                 disabled={!userSelections[questions[currentStep].id]}
//                             >
//                                 Next
//                             </button>
//                         ) : (
//                             <button
//                                 className="p-2 bg-green-500 text-white rounded-md"
//                                 onClick={handleSubmit}
//                             >
//                                 Submit Test
//                             </button>
//                         )}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };
// export default AptitudeTest


import React, { useState } from 'react';

const AptitudeTest = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [userSelections, setUserSelections] = useState({});
    const [selectedFields, setSelectedFields] = useState([]);
    const [showVideos, setShowVideos] = useState(false);
    const [difficultyLevel, setDifficultyLevel] = useState(null);


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

    const courses = {
        Technology: {
            beginner: {
                'Consumer Electronics': 'https://www.youtube.com/watch?v=r-X9coYTOV4&list=PLah6faXAgguOeMUIxS22ZU4w5nDvCl5gs',
                'Internet of Things (IoT)': 'https://www.youtube.com/watch?v=LlhmzVL5bm8&list=PL9ooVrP1hQOGccfBbP5tJWZ1hv5sIUWJl'
            },
            intermediate: {
                'Consumer Electronics': 'https://www.youtube.com/results?search_query=introduction+to+consumer+electronics+for+intermidiate',
                'Internet of Things (IoT)': 'https://www.youtube.com/watch?v=Ic63-yf-zuc&list=PL3uLubnzL2Tm5PAw88N1jR9MLTJpuPEnX'
            },
            advanced: {
                'Python': 'https://www.youtube.com/watch?v=KSiRzuSx120&list=PL7yh-TELLS1FuqLSjl5bgiQIEH25VEmIc',
                'React': 'https://www.youtube.com/watch?v=4p_VWn1AEvg&list=PLjxZxD6BDkeZoRU6v7gMyQ7BirGD6u0Lt'
            }
        },
        Arts: {
            beginner: {
                'Music Theory': 'https://www.coursera.org/learn/edinburgh-music-theory',
                'Visual Arts': 'https://www.jerrysartarama.com/free-art-instruction-videos/skill-level',
                'Creative Writing': 'https://www.coursera.org/learn/english-composition'
            },
            intermediate: {
                'Music Theory': 'https://www.coursera.org/learn/music-theory-harmonic-practices',
                'Visual Arts': 'https://www.udemy.com/course/complete-drawing-course/',
                'Creative Writing': 'https://www.coursera.org/learn/write-your-first-novel'
            },
            advanced: {
                'Music Composition': 'https://www.coursera.org/learn/composing-music',
                'Visual Arts': 'https://visualartspassage.com/illustration/process-skill-and-craft/',
                'Advanced Writing': 'https://www.coursera.org/learn/advanced-writing'
            }
        },
        SocialSciences: {
            beginner: {
                'Psychology and Human Behavior': 'https://www.youtube.com/watch?v=8FnFJxx_MGQ',
                'Sociology and Social Issues': 'https://www.youtube.com/watch?v=to6dPqKQan0',
            },
            intermediate: {
                'Psychology and Human Behavior': 'https://www.youtube.com/watch?v=iWZbfreEMhA',
                'Sociology and Social Issues': 'https://www.youtube.com/watch?v=J0ssFp7yN8Y',
            },
            advanced: {
                'Psychology and Human Behavior': 'https://www.youtube.com/watch?v=fIFB6SBw2lU',
                'Sociology and Social Issues': 'https://www.youtube.com/watch?v=HaS0xNcAaWo',
            },
        },
        BusinessandFinance: {
            beginner: {
                'Entrepreneurship and Startups': 'https://www.youtube.com/watch?v=tZE_fQFK8EY',
                'Investing and Stock Markets': 'https://www.youtube.com/watch?v=R4h7fyAU7GA',
            },
            intermediate: {
                'Entrepreneurship and Startups': 'https://www.youtube.com/watch?v=HaS0xNcAaWo',
                'Investing and Stock Markets': 'https://www.youtube.com/watch?v=8FnFJxx_MGQ',
            },
            advanced: {
                'Entrepreneurship and Startups': 'https://www.youtube.com/watch?v=DTnCqBUnaRM',
                'Investing and Stock Markets': 'https://www.youtube.com/watch?v=8rIviI0ZKNA',
            },
        },
        ScienceandEngineering: {
            beginner: {
                'Chemistry': 'https://www.youtube.com/watch?v=J0ssFp7yN8Y',
                'Engineering and Robotics': 'https://www.youtube.com/watch?v=7G3eXI_DPn8',
            },
            intermediate: {
                'Chemistry': 'https://www.youtube.com/watch?v=K_xIJBlbjg4',
                'Engineering and Robotics': 'https://www.youtube.com/watch?v=5QxxaVfgQ3k',
            },
            advanced: {
                'Chemistry': 'https://www.youtube.com/watch?v=uncBRM9-XZ4',
                'Engineering and Robotics': 'https://www.youtube.com/watch?v=j0z4gkDMAzM',
            },
        },
        HealthandWellness: {
            beginner: {
                'Physical Fitness and Exercise': 'https://www.youtube.com/watch?v=tZE_fQFK8EY',
                'Nutrition and Diet': 'https://www.youtube.com/watch?v=R4h7fyAU7GA',
            },
            intermediate: {
                'Physical Fitness and Exercise': 'https://www.youtube.com/watch?v=HaS0xNcAaWo',
                'Nutrition and Diet': 'https://www.youtube.com/watch?v=bqPSFw1eiNc',
            },
            advanced: {
                'Physical Fitness and Exercise': 'https://www.youtube.com/watch?v=DTnCqBUnaRM',
                'Nutrition and Diet': 'https://www.youtube.com/watch?v=8FnFJxx_MGQ',
            },
        },
    };

    const handleSelection = (questionId, option) => {
        if (questionId === 1) {
            const newSelections = { ...userSelections, [questionId]: [...(userSelections[questionId] || []), option] };
            setUserSelections(newSelections);
            setSelectedFields([...new Set([...selectedFields, option])]);
        } else {
            setUserSelections({
                ...userSelections,
                [questionId]: option
            });
        }

        if (questionId === 11) {
            setDifficultyLevel(option); // Track difficulty level
        }

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

    const handleSubmit = () => {
        setShowVideos(true);
    };

    const renderVideos = () => {
        if (!difficultyLevel) return null;

        const level = difficultyLevel === 'a' ? 'beginner' : difficultyLevel === 'b' ? 'intermediate' : 'advanced';

        return (
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold text-amber-400 mb-4">Recommended Courses for You</h2>
                    <h3 className="text-lg text-gray-400 mb-2">Based on the above aptitude test we can say that you are a {level.charAt(0).toUpperCase() + level.slice(1)}.</h3>
                    <p className="text-gray-400 text-base">Based on your aptitude test results, here are some courses that are best suited for you.</p>
                    <div className="grid gap-8 grid-cols-1  mt-8">
                        {selectedFields.includes('a') && (
                            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <h3 className="text-2xl font-bold text-amber-400 mb-4">Technology</h3>
                                <div className="space-y-4">
                                    {Object.entries(courses.Technology[level]).map(([topic, url]) => (
                                        <div key={topic} className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <h4 className="text-lg font-medium mb-2">{topic}</h4>
                                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                Watch Video
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {selectedFields.includes('b') && (
                            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <h3 className="text-2xl font-bold text-amber-400 mb-4">Arts and Literature</h3>
                                <div className="space-y-4">
                                    {Object.entries(courses.Arts[level]).map(([topic, url]) => (
                                        <div key={topic} className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <h4 className="text-lg font-medium mb-2">{topic}</h4>
                                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                Watch Video
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {selectedFields.includes('c') && (
                            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <h3 className="text-2xl font-bold text-amber-400 mb-4">Business and Finance</h3>
                                <div className="space-y-4">
                                    {Object.entries(courses.BusinessandFinance[level]).map(([topic, url]) => (
                                        <div key={topic} className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <h4 className="text-lg font-medium mb-2">{topic}</h4>
                                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                Watch Video
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {selectedFields.includes('d') && (
                            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <h3 className="text-2xl font-bold text-amber-400 mb-4">Social Sciences</h3>
                                <div className="space-y-4">
                                    {Object.entries(courses.SocialSciences[level]).map(([topic, url]) => (
                                        <div key={topic} className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <h4 className="text-lg font-medium mb-2">{topic}</h4>
                                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                Watch Video
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {selectedFields.includes('f') && (
                            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <h3 className="text-2xl font-bold text-amber-400 mb-4">Health and Wellness</h3>
                                <div className="space-y-4">
                                    {Object.entries(courses.HealthandWellness[level]).map(([topic, url]) => (
                                        <div key={topic} className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <h4 className="text-lg font-medium mb-2">{topic}</h4>
                                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                Watch Video
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {/* Add other fields similarly */}
                    </div>
                </div>
            </section>
            // <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
            //     <h2 className="text-2xl font-semibold mb-4">Recommended Courses for {level.charAt(0).toUpperCase() + level.slice(1)} Level</h2>
            //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            //         {selectedFields.includes('a') && (
            //             <>




            //                 <div>
            //                     <h3 className="text-xl font-semibold mb-2">Technology</h3>
            //                     <div className="space-y-4">
            //                         {Object.entries(courses.Technology[level]).map(([topic, url]) => (
            //                             <div key={topic} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            //                                 <h4 className="text-lg font-medium mb-2">{topic}</h4>
            //                                 <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            //                                     Watch Video
            //                                 </a>
            //                             </div>
            //                         ))}
            //                     </div>
            //                 </div>
            //             </>
            //         )}
            //         {selectedFields.includes('b') && (
            //             <div>
            //                 <h3 className="text-xl font-semibold mb-2">Arts and Literature</h3>
            //                 <div className="space-y-4">
            //                     {Object.entries(courses.Arts[level]).map(([topic, url]) => (
            //                         <div key={topic} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            //                             <h4 className="text-lg font-medium mb-2">{topic}</h4>
            //                             <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            //                                 Watch Video
            //                             </a>
            //                         </div>
            //                     ))}
            //                 </div>
            //             </div>
            //         )}
            //         {selectedFields.includes('d') && (
            //             <div>
            //                 <h3 className="text-xl font-semibold mb-2">Business and Finance</h3>
            //                 <div className="space-y-4">
            //                     {Object.entries(courses.BusinessandFinance[level]).map(([topic, url]) => (
            //                         <div key={topic} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            //                             <h4 className="text-lg font-medium mb-2">{topic}</h4>
            //                             <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            //                                 Watch Video
            //                             </a>
            //                         </div>
            //                     ))}
            //                 </div>
            //             </div>
            //         )}
            //         {selectedFields.includes('e') && (
            //             <div>
            //                 <h3 className="text-xl font-semibold mb-2">Social Sciences</h3>
            //                 <div className="space-y-4">
            //                     {Object.entries(courses.SocialSciences[level]).map(([topic, url]) => (
            //                         <div key={topic} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            //                             <h4 className="text-lg font-medium mb-2">{topic}</h4>
            //                             <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            //                                 Watch Video
            //                             </a>
            //                         </div>
            //                     ))}
            //                 </div>
            //             </div>
            //         )}
            //         {selectedFields.includes('f') && (
            //             <div>
            //                 <h3 className="text-xl font-semibold mb-2">Health and Wellness</h3>
            //                 <div className="space-y-4">
            //                     {Object.entries(courses.HealthandWellness[level]).map(([topic, url]) => (
            //                         <div key={topic} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            //                             <h4 className="text-lg font-medium mb-2">{topic}</h4>
            //                             <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            //                                 Watch Video
            //                             </a>
            //                         </div>
            //                     ))}
            //                 </div>
            //             </div>
            //         )}
            //         {/* Add other fields here if necessary */}
            //     </div>
            // </div>
        );
    };




    const renderQuestion = () => {
        const currentQuestion = questions[currentStep];

        if (!currentQuestion) return <div>Loading...</div>;

        if (currentQuestion.dependsOn) {
            const { id, option } = currentQuestion.dependsOn;
            if (!userSelections[id]?.includes(option)) {
                if (questions[currentStep + 1]) {
                    setCurrentStep(currentStep + 1);
                }
                return null;
            }
        }

        if (currentQuestion.type === 'text') {
            return (
                <div className=''>
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
            <div className=' p-10'>
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
            {showVideos ? (
                renderVideos()
            ) : (
                <>
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
                        {currentStep < questions.length - 1 ? (
                            <button
                                className={`p-2 bg-blue-500 text-white rounded-md ${!userSelections[questions[currentStep].id] ? 'cursor-not-allowed opacity-50' : ''}`}
                                onClick={handleNext}
                                disabled={!userSelections[questions[currentStep].id]}
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                className="p-2 bg-green-500 text-white rounded-md"
                                onClick={handleSubmit}
                            >
                                Submit Test
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};
export default AptitudeTest


