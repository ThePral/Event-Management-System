import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/OurTeam.css';
import { Link } from 'react-router-dom';


function OurTeam() {
    return (
        <div className="Team-body">

            <header className="Team-header text-white py-3">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo d-flex align-items-center">
                    <img src="logo.png" alt="Logo" className="logo me-2" />
                    </div>
                    <nav>
                    <ul className="nav justify-content-center w-100">
                        <li className="nav-item">
                        <Link to="/" className="nav-link text-white a-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/OurTeam" className="nav-link text-white a-link">Our Team</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/CreateEvent" className="nav-link text-white a-link">Create Now</Link>
                        </li>
                    </ul>
                    </nav>
                    <div className="login-icon">
                    <Link className="a-link" to="/login">
                        <i className="fa fa-user fs-1"></i>
                    </Link>
                    </div>
                </div>
            </header>


            <main className="Team-container my-5">
                <section className="row mb-5 align-items-center">
                    <div className="col-md-6">
                        <img src="porpoorak.jpg" alt="backend" className="img-fluid rounded shadow" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="sage-text">Person 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Person 1 is responsible for backend development and database management in our team. They bring expertise in Node.js, Python, and cloud computing.
                        </p>
                    </div>
                </section>

                <section className="row mb-5 align-items-center">
                    <div className="col-md-6 order-md-2">
                        <img src="asalak.jpg" alt="frontend" className="img-fluid rounded shadow" />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <h3 className="sage-text">Person 2</h3>
                        <p>
                        Our project, Event Management, is an innovative platform designed to manage online and offline meetings effortlessly. It’s part of our fifth-semester university project, and I’ve been responsible for the front-end development of this ambitious endeavor. 🎯

The journey started on Figma, where I translated our ideas into a user-friendly and visually appealing UI/UX design. Collaborating closely with the back-end team, we polished these designs, ironing out bugs 🐛 and fine-tuning features. For the interface, I chose soft, calming colors 🌈 that not only protect users’ eyes 👀 but also create a sense of peace—a necessity when managing chaotic schedules! 📅

The development phase was where the magic (and a little chaos) happened. ✨ Using HTML, CSS, Bootstrap, and React, I brought the designs to life. For icons, I relied on resources like Font Awesome, because let’s be honest, custom icon design might have pushed us into another semester! 😅

Whenever challenges popped up—and they did more often than I’d like to admit—I turned to trusty sources like W3Schools, GeeksforGeeks, Bootstrap, and of course, a sprinkle of AI assistance 🤖. These tools (and a lot of coffee ☕) became my partners in crime.

Despite the stress of exams 📚 and the ever-looming deadlines for this semester’s projects, our team stayed resilient 💪. We faced a rollercoaster 🎢 of ups and downs but came out stronger and even surprised ourselves with the final result. It’s safe to say that this experience taught us more than just coding—it taught us teamwork, patience, and the fine art of debugging at 2 AM with snacks in hand. 🍿

In the end, seeing our ideas evolve into a functional platform was incredibly rewarding. 🏆 And while the project might be over, I’ll forever remember this journey as a blend of hard work, learning, and just a dash of "How on earth do I fix this bug?" 🔧



                        </p>
                    </div>
                </section>

                <section className="row align-items-center">
                    <div className="col-md-6">
                        <img src="project.png" alt="Project" className="img-fluid rounded shadow" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="sage-text">Our Project</h3>
                        <p>
                            Our team is working on an event management platform that simplifies planning and collaboration. The platform is designed to provide an intuitive interface for users, powerful backend capabilities, and seamless integration with popular tools like Google Calendar and Zoom.
                        </p>
                    </div>
                </section>
            </main>

            <footer className="Team-footer">
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div>
                        <h3><i className="fa fa-hourglass-half ">EMS</i></h3>
                    </div>
                    <div className="footer-links text-center text-md-start">
                        <span className="d-block">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram"></i> Instagram
                            </a>
                        </span>
                        <span className="d-block">
                            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github"></i> Github
                            </a>
                        </span>
                        <span className="d-block">
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter"></i> X (Twitter)
                            </a>
                        </span>
                    </div>
                    <div className="footer-links text-center text-md-start">
                        <span className="d-block">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook"></i> Facebook
                            </a>
                        </span>
                        <span className="d-block">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin"></i> LinkedIn
                            </a>
                        </span>
                        <span className="d-block">
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-youtube"></i> YouTube
                            </a>
                        </span>
                    </div>
                
                    <div className="logo d-flex align-items-center">
                        <img src="logo.png" alt="Logo" className="logo me-2" />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default OurTeam;
