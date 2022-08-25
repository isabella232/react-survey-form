import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer>
      <Link to="/basic">
        <MDBBtn className="m-3">Basic</MDBBtn>
      </Link>
      <Link to="/multiple-choice">
        <MDBBtn className="m-3">Multiple choice</MDBBtn>
      </Link>
      <Link to="/card">
        <MDBBtn className="m-3">Survey within a card</MDBBtn>
      </Link>
      <Link to="/card-with-feedback">
        <MDBBtn className="m-3">Customer satisfaction survey</MDBBtn>
      </Link>
      <Link to="/modal">
        <MDBBtn className="m-3">Modal survey</MDBBtn>
      </Link>
      <Link to="/rating">
        <MDBBtn className="m-3">Rating survey</MDBBtn>
      </Link>
      <Link to="/scale">
        <MDBBtn className="m-3">Linear scale survey</MDBBtn>
      </Link>
      <Link to="/ranking">
        <MDBBtn className="m-3">Ranking survey</MDBBtn>
      </Link>
      <Link to="/range">
        <MDBBtn className="m-3">Range survey</MDBBtn>
      </Link>
    </MDBContainer>
  );
}
