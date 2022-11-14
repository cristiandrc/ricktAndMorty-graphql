import React from "react";
import "./style.scss";

interface Props {
  children: React.ReactNode;
}

export const CardsContainer = ({ children }: Props) => {
  return <section className="cards-container">{children}</section>;
};
