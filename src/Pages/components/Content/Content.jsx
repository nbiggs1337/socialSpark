import React from 'react'
import { Row, Container, Col } from "reactstrap"
import Buttons from "../Button/Buttons"

function Content() {

  const sectionStyles = {
    background: "linear-gradient(to top, #fdfbfb, #ebedee)",
    border: "1px solid #e2ebf0",
    borderRadius: "8px",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
  };


  return (
    <div style={{ height: "100vh" }}>
      <Container>
        <Row>
          <Row>
            <Col className="m-2 pb-4" style={sectionStyles}>
              <Row style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>

                <h4 className='mb-2 display-5' style={{ alignSelf: "end" }}>Select Category</h4>
                <div className="w-100" />
                <Buttons name={"Facebook"} />
                <Buttons name={"YouTube"} />
                <Buttons name={"TikTok"} />
                <Buttons name={"Instagram"} />
                <Buttons name={"iTunes"} />
                <Buttons name={"Spotify"} />
                <Buttons name={"Pintrest"} />
                <Buttons name={"BeReal"} />
                <Buttons name={"Facebook"} />
                <Buttons name={"Facebook"} />
                <Buttons name={"Facebook"} />
                <Buttons name={"Facebook"} />


              </Row>



            </Col>
          </Row>
          
          {/* Start second Row - 2 Content Sections
                  Start left column - 2nd Row              */}
          <Row style={{width: "100%", padding: "8px", columnGap: "1vw", }} className="m-2">
          <div className="w-100" />
          <Col style={sectionStyles}>
            {/* Title */}
            <span><button className="btn-1 ml-1 mt-3 btn btn-outline-info">New Order</button></span>
            {/* Service Selector */}
            <div className="has-success form-group mt-2">
              <select class="form-control-alternative is-valid form-control" id="inputGroupSelect01">
              <option selected>Choose a service...</option>
              <option value="1">Service One</option>
              <option value="2">Service Two</option>
              <option value="3">Final Three</option>
            </select>
            </div>
            {/* Link */}
            <div className="form-group mt-2">
              <input class="form-control-alternative form-control" id="inputGroupLink01" placeholder='Video Link'/>
              {/* TODO: add has-success class to input parent div when user inputs valid URL */}
            </div>
            
          </Col>
          
          {/* Start Right Column */}
          <Col style={sectionStyles}>
            <span>Column</span>
          </Col>
          </Row>
        </Row>
      </Container>


    </div>
  )
}

export default Content