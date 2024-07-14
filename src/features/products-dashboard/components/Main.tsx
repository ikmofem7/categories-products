import { FC } from "react";
import { Category, Product } from "../types";
import PieChart from "./PieChart";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { getCategoryOptions, getProductsOptions } from "../helpers";

type Props = {
  categories: Category[];
  products: Product[];
};

const Main: FC<Props> = (props) => {
  const { categories, products } = props;
  const categoryOptions = getCategoryOptions(categories);
  const productsOptions = getProductsOptions(products);
  if (products?.length) {
    return (
      <div>
        <h1>Products in selected categories</h1>
        <HighchartsReact highcharts={Highcharts} options={productsOptions} />
      </div>
    );
  }
  return (
    <div>
      <h1>Categories</h1> <PieChart options={categoryOptions} />
    </div>
  );
};

export { Main };
