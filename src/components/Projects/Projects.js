import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/instagram-app.jpg";
import emotion from "../../Assets/Projects/adventue_production.jpg";
import editor from "../../Assets/Projects/vehical_emision.png";
import chatify from "../../Assets/Projects/online_food_order.jpg";
import suicide from "../../Assets/Projects/Insurance.jpg";
import bitsOfCode from "../../Assets/Projects/gas_sensor.jpg";
import tour from "../../Assets/Projects/tourism.jpg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Online Food Order"
              description="An online food ordering system allows customers to order food online for delivery from restaurant.An intuitive interface that makes it easy to browse and order food.Real-time updates on the status of an order and when itr will be delivered.
              Online payment options for convenience."
              ghLink="https://github.com/sakshishindegit/AngularFoodStore"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Adventure Production"
              description=""
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://www.addventureproductions.com"     
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="VP Associates"
              description=""
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://vpassociates.net" 
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Public Complain System (traffic Module)"
              description="Using iot concepts created a prototype with mq Gas sensors series and arduno to detect harmful emission from vehicles."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Vehical Emission Detection,Monitoring And Control"
              description="Created a web portal where public can upload a picture of traffic rule violation by simply clicking picture with their phone"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="InstaMe App ( Instagram Clone App)"
              description="During my certifiction course I have done project on android application called InstaMe app (instagram clone app).This app allows users to
              share photos and vedios, and interact with each other."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tour}
              isBlog={false}
              title="Tourism Websites"
              description=""
              ghLink="https://github.com/sakshishindegit/tour"
              // demoLink="https://blogs.soumya-jit.tech/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
