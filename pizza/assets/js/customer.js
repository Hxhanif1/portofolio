function CreateCustomer(){
  if($("#Customer").valid()){
      var myURL="https://it-emerald-hanssa-hanssahanif23.c9users.io/pizza/restapi.php/SliceoflifeDB";
      
      var myMethod = "POST";
      
      
      var myData = {};
      myData.FirstName = document.getElementById("FirstName").value;
      myData.LastName = document.getElementById("LastName").value;
      myData.MiddleInitial = document.getElementById("MiddleInitial").value;
      myData.City = document.getElementById("City").value;
      myData.State = document.getElementById("State").value;
      myData.Zip = document.getElementById("Zip").value;
      myData.College = document.getElementById("College").value;
      myData.Dorm = document.getElementById("Dorm").value;
      myData.creditnum = document.getElementById("creditnum").value;
      myData.creditexpdate = document.getElementById("creditexpdate").value;
      myData.ccv = document.getElementById("ccv").value;
      myData.Phone = document.getElementById("Phone").value
     
     
      
          $.ajax({
            method: myMethod,
            data: myData,
            url: myURL,
            asynch: false
          })
          
            .done(function( msg ) {
            alert(msg);
        });
  }  

}

(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
});

$(document).ready(function() {
 
 
});$('.gallery').cycle({ 
    fx:      'custom', 
    cssBefore: {  
        
        opacity: 1, 
        display: 'block' 
    }, 
    animOut: {  
        opacity: 0  
    }, 
   
    cssAfter: {  
        zIndex: 0 
    }, 
    delay: -3000 

 });

