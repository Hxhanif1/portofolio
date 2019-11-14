function CreateOrder(){
    

    
if($("#Order").valid()){
    var myURL="https://it-emerald-hanssa-hanssahanif23.c9users.io/pizza/restapi.php/SliceoflifeDB";
    
    var myMethod="POST";
    
    var myData = {};
    myData.Size = document.getElementById("Size").value;
    myData.Crust = document.getElementById("Crust").value;
    myData.CrustStyle = document.getElementById("CrustStyle").value;
    myData.Topping = document.getElementById("Pizaa").value;
    myData.SpecInst = document.getElementById("SpecInst").value;
    myData.Side = document.getElementById("Side").value;
    myData.Drinks = document.getElementById("Drinks").value;


$.ajax({
    method: myMethod,
    data: myData,
    url: myURL,
    asynch:false
})


.done(function( msg ) {
            alert(msg);
        });




}
}