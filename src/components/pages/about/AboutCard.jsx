import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageCard from "../../../assets/images/background/aboutCard_bg.webp";
import { getHomeAbout } from "../../../mock/data";
import Title from "../../common/title/Title";
import AWrapper from "./AWrapper";
import "./About.css";

const AboutCard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const homeAbout = getHomeAbout();
  const navigate = useNavigate();

  const handleAboutCardClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    if (selectedItem)
      navigate(selectedItem.page, {
        state: { elementClassName: selectedItem.section },
      });
  }, [selectedItem]);

  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src={ImageCard} alt="About Card" />
          </div>
          <div className="right row">
            <Title
              subtitle="learn anything"
              subtitleClassName="capitalTxt"
              title="benefit about online learning expertise"
              titleClassName="headerTxt"
            />
            <div className="items">
              {homeAbout.map((item) => {
                return (
                  <div
                    className="item flexSB"
                    key={item.id}
                    onClick={() => handleAboutCardClick(item)}
                  >
                    <div className="img">
                      <img src={item.cover} title={item.title} alt="" />
                    </div>
                    <div className="text">
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
    </>
  );
};

export default AboutCard;
