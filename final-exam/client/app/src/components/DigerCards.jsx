import React from "react";
import { Col, Row } from "antd";
import DiamondIcon from "@mui/icons-material/Diamond";

export const DigerCards = () => {
  return (
    <div className="third-section">
      <h1>Our Unique Features that can impress you</h1>
      <p>Who are in extremely love with eco friendly system.</p>

      <Row style={{  flexWrap: "nowrap" }}>
        <div style={{ marginTop: "4%", display: "flex", gap: "10px" }}>
          <Col>
            <div className="card2">
              <div style={{ display: "flex" }}>
                {" "}
                <DiamondIcon /> <p>Lorem ipsum.</p>{" "}
              </div>
              <div className="card-body">
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </Col>
          

          <Col>
            <div className="card2">
              <div style={{ display: "flex" }}>
                {" "}
                <DiamondIcon /> <p>Lorem ipsum.</p>{" "}
              </div>
              <div className="card-body">
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="card2">
              <div style={{ display: "flex" }}>
                {" "}
                <DiamondIcon /> <p>Lorem ipsum.</p>{" "}
              </div>
              <div className="card-body">
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="card2">
              <div style={{ display: "flex" }}>
                {" "}
                <DiamondIcon /> <p>Lorem ipsum.</p>{" "}
              </div>
              <div className="card-body">
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
};
