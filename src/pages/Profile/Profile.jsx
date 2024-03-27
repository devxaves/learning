import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import { Container } from "react-bootstrap";
import img1 from '../../utils/images/about-page-header.jpg'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div className="header">
          {/* Place your header image here */}
          <img
            src={img1}
            alt="Header Image"
            className="header-img"
          />
        </div>
        <div className="section">
          <div className="user-details-container">
            <h1>PROFILE</h1>
            <img
              src={user.picture}
              alt={user.name}
              className="user-img"
              height={200}
              width={200}
            />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
