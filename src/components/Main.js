import PropTypes from 'prop-types'
import React from 'react'
import portrait from '../images/portrait.jpg'
//import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
//import profilepic from '../images/profilepic.jpg'
import sms from '../images/Sms.jpg'
import phone from '../images/Phone.jpg'
import drumpad from '../images/Drumpad.jpg'
import markdown from '../images/markdown.jpg'
import calc from '../images/Calc.jpg'
import AES from '../images/AES.jpg'
import htmlform from '../images/htmlform.png'
import { Container, Row, Image, Card, Button } from 'react-bootstrap'
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={portrait} alt="" />
          </span>
          <p>Hi, I am Cristian.</p>
          <p>
            Profesionally, I'm a junior developer dedicated to improve my coding
            skills, by creating or helping create great Software. Most of my
            work are course projects at Technical University of Denmark and 2BM,
            where I work as Software Developer. I have done work in software
            development, mobile app creation, front-end/back-end web,
            database/server management and video game development.
          </p>
          <p>
            I’m born and raised in Romania, but moved to Denmark in 2005. My
            passion towards everything computer-related started in 1999, while
            playing games like Mortal Kombat 3, Half-Life and Duke Nukem. I love
            lifting heavy things, stand-up comedy, music festivals and
            chocolate.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Work</h2>
          <div class="portfolio">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <img
                  class="img-responsive"
                  src={calc}
                  alt="simple calculator"
                />
                <div class="overlay">
                  <h2>Calculator</h2>
                  <a class="info" href="#">
                    Simple calculator made in React. This project is part of the
                    FreeCodeCamp Front-End Libraries certification.
                    <br />
                    <div class="buttons">
                      <button class="button">GitHub</button>
                      <button class="button">Web Page</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <img
                  class="img-responsive"
                  src={drumpad}
                  alt="simple calculator"
                />
                <div class="overlay">
                  <h2>Drumpad</h2>
                  <a class="info" href="#">
                    Simple drumpad made in React. This project is part of the
                    FreeCodeCamp Front-End Libraries certification.
                    <br />
                    <div class="buttons">
                      <button class="button">GitHub</button>
                      <button class="button">Web Page</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <img
                  class="img-responsive"
                  src={markdown}
                  alt="simple calculator"
                />
                <div class="overlay">
                  <h2>Markdown Editor</h2>
                  <a class="info" href="#">
                    Simple drumpad made in React. This project is part of the
                    FreeCodeCamp Front-End Libraries certification.
                    <br />
                    <div class="buttons">
                      <button class="button">GitHub</button>
                      <button class="button">Web Page</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <img class="img-responsive" src={sms} alt="simple calculator" />
                <div class="overlay">
                  <h2>Email2SMS</h2>
                  <a class="info" href="#">
                    Simple drumpad made in React. This project is part of the
                    FreeCodeCamp Front-End Libraries certification.
                    <br />
                    <div class="buttons">
                      <button class="button">Web Page</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <img
                  class="img-responsive"
                  src={phone}
                  alt="simple calculator"
                />
                <div class="overlay">
                  <h2>SMS Planner</h2>
                  <a class="info" href="#">
                    Simple drumpad made in React. This project is part of the
                    FreeCodeCamp Front-End Libraries certification.
                    <br />
                    <div class="buttons">
                      <button class="button">GitHub</button>
                      <button class="button">Web Page</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <img class="img-responsive" src={sms} alt="simple calculator" />
                <div class="overlay">
                  <h2>Image Search</h2>
                  <a class="info" href="#">
                    Simple drumpad made in React. This project is part of the
                    FreeCodeCamp Front-End Libraries certification.
                    <br />
                    <div class="buttons">
                      <button class="button">Web Page</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <img class="img-responsive" src={AES} alt="simple calculator" />
                <div class="overlay">
                  <h2>AES Encryption</h2>
                  <a class="info" href="#">
                    Simple drumpad made in React. This project is part of the
                    FreeCodeCamp Front-End Libraries certification.
                    <br />
                    <div class="buttons">
                      <button class="button">Web Page</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <img
                  class="img-responsive"
                  src={htmlform}
                  alt="simple calculator"
                />
                <div class="overlay">
                  <h2>HTML Form</h2>
                  <a class="info" href="#">
                    Simple drumpad made in React. This project is part of the
                    FreeCodeCamp Front-End Libraries certification.
                    <br />
                    <div class="buttons">
                      <button class="button">Web Page</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <img class="img-responsive" src={AES} alt="simple calculator" />
                <div class="overlay">
                  <h2>Tribute Page</h2>
                  <a class="info" href="#">
                    Simple drumpad made in React. This project is part of the
                    FreeCodeCamp Front-End Libraries certification.
                    <br />
                    <div class="buttons">
                      <button class="button">Web Page</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <img class="img-responsive" src={AES} alt="simple calculator" />
                <div class="overlay">
                  <h2>HTML Landing Page </h2>
                  <a class="info" href="#">
                    Simple drumpad made in React. This project is part of the
                    FreeCodeCamp Front-End Libraries certification.
                    <br />
                    <div class="buttons">
                      <button class="button">Web Page</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <img class="img-responsive" src={AES} alt="simple calculator" />
                <div class="overlay">
                  <h2>Landing Page in React </h2>
                  <a class="info" href="#">
                    Simple drumpad made in React. This project is part of the
                    FreeCodeCamp Front-End Libraries certification.
                    <br />
                    <div class="buttons">
                      <button class="button">Web Page</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <img class="img-responsive" src={AES} alt="simple calculator" />
                <div class="overlay">
                  <h2>Weather App </h2>
                  <a class="info" href="#">
                    Simple drumpad made in React. This project is part of the
                    FreeCodeCamp Front-End Libraries certification.
                    <br />
                    <div class="buttons">
                      <button class="button">Web Page</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a href="#" class="portfolio__item">
              <img src={sms} alt="" class="portfolio__img" />
            </a>

            <a href="#" class="portfolio__item">
              <img src={phone} alt="" class="portfolio__img" />
            </a>

            <a href="#" class="portfolio__item">
              <img src={markdown} alt="" class="portfolio__img" />
            </a>

            <a href="#" class="portfolio__item">
              <img src={drumpad} alt="" class="portfolio__img" />
            </a>

            <a href="#" class="portfolio__item">
              <img src={calc} alt="" class="portfolio__img" />
            </a>
          </div>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I’m born and raised in Romania, but moved to Denmark in 2005. My
            passion towards everything computer-related started in 1999, while
            playing games like Mortal Kombat 3, Half-Life and Duke Nukem. I love
            lifting heavy things, stand-up comedy, music festivals and
            chocolate.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Let's be internet BFFs</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/cristian-claudiu-sandu-021aaa101/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=1127580242"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/plsstopmakingfakeversace/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Slow1mo" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
