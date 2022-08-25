import React from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBCol,
  MDBContainer,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Ranking() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <div class="mx-0 mx-sm-auto">
        <p className="fw-bold text-center">
          How likely if it that you would recommend MDB to a friend or
          colleague?
        </p>

        <MDBBtnGroup aria-label="Basic example" className="me-2">
          <MDBBtn color="light">0</MDBBtn>
          <MDBBtn color="light">2</MDBBtn>
          <MDBBtn color="light">3</MDBBtn>
          <MDBBtn color="light">4</MDBBtn>
          <MDBBtn color="light">5</MDBBtn>
          <MDBBtn color="light">6</MDBBtn>
          <MDBBtn color="light">7</MDBBtn>
          <MDBBtn color="light">8</MDBBtn>
          <MDBBtn color="light">9</MDBBtn>
          <MDBBtn color="light">10</MDBBtn>
        </MDBBtnGroup>
        <div className="text-end mt-3">
          <MDBBtn>Submit</MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}
