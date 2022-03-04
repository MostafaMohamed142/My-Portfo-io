function here() {
  document.getElementById("mee").style.display="flex";
  document.getElementById("carouselExampleCaptions").style.display="none";
  document.getElementById("contact").style.display="none";
  
}
function there() {
  document.getElementById("carouselExampleCaptions").style.display="block";
  document.getElementById("mee").style.display="none";
  document.getElementById("contact").style.display="none";
}
function where(){
  document.getElementById("contact").style.display="block";
  document.getElementById("carouselExampleCaptions").style.display="none";
  document.getElementById("mee").style.display="none";
}




document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
