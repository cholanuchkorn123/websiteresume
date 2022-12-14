/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import video from "../pic/Untitled video - Made with Clipchamp (2).mp4";

export function Portfolio() {
  let url = window.location.href;
  let htag = url.split("/")[3];
  const [readmore, setReadmore] = useState(false);
  console.log(readmore);
  return (
    <section id="portfolio">
      <section
        css={css`
          padding-top: 150px;
        `}
      >
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
              color: #222c2d;
              font-weight: 700;
              font-size: 50px;
            `}
          >
            My
          </p>
          <p
            css={css`
              color: #222c2d;
              font-weight: 400;
              margin-left: 10px;
              font-size: 50px;
            `}
          >
            Projects
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
          {(readmore && (
            <div
              css={css`
                width: 500px;
                height: 400px;
                background-color: #abdbe3;
                margin: 50px;
                margin-top: 50px;
                border-radius: 25px;
                box-shadow: 5px 5px 5px 5px #d3dedc;
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: start;
              `}
            >
              <p
                css={css`
                  margin-left: 20px;
                  font-size: 20px;
                  cursor: pointer;
                `}
                onClick={() => setReadmore("back")}
              >
                Back
              </p>
            </div>
          )) || (
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                css={css`
                  width: 500px;
                  height: 400px;
                  background-color: #abdbe3;
                  margin: 50px;
                  margin-top: 50px;
                  border-radius: 25px;
                  box-shadow: 5px 5px 5px 5px #d3dedc;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <div
                  css={css`
                    width: 80%;
                    height: 60%;
                    background-color: black;
                    margin-top: 30px;
                  `}
                >
                  <video
                    // controls
                    loop
                    autoPlay
                    muted
                    css={css`
                      width: 100%;
                      height: 100%;
                      cursor: pointer;
                    `}
                  >
                    <source src={video} type="video/mp4" autoPlay />
                    <a href="" />
                  </video>
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-direction: row;
                    justify-content: start;
                    align-items: center;
                    margin: 20px;
                  `}
                >
                  {" "}
                  <a
                    css={css`
                      text-decoration: none;
                    `}
                    href="https://github.com/varissara-wo/final-project"
                  >
                    <div
                      css={css`
                        width: 150px;
                        height: 50px;
                        background-color: #d5edf1;
                        margin-right: 75px;
                        border-radius: 10px;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-top: 5px;
                        &:hover {
                          background-color: #bce2e9;
                        }
                      `}
                    >
                      {" "}
                      <p
                        css={css`
                          font-size: 25px;
                          color: #44585b;
                        `}
                      >
                        Github
                      </p>
                    </div>
                  </a>
                  <div
                    css={css`
                      width: 150px;
                      height: 50px;
                      background-color: #d5edf1;

                      border-radius: 10px;
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-items: center;
                      margin-top: 5px;
                      cursor: pointer;
                      &:hover {
                        background-color: #bce2e9;
                      }
                    `}
                    onClick={() => setReadmore(true)}
                  >
                    {" "}
                    <p
                      css={css`
                        font-size: 25px;
                        color: #44585b;
                      `}
                    >
                      Read more
                    </p>
                  </div>
                </div>
              </div>
            ) ||
            (readmore === "back" && (
              <div
                css={css`
                  width: 500px;
                  height: 400px;
                  background-color: #abdbe3;
                  margin: 50px;
                  margin-top: 50px;
                  border-radius: 25px;
                  box-shadow: 5px 5px 5px 5px #d3dedc;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <div
                  css={css`
                    width: 80%;
                    height: 60%;
                    background-color: black;
                    margin-top: 30px;
                  `}
                >
                  <video
                    // controls
                    loop
                    autoPlay
                    muted
                    css={css`
                      width: 100%;
                      height: 100%;
                      cursor: pointer;
                    `}
                  >
                    <source src={video} type="video/mp4" autoPlay />
                    <a href="" />
                  </video>
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-direction: row;
                    justify-content: start;
                    align-items: center;
                    margin: 20px;
                  `}
                >
                  {" "}
                  <a
                    css={css`
                      text-decoration: none;
                    `}
                    href="https://github.com/varissara-wo/final-project"
                  >
                    <div
                      css={css`
                        width: 150px;
                        height: 50px;
                        background-color: #d5edf1;
                        margin-right: 75px;
                        border-radius: 10px;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-top: 5px;
                        &:hover {
                          background-color: #bce2e9;
                        }
                      `}
                    >
                      {" "}
                      <p
                        css={css`
                          font-size: 25px;
                          color: #44585b;
                        `}
                      >
                        Github
                      </p>
                    </div>
                  </a>
                  <div
                    css={css`
                      width: 150px;
                      height: 50px;
                      background-color: #d5edf1;

                      border-radius: 10px;
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-items: center;
                      margin-top: 5px;
                      cursor: pointer;
                      &:hover {
                        background-color: #bce2e9;
                      }
                    `}
                    onClick={() => setReadmore(true)}
                  >
                    {" "}
                    <p
                      css={css`
                        font-size: 25px;
                        color: #44585b;
                      `}
                    >
                      Read more
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </main>
      </section>
    </section>
  );
}
