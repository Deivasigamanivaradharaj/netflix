import React from 'react'

function Section1() {
  return (
    <div className="home-image">
        <div className="home-image-text">
        <img className="money" src="homeassests/monetharis.png" alt=""></img>
            <p>
                Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.
            </p>

            <a style={{textDecoration:"none"}} href="homeassests/MoneyH.mp4">
            <div className="play-button">
              <p>Play</p>
            <img src="homeassests/play.png" alt=""></img>
            </div>
            </a>
        </div>

    </div>
  )
}

export default Section1