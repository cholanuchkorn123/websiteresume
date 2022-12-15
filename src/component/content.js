/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import profile from "../pic/Avatars - Default with Backdrop.png";
import "animate.css";
export function Content() {
  return (
    <>
      <section
        id="content"
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding-top: 100px;
        `}
      >
        <main
          id="sechome"
          css={css`
            margin-top: 100px;
            text-align: left;
            margin-left: 200px;
          `}
        >
          <div
            className="animate__animated animate__bounce"
            css={css`
              font-size: 32px;
              color: #678388;
              animation-duration: 1s;
            `}
          >
            Hi!
          </div>
          <div
            css={css`
              font-size: 35px;
              color: #678388;
              animation-duration: 2s;
            `}
          >
            <h1>I'm Cholanuch</h1>
          </div>
          <div
            css={css`
              font-size: 35px;
              color: #678388;
            `}
          >
            <h1>a Full Stack Developer</h1>
          </div>
          <div
            className="animate__animated  animate__zoomIn"
            css={css`
              font-size: 20px;
              color: #181818;
              margin-top: 10px;
              overflow: hidden;
            
            

              
                }
            `}
          >
            <p
              css={css`
                margin-top: 5px;
              `}
            >
              I'm interested in learning new things. As a recent graduate from
            </p>
            <p
              css={css`
                margin-top: 5px;
              `}
            >
              the Full-Stack Software Development Bootcamp at TechUp.
            </p>

            <p
              css={css`
                margin-top: 5px;
              `}
            >
              I've proficiency in frontend development such as HTML, CSS, React,
            </p>
            <p
              css={css`
                margin-top: 5px;
              `}
            >
              and backend development. I having continual improvement my coding
              skills.
            </p>
          </div>
        </main>
        <main
          className="profile"
          css={css`
            width: 400px;
            height: 400px;
            background-color: #eef8f9;
            margin: 50px;
            margin-top: 120px;
            margin-left:200px;
            
            }
          `}
        >
          <div>
            <img
              className="animate__animated animate__pulse"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              src={profile}
              css={css`
                width: 100%;
                height: 400px;
                background-color: #eef8f9;
                object-fit: contain;
                animation-iteration-count: infinite;
                margin-left: 200px;
              `}
            />
          </div>
        </main>
      </section>
    </>
  );
}
