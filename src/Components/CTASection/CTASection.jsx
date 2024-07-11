import React from "react";
import './CTASection.css'

export const CTASection = () => {
    return(
        
           <div className="CTASection">
            <div className="group">
                <h2>SUBSCRIBE</h2>
                    <p>
                        Sign Up To Our Newsletter
                    </p>
                    <input type="text" value={"Your Email"}/>
            </div>

                <button className="Submit"> Submit</button>

            </div> 
        
    )
}