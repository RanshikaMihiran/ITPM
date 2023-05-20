import React from "react";




function Donation(){

  return(
        
    <section class="mt-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="text-center mb-55">
                    <h3>Make a Donation</h3>
                </div>
            </div>
        </div>
        
        <div class="row justify-content-center">
            <div class="col-lg-6">
            <form class="donation-form">
               <div class="row align-items-center">
                <div class="col-md-4">
             <div class="amount">
           <div class="input-field">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span></div>
                             
            <input type="text"/>
           
                     </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-8">
                         <div class="amount">
                       <div class="need d-flex align-items-center
                        justify-content-between">
                        <div class="select">
                            <h5>Select Amount</h5>
                        </div>
                        <div class="funds">
                            <input type="radio"name="radio-group"/>
                            <label for="fund-1">10</label>
                        </div>
                        <div class="funds">
                            <input type="radio"name="radio-group"/>
                            <label for="fund-2">50</label>
                        </div>
                        <div class="funds">
                            <input type="radio"name="radio-group"/>
                            <label for="Other">Other</label>
                        </div>
                    
                    
                    </div>
                       
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
                <div class="donation-btn text-center">
                    <a href="!#"class="btn btn-don">Donate Now</a>
                </div>
                </div>
            </div>
        </div>
    
     </section>



  )


  }


  
  export default Donation;
