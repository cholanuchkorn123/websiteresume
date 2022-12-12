/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import fa from "../pic/SendPay 1.png";
import sv from "../pic/Ellipse 6 (2).png";
import av from "../pic/Screenshot (162) 1.png";
import kk from "../pic/Edtech 1.png";
import ss from "../pic/e-commerce 1 1.png";
import rr from "../pic/Ellipse 6 (1).png";
import ww from "../pic/E- Commerce.png";
import ssf from "../pic/Ellipse 6.png";
import sssf from "../pic/Sendpay.png";
export function Portfolio() {
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
              color: #5cb8e4;
              font-weight: 700;
              font-size: 30px;
            `}
          >
            My
          </p>
          <p
            css={css`
              color: #5cb8e4;
              font-weight: 400;
              margin-left: 10px;
              font-size: 30px;
            `}
          >
            Portfolio
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
              margin-top: 50px;
              border-radius: 25px;
              box-shadow: 5px 5px 5px 5px #d3dedc;
              position: relative;
              display: flex;
              flex-direction: row;
              justify-content: center;
            `}
          >
            <div>
              <img
                src={fa}
                css={css`
                  position: absolute;
                  z-index: 2;
                  width: 250px;
                  height: 150px;
                  right: 5px;
                  bottom: 30px;
                `}
              />
              <img
                src={ssf}
                css={css`
                  position: absolute;
                  z-index: 1;
                  width: 190px;
                  height: 190px;
                  right: 100px;
                  bottom: 45px;
                `}
              />

              <img
                src={sssf}
                css={css`
                  position: absolute;
                  z-index: 2;
                  width: 110px;
                  height: 25px;
                  right: 160px;
                  bottom: 195px;
                `}
              />
            </div>
          </div>
          <div
            css={css`
              width: 300px;
              height: 250px;
              background-color: white;
              margin: 50px;
              margin-top: 50px;
              border-radius: 25px;
              box-shadow: 5px 5px 5px 5px #d3dedc;
              position: relative;
              display: flex;
              flex-direction: row;
              justify-content: center;
            `}
          >
            <div>
              <img
                src={ss}
                css={css`
                  position: absolute;
                  z-index: 2;
                  width: 250px;
                  height: 150px;
                  right: 5px;
                  bottom: 30px;
                `}
              />
              <img
                src={rr}
                css={css`
                  position: absolute;
                  z-index: 1;
                  width: 190px;
                  height: 190px;
                  right: 100px;
                  bottom: 45px;
                `}
              />

              <img
                src={ww}
                css={css`
                  position: absolute;
                  z-index: 2;
                  width: 130px;
                  height: 20px;
                  right: 140px;
                  bottom: 200px;
                `}
              />
            </div>
          </div>
          <div
            css={css`
              width: 300px;
              height: 250px;
              background-color: white;
              margin: 50px;
              margin-top: 50px;
              border-radius: 25px;
              box-shadow: 5px 5px 5px 5px #d3dedc;
              position: relative;
              display: flex;
              flex-direction: row;
              justify-content: center;
            `}
          >
            <div>
              <img
                src={kk}
                css={css`
                  position: absolute;
                  z-index: 2;
                  width: 250px;
                  height: 150px;
                  right: 5px;
                  bottom: 30px;
                `}
              />
              <img
                src={sv}
                css={css`
                  position: absolute;
                  z-index: 1;
                  width: 190px;
                  height: 190px;
                  right: 100px;
                  bottom: 45px;
                `}
              />

              <img
                src={av}
                css={css`
                  position: absolute;
                  z-index: 2;
                  width: 175px;
                  height: 40px;
                  right: 100px;
                  bottom: 190px;
                `}
              />
            </div>
          </div>
        </main>
      </section>
    </section>
  );
}
