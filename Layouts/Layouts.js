import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <div>{children}</div>
      </Container>
      <Footer />
    </>
  );
};

export default Layouts;
