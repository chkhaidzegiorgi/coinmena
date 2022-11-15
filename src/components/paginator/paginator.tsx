import { FC } from "react";
import { Wrapper } from "./paginator.styles";

interface IProps {
  pageCount: number;
  onPageChange?(selectedItem: { selected: number }): void;
}

export const Paginator: FC<IProps> = ({ pageCount, onPageChange }) => {
  return <Wrapper pageCount={pageCount} onPageChange={onPageChange} />;
};
