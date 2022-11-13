import React from "react";
import "./style.scss";

interface Props {
  children: React.ReactNode;
}

const CardsContainer = ({ children }: Props) => {
  return <section className="cards-container">{children}</section>;
};

export default CardsContainer;
