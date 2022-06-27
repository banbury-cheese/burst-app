import React from "react";
import { ReactComponent as HeroGraph } from "../../Assets/SVGs/hero_graph .svg";
import { ReactComponent as HeroGraphArrow } from "../../Assets/SVGs/arrow.svg";


const Home = () => {
  return (
    <main>
      <section className="hero_section">
        <div className="wrapper">
          <div className="hero_section__body">
            <div className="hero_content">
              <div className="hero_content__text">
                <h1 className="hero_title">
                  Invest Without <br /> Guesswork
                  <p>
                    Burst takes care of the heavy lifting so you can just sit
                    back and watch your money grow with <span>Web 3</span>
                  </p>
                </h1>
              </div>
              <div className="hero_content__cards">
                <div
                  className="hero_content__card card_1"
                  id="hero_card__investmentStrategy"
                >
                  <span>Invesment Strategy</span>
                  Diversified
                </div>
                <div
                  className="hero_content__card card_2"
                  id="hero_card__yourBalance"
                >
                  <span>Your Balance</span>
                  <h4 id="hero_card__yourBalance__amount">$10,521.<span>8532</span></h4>
                  <div id="hero_card__yourBalance__profit"> <HeroGraphArrow/> $521.85</div>
                  <HeroGraph />
                </div>
                <div
                  className="hero_content__card card_3"
                  id="hero_card__savingsBucket"
                >
                  <span>Savings bucket</span>
                  Optimized for performance
                </div>
              </div>
            </div>
            <div className="hero_JoinWaitlistForm">
              <span className="hero_title">Join Burst Waitlist:</span>
              <form className="hero_JoinWaitlistForm__Form">
                <input
                  placeholder="Your Email"
                  type="email"
                  className="hero_JoinWaitlistForm__FormInputEmail"
                ></input>
                <button className="hero_JoinWaitlistForm__SubmitFormButton">
                  Get Early Access
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
