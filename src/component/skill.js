/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ff from "../pic/undraw_Wireframing_re_q6k6 1.png";
import gg from "../pic/pic2.png";
import qq from "../pic/pic3.png";

export function Skill() {
  return (
    <section id="skill">
      <section>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            height: 100%;
            justify-content: center;
            flex-wrap: wrap;
          `}
        >
          <p
            css={css`
              color: #5cb8e4;
              font-weight: 700;
              font-size: 30px;
            `}
          >
            Additional
          </p>
          <p
            css={css`
              color: #5cb8e4;
              font-weight: 400;
              margin-left: 10px;
              font-size: 30px;
            `}
          >
            passions
          </p>
        </div>
        <main
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            height: 100%;
            flex-wrap: wrap;
          `}
        >
          <div
            css={css`
                width: 300px;
                height: 250px;
                background-color: white;
                margin: 50px;
                margin-top: 50px;display: flex;
                flex-direction: column;
                justify-content: center; border-radius: 25px; box-shadow: 5px 5px  5px 5px #d3dedc;
              }
              `}
          >
            <div>
              {" "}
              <img
                src={ff}
                css={css`
                  width: 212px;
                  height: 150px;
                  object-fit: cover;
                `}
              />
            </div>
            <div>
              <p1
                css={css`
                  font-weight: 500;

                  font-size: 20px;
                  color: #8758ff; ;
                `}
              >
                {" "}
                Front-End{" "}
              </p1>
              <p1
                css={css`
                  font-weight: 400;

                  font-size: 20px;
                  color: #8758ff; ;
                `}
              >
                Developer
              </p1>
            </div>
            <div>
              {" "}
              <p>(Sass, Bootstrap, Tailwind)</p>
            </div>
          </div>
          <div
            css={css`
              width: 300px;
              height: 250px;
              background-color: white;
              margin: 50px;
              margin-top: 50px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              border-radius: 25px;
              box-shadow: 5px 5px 5px 5px #d3dedc;
            `}
          >
            <div>
              {" "}
              <img
                src={gg}
                css={css`
                  width: 212px;
                  height: 150px;
                  object-fit: cover;
                `}
              />
            </div>
            <div>
              <p1
                css={css`
                  font-weight: 500;

                  font-size: 20px;
                  color: #8758ff; ;
                `}
              >
                {" "}
                Back-End{" "}
              </p1>
              <p1
                css={css`
                  font-weight: 400;

                  font-size: 20px;
                  color: #8758ff; ;
                `}
              >
                Developer
              </p1>
            </div>
            <div>
              {" "}
              <p>(NodeJS, Laravel, Codeigniter)</p>
            </div>
          </div>
          <div
            css={css`
              width: 300px;
              height: 250px;
              background-color: white;
              margin: 50px;
              margin-top: 50px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              border-radius: 25px;
              box-shadow: 5px 5px 5px 5px #d3dedc;
            `}
          >
            <div>
              {" "}
              <img
                src={qq}
                css={css`
                  width: 212px;
                  height: 150px;
                  object-fit: cover;
                `}
              />
            </div>
            <div>
              <p1
                css={css`
                  font-weight: 500;

                  font-size: 20px;
                  color: #8758ff; ;
                `}
              >
                {" "}
                UI/UX{" "}
              </p1>
              <p1
                css={css`
                  font-weight: 400;

                  font-size: 20px;
                  color: #8758ff; ;
                `}
              >
                Designer{" "}
              </p1>
            </div>
            <div>
              {" "}
              <p>(Figma, Zeplin, Adobe XD)</p>
            </div>
          </div>
        </main>
      </section>
    </section>
  );
}
