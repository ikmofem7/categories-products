import { Layout } from "../components/Layout";
import { Button, Grid } from "@mui/material";
import { useCategories, useProducts } from "../hooks";
import { CategorySelect, Main, ProductsSelect } from "../components";
import { useMemo, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import { StyledFilterContainer, StyledTitleContainer } from "../styles";

const ProductDashboard = () => {
  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { products } = useProducts(selectedCategory);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [runReport, setRunReport] = useState(false);

  const handleCategoryChange = (event: SelectChangeEvent<unknown>) => {
    const categorySlug = event?.target?.value as string;
    setSelectedCategory(categorySlug);
    setRunReport(false);
  };

  const handleProductChange = (event: SelectChangeEvent<unknown>) => {
    const productSlug = event?.target?.value as string;
    setSelectedProducts([...productSlug]);
  };

  const handleClear = () => {
    setSelectedCategory(null);
    setSelectedProducts([]);
  };

  const handleRunReport = () => {
    setRunReport(true);
  };

  const filteredProducts = useMemo(() => {
    return runReport
      ? selectedProducts.length === 0
        ? products
        : products.filter((product) =>
            selectedProducts.includes(product.id.toString())
          )
      : [];
  }, [runReport, selectedProducts, products]);

  return (
    <Layout>
      <Grid item xs={12} md={3}>
        <StyledFilterContainer>
          <div>
          <StyledTitleContainer>
            <h2>Filters</h2>
            <Button onClick={handleClear}>Clear</Button>
          </StyledTitleContainer>
          <CategorySelect
            onChange={handleCategoryChange}
            categories={categories}
            value={selectedCategory}
          />
          <ProductsSelect
            products={products}
            disabled={!selectedCategory}
            value={selectedProducts}
            onChange={handleProductChange}
          />
          </div>
         
          <Button
            variant="contained"
            fullWidth
            onClick={handleRunReport}
            disabled={!selectedCategory}
          >
            Run Report
          </Button>
        </StyledFilterContainer>
      </Grid>
      <Grid item xs={12} md={9}>
        <section>
          <Main categories={categories} products={filteredProducts} />
        </section>
      </Grid>
    </Layout>
  );
};

export { ProductDashboard };
