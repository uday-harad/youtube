
var index = 0;

const slider = () =>{
  var i ;
  var x = document.querySelectorAll(".mySlides");
  
  for( i=0; i < x.length ; i++)
  {
 
    x[i].style.display = "none";
  }
  index++;

  if(index > x.length)
  {
    index = 1;
  }

  x[index-1].style.display = "block";
  setTimeout(slider,2000);

}

slider();
