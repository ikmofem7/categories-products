import { Container, Grid } from "@mui/material";
import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const StyledContainer = styled(Container)``;

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <StyledContainer>
      <Grid container>{children}</Grid>
    </StyledContainer>
  );
};

export { Layout };
