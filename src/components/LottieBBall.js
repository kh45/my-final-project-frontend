import React from "react";
import Lottie from "react-lottie";
// First way to import
import animationData from "../assets/4414-bouncy-basketball";
// Another way to import. This is recommended to reduce bundle size
import HashLoader from "react-spinners/HashLoader";

export default class LottieBBall extends React.Component {

    render(){

        const defaultOptions = {
          loop: true,
          autoplay: true, 
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        };
    
        return(
          <div>
            <Lottie options={defaultOptions}
                  height={600}
                  width={600}
            />
          </div>
        )
      }

}