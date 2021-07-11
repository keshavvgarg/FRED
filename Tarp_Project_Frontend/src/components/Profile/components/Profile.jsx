import React,{useEffect} from "react";
import users from "./users";
import UserProfile from "./UserProfile";
import "../styles.css";
import {API} from '../../../ApiSchema.js'


function Profile(props) {
  console.log(props.location);
  const users = props.location.state.userData.Data[0].userData;
  const keyvar = props.location.state.userData.Data[0].accessToken;
  console.log("user info in profile = ",users); 
  console.log("Auth key in profle: ", keyvar); 

    return (
    <UserProfile
      id = {users._id}
      email={users.email}
      name={users.fullName}
      dateJoined={users.signUpDate.substring(0, 10)}
      selfDescription={users.selfDescription ? users.selfDescription  : "NA"}
      reputation={users.reputation}
      linkedin={users.linkedin ? users.linkedin : "NA"}
      github={users.github ? users.github : "NA"}
      stackoverflow={users.stackoverflow ? users.stackoverflow : "NA"}
      authKey = {keyvar ? keyvar : "NA"}
      imgURL={users.profileImg ? "/images/" + users.profileImg.substring(15) : "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"}
    />
  );
}

export default Profile;
