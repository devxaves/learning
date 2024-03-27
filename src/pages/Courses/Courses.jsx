import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Link } from 'react-router-dom';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Arts and Graphics',
        description: 'Interested about drawings, designs or are you an Artit Yourself? Join now to level up your skills and craete arts in your leisure time',
        foot: 'Rs. 500/- only',
        youtubeId: 'https://youtu.be/XewspIh58Qg?si=ErG51l9-yC2lf4o3'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Buisness and Market',
        description: 'Knowing abbout the Business and Market can help you take better decisions in the present times. Join to know hoe the Market works and Business grows.',
        foot: 'Rs. 600/- only'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Technology and Engineering',
        description: 'Technology helps you be par with this booming era of science and moderanisation. Know about the basics of engineering and upskill yourself',
        foot: 'Rs. 600/- only'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Education and Teaching',
        description: 'Want to share and spread your knowledge? A teacher can do so. Learn about the teaching skills and the modern education styles here',
        foot: 'Rs. 700/- only'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Health and Diseases',
        description: 'Doctors are not avaliable everywhere and you have to learn taking care of the health and doing first aid in times of need. Learn about the health and diseases here',
        foot: 'Rs. 500/- only'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Law and Governance',
        description: 'Being an Indian citizen we should know detail about all the laws and fundamental rights of a person. Learn about the Laws, Bills and Government acts here',
        foot: 'Rs. 600/- only'
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Music and dance',
        description: 'Do you have the interest and taste for our ancient tradition and styles of music and dance. Learn here and upskill your artistic skills to perform your heart out',
        foot: 'Rs. 500/- only'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'Sports and Yoga',
        description: 'Staying Fit and Strong is very much important. Learn about the various sports nad games and also get a yoga instructor to help you learn and stay happy and fit',
        foot: 'Rs. 800/- only'
    },
];

function Courses() {
    return (
      <div className='courses-page'>
          <header className='height-75'>
              <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                  <h1 className='text-center fw-semibold'>Courses</h1>
                  <p className='text-center w-75 mb-5'>Checkout our Diverse range of Courses and topics which covers everything you need in your life and career. Learn now and upskill yourself and the people around you</p>
              </div>
          </header>
  
          <div className='container py-5'>
              <div className='row g-4'>
                  {courses.map((course) => (
                      <div key={course.id} className='col-lg-6'>
                          <Link to={`${course.youtubeId}`} className="text-decoration-none text-reset">
                              <Card className='text-white shadow scale-hover-effect'>
                                  <Card.Img src={course.img} />
                                  <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                      <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                      <Card.Text className='text-center'>{course.description}</Card.Text>
                                      <div className='foots'>
                                          {course.foot}
                                      </div>
                                  </Card.ImgOverlay>
                              </Card>
                          </Link>
                      </div>
                  ))}
              </div>
          </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;