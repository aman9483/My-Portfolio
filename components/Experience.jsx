import { FaCalendar } from 'react-icons/fa';
import React from 'react';
import Me from '../public//me2.svg'

const educationStyles = `
  /* Add a common style for the timeline items */
  .timeline-item {
    transition: background-color 0.5s ease-in-out;
  }

  /* Add styles for the hover effect */
  .timeline-item:hover {
    background-color: #3498db; /* Change the background color on hover to blue */
    border-left: 2px solid #2980b9;
    animation: borderAnimation 0.5s ease-in-out; /* Change the border color on hover */
  }

  /* Add an animation class for a smoother transition */
  .animate-border {
    animation: borderAnimation 0.5s ease-in-out;
  }

  /* Keyframes for the border animation */
  @keyframes borderAnimation {
    from {
      border-left-width: 0;
    }
    to {
      border-left-width: 2px;
    }
  }
`;

const Education = () => {
  return (


    <div className="education-container">
     
    
    <div className="row">
     
      <style>{educationStyles}</style>
      <div className="education padd-15">
        <h3 className="title">Education</h3>
        <div className="row">
          <div className="timeline-box padd-15">
            <div
              className="timeline shadow-dark"
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
              }}
            >
 
              <div
                className="timeline-item animated-fade-in animate-border"
                style={{
                  position: 'relative',
                  paddingLeft: '37px',
                  paddingBottom: '25px',
                  marginBottom: '20px',
                  borderLeft: '2px solid #302e4d',
                }}
              >
                <div
                  className="circle-dot"
                  style={{
                    position: 'absolute',
                    left: '-7px',
                    top: '-1px',
                    height: '17px',
                    width: '17px',
                    borderRadius: '50%',
                    border: '2px solid #302e4d',
                    zIndex: '2',
                  }}
                />
                <h6
                  className="timeline-date"
                  style={{
                    fontWeight: '400',
                    fontSize: '14px',
                    marginBottom: '8px',
                    color: '#504e70',
                  }}
                >
                  <FaCalendar /> 2021 to Present
                </h6>
                <h4
                  className="timeline-title"
                  style={{
                    fontWeight: '700',
                    fontSize: '18px',
                    marginBottom: '10px',
                    textTransform: 'capitalize',
                    color: '#302e4d',
                  }}
                >
                  Self Taught (Programming)
                </h4>
                <p
                  className="timeline-text"
                  style={{
                    fontSize: '16px',
                    lineHeight: '22px',
                    color: '#504e70',
                    margin: '0',
                  }}
                >
                  Since 2021, I started to learn Programming. I have learned HTML, CSS, JavaScript, ReactJs, ExpressJs, NodeJs, MongoDB, React Native. Now I'm Confident To contribute To The Team As A Web Developer and Mobile Developer.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div
                className="timeline-item animated-fade-in animate-border"
                style={{
                  position: 'relative',
                  paddingLeft: '37px',
                  paddingBottom: '25px',
                  marginBottom: '20px',
                  borderLeft: '2px solid #302e4d',
                }}
              >
                <div
                  className="circle-dot"
                  style={{
                    position: 'absolute',
                    left: '-7px',
                    top: '-1px',
                    height: '17px',
                    width: '17px',
                    borderRadius: '50%',
                    border: '2px solid #302e4d',
                    zIndex: '2',
                  }}
                />
                <h6
                  className="timeline-date"
                  style={{
                    fontWeight: '400',
                    fontSize: '14px',
                    marginBottom: '8px',
                    color: '#504e70',
                  }}
                >
                  <FaCalendar /> 2021 to 2024
                </h6>
                <h4
                  className="timeline-title"
                  style={{
                    fontWeight: '700',
                    fontSize: '18px',
                    marginBottom: '10px',
                    textTransform: 'capitalize',
                    color: '#302e4d',
                  }}
                >
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p
                  className="timeline-text"
                  style={{
                    fontSize: '16px',
                    lineHeight: '22px',
                    color: '#504e70',
                    margin: '0',
                  }}
                >
                  Pursued a Bachelors degree in Computer Applications. Acquired in-depth knowledge of programming languages such as JavaScript, C++, Data Structures And Algorithms, and gained hands-on experience in software development. Engaged in projects that enhanced problem-solving and analytical skills.
                </p>
              </div>

              {/* Timeline Item 3 */}
              <div
                className="timeline-item animated-fade-in animate-border"
                style={{
                  position: 'relative',
                  paddingLeft: '37px',
                  paddingBottom: '25px',
                  marginBottom: '20px',
                  borderLeft: '2px solid #302e4d',
                }}
              >
                <div
                  className="circle-dot"
                  style={{
                    position: 'absolute',
                    left: '-7px',
                    top: '-1px',
                    height: '17px',
                    width: '17px',
                    borderRadius: '50%',
                    border: '2px solid #302e4d',
                    zIndex: '2',
                  }}
                />
                <h6
                  className="timeline-date"
                  style={{
                    fontWeight: '400',
                    fontSize: '14px',
                    marginBottom: '8px',
                    color: '#504e70',
                  }}
                >
                  <FaCalendar /> 2020 to 2021
                </h6>
                <h4
                  className="timeline-title"
                  style={{
                    fontWeight: '700',
                    fontSize: '18px',
                    marginBottom: '10px',
                    textTransform: 'capitalize',
                    color: '#302e4d',
                  }}
                >
                  Higher Secondary Education
                </h4>
                <p
                  className="timeline-text"
                  style={{
                    fontSize: '16px',
                    lineHeight: '22px',
                    color: '#504e70',
                    margin: '0',
                  }}
                >
                  Successfully completed my 12th-grade education with a specialization in Science. Excelled in subjects such as PCM. Prepared for college and explored areas of computer science during this period.
                </p>
              </div>

              {/* Timeline Item 4 */}
              <div
                className="timeline-item animated-fade-in animate-border"
                style={{
                  position: 'relative',
                  paddingLeft: '37px',
                  paddingBottom: '25px',
                  marginBottom: '20px',
                  borderLeft: '2px solid #302e4d',
                }}
              >
                <div
                  className="circle-dot"
                  style={{
                    position: 'absolute',
                    left: '-7px',
                    top: '-1px',
                    height: '17px',
                    width: '17px',
                    borderRadius: '50%',
                    border: '2px solid #302e4d',
                    zIndex: '2',
                  }}
                />
                <h6
                  className="timeline-date"
                  style={{
                    fontWeight: '400',
                    fontSize: '14px',
                    marginBottom: '8px',
                    color: '#504e70',
                  }}
                >
                  <FaCalendar /> 2017 to 2018
                </h6>
                <h4
                  className="timeline-title"
                  style={{
                    fontWeight: '700',
                    fontSize: '18px',
                    marginBottom: '10px',
                    textTransform: 'capitalize',
                    color: '#302e4d',
                  }}
                >
                  High School
                </h4>
                <p
                  className="timeline-text"
                  style={{
                    fontSize: '16px',
                    lineHeight: '22px',
                    color: '#504e70',
                    margin: '0',
                  }}
                >
                  Completed my 10th-grade education with a focus on science and mathematics. Developed a keen interest in computer science during this period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>

   

    
    </div>
  );
};

export default Education;
