/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Portfolio } from "./component/portfolio";
import footer from "./pic/Path 2.png";
import { Content } from "./component/content";
import "./style.css";
import { Topbar } from "./component/topbar";
import { Footer } from "./component/footer";
import { Skill } from "./component/skill";
export const Resumepage = () => {
  return (
    <section
      className="home"
      css={css`
        background-color: #f2f2f2;
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
        <img
          src={footer}
          css={css`
            width: 100vw;
          `}
        />
      </footer>
    </section>
  );
};
