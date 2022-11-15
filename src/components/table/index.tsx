import { FC } from "react";
import { Wrapper } from "./table.styles";

type Props = {
  children: JSX.Element;
};

export const Table: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <table>{children}</table>
    </Wrapper>
  );
};
