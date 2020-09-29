import React, { createContext, useMemo, useContext, useReducer, useEffect, useRef, useState } from 'react';
import { ApiContext } from './ApiContext';
import { Question } from "../types";

export type QuestionListContextProps = {
    error?: Error,
    getListAsync: () => Promise<Question[] | undefined>,
};

export const QuestionListContext = createContext<QuestionListContextProps>({
    error: null as unknown as Error || undefined,
    getListAsync: async () => (null as unknown) as Question[] | undefined,
});

enum ResponseStatus {
    success = 0,
}

export const QuestionListProvider: React.FC = ({ children }) => {
    const { listGetAsync } = useContext(ApiContext);
    const [error, setError] = useState<Error>();

    const globalContext = useMemo(() => ({
        error: error ? error : undefined,
        getListAsync: async (): Promise<Question[] | undefined> => {
            try {
                const listResponse = await listGetAsync();
                if (listResponse.response_code === ResponseStatus.success && listResponse.results) {
                    return listResponse.results;
                }
            } catch (error) {
                setError(error);
            }
            return undefined;
        },
    }), [listGetAsync, error, setError]);

    return (
        <QuestionListContext.Provider value={globalContext}>
            {children}
        </QuestionListContext.Provider>
    );
};