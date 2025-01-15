import React from "react";
import { Col, Row } from "antd";

export const SonCard = () => {
  return (
    <div className="son">
      <h1 style={{fontWeight:"600", }}>Latest News from our Blog</h1>
      <p>Who are in extremely love with eco friendly system.</p>

      <Row style={{ gap: "40px", flexWrap: "wrap", justifyContent: "center" }}>
        <Col>
          <div className="card3">
            <img
              src="https://preview.colorlib.com/theme/immigration/img/b1.jpg"alt="" style={{width: "100%"}}/>

            <div  className="buttons" style={{display:"flex", gap:"6px"}}>
            <button className="button1">travel</button>
            <button className="button2">life style</button>
            </div>

            <h2>Portable latest Fashion for young women</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

            <p>31st January, 2018</p>
          </div>
        </Col>


        <Col>
          <div className="card3">
            <img
              src="https://preview.colorlib.com/theme/immigration/img/b2.jpg"alt="" style={{width: "100%"}}/>

            <div  className="buttons" style={{display:"flex", gap:"6px"}}>
            <button className="button1">travel</button>
            <button className="button2">life style</button>
            </div>

            <h2>Portable latest Fashion for young women</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

            <p>31st January, 2018</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
