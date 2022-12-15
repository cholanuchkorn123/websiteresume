/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import aa from "../pic/124.png";
import bb from "../pic/555.png";
import cc from "../pic/github.png";
import linkedinlogo from "../pic/acv.png";
import circle from "../pic/Circle_(transparent).png";
import "./modal.css";
import ee from "../pic/Vector.png";
import { useState } from "react";
export function Footer() {
  const [modal, setModal] = useState(false);
  const togglemodal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <section id="footer">
      <section data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <div
          css={css`
            display: flex;
            flex-direction: row;
            height: 100%;
            justify-content: center;
            padding-top: 180px;
          `}
        >
          <p
            css={css`
              color: #222c2d;
              font-weight: 700;
              font-size: 50px;
            `}
          >
            Contact
          </p>
          <p
            css={css`
              color: #222c2d;
              font-weight: 400;
              margin-left: 10px;
              font-size: 50px;
            `}
          >
            Me
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
              background-color: #eef8f9;
              margin: 50px;
              margin-top: 50px;
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: end;
              align-items: center;
            `}
          >
            {" "}
            <a
              href="https://github.com/cholanuchkorn123"
              css={css`
                color: #5cb8e4;
                text-decoration: none;
              `}
            >
              {" "}
              <img
                src={aa}
                css={css`
                  position: absolute;
                  bottom: 100px;
                  right: 70px;
                `}
              />
              <img
                src={cc}
                css={css`
                  position: absolute;
                  top: 25px;
                  left: 100px;
                `}
              />
            </a>
            <h1
              css={css`
                font-size: 25px;
                color: #5cb8e4;
              `}
            >
              <a
                href="https://github.com/cholanuchkorn123"
                css={css`
                  color: #566e72;
                  text-decoration: none;
                `}
              >
                Github
              </a>
            </h1>
          </div>
          <div
            css={css`
              width: 300px;
              height: 250px;
              background-color: #eef8f9;
              margin: 50px;
              margin-top: 50px;
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: end;
              align-items: center;
            `}
          >
            {" "}
            <a
              href="https://www.linkedin.com/in/cholanuch-kasemtanakitti-8b3202244/"
              css={css`
                color: #5cb8e4;
                text-decoration: none;
              `}
            >
              {" "}
              <img
                src={aa}
                css={css`
                  position: absolute;
                  bottom: 100px;
                  right: 70px;
                `}
              />
              <img
                src={linkedinlogo}
                css={css`
                  position: absolute;
                  top: 25px;
                  left: 95px;
                  width: 35%;
                  height: 35%;
                `}
              />
            </a>
            <h1
              css={css`
                font-size: 25px;
                color: #5cb8e4;
              `}
            >
              <a
                href="https://www.linkedin.com/in/cholanuch-kasemtanakitti-8b3202244/"
                css={css`
                  color: #566e72;
                  text-decoration: none;
                `}
              >
                Linkedin
              </a>
            </h1>
          </div>

          <div
            css={css`
              width: 300px;
              height: 250px;
              background-color: #eef8f9;
              margin: 50px;
              margin-top: 50px;
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: end;
              align-items: center;
            `}
          >
            {" "}
            <a
              href="mailto:cholanuch309651@gmail.com"
              css={css`
                color: #5cb8e4;
                text-decoration: none;
              `}
            >
              <img
                src={aa}
                css={css`
                  position: absolute;
                  bottom: 100px;
                  right: 70px;
                `}
              />
              <img
                src={bb}
                css={css`
                  position: absolute;
                  top: 50px;
                  left: 100px;
                `}
              />
            </a>
            <h1
              css={css`
                font-size: 25px;
                color: #5cb8e4;
              `}
            >
              <a
                href="mailto:cholanuch309651@gmail.com"
                css={css`
                  color: #566e72;
                  text-decoration: none;
                `}
              >
                Email
              </a>
            </h1>
          </div>
          <div
            css={css`
              width: 300px;
              height: 250px;
              background-color: #eef8f9;
              margin: 50px;
              margin-top: 50px;
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: end;
              align-items: center;
            `}
          >
            {" "}
            <img
              src={aa}
              css={css`
                position: absolute;
                bottom: 100px;
                cursor: pointer;
              `}
              onClick={togglemodal}
            />
            <img
              src={ee}
              css={css`
                position: absolute;
                top: 25px;
                left: 110px;
                cursor: pointer;
              `}
              onClick={togglemodal}
            />
            <h1
              css={css`
                font-size: 25px;
                color: #5cb8e4;
              `}
            >
              <button
                onClick={togglemodal}
                css={css`
                  font-size: 25px;
                  color: #566e72;
                  border: none;
                  cursor: pointer;
                  font-weight: bold;
                  background-color: #eef8f9;
                `}
              >
                {" "}
                Telephone
              </button>
              {modal && (
                <div className="modal">
                  <div onClick={togglemodal} className="overlay"></div>
                  <div className="modal-content">
                    <p
                      css={css`
                        font-size: 25px;
                        color: #5cb8e4;
                        margin-left: 60px;
                        cursor: pointer;
                      `}
                      onClick={() => {
                        navigator.clipboard.writeText("0992278883");
                      }}
                    >
                      099-227-8883
                    </p>
                  </div>
                </div>
              )}
            </h1>
          </div>
        </main>
      </section>
    </section>
  );
}
