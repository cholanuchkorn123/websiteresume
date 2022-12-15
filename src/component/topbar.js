import humbur from "../pic/Vector (5).png";
import bgimg from "../pic/Ellipse 1.png";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useEffect } from "react";
import "animate.css";
export function Topbar() {
  const [barbutton, setBarbutton] = useState("about");

  return (
    <>
      <header className="head">
        <div
          className="head1"
          css={css`
            display: flex;
            flex-direction: row;
            position: fixed;
            background-color: #e6f4f7;
            margin-bottom: 10px;
            width: 100%;
            z-index: 5;
          `}
        >
          <div
            className="animate__animated animate__slideInDown"
            css={css`display: flex;
              justify-content: center,
              flex-direction: row;
               margin-left:180px;margin-top:35px;   
              `}
          >
            <h1
              css={css`
                font-size: 25px;
                color: #566e72;
              `}
            >
              C
            </h1>
            <h1
              css={css`
                font-size: 25px;
                color: #566e72;
              `}
            >
              H
            </h1>
            <h1
              css={css`
                font-size: 25px;
                color: #566e72;
              `}
            >
              O
            </h1>
            <h1
              css={css`
                font-size: 25px;
                color: #566e72;
              `}
            >
              L
            </h1>
            <h1
              css={css`
                font-size: 25px;
                color: #78999f;
              `}
            >
              A
            </h1>
            <h1
              css={css`
                font-size: 25px;
                color: #78999f;
              `}
            >
              N
            </h1>
            <h1
              css={css`
                font-size: 25px;
                color: #678388;
              `}
            >
              U
            </h1>
            <h1
              css={css`
                font-size: 25px;
                font-weight: 300;
                color: #222c2d;
              `}
            >
              C
            </h1>
            <h1
              css={css`
                font-size: 25px;
                font-weight: 300;
                color: #222c2d;
              `}
            >
              H
            </h1>
          </div>

          <div
            className="navbar"
            css={css`
              display: flex;
              justify-content: center;
              flex-direction: row;
              margin-left: 750px;
            `}
          >
            {(barbutton == "about" && (
              <div
                className="menu"
                css={css`
                  margin-top: 45px;
                  font-size: 25px;
                  width: 176px;
                  height: 45px;
                  background-color: #bce2e9;
                  border-radius: 25px;
                  text-align: center;
                  color: white;
                  padding-top: 5px;
                `}
              >
                <a
                  href="#content"
                  css={css`
                    color: #566e72;
                    text-decoration: none;
                  `}
                  onClick={() => {
                    setBarbutton("about");
                  }}
                >
                  {" "}
                  About
                </a>
              </div>
            )) || (
              <div
                className="menu"
                css={css`
                  margin-top: 45px;
                  font-size: 25px;
                  width: 176px;
                  height: 45px;
                  background-color: #e6f4f7;
                  border-radius: 25px;
                  text-align: center;
                  color: white;
                  padding-top: 5px;
                `}
              >
                <a
                  href="#content"
                  css={css`
                    color: #566e72;
                    text-decoration: none;
                  `}
                  onClick={() => {
                    setBarbutton("about");
                  }}
                >
                  {" "}
                  About
                </a>
              </div>
            )}

            {(barbutton == "skill" && (
              <div
                css={css`
                  margin-top: 45px;
                  font-size: 25px;
                  width: 176px;
                  height: 45px;
                  background-color: #bce2e9;
                  border-radius: 25px;
                  text-align: center;
                  color: white;
                  padding-top: 5px;
                `}
              >
                <a
                  href="#skill"
                  css={css`
                    color: #566e72;
                    text-decoration: none;
                  `}
                  onClick={() => {
                    setBarbutton("skill");
                  }}
                >
                  {" "}
                  Skills
                </a>
              </div>
            )) || (
              <div
                className="menu"
                css={css`
                  margin-top: 45px;
                  font-size: 25px;
                  width: 176px;
                  height: 45px;
                  background-color: #e6f4f7;
                  border-radius: 25px;
                  text-align: center;
                  color: white;
                  padding-top: 5px;
                `}
              >
                <a
                  href="#skill"
                  css={css`
                    color: #566e72;
                    text-decoration: none;
                  `}
                  onClick={() => {
                    setBarbutton("skill");
                  }}
                >
                  {" "}
                  Skills
                </a>
              </div>
            )}
            {(barbutton == "portfolio" && (
              <div
                className="menu"
                css={css`
                  margin-top: 45px;
                  font-size: 25px;
                  width: 176px;
                  height: 45px;
                  background-color: #bce2e9;
                  border-radius: 25px;
                  text-align: center;
                  color: white;
                  padding-top: 5px;
                `}
              >
                <a
                  href="#portfolio"
                  css={css`
                    color: #566e72;
                    text-decoration: none;
                  `}
                  onClick={() => {
                    setBarbutton("portfolio");
                  }}
                >
                  {" "}
                  Portfolio
                </a>
              </div>
            )) || (
              <div
                className="menu"
                css={css`
                  margin-top: 45px;
                  font-size: 25px;
                  width: 176px;
                  height: 45px;
                  background-color: #e6f4f7;
                  border-radius: 25px;
                  text-align: center;
                  color: white;
                  padding-top: 5px;
                `}
              >
                <a
                  href="#portfolio"
                  css={css`
                    color: #566e72;
                    text-decoration: none;
                  `}
                  onClick={() => {
                    setBarbutton("portfolio");
                  }}
                >
                  {" "}
                  Portfolio
                </a>
              </div>
            )}

            {(barbutton == "footer" && (
              <div
                css={css`
                  margin-top: 45px;
                  font-size: 25px;
                  width: 176px;
                  height: 45px;
                  background-color: #bce2e9;
                  border-radius: 25px;
                  text-align: center;
                  color: white;
                  padding-top: 5px;
                `}
              >
                <a
                  href="#footer"
                  css={css`
                    color: #566e72;
                    text-decoration: none;
                  `}
                  onClick={() => {
                    setBarbutton("footer");
                  }}
                >
                  {" "}
                  Contact me
                </a>
              </div>
            )) || (
              <div
                className="menu"
                css={css`
                  margin-top: 45px;
                  font-size: 25px;
                  width: 176px;
                  height: 45px;
                  background-color: #e6f4f7;
                  border-radius: 25px;
                  text-align: center;
                  color: white;
                  padding-top: 5px;
                `}
              >
                <a
                  href="#footer"
                  css={css`
                    color: #566e72;
                    text-decoration: none;
                  `}
                  onClick={() => {
                    setBarbutton("footer");
                  }}
                >
                  {" "}
                  Contact me
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
