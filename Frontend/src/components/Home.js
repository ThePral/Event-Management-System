import React, { useEffect } from 'react';
import './style/Home.css';
import { Link } from 'react-router-dom';


function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.getElementById('parallax');
      const rect = parallax.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        parallax.classList.add('visible');
        parallax.classList.remove('hidden');
      } else {
        parallax.classList.add('hidden');
        parallax.classList.remove('visible');
      }
    };

    document.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-body">
      <header className="home-header text-white py-3">
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

      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-none d-md-block">
              <img src="event-image.jpg" alt="Event Illustration" className="img-fluid" />
            </div>
            <div className="col-md-6 text-center text-md-start sage-text">
              <h1>Create Your Event</h1>
              <p>Managing meetings and participants often requires a dedicated organizer who can handle the necessary notifications and
                 meeting details. This process can be time-consuming and often depends on someone else.
                With our platform, you have the power to organize and manage your own meetings with ease.
                 Whether you're hosting or simply attending, you can stay in the loop on all upcoming sessions.
                  You can also discover public meetings and join in on those that pique your interest 👀.<br/>
                If your goal is to host a meeting, there's no better time than now to get started!</p>
              <button className="btn mt-3"> 
                 <Link to="/Create">Create</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="parallax hidden" id="parallax">
        {/* You Got This! */}
      </div>

      <section className="history py-5">
        <div className="container sage-text">
          <h2 className="text-center mb-4">"Our History"</h2>
          <div className="row">
            <div className="col-6 col-md-3 text-center mb-4">
              <div className="card p-3">
                <div className="image-container">
                  <img src="card-image.jpg" alt="Card" className="card-img-top mb-3 card-images" />
                  <div className="overlay">Spring Event</div>
                </div>
                <p>Event Management</p>
              </div>
            </div>
            <div className="col-6 col-md-3 text-center mb-4">
              <div className="card p-3">
                <div className="image-container">
                  <img src="card-image.jpg" alt="Card" className="card-img-top mb-3 card-images" />
                  <div className="overlay">Summer Event</div>
                </div>
                <p>Event Management</p>
              </div>
            </div>
            <div className="col-6 col-md-3 text-center mb-4">
              <div className="card p-3">
                <div className="image-container">
                  <img src="card-image.jpg" alt="Card" className="card-img-top mb-3 card-images" />
                  <div className="overlay">Fall Event</div>
                </div>
                <p>Event Management</p>
              </div>
            </div>
            <div className="col-6 col-md-3 text-center mb-4">
              <div className="card p-3">
                <div className="image-container">
                  <img src="card-image.jpg" alt="Card" className="card-img-top mb-3 card-images" />
                  <div className="overlay">Winter Event</div>
                </div>
                <p>Event Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

          <div>
             <h3><i className="fa fa-hourglass-half ">EMS</i></h3>
          </div>

          <div className="footer-links text-center text-md-start">
            <span className="d-block">
              <a className="a-link" href="https://www.instagram.com" target="_blank">
                <i className="fa fa-instagram"></i> Instagram
              </a>
            </span>
            <span className="d-block">
              <a className="a-link" href="https://www.github.com" target="_blank">
                <i className="fa fa-github"></i> Github
              </a>
            </span>
            <span className="d-block">
              <a className="a-link" href="https://www.twitter.com" target="_blank">
                <i className="fa fa-twitter"></i> X (Twitter)
              </a>
            </span>
          </div>

          <div className="footer-links text-center text-md-start">
            <span className="d-block">
              <a className="a-link" href="https://www.facebook.com" target="_blank">
                <i className="fa fa-facebook"></i> Facebook
              </a>
            </span>
            <span className="d-block">
              <a className="a-link" href="https://www.linkedin.com" target="_blank">
                <i className="fa fa-linkedin"></i> LinkedIn
              </a>
            </span>
            <span className="d-block">
              <a className="a-link" href="https://www.youtube.com" target="_blank">
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

export default Home;
