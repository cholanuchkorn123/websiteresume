/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import video from "../pic/Untitled video - Made with Clipchamp (2).mp4";
import backbutton from "../pic/backicon.png";
export function Portfolio() {
  let url = window.location.href;
  let htag = url.split("/")[3];
  const [readmore, setReadmore] = useState("home");
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
          {(readmore === "content" && (
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
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  justify-content: start;
                  align-items: start;
                  width: 100%;
                  height: 90px;
                `}
              >
                {" "}
                <img
                  src={backbutton}
                  css={css`
                    margin-left: 30px;
                    margin-top: 40px;
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                  `}
                  onClick={() => setReadmore("back")}
                ></img>
                <h1
                  css={css`
                    margin-left: 110px;
                    margin-top: 45px;
                    font-size: 30px;
                    color: #334244;
                  `}
                >
                  Get That Job
                </h1>
              </div>
              <p
                css={css`
                  margin: 10px;
                  margin-left: 25px;
                  margin-bottom: 10px;
                  color: #334244;
                  font-weight: bold;
                `}
              >
                <br /> Get that job is a website for Recruiter finding a
                candidate and Professional applying a job.
                <br /> Website Get that job have 2 type of user. First
                Professional is job seeker and Recruiter.
                <br /> Feature :
                <br /> Authentication ,Posting a job
                <br /> Update professional profile, Get list of jobs,
                <br /> Get a job details, Search and filter a job, etc.
                <br />
                Front-end and Backend: HTML, Material UI, Javascript, React.js,
                REST APIs, PostgreSQL database, Express.js and Node.JS
              </p>
            </div>
          )) ||
            (readmore === "home" && (
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
                    onClick={() => setReadmore("content")}
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
                          scale: 110%;
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
                        scale: 110%;
                      }
                    `}
                    onClick={() => setReadmore("content")}
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
            )) ||
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
                    onClick={() => setReadmore("content")}
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
                          scale: 110%;
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
                        scale: 110%;
                      }
                    `}
                    onClick={() => setReadmore("content")}
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
