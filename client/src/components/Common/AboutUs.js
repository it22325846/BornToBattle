import React from 'react';
import "../Style/AboutUs.css";


export default function AboutUs(){
    return(
        <div className="img1">
            

            <div className="layout0">
                <h1 className="intro">2024 Srilanka Dance Championship.</h1>
                <h1 className="topic1">Born To Battle</h1>
                
                <div className="layout1">
                    <img 
                        className='img_ids'
                        src="../../Images/ids.png" 
                        alt="IDS" 
                    />
                    <img 
                        className='img_org'
                        src="../../Images/Dileepa_Ariyarathna.jpg" 
                        alt="Dileepa Ariyarathna" 
                    />
                    <p style={{color:'white', fontWeight:'bold', textAlign:'right', marginRight:'210px'}}>
                        Dileepa_Ariyarathna
                    </p>
                </div>

                <div className="layout2">
                    <p className= "Organizers" >
                        Invincible Dance Studio is dedicated to creating the new generation with many talents on dance skills. Led by the exceptional professional Dileepa Ariyarathna, we offer dance classes, workshops, choreography, social dancing, and much more.
                    </p>
                    <br/>
                    <p className= "Organizers">
                        Season 12 of our annual dance competition starts from [year]. Our dancing competition brings together dancers from all backgrounds to showcase their skills and passion for dance. Stay tuned for more details!
                    </p>
                </div>

            </div>

            <div>

            </div>

                        
        


            


            {/* <div className="overlay4">
               
                <div className="butt">
                <button type="button" class="btn btn-primary btn-lg custom-btn3">2023 MEDALISTS </button>
                <button type="button" class="btn btn-primary btn-lg custom-btn3">2023 RESULTS</button>
                </div>
            </div> */}
        
            
        </div>
               


    );
}