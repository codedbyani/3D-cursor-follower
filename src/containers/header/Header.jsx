import React, { Suspense, useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import people from "../../assets/people.png";
import { AiModel } from "../../components/aiModel/AiModel";
import { Canvas } from "@react-three/fiber";
import ai from "../../assets/ai.png";
import useWindowDimensions from "../../utils/getWindowScreenSize";

const Header = () => {
  const { width } = useWindowDimensions();
  const mash = useRef();
  const [coordinates, setCoordinates] = useState();
  useEffect(() => {
    setCoordinates({
      x: mash?.current?.getBoundingClientRect().x,
      y: mash?.current?.getBoundingClientRect().y,
    });
  }, []);
  return (
    <div className={`${styles.gpt3__header} section__padding`} id="home">
      <div className={styles.gpt3__header_content}>
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className={styles.gpt3__header_content__input}>
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>

        <div className={styles.gpt3__header_content__people}>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      {width < 1660 ? (
        <div className={styles.gpt3__header_aiImage}>
          <img src={ai} />
        </div>
      ) : (
        <div ref={mash} className={styles.gpt3__header_image}>
          <Suspense fallback={null}>
            <Canvas shadows>
              <AiModel coordinates={coordinates} />
            </Canvas>
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default Header;
