var images = ["images/slide1.jpg", "images/slide2.jpeg", "images/slide3.jpeg", "images/slide4.jpeg","images/slide5.png"];
var i = 0; 
var time = 2000; 
var timeoutId;

function changeImg(){
  if(i < images.length - 1){
    i++; 
  } else { 
    i = 0;
  }
  document.getElementById("slide").src = images[i];
  timeoutId = setTimeout(changeImg, time);
}

function prevImage(){
  if(i > 0){
    i--; 
  } else { 
    i = images.length - 1;
  }
  document.getElementById("slide").src = images[i];
  resetSlideshow();
}

function nextImage(){
  if(i < images.length - 1){
    i++; 
  } else { 
    i = 0;
  }
  document.getElementById("slide").src = images[i];
  resetSlideshow();
}

function resetSlideshow() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(changeImg, time); 
}

window.onload = function() {
  changeImg(); 
  document.getElementById("prevButton").addEventListener("click", prevImage);
  document.getElementById("nextButton").addEventListener("click", nextImage);
}
