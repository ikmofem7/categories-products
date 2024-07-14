import { capitalize, MenuItem, SelectProps } from "@mui/material";
import { StyledSelect } from "../styles";
import { Category } from "../types";

type Props = {
  categories: Category[];
} & SelectProps;

const CategorySelect = (props: Props) => {
  const { categories, value, onChange } = props;
  return (
    <StyledSelect value={value} onChange={onChange} displayEmpty fullWidth>
      {categories.map((category) => (
        <MenuItem key={category.slug} value={category.slug}>
          {capitalize(category.name)}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export { CategorySelect };
