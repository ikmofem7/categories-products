import { Select } from "@mui/material";
import styled from "styled-components";

const StyledFilterContainer = styled.aside`
  height: 100%;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledSelect = styled(Select)`
  margin-bottom: 1rem;
  height: 3rem;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { StyledFilterContainer, StyledSelect, StyledTitleContainer };
