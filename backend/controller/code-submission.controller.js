const { GoogleGenAI } = require('@google/genai');

const submitCodeToAI = async (req, res) => {
    try {
        const AI = new GoogleGenAI({
            apiKey: process.env.gemini_API_KEY
        });

        const code = req.body?.code || '';

        const prompt = `
        You are a Senior Software Engineer working as an interviewer.

        Your responsibility is to review ONLY the submitted code.

        Use the programming question information to determine correctness.

        --------------------------------------------------------

        Question Title:
        ${code.questionTitle}
        Topic:
        ${code.topic}
        Difficulty:
        ${code.difficulty}
        Problem Description:
        ${code.description}
        Sample Input:
        ${code.sampleInput}
        Sample Output:
        ${code.sampleOutput}
        Expected Approach:
        ${code.expectedApproach}
        Constraints:
        ${code.constraints}
        Common Mistakes:
        ${code.commonMistakes}

        --------------------------------------------------------

        Candidate Code:
        ${code.userCode}

        --------------------------------------------------------

        Instructions:

        Evaluate the solution like a real coding interviewer.

        Consider:

        • Correctness
        • Edge cases
        • Readability
        • Naming
        • Time Complexity
        • Space Complexity
        • Best Practices
        • Performance
        • Interview quality

        Score from 0-100.

        If the code is already optimal,
        return the same code in betterSolution.

        If not,
        return a better optimized version.

        Return ONLY JSON.
        `;

        const response = await AI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "object",
                    properties: {
                        score: {
                            type: "number"
                        },
                        correctness: {
                            type: "string"
                        },
                        codeQuality: {
                            type: "string"
                        },
                        timeComplexity: {
                            type: "string"
                        },
                        spaceComplexity: {
                            type: "string"
                        },
                        mistakes: {
                            type: "array",
                            items: {
                                type: "string"
                            }
                        },
                        betterSolution: {
                            type: "string"
                        },
                        interviewExplanation: {
                            type: "string"
                        }
                    },

                    required: [
                        "score",
                        "correctness",
                        "codeQuality",
                        "timeComplexity",
                        "spaceComplexity",
                        "mistakes",
                        "betterSolution",
                        "interviewExplanation"
                    ]
                }
            }
        });
        console.log(response.text);
        // return JSON.parse(response.text);
        const result = JSON.parse(response.text);
        res.json(result);
    } catch (error) {
        console.error('Error submitting code to AI:', error);
        res.status(500).send({ error: 'Failed to analyze code.' });
    }
};

module.exports = {
    submitCodeToAI
};