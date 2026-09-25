import React from 'react'
import roy from "./assets/roy.jpg"
import card1 from "./assets/saha.jpg"
import card2 from "./assets/roy.jpg"
import card3 from "./assets/kidbook.jpg"



const App = () => {
  return (
    <div>
        <div>
      {/* <!-- NAV BAR --> */}
      <header>
        <div class="nav-link">
          <a target="_blank" href="./HTML PROJECT/classwork.html">
            Home
          </a>
        </div>
        <div class="nav-link">
          <a href="./HTML PROJECT/index.html">About</a>
        </div>
        <div class="nav-link">
          <a href="">Contact us</a>
        </div>
        <div class="nav-link">
          <a href="">Services</a>
        </div>
      </header>

      {/* <!-- HERO SECTION --> */}
      <div class="hero-section">
        <div class="overlay">
          <div class="text">
            <h1>Welcome to my Web page</h1>
            <p>
              learn fullstack development, UI/UX, Graphics Design and so on
              <div>
                <button>Get Started</button>
              </div>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- ABOUT SECTION --> */}
      <section class="about">
        <div class="about-text">
          <h3>Meet The Owner</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            maiores aliquid laborum, recusandae tenetur aspernatur nulla commodi
            debitis fugit laudantium cumque libero consequatur ex expedita!
          </p>
          <button>Know More</button>
        </div>
        <div class="img">
          <img src={roy} alt="pix" />
        </div>
      </section>
      {/* <!-- TESTIMONY --> */}
      <section id="testimonials">
        <h4>TESTIMONIALS</h4>
        <h2>What our students Says</h2>
        <div class="testimonials-container">
          <div class="card">
            <img
              src={card1} alt="image" />
            <h3>Modester Onyema</h3>
            <p>
              This academy Completely Changed my career. i leant web development
              from the scratch to finish and got my first job
            </p>
          </div>
          <div class="card">
            <img
              src={card2}  alt="image" />
            <h3>Faith Adigun</h3>
            <p>
              After i learnt web design here i got a good paying foreign Job
            </p>{" "}
          </div>
          <div class="card">
            <img
              src={card3}
              alt="image"
            />
            <h3>Micheal Chieki</h3>
            <p>
              After learning my programme here i had the oppotunity to meet with
              the president of the united state
            </p>{" "}
          </div>
        </div>
      </section>

      {/* <!-- CALL TO ACTION SECTION --> */}
      <section class="cta">
        <div class="cta-content">
          <h2>Ready To Start Your Learning Journey?</h2>
          <p>
            Join Us today and start learning practical digital skills that can
            transform your future.
          </p>
          <a href="#" class="cta-button">
            {" "}
            Get Started
          </a>
        </div>
      </section>

      {/* <!-- FOOTER --> */}

      <footer class="footer">
        <div class="footer-container">
          {/* ABOUT */}

          <div class="footer-box">
            <h2>Our Digital Skills Academy</h2>

            <p>
              Empowering students with practical digital skills for a better
              future.
            </p>
          </div>

          {/* QUICK LINKS */}

          <div class="footer-box">
            <h3>Quick Links</h3>

            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Courses</a>

            <a href="#">Contact</a>
          </div>

          {/* <!-- CONTACT --> */}

          <div class="footer-box">
            <h3>Contact Us</h3>

            <p>Email: info@example.com</p>

            <p>Phone: +234 800 000 0000</p>

            <p>Owerri, Imo State</p>
          </div>
        </div>

        {/* <!-- COPYRIGHT --> */}

        <div class="copyright">
          <p>© 2026 Our Digital Skills Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>

export default App
    </div>
  )
}

export default App
