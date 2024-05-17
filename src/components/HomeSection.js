import React from "react";
import "./HomeSection.css";
import wifi from "../images/wifi.png";
import twitter from "../images/twitter.png";
import black from "../images/Black.png";
import white from "../images/White.png";
import red from "../images/red.png";
const HomeSection = () => {
  return (
    <>
      <div className="content">
        <div className="text">
          <span className="title">Prima Think</span>
          <br />
          <span className="subtitle">
            Digital Marketing & Web Development Company
          </span>
          <br />
          <span>
            We are Full-Stack Digital Transformation Company. As a Digital
            Marketing Company, we are offering Digital Marketing, Web
            Development & Digital Transformation Consulting. We have experts who
            are result oriented in building online brand presence
          </span>
        </div>
        <img className="images" src={wifi} alt="" />
        <img className="images" src={twitter}  alt=""/>
      </div>

      <div className="main">
        {/* section 1 */}
        <div className="section1">
          <div className="box">
            <h4 className="head">Indonectetus facilis leo nibh</h4>
            <img className="black" src={black} alt="" />
            <p>
              We are Fiull Stack Digital Tranformation Company. As a Digital
              Marketing Company, We are Offering...
            </p>
          </div>
          <div className="box">
            <h4 className="head">Indonectetus facilis leo nibh</h4>
            <img className="black" src={white} alt="" />
            <p>
              We are Fiull Stack Digital Tranformation Company. As a Digital
              Marketing Company, We are Offering...
            </p>
          </div>
          <div className="box">
            <h4 className="head">Indonectetus facilis leo nibh</h4>
            <img className="black" src={black} alt="" />
            <p>
              We are Fiull Stack Digital Tranformation Company. As a Digital
              Marketing Company, We are Offering...
            </p>
          </div>
        </div>
        {/* section2 */}
        <div className="section2">
          <div className="text">
            <h3 className="head">About This</h3>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quidem cum voluptate possimus placeat quas, ex nesciunt libero
              ipsam? Eveniet nesciunt distinctio voluptatibus quae, eaque ipsum
              voluptate voluptates quibusdam, ea rerum ratione commodi accusamus
              eum molestias amet? Asperiores ea exercitationem error repudiandae
              sapiente nihil temporibus laboriosam dicta? Et natus obcaecati
              quae esse, debitis vero eius. Nam eveniet accusamus magni vitae
              nesciunt officia saepe libero repellendus velit inventore ullam ex
              adipisci tempora impedit voluptatum, id necessitatibus, voluptatem
              ratione autem repellat non dolorum beatae cum? Nobis quas incidunt
              cupiditate nemo. Labore numquam dolor cum reiciendis minus odio
              perspiciatis veniam beatae at vero.
            </p>
          </div>

          <div className="img_text">
            <div className="temp">
              <img className="smallimg" src={red} alt="" />
              <p style={{ fontSize: "25px" }}>
                Nullamlacus dui ipsum <br /> conseque loborttis
              </p>
            </div>
            <div>

            <p style={{ fontSize: "18px" , color:"#000" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto voluptates quibusdam beatae iure doloribus atque sed
              rem exercitationem, pariatur molestias.
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
