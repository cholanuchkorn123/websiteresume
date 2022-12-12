/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import aa from "../pic/124.png";
import bb from "../pic/555.png";
import cc from "../pic/github.png";
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
      <section>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            height: 100%;
            justify-content: center;
          `}
        >
          <p
            css={css`
              color: #5cb8e4;
              font-weight: 700;
              font-size: 30px;
            `}
          >
            Contact
          </p>
          <p
            css={css`
              color: #5cb8e4;
              font-weight: 400;
              margin-left: 10px;
              font-size: 30px;
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
              background-color: #f2f2f2;
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
                  color: #5cb8e4;
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
              background-color: #f2f2f2;
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
                  color: #5cb8e4;
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
              background-color: #f2f2f2;
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
                  color: #5cb8e4;
                  border: none;
                  cursor: pointer;
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
                      `}
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
