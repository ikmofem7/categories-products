import { useEffect, useReducer } from "react";
import { Product } from "../../types";

type State = {
    products: Product[];
    isLoading: boolean;
    errorMessage?: string;
};

const initialState: State = {
    products: [],
    isLoading: false,
};

type Action =
    | {
        type: "FETCH_PRODUCTS";
    }
    | { type: "FETCH_PRODUCTS_SUCCESS"; payload: Product[] }
    | { type: "FETCH_PRODUCTS_ERROR"; payload: string };

const reducer = (prevState: State, action: Action): State => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                errorMessage: "",
                isLoading: true,
                products: [],
            };
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                errorMessage: "",
                products: action?.payload,
                isLoading: false,
            };
        case "FETCH_PRODUCTS_ERROR":
            return {
                isLoading: false,
                products: [],
                errorMessage: action?.payload,
            };
        default:
            return prevState;
    }
};
const useProducts = (categorySlug?: string | null) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchProducts = async (categorySlug?: string | null) => {
        try {
            dispatch({ type: "FETCH_PRODUCTS" });
            const response = await fetch(
                `https://dummyjson.com/products/category/${categorySlug}`
            );
            const jsonResponse = await response.json();
            const payload = jsonResponse?.products;
            dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload });
        } catch (error) {
            console.log({ error });
            if (error instanceof Error) {
                dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: error.message });
            } else {
                dispatch({
                    type: "FETCH_PRODUCTS_ERROR",
                    payload: "An unknown error occurred.",
                });
            }
        }
    };
    useEffect(() => {
        fetchProducts(categorySlug);
    }, [categorySlug]);

    return { ...state };
};
export { useProducts };
