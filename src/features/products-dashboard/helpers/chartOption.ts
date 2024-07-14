import { Category, Product } from "../types";
import { capitalize } from "./string";

const getCategoryOptions = (categories: Category[]) => {
    const options: Highcharts.Options = {
        chart: {
            type: "pie",
            width: 600, // Set the desired width here
        },
        title: {
            text: "Categories",
        },
        series: [
            {
                type: "pie",
                data: categories.map((category) => ({
                    name: category.name,
                    y: 1,
                })),
            },
        ],
    }
    return options;
}

const getProductsOptions = (products: Product[]) => {
    const xAxisCategories = products?.map((product) => product.title);
    const data = products?.map((product) => product.price);
    const yAxisTitle = capitalize(products[0]?.category || "");
    const options: Highcharts.Options = {
        chart: {
            type: "column",
        },
        title: {
            text: "Column Bar Chart",
        },
        xAxis: {
            categories: xAxisCategories, // Dummy categories
        },
        yAxis: {
            title: {
                text: yAxisTitle,
            },
        },
        series: [
            {
                type: "column",
                data: data
            },
        ],
    };
    return options;
}

export { getCategoryOptions, getProductsOptions };