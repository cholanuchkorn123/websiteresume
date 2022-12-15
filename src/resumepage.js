/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Aos from "aos";
import { Portfolio } from "./component/portfolio";
import footer from "./pic/Path 2.png";
import { Content } from "./component/content";
import "./style.css";
import { Topbar } from "./component/topbar";
import { Footer } from "./component/footer";
import { useEffect } from "react";
import { Skill } from "./component/skill";
export const Resumepage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      className="home"
      css={css`
        background-color: #eef8f9;
        width: 100vw;
        height: 100%;
      `}
    >
      <Topbar />
      <Content />
      <Skill />
      <Portfolio />
      <Footer />
      <footer>
        <div
          css={css`
            width: 100vw;
            height: 300px;
            background-color: #e6f4f7;
          `}
        ></div>
      </footer>
    </section>
  );
};
