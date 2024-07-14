import { MenuItem, SelectProps } from "@mui/material";
import { StyledSelect } from "../styles";
import { Product } from "../types";
import { FC } from "react";

type Props = {
  products: Product[];
} & SelectProps;

const ProductsSelect: FC<Props> = (props) => {
  const { products, disabled, value = [], onChange } = props;

  return (
    <StyledSelect
      multiple
      disabled={disabled}
      value={value}
      onChange={onChange}
      fullWidth
    >
      {products?.map((product) => (
        <MenuItem key={product?.id?.toString()} value={product?.id?.toString()}>
          {product.title}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export { ProductsSelect };
