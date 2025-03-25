import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

// Import images
import AmazonClone from "../../assets/img/Amazon-Clone.png";
import NetflixClone from "../../assets/img/Netflix-Clone.png";
import AppleClone from "../../assets/img/Apple-Clone.png";
import RentMaster from "../../assets/img/RentMaster.png";
import IronPulse from "../../assets/img/IronPulse.jpg";
import EcoJustice from "../../assets/img/EcoJustice5b4.jpg";

const meta = {
  title: "Fraol",
  description:
    "I’m Fraol Demisse React _ Full stack developer,currently living in Addis Ababa, Ethiopia. I am a student at the Unity University, studying Computer Science.",
};

const dataportfolio = [
  {
    img: RentMaster,
    description: "Property Management made with React and Nodejs.",
    link: "https://rentmaster.markethubet.com/",
  },
  {
    img: AmazonClone,
    description: "Amazon Clone made with React, Redux, Firebase, and Stripe.",
    link: "https://clonezon.netlify.app/",
  },
  {
    img: NetflixClone,
    description: "Netflix Clone made with React, Redux, and Firebase.",
    link: "https://fraol-d.github.io/Netflix-Clone/",
  },
  {
    img: AppleClone,
    description: "Apple Clone made with React and Redux.",
    link: "https://clonapple.netlify.app/",
  },
  
];

const datauiux = [
  {
    img: IronPulse,
  },
  {
    img: EcoJustice,
  }
  
];

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div
                key={i}
                className="po_item"
                style={{ backgroundImage: `url(${data.img})` }}
              >
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> UI/UX Design </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {datauiux.map((data, i) => {
            return (
              <div
                key={i}
                className="po_item"
                style={{ backgroundImage: `url(${data.img})` }}
              ></div>
            );
          })}
        </div>
        <br />
      </Container>
    </HelmetProvider>
  );
};
