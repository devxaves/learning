import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Academic Aspirations: The Heart of the University',
        description: 'Dive into the world of algorithms, software engineering, and artificial intelligence. Develop practical skills and shape the future of technology. Enroll today!'
    },
    {
        id: 2,
        img: [Blog3Img],
        title: 'Emerging Scholars: Celebrating the Graduates',
        description: 'Embark on a transformative journey with our diverse graduate programs. Gain specialized knowledge, explore cutting-edge research, and thrive with mentorship from industry experts. Whether it’s engineering, business, or the arts, our supportive community propels you toward success.'
    },
    {
        id: 3,
        img: [Blog4Img],
        title: 'Frames of Learning: University in Pictures',
        description: 'Unlock Your Potential: Explore Diverse Courses at Our University! From cutting-edge technology to timeless humanities, our courses empower you to learn, grow, and thrive. Enroll today and embark on a journey of knowledge!'
    },
    {
        id: 4,
        img: [Blog5Img],
        title: 'Collaborative Learning: Group Study Insights',
        description: 'Unlock the Power of Collective Intelligence: Our Group Study Insights Course fosters collaboration, critical thinking, and shared knowledge. Join a dynamic community of learners as you explore diverse subjects together. Enroll now and amplify your learning journey!'
    },
    {
        id: 5,
        img: [Blog8Img],
        title: 'Crafting Excellence: The Skilled Artisan Amidst Machinery',
        description: 'Explore manufacturing processes, automation, and design principles. Shape the future of industry with us!'
    },
    {
        id: 6,
        img: [Blog9Img],
        title: 'Academic Nexus: Capturing the Heart of the University',
        description: 'From humanities to cutting-edge sciences, our university empowers curious minds. Join us in shaping tomorrow! '
    }
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;