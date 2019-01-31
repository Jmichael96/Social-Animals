import React from "react";
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn} from "mdbreact";

const Search = () => {
  return (
    <MDBCol md="6">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
        <MDBBtn color="unique" rounded size="sm" type="submit" className="mr-auto">Search</MDBBtn>
      </MDBFormInline>
    </MDBCol>
  );
}

export default Search;