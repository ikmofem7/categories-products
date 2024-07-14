import { useEffect, useReducer, } from "react";
import { Category } from "../../types";

type State = {
    categories: Category[]
    isLoading: boolean
    errorMessage?: string
}

const initialState: State = {
    categories: [],
    isLoading: false
}

type Action = {
    type: "FETCH_CATEGORIES",
} | { type: "FETCH_CATEGORIES_SUCCESS", payload: Category[] } | { type: "FETCH_CATEGORIES_ERROR", payload: string }

const reducer = (prevState: State, action: Action): State => {
    switch (action.type) {
        case "FETCH_CATEGORIES":
            return {
                ...prevState,
                errorMessage: "",
                isLoading: true
            };
        case "FETCH_CATEGORIES_SUCCESS":
            return {
                ...prevState,
                errorMessage: "",
                categories: action?.payload,
                isLoading: false
            };
        case "FETCH_CATEGORIES_ERROR":
            return {
                ...prevState,
                isLoading: false,
                errorMessage: action?.payload
            };
        default:
            return prevState;
    }
};

const useCategories = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchCategories = async () => {
        try {
            dispatch({ type: "FETCH_CATEGORIES" });
            const response = await fetch("https://dummyjson.com/products/categories");
            const payload = await response.json();
            dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload });
        } catch (error) {
            console.log({ error });
            if (error instanceof Error) {
                dispatch({ type: "FETCH_CATEGORIES_ERROR", payload: error.message });
            } else {
                dispatch({ type: "FETCH_CATEGORIES_ERROR", payload: "An unknown error occurred." });
            }
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);

    return { ...state };
}

export { useCategories };