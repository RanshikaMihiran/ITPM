import React from "react";




function Aboutus(){

  return(


       
    <section class="mt-5">
        <div class="container"/>
            <div class="row justify-content-center mb-5">
                <div class="col-md-8 text-center heading-section">
                    <span>ABOUT US</span>
                    <h2 class="mb-3">ABOUT US | MISSION & VISSION </h2>
                </div>
            </div>
            
            <div class="row tabs mt-4"/>
                <div class="col-md-4">
                    <ul class="nav nav-pills nav-fill d-md-flex d-block flex-column">
                        <li class="nav-item text-left">
                            <a class="nav-link active py-4"data-toggle="tab"
                            href="#about-1">About Us</a>
                        </li>
                        <li class="nav-item text-left">
                          <a class="nav-link py-4"data-toggle="tab"
                          href="#about-2"> Our Mission</a>
                      </li>
                      <li class="nav-item text-left">
                          <a class="nav-link py-4"data-toggle="tab"
                          href="#about-3">Our Vision</a>
                      </li>
                      
                    </ul>
                </div>

                <div class="col-md-8"/>
                    <div class="tab-content"/>
                        <div class="tab-pane container p-0 active"id="about-1">
          {/* <div class="img" style="background-image: url(Images/about1.jpg);"/></div> */}
          <h3>About Us</h3>
          <p>Our organizations providing clean water to rural areas work to improve access to safe water, often through partnerships 
            with local communities and governments. We are work includes building infrastructure and providing 
                education and training on water management and hygiene practices.
            Donations and partnerships are critical to funding for our efforts.</p>
                </div>

                <div class="tab-pane container p-0"id="about-2">
            {/* <div class="img" style="background-image: url(Images/About2.jpg);"></div>    */}
           <h3>Our Mission</h3>
             <p>Our mission is providing clean water for rural areas is to improve access to safe and sustainable water, 
                with the ultimate goal of improving community health and wellbeing, promoting economic development, and empowering people.</p>
                  </div>

                  <div class="tab-pane container p-0"id="about-3">
            {/* <div class="img" style="background-image: url(Images/about3.jpg);"></div> */}
           <h3>Our Vission</h3>
             <p>Our vision is providing clean water for rural areas is a world where every person has 
                access to safe and sustainable water, and communities have the resources and knowledge to maintain it over the 
                long term, fulfilling the basic human right to clean water for all.</p>
                    </div>
            
            </section>
                
           
    

             
 


     
         
       )



 }

 


 export default Aboutus;
