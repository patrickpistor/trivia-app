import React, { createContext, useMemo, useState } from 'react';
import { AnswerList } from '../types';

export type ScoreContextProps = {
    score: number,
    answerList: AnswerList[],
    addScore: () => void,
    clearScore: () => void,
    addAnswer: (question: string, answer: string, userAnswer: string) => void,
};

export const ScoreContext = createContext<ScoreContextProps>({
    score: null as unknown as number,
    answerList: null as unknown as AnswerList[],
    addScore: () => undefined,
    clearScore: () => undefined,
    addAnswer: () => undefined,
});

export const ScoreProvider: React.FC = ({ children }) => {
    const [score, setScore] = useState<number>(0);
    const [answerList, setAnswerList] = useState<AnswerList[]>([]);

    const globalContext = useMemo(() => ({
        score,
        answerList,
        addScore: () => {
            const incrementScore = score + 1;
            setScore(incrementScore);
        },
        clearScore: () => {
            setScore(0);
            setAnswerList([]);
        },
        addAnswer: (question: string, answer: string, userAnswer: string) => {
            const answerObj = {
                question,
                answer,
                userAnswer
            };
            setAnswerList([...answerList, answerObj]);
        },
    }), [score, setScore, answerList, setAnswerList]);

    return (
        <ScoreContext.Provider value={globalContext}>
            {children}
        </ScoreContext.Provider>
    );
};