import React from "react";




function Hero(){

    return(

        <section id="hero" class="d-flex justify-content-center align-items-center">
          <div id="heroCarousel"class="container carousel carousel-fade"
          data-ride="carousel">
        
          
        <div class="carousel-item active">
            <div class="carousel-container">
                <img src="Images/list1.jpg" alt="CLEAN WATER FOR POLONNARUWA" width="400px" height="300px"/> 
                <h2 class="animate__animated animate__backInDown">
                     CLEAN WATER FOR POLONNARUWA 
                </h2>
                <a href="!#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> DONATE</a>
                 <p class="animate__animated animate__fadeInUp">
                    
                </p> 
                <a href="!#"class="btn hero-btn animate__animated animate__backInUp">
                    Read More
                </a>
            </div>
        </div>
        
        
        <div class="carousel-item">
            <div class="carousel-container">
                <img src="Images/list2.jpg" alt="CLEAN WATER FOR ANURADHAPURA" width="400px" height="300px"/>
                <h2 class="animate__animated animate__backInDown">
                    CLEAN WATER FOR ANURADHAPURA
                </h2>
                <a  class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> DONATE</a>
                 <p class="animate__animated animate__fadeInUp"/>
                    
                
                <a href="!#"class="btn hero-btn animate__animated animate__backInUp">
                    Read More 
                    </a>
                
            </div>
        </div>
        
        
        <div class="carousel-item">
            <div class="carousel-container">
                <img src="Images/list3.jpg" alt="CLEAN WATER FOR HAMBANTHOTA" width="400px" height="300px"/>
                <h2 class="animate__animated animate__backInDown">
                  CLEAN WATER FOR HAMBANTHOTA
                </h2>
                <a href="!#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> DONATE</a>
                 <p class="animate__animated animate__fadeInUp">
                    
                </p> 
                <a href="!#"class="btn hero-btn animate__animated animate__backInUp">
                    Read More
                </a>
            </div>
        </div>
        
        <a class="carousel-control-prev"href="#heroCarousel"role="button"
        data-slide="prev">
        <span class="carousel-control-prev-icon fas fa-chevron-left"aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    
    </a>
    <a class="carousel-control-next"href="#heroCarousel"role="button"
        data-slide="next">
        <span class="carousel-control-next-icon fas fa-chevron-right"aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    
    </a>
        
        </div>
        
      </section>




    )


}


export default Hero;