import React, { useState } from 'react';

const AptitudeTest = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [userSelections, setUserSelections] = useState({});
    const [selectedFields, setSelectedFields] = useState([]);
    const [actualSteps, setActualSteps] = useState([0]); // To track non-skipped questions
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
            const newSelections = { ...userSelections, [questionId]: [...(userSelections[questionId] || []), option] };
            setUserSelections(newSelections);
            setSelectedFields([...new Set([...selectedFields, option])]);
        } else {
            setUserSelections({
                ...userSelections,
                [questionId]: option
            });
        }

        if (questions[currentStep + 1]) {
            updateStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (actualSteps.length > 1) {
            const previousStep = actualSteps[actualSteps.length - 2];
            setActualSteps(actualSteps.slice(0, -1));
            setCurrentStep(previousStep);
        }
    };

    const handleNext = () => {
        if (questions[currentStep + 1]) {
            updateStep(currentStep + 1);
        }
    };

    const updateStep = (nextStep) => {
        const nextQuestion = questions[nextStep];

        // Skip dependent questions if condition isn't met
        if (nextQuestion.dependsOn) {
            const { id, option } = nextQuestion.dependsOn;
            if (!userSelections[id]?.includes(option)) {
                updateStep(nextStep + 1); // Skip this question and move to the next one
                return;
            }
        }

        setActualSteps([...actualSteps, nextStep]);
        setCurrentStep(nextStep);
    };

    const renderQuestion = () => {
        const currentQuestion = questions[currentStep];

        // Ensure currentQuestion is defined
        if (!currentQuestion) {
            return <div>Loading...</div>;
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
                {actualSteps.length > 1 && (
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
