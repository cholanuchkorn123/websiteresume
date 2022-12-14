/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ff from "../pic/undraw_Wireframing_re_q6k6 1.png";

import expressJS from "../pic/ex1.png";
import mongoDB from "../pic/mongo1.png";
import postgreSQL from "../pic/pg.png";
import tailwindCSS from "../pic/tw1.png";
import Muilogo from "../pic/mui_logo.png";
import htmllogo from "../pic/html_logo.png";
import csslogo from "../pic/updatecss.png";
import gitlogo from "../pic/git_logo.png";
import javascriptlogo from "../pic/jslogo.png";
import nodelogo from "../pic/nodeLogo.png";
import reactlogo from "../pic/react.svg";
import chakra from "../pic/ck.png";
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
            padding-top: 120px;
          `}
        >
          <p
            css={css`
              color: #222c2d;
              font-weight: 700;
              font-size: 50px;
            `}
          >
            Skills
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
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            css={css`
                width: 750px;
                height: 450px;
                background-color: white;
                margin: 50px;
                margin-top: 50px;display: flex;
                flex-direction: row;
                justify-content: center; border-radius: 25px; box-shadow: 5px 5px  5px 5px #d3dedc;
              }
              `}
          >
            <div
              css={css`
          width: 300px;
          height: 90%;
          background-color: white;
         display: flex;
          flex-direction: column;
          justify-content: center;margin-top:30px;margin-left:50px
        }
        `}
            >
              {" "}
              <div
                css={css`
         
         display: flex;
          flex-direction: row;
          justify-content: start; ;
        }
        `}
              >
                {" "}
                <img
                  src={htmllogo}
                  css={css`
                    width: 40px;
                    height: 40px;
                    object-fit: cover;
                    margin-left: 5px;
                  `}
                />
                <p
                  css={css`
                    font-weight: 500;

                    font-size: 20px;
                    color: #89afb6;
                    margin-top: 5px;
                    margin-left: 50px;
                  `}
                >
                  HTML
                </p>
              </div>
              <div
                css={css`
         
         display: flex;
          flex-direction: row;
          justify-content: start; margin:10px
        }
        `}
              >
                {" "}
                <img
                  src={csslogo}
                  css={css`
                    width: 30px;
                    height: 40px;
                    object-fit: cover;
                  `}
                />
                <p
                  css={css`
                    font-weight: 500;

                    font-size: 20px;
                    color: #89afb6;
                    margin-top: 5px;
                    margin-left: 65px;
                  `}
                >
                  CSS
                </p>
              </div>
              <div
                css={css`
         
         display: flex;
          flex-direction: row;
          justify-content: start; margin:10px
        }
        `}
              >
                {" "}
                <img
                  src={javascriptlogo}
                  css={css`
                    width: 35px;
                    height: 40px;
                    object-fit: cover;
                    margin-right: 10px;
                  `}
                />
                <p
                  css={css`
                    font-weight: 500;

                    font-size: 20px;
                    color: #89afb6;
                    margin-top: 5px;
                    margin-left: 20px;
                  `}
                >
                  Javascript
                </p>
              </div>
              <div
                css={css`
         
         display: flex;
          flex-direction: row;
          justify-content: start; margin:10px
        }
        `}
              >
                {" "}
                <img
                  src={tailwindCSS}
                  css={css`
                    width: 30px;
                    height: 40px;
                    object-fit: cover;
                  `}
                />
                <p
                  css={css`
                    font-weight: 500;

                    font-size: 20px;
                    color: #89afb6;
                    margin-top: 5px;
                    margin-left: 20px;
                  `}
                >
                  Tailwind CSS
                </p>
              </div>
              <div
                css={css`
         
         display: flex;
          flex-direction: row;
          justify-content: start; margin:10px
        }
        `}
              >
                {" "}
                <img
                  src={reactlogo}
                  css={css`
                    width: 40px;
                    height: 40px;
                    object-fit: cover;
                    padding-right: 5px;
                  `}
                />
                <p
                  css={css`
                    font-weight: 500;

                    font-size: 20px;
                    color: #89afb6;
                    margin-top: 5px;
                    margin-left: 25px;
                  `}
                >
                  React JS
                </p>
              </div>
            </div>
            <div
              css={css`
               width: 300px;
               height: 90%;
               background-color: white;
              display: flex;
               flex-direction: column;
               justify-content: center; ;
             }
             `}
            >
              <div
                css={css`
          width: 300px;
          height: 90%;
          background-color: white;
         display: flex;
          flex-direction: column;
          justify-content: center;margin-top:50px;margin-left:20px
        }
        `}
              >
                {" "}
                <div
                  css={css`
         
         display: flex;
          flex-direction: row;
          justify-content: start; ;
        }
        `}
                >
                  {" "}
                  <img
                    src={nodelogo}
                    css={css`
                      width: 40px;
                      height: 40px;
                      object-fit: cover;
                      color: white;
                      margin-left: 10px;
                    `}
                  />
                  <p
                    css={css`
                      font-weight: 500;

                      font-size: 20px;
                      color: #89afb6;
                      margin-top: 5px;
                      margin-left: 50px;
                    `}
                  >
                    NodeJS
                  </p>
                </div>
                <div
                  css={css`
         
         display: flex;
          flex-direction: row;
          justify-content: start; margin:10px
        }
        `}
                >
                  {" "}
                  <img
                    src={expressJS}
                    css={css`
                      width: 40px;
                      height: 40px;
                      object-fit: cover;
                    `}
                  />
                  <p
                    css={css`
                      font-weight: 500;

                      font-size: 20px;
                      color: #89afb6;
                      margin-top: 5px;
                      margin-left: 40px;
                    `}
                  >
                    Express JS
                  </p>
                </div>
                <div
                  css={css`
         
         display: flex;
          flex-direction: row;
          justify-content: start; margin:10px
        }
        `}
                >
                  {" "}
                  <img
                    src={mongoDB}
                    css={css`
                      width: 40px;
                      height: 40px;
                      object-fit: cover;
                    `}
                  />
                  <p
                    css={css`
                      font-weight: 500;

                      font-size: 20px;
                      color: #89afb6;
                      margin-top: 5px;
                      margin-left: 35px;
                    `}
                  >
                    Mongo DB
                  </p>
                </div>
                <div
                  css={css`
         
         display: flex;
          flex-direction: row;
          justify-content: start; margin:10px
        }
        `}
                >
                  {" "}
                  <img
                    src={postgreSQL}
                    css={css`
                      width: 40px;
                      height: 40px;
                      object-fit: cover;
                    `}
                  />
                  <p
                    css={css`
                      font-weight: 500;

                      font-size: 20px;
                      color: #89afb6;
                      margin-top: 5px;
                      margin-left: 35px;
                    `}
                  >
                    Postgre SQL
                  </p>
                </div>
                <div
                  css={css`
         
         display: flex;
          flex-direction: row;
          justify-content: start; margin:10px
        }
        `}
                >
                  {" "}
                  <img
                    src={gitlogo}
                    css={css`
                      width: 40px;
                      height: 40px;
                      object-fit: cover;
                      margin-left: 5px;
                    `}
                  />
                  <p
                    css={css`
                      font-weight: 500;

                      font-size: 20px;
                      color: #89afb6;
                      margin-top: 5px;
                      margin-left: 65px;
                    `}
                  >
                    GIT
                  </p>
                </div>
              </div>
            </div>
            <div
              css={css`
                width: 300px;
                height: 80%;
                background-color: white;
                display: flex;
                flex-direction: column;
                justify-content: start;
                margin-top: 55px;
              `}
            >
              {" "}
              <div
                css={css`
         
         display: flex;
          flex-direction: row;
          justify-content: start; margin-left:3px;margin-top:5px
        }
        `}
              >
                {" "}
                <img
                  src={Muilogo}
                  css={css`
                    width: 30px;
                    height: 40px;
                    object-fit: cover;
                  `}
                />
                <p
                  css={css`
                    font-weight: 500;

                    font-size: 20px;
                    color: #89afb6;
                    margin-top: 5px;
                    margin-left: 30px;
                  `}
                >
                  MUI
                </p>
              </div>
              <div
                css={css`
         
                display: flex;
                flex-direction: row;
                justify-content: start; margin:10px:margin-right:25px;margin-top:10px
        }
        `}
              >
                {" "}
                <img
                  src={chakra}
                  css={css`
                    width: 40px;
                    height: 40px;
                    object-fit: cover;
                  `}
                />
                <p
                  css={css`
                    font-weight: 500;

                    font-size: 20px;
                    color: #89afb6;
                    margin-top: 5px;
                    margin-left: 20px;
                  `}
                >
                  Chakra
                </p>
              </div>
            </div>

            {/* <div>
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
            </div> */}
          </div>
          {/* <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
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
          </div> */}
        </main>
      </section>
    </section>
  );
}
