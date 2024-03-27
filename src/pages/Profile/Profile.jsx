import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import { Container } from "react-bootstrap";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    
    
    isAuthenticated && (
      <>
      <section className="section"></section>
      
        <div className="user-details-container">
          <img
            src={user.picture}
            alt={user.name}
            className="user-img"
            height={200}
            width={200}
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <div className="container1">
            <div class="row">
          
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
            
              <div class="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                
                <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
              </div>
              
              <div class="single_advisor_details_info">
                <h6>Samantha Sarah</h6>
                <p class="designation">Founder &amp; CEO</p>
              </div>
            </div>
            </div>
          </div>
          </div>
        
      </div>
        </>
    )
  );
};

export default Profile;
