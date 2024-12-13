let isOpened = false;

function openEnvelope() {
  const flap = document.getElementById('flap');
  const letter = document.getElementById('letter');
  const circle = document.getElementById('circle');
  const envelope = document.getElementById('envelope');

  if (!isOpened) {
    
    flap.style.transform = "rotateX(-180deg)";
    letter.style.transform = "translateY(0)";
    circle.style.top = "30%";  
    circle.style.opacity = "0";  
    envelope.classList.add("open");  
    isOpened = true;
  } else {
    
    flap.style.transform = "rotateX(0)";
    letter.style.transform = "translateY(100%)";
    circle.style.top = "50%";  
    circle.style.opacity = "1"; 
    envelope.classList.remove("open");  
    isOpened = false;
  }
}
