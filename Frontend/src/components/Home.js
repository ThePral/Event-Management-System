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
              <Link to="/our-team" className="nav-link text-white a-link">Our Team</Link>
            </li>
            <li className="nav-item">
              <Link to="/creating-now" className="nav-link text-white a-link">Creating Now</Link>
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
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat rem deserunt,
                 illo aperiam possimus harum corporis corrupti quo facere iste perferendis in molestiae blanditiis,
                  voluptas vel. Dolore, voluptatem? Perspiciatis excepturi soluta saepe vero porro.
                   Distinctio quidem fuga provident autem labore adipisci amet, eius ratione quisquam ipsa vitae
                    repudiandae exercitationem saepe earum alias! Harum sint dolorem quibusdam ad aut itaque voluptatem eaque soluta deleniti cum?
                     Aut tempore et impedit animi ut. Quia amet harum voluptatum dolorum aperiam dicta facilis!
                      Doloremque quas voluptas molestiae temporibus inventore! Facere veniam distinctio alias dicta asperiores
                       nam vero sed deserunt consectetur. A soluta ipsa assumenda amet.</p>
              <button className="btn mt-3">Create</button>
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

          <form className="footer-form d-flex mt-4 mt-md-0">
            <input type="email" className="form-control input" placeholder="Email" />
            <button className="btn">Send</button>
          </form>

          <div className="logo d-flex align-items-center">
            <img src="logo.png" alt="Logo" className="logo me-2" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
