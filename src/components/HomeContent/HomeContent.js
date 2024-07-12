import { useEffect, useState } from "react";
import "./HomeContent.css";

export default function HomeContent() {
  const [blobX, setBlobX] = useState(-200);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      // Perform actions based on screen size
      if (screenWidth > 1200) {
        setBlobX(-500);
      } else if (screenWidth > 991) {
        setBlobX(-450);
      } else if (screenWidth > 767) {
        setBlobX(-450);
      } else if (screenWidth > 567) {
        setBlobX(-320);
      } else {
        setBlobX(-200);
      }
    }

    // Call handleResize when the component mounts
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div
          style={{
            position: "relative",
            height: "100vh",
            backgroundColor: "#f0f0f0",
          }}
        >
          <div
            style={{
              zIndex: 1,
              position: "relative",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div style={{ marginTop: "5rem" }}>
              <h1 className="main-heading">Welcome to Ewabey</h1>
              <p className="main-para">Where ideas become success stories.</p>
              <div className="typing-slider main-para">
                We provides
                <div className="p-text"> customized e-commerce solutions.</div>
                <div className="p-text"> cutting-edge software services.</div>
                <div className="p-text"> responsive website designs.</div>
              </div>
            </div>
          </div>
          <div className="wave1">
            <svg
              data-name="Layer 1"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            height: "100vh",
            backgroundColor: "#202731",
            color: "white",
          }}
        >
          <div
            style={{
              zIndex: 1,
              position: "relative",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div style={{ marginTop: "5rem" }}>
              <h2 className="section-heading">
                Why you need a website for your business?
              </h2>
              <p className="section-para">
                Entering the digital era, having a website for your business is
                essential in navigating the digital economy. It's your
                storefront in the online world, bolstering credibility,
                attracting customers, and facilitating engagement. Showcase your
                offerings effectively and stay competitive in the digital
                landscape.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            height: "100vh",
            backgroundColor: "#dd3f31",
            color: "white",
          }}
        >
          <div
            style={{
              zIndex: 1,
              position: "relative",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div style={{ marginTop: "5rem" }}>
              <h2 className="section-heading">Why to choose Ewabey?</h2>
              <div className="bullet-para" style={{ textAlign: "left" }}>
                <ul>
                  <li>
                    <strong>Tailored web solutions: </strong>Customized to meet
                    your specific business needs.
                  </li>
                  <li>
                    <strong>Expertise in the digital era: </strong>Equipped to
                    navigate and excel in the digital economy.
                  </li>
                  <li>
                    <strong>Innovative approach: </strong>Utilizing cutting-edge
                    technologies, including robust cybersecurity measures, to
                    ensure data protection.
                  </li>
                  <li>
                    <strong>Proven track record: </strong>Demonstrated success
                    in delivering secure and reliable solutions for clients.
                  </li>
                  <li>
                    <strong>Expertise in the digital era: </strong>Equipped to
                    navigate and excel in the digital economy.
                  </li>
                  <li>
                    <strong>Customer-centric focus: </strong>Prioritizing client
                    satisfaction and long-term relationships, with a strong
                    emphasis on cybersecurity.
                  </li>
                  <li>
                    <strong>Responsive support: </strong>Dedicated team
                    available to assist and address any cybersecurity concerns,
                    ensuring a proactive approach to security.
                  </li>
                  <li>
                    <strong>Transparent communication: </strong>Open and
                    transparent communication throughout the project lifecycle,
                    including regular updates.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="wave2">
            <svg
              data-name="Layer 1"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="spacer layer1"></div>
        <div
          style={{
            position: "relative",
            height: "100vh",
            backgroundColor: "#202731",
            color: "white",
          }}
        >
          <div
            style={{
              zIndex: 1,
              position: "relative",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div style={{ marginTop: "5rem" }}>
              <h2 className="section-heading">Project lifecycle stages</h2>
              <div className="bullet-para" style={{ textAlign: "left" }}>
                <ol>
                  <li>
                    <strong>Discovery and Planning: </strong>Initial
                    consultation to understand the client's needs and
                    objectives.
                  </li>
                  <li>
                    <strong>Design: </strong>Finalize the design elements,
                    including layout, color scheme, and branding.
                  </li>
                  <li>
                    <strong>Development: </strong>Develop backend functionality,
                    database integration, and any required features.
                  </li>
                  <li>
                    <strong>Integration: </strong>Integration of all backend and
                    frontend services.
                  </li>
                  <li>
                    <strong>Testing: </strong>Testing of edge cases, security
                    vulnerabilities, and SEO.
                  </li>
                  <li>
                    <strong>Deployment: </strong>Deploy the website or
                    application to the production environment.
                  </li>
                  <li>
                    <strong>Maintenance and Support: </strong>Monitor
                    performance and address any issues or bugs that arise
                    post-launch.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer layer2 flip"></div>
        <div
          style={{
            position: "relative",
            height: "100vh",
            backgroundColor: "#ff0066",
            color: "white",
          }}
        >
          <div
            style={{
              zIndex: 1,
              position: "relative",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div style={{ marginTop: "5rem" }}>
              <h2 className="section-heading">So, what are you waiting for?</h2>
              <p className="section-para">
                Create a project from the "Let's build" section to get a free
                consultation for your project. Our executive will reach out to
                you within 24hrs.
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                zIndex: -1,
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="svg-container"
            >
              <svg
                id="visual"
                viewBox={`${blobX} -180 960 300`}
                width="960"
                height="300"
                version="1.1"
              >
                <path
                  id="blob1"
                  d="M79.3 -74.8C100.6 -58 114.3 -29 108.7 -5.7C103 17.7 78 35.4 56.7 60.4C35.4 85.4 17.7 117.7 -3.5 121.2C-24.7 124.7 -49.5 99.5 -70.7 74.5C-91.8 49.5 -109.4 24.7 -110.2 -0.8C-111.1 -26.4 -95.1 -52.8 -74 -69.6C-52.8 -86.5 -26.4 -93.7 1.3 -95C29 -96.3 58 -91.6 79.3 -74.8"
                  fill="#BB004B"
                ></path>
                <path
                  visibility="hidden"
                  id="blob2"
                  d="M77.7 -75.6C96.1 -59.4 103 -29.7 104.4 1.4C105.9 32.5 101.7 65.1 83.4 79.6C65.1 94.1 32.5 90.5 -1.4 91.9C-35.4 93.4 -70.7 99.7 -84.5 85.2C-98.4 70.7 -90.7 35.4 -81.9 8.8C-73 -17.7 -63 -35.4 -49.2 -51.5C-35.4 -67.7 -17.7 -82.3 6 -88.4C29.7 -94.4 59.4 -91.7 77.7 -75.6"
                  fill="#BB004B"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="spacer layer2"></div>
        <div
          style={{
            position: "relative",
            height: "50vh",
            backgroundColor: "#202731",
            color: "white",
          }}
        >
          <div
            style={{
              zIndex: 1,
              position: "relative",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div style={{ marginTop: "5rem" }}>
              <h2 className="section-heading">Thank You</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
