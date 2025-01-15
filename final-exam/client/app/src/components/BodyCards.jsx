import React from "react";
import { Col, Row } from "antd";

export const BodyCards = () => {
  return (
    <div className="new-section">
     <div style={{marginBottom: "1%"}}>
     <h1>Requirements to be Immigrants</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

     </div>
      <Row style={{gap: "40px", flexWrap:"wrap"}} >
        <Col  >
        <div className="card">
            <img src="https://preview.colorlib.com/theme/immigration/img/s1.jpg" alt="" />
            <div className="card-body">
                <div className="minibox">Azerbaycan</div>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            </div>
        </div>
        </Col>
        <Col className="coll" >
        <div className="card">
            <img src="https://preview.colorlib.com/theme/immigration/img/s1.jpg" alt="" />
            <div className="card-body">
                <div className="minibox">Azerbaycan</div>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            </div>
        </div>
        </Col>
        <Col  >
        <div className="card">
            <img src="https://preview.colorlib.com/theme/immigration/img/s1.jpg" alt="" />
            <div className="card-body">
                <div className="minibox">Azerbaycan</div>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            </div>
        </div>
        </Col>
        <Col className="coll" >
        <div className="card">
            <img src="https://preview.colorlib.com/theme/immigration/img/s1.jpg" alt="" />
            <div className="card-body">
                <div className="minibox">Azerbaycan</div>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            </div>
        </div>
        </Col>
      </Row>
    </div>
  );
};
