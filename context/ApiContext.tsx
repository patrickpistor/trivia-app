import React, { createContext } from "react";
import { QuestionListResponse } from "../types";

const BASE = "https://opentdb.com/api.php"
const AMOUNT = "?amount=10";

const DIFFICULTY = "&difficulty=hard";
const TYPE_BOOLEAN = "&type=boolean";

export type ApiContextProps = {
    listGetAsync: () => Promise<QuestionListResponse>;
};

export const ApiContext = createContext<ApiContextProps>({
    listGetAsync: async () => (null as unknown) as QuestionListResponse,
});

export const ApiProvider: React.FC = ({ children }) => {

    const listGetAsync = async () => {
        try {
            const response = await fetch(
                BASE + AMOUNT + DIFFICULTY + TYPE_BOOLEAN, {
                    headers: {
                        contentType: "application/json; charset=utf-8",
                    },
                }
            );
            const responseJson = await response.json();
            return responseJson;

        } catch (error) {
            return error;
        }
    };

    return (
        <ApiContext.Provider
            value={{
                listGetAsync,
            }}>
            {children}
        </ApiContext.Provider>
    );
};
