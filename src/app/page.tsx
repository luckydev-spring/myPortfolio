"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Setup footer functionality
    const setupFooter = () => {
      const pageHeight =
        (document.querySelector(".tm-site-header-container") as HTMLElement)
          ?.offsetHeight +
        (document.querySelector("footer") as HTMLElement)?.offsetHeight +
        100;
      const main = document.querySelector(".tm-main-content") as HTMLElement;

      if (window.innerHeight < pageHeight) {
        main?.classList.add("tm-footer-relative");
      } else {
        main?.classList.remove("tm-footer-relative");
      }
    };

    setupFooter();
    window.addEventListener("resize", setupFooter);

    // Update year in copyright
    const yearElement = document.querySelector(".tm-current-year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }

    return () => {
      window.removeEventListener("resize", setupFooter);
    };
  }, []);

  return (
    <>
      <div id="tm-bg"></div>
      <div id="tm-wrap">
        <div className="tm-main-content">
          <div className="container tm-site-header-container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 col-md-col-xl-6 mb-md-0 mb-sm-4 mb-4 tm-site-header-col">
                <div className="tm-site-header">
                  <h1 className="mb-4">Robert Fortune</h1>
                  <img
                    src="/img/underline.png"
                    className="img-fluid mb-4"
                    alt="underline"
                  />
                  <p>
                    Welcome to my portfolio. I am a software engineer with a
                    passion for building web applications.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="content">
                  <div className="grid">
                    <div className="grid__item" id="home-link">
                      <div className="product">
                        <div className="tm-nav-link">
                          <i className="fas fa-home fa-3x tm-nav-icon"></i>
                          <span className="tm-nav-text">Welcome</span>
                          <div className="product__bg"></div>
                        </div>
                        <div className="product__description">
                          <div className="row mb-3">
                            <div className="col-12">
                              <h2 className="tm-page-title">
                                Welcome to my Portfolio
                              </h2>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                              <img
                                src="/img/welcome-1.jpg"
                                className="img-fluid mb-3"
                                alt="welcome 1"
                              />
                              <p>
                                I am a software engineer with a passion for
                                building web applications.
                              </p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                              <p>
                                10 years of rich experience in web development
                                as a Front-end and Full-Stack developer.
                                <br />
                                <br />
                                ✅ Frontend Development -React, React Hooks,
                                Redux, Redux -Saga, Redux -Thunk -Next, Svelte,
                                Angular, Vue, jQuery, Flutter -Vanilla JS,
                                Typescript, HTML5, CSS3, D3 -Material -UI,
                                Bootstrap, Tailwind SASS, LESS -Webpack, Babel
                                -Jest, Mocha -Apollo GraphQL, TypeGraphQL
                                -Framer CMS
                                <br />
                                <br />✅ Backend Development -Node, Express,
                                Nest, Meteor, Typescript, ECMAScript(ES6+)
                                -GraphQL, RESTful API -Payload CMS -MongoDB,
                                PostgreSQL, MySQL, AWS DynamoDB, AWS RDS, Redis
                                -CI/CD, Github Action, CircleCI, Docker,
                                Jenkins, Kubernetes
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid__item" id="team-link">
                      <div className="product">
                        <div className="tm-nav-link">
                          <i className="fas fa-users fa-3x tm-nav-icon"></i>
                          <span className="tm-nav-text">About Me</span>
                          <div className="product__bg"></div>
                        </div>
                        <div className="product__description">
                          <div className="p-sm-4 p-2">
                            <div className="row mb-3">
                              <div className="col-12">
                                <h2 className="tm-page-title">Experience</h2>
                              </div>
                            </div>
                            <div className="row tm-reverse-sm">
                              <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <div className="experience-timeline">
                                  {/* Job 1 */}
                                  <div className="job-card">
                                    <div className="job-header">
                                      <div className="job-title">
                                        <h3>Full Stack Developer</h3>
                                        <span className="company">
                                          Upwork (Remote)
                                        </span>
                                      </div>
                                      <div className="job-period">
                                        <span className="period">
                                          04/2022 – 02/2023
                                        </span>
                                        <span className="type">
                                          Full-time Freelancer
                                        </span>
                                      </div>
                                    </div>
                                    <div className="job-content">
                                      <div className="achievements">
                                        <h4>Key Achievements:</h4>
                                        <ul>
                                          <li>
                                            Developed full-stack web
                                            applications for data processing,
                                            analysis, and visualization
                                          </li>
                                          <li>
                                            Integrated REST/SOAP APIs using
                                            Swagger and GraphQL for various
                                            services
                                          </li>
                                          <li>
                                            Implemented social media logins
                                            (Google, Azure), Stripe payments,
                                            and Slack integration
                                          </li>
                                          <li>
                                            Enhanced application security and
                                            Firebase DB interactions
                                          </li>
                                          <li>
                                            Spearheaded LAMP to MERN stack
                                            transition, reducing latency by 40%
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Job 2 */}
                                  <div className="job-card">
                                    <div className="job-header">
                                      <div className="job-title">
                                        <h3>
                                          Senior React Full Stack Developer
                                        </h3>
                                        <span className="company">
                                          Actagan, California, US
                                        </span>
                                      </div>
                                      <div className="job-period">
                                        <span className="period">
                                          04/2022 – 02/2023
                                        </span>
                                        <span className="type">
                                          Senior Position
                                        </span>
                                      </div>
                                    </div>
                                    <div className="job-content">
                                      <div className="achievements">
                                        <h4>Key Achievements:</h4>
                                        <ul>
                                          <li>
                                            Designed and created knowledge
                                            management platform using Node.js,
                                            Express.js, TypeScript, D3.js,
                                            React, and Redux
                                          </li>
                                          <li>
                                            Worked closely with development
                                            teams to establish best practices
                                            and testing methods
                                          </li>
                                          <li>
                                            Optimized complaint handling
                                            processes with efficient app-based
                                            solutions
                                          </li>
                                          <li>
                                            Increased database admin
                                            effectiveness by 20%
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Job 3 */}
                                  <div className="job-card">
                                    <div className="job-header">
                                      <div className="job-title">
                                        <h3>Web Developer</h3>
                                        <span className="company">
                                          Arhi Pro, Serbia
                                        </span>
                                      </div>
                                      <div className="job-period">
                                        <span className="period">
                                          01/2011 – 04/2022
                                        </span>
                                        <span className="type">
                                          10+ Years Experience
                                        </span>
                                      </div>
                                    </div>
                                    <div className="job-content">
                                      <div className="skills-section">
                                        <h4>Technical Expertise:</h4>
                                        <div className="skills-grid">
                                          <div className="skill-category">
                                            <h5>Frontend Development</h5>
                                            <div className="skill-tags">
                                              <span className="skill-tag">
                                                React
                                              </span>
                                              <span className="skill-tag">
                                                React Hooks
                                              </span>
                                              <span className="skill-tag">
                                                Redux
                                              </span>
                                              <span className="skill-tag">
                                                Next.js
                                              </span>
                                              <span className="skill-tag">
                                                Angular
                                              </span>
                                              <span className="skill-tag">
                                                Vue.js
                                              </span>
                                              <span className="skill-tag">
                                                TypeScript
                                              </span>
                                              <span className="skill-tag">
                                                HTML5
                                              </span>
                                              <span className="skill-tag">
                                                CSS3
                                              </span>
                                              <span className="skill-tag">
                                                SASS
                                              </span>
                                              <span className="skill-tag">
                                                Bootstrap
                                              </span>
                                              <span className="skill-tag">
                                                Tailwind
                                              </span>
                                            </div>
                                          </div>
                                          <div className="skill-category">
                                            <h5>Backend Development</h5>
                                            <div className="skill-tags">
                                              <span className="skill-tag">
                                                Node.js
                                              </span>
                                              <span className="skill-tag">
                                                Express.js
                                              </span>
                                              <span className="skill-tag">
                                                Nest.js
                                              </span>
                                              <span className="skill-tag">
                                                GraphQL
                                              </span>
                                              <span className="skill-tag">
                                                REST APIs
                                              </span>
                                              <span className="skill-tag">
                                                MongoDB
                                              </span>
                                              <span className="skill-tag">
                                                PostgreSQL
                                              </span>
                                              <span className="skill-tag">
                                                MySQL
                                              </span>
                                              <span className="skill-tag">
                                                Redis
                                              </span>
                                            </div>
                                          </div>
                                          <div className="skill-category">
                                            <h5>Cloud & DevOps</h5>
                                            <div className="skill-tags">
                                              <span className="skill-tag">
                                                AWS EC2
                                              </span>
                                              <span className="skill-tag">
                                                AWS S3
                                              </span>
                                              <span className="skill-tag">
                                                AWS Lambda
                                              </span>
                                              <span className="skill-tag">
                                                Docker
                                              </span>
                                              <span className="skill-tag">
                                                Kubernetes
                                              </span>
                                              <span className="skill-tag">
                                                CI/CD
                                              </span>
                                              <span className="skill-tag">
                                                GitHub Actions
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid__item">
                      <div className="product">
                        <div className="tm-nav-link">
                          <i className="fas fa-handshake fa-3x tm-nav-icon"></i>
                          <span className="tm-nav-text">My Work</span>
                          <div className="product__bg"></div>
                        </div>
                        <div className="product__description">
                          <div className="p-sm-4 p-2">
                            <div className="row mb-3">
                              <div className="col-12">
                                <h2 className="tm-page-title">My Work</h2>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-12">
                                <p>
                                  Here are some of my recent projects showcasing
                                  my skills in web development, from full-stack
                                  applications to modern UI/UX designs. Each
                                  project demonstrates different technologies
                                  and approaches to solving real-world problems.
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className="portfolio-gallery">
                                  <div className="portfolio-grid">
                                    <div className="portfolio-item">
                                      <div className="portfolio-image">
                                        <img
                                          src="/img/gallery-img-01-tn.png"
                                          alt="Project 1"
                                          className="portfolio-img"
                                        />
                                        <div className="portfolio-overlay">
                                          <div className="portfolio-info">
                                            <h4>E-Commerce Platform</h4>
                                            <p>
                                              FramerCMS • PayloadCMS • MongoDB
                                            </p>
                                            <div className="portfolio-links">
                                              <a
                                                href="https://groceryheirlooms.com/"
                                                className="portfolio-link"
                                              >
                                                <i className="fas fa-external-link-alt"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="portfolio-item">
                                      <div className="portfolio-image">
                                        <img
                                          src="/img/gallery-img-02-tn.png"
                                          alt="Project 2"
                                          className="portfolio-img"
                                        />
                                        <div className="portfolio-overlay">
                                          <div className="portfolio-info">
                                            <h4>Task Management App</h4>
                                            <p>
                                              Next.js • Express • PostgreSQL
                                            </p>
                                            <div className="portfolio-links">
                                              <a
                                                href="https://xrosspoint.vercel.app/"
                                                className="portfolio-link"
                                              >
                                                <i className="fas fa-external-link-alt"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="portfolio-item">
                                      <div className="portfolio-image">
                                        <img
                                          src="/img/gallery-img-03-tn.png"
                                          alt="Project 3"
                                          className="portfolio-img"
                                        />
                                        <div className="portfolio-overlay">
                                          <div className="portfolio-info">
                                            <h4>Social Media Dashboard</h4>
                                            <p>Angular • GraphQL • Redis</p>
                                            <div className="portfolio-links">
                                              <a
                                                href="https://dentalbee.ai/"
                                                className="portfolio-link"
                                              >
                                                <i className="fas fa-external-link-alt"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="portfolio-item">
                                      <div className="portfolio-image">
                                        <img
                                          src="/img/gallery-img-04-tn.png"
                                          alt="Project 4"
                                          className="portfolio-img"
                                        />
                                        <div className="portfolio-overlay">
                                          <div className="portfolio-info">
                                            <h4>Real-time Chat App</h4>
                                            <p>Next.js • Socket.io • MongoDB</p>
                                            <div className="portfolio-links">
                                              <a
                                                href="https://freetalkzone.com/"
                                                className="portfolio-link"
                                              >
                                                <i className="fas fa-external-link-alt"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid__item">
                      <div className="product">
                        <div className="tm-nav-link">
                          <i className="fas fa-comments fa-3x tm-nav-icon"></i>
                          <span className="tm-nav-text">Contact</span>
                          <div className="product__bg"></div>
                        </div>
                        <div className="product__description">
                          <div className="pt-sm-4 pb-sm-4 pl-sm-5 pr-sm-5 pt-2 pb-2 pl-3 pr-3">
                            <div className="row mb-3">
                              <div className="col-12">
                                <h2 className="tm-page-title">Contact Me</h2>
                              </div>
                            </div>
                            <div className="row mb-4">
                              <div className="col-12">
                                <p>
                                  If you have any questions or would like to
                                  discuss a project, please feel free to contact
                                  me.
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <form
                                  action="/"
                                  method="post"
                                  className="contact-form"
                                >
                                  <div className="row">
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6">
                                      <input
                                        type="text"
                                        id="contact_name"
                                        name="contact_name"
                                        className="form-control"
                                        placeholder="Name"
                                        required
                                      />
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 tm-col-email">
                                      <input
                                        type="email"
                                        id="contact_email"
                                        name="contact_email"
                                        className="form-control"
                                        placeholder="Email"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <textarea
                                      id="contact_message"
                                      name="contact_message"
                                      className="form-control"
                                      rows={9}
                                      placeholder="Message"
                                      required
                                    ></textarea>
                                  </div>
                                  <button
                                    type="submit"
                                    className="btn btn-primary tm-btn-submit"
                                  >
                                    Submit
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <p className="small tm-copyright-text">
              Copyright &copy; <span className="tm-current-year">2022</span>{" "}
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
