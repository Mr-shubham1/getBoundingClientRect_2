function rectanglemovekaro(){

var rectangle = document.querySelector("#rectangle");
var container = document.querySelector("#container");

container.addEventListener("mousemove",function(dets){
    // console.log(dets);
    var containerlocation = container.getBoundingClientRect();
    if(dets.clientX > containerlocation.width/3 && dets.clientX < containerlocation.width - containerlocation.width/3 )
    {
        gsap.to(rectangle,{
        
            left : dets.clientX,
        })

    }
    
})





}

rectanglemovekaro();