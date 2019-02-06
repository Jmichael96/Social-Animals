<<<<<<< HEAD
import React from "react";
import { MDBContainer } from "mdbreact";
import Posts from "../components/Profile/index";
import {
  MDBNavbar, MDBNavbarBrand, MDBCollapse,
} from "mdbreact";
import "./styles/user.css";

// displays user profile
const Profile = (props) => {
  let Profile;
  if (props.user === null) {
    Profile = (
      <div>
      </div>
    )
  } else if (props.user.username) {
    Profile = (
      <div>
        <MDBContainer>
          <MDBNavbar id="navbar" expand="md">
            <MDBNavbarBrand>
              <span >{props.user.avatar}</span>
            </MDBNavbarBrand>
            <MDBCollapse id="navbarCollapse3" navbar>
                <p to="#!"><strong className="font-weight-bold">Name:</strong> {props.user.firstname} {props.user.lastname}</p>
                <p to="#!" className="text-center"> <strong className="font-weight-bold"> My Favorite Animal is A:</strong> {props.user.favoriteAnimal}</p> 
            </MDBCollapse>
          </MDBNavbar>
        </MDBContainer>
        <Posts />
      </div>
    )
  } else if(props.user._id === props.post.users){
    Profile = (
      <div>

      </div>
    )
  }
  return (
    <div className="Header">
      {Profile}
    </div>
  )
}
export default Profile;

=======
// <<<<<<< HEAD
// <<<<<<< HEAD
// import React, { Component } from "react";
// import NavBarPage from "../components/HamNav/HamNav";
// import MapContainer from "../components/Map/index";
// import "./styles/home.css";

// class User extends Component {

//     render() {
//         return (
//             <div>
//                 <NavBarPage />
//                 <MapContainer />
//             </div>
//         );
//     }
// }

// export default User;
// =======
// // import React, { Component } from "react";
// // import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer } from "mdbreact";
// // // import NavBarPage from "../components/";
// =======
// import React, { Component } from "react";
// import { MDBCol, MDBRow,  MDBContainer } from "mdbreact";
// // import NavBarPage from "../components/";
// >>>>>>> master
// // import MapContainer from "../components/Maps/index";
// import Search from "../components/SearchBar/index";
// // import "./styles/home.css";

// class User extends Component {

//    render() {
//        return (
//            <div>
//                <MDBContainer>
//                    {/* <NavBarPage /> */}
//                    <MDBRow>
//                        <MDBCol>
//                            {/* <MapContainer /> */}
//                        </MDBCol>
//                        <MDBCol>
//                            <Search />
//                        </MDBCol>
//                    </MDBRow>
//                </MDBContainer>
//            </div>
//        );
//    }
// }

// <<<<<<< HEAD
// // export default User;
// >>>>>>> master
// =======
// export default User;
// >>>>>>> master
>>>>>>> 1f6bf8b1d645201e1ef7eb1f20a094326d23afae
