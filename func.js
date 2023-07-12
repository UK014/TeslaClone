function examine(){
    window.open("tesla.html",'_self');
}
function buy(){
  window.open("index.html",'_self');
}
document.addEventListener('DOMContentLoaded', function() {
    
    const insideDiv = document.getElementById('inside');
    const featuresContinued = document.getElementById('features-continued');
  

    const leftDiv = document.getElementById('left');
    const rightDiv = document.getElementById('right');
  
    
    const options = {
      threshold: 0.5 
    };
  
    
    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          leftDiv.classList.remove('slideup');
          rightDiv.classList.remove('slideup');
          leftDiv.style.visibility = 'hidden';
          rightDiv.style.visibility = 'hidden';
          
        } else {
          
          leftDiv.classList.add('slideup');
          rightDiv.classList.add('slideup');
          leftDiv.style.visibility = 'visible';
          rightDiv.style.visibility = 'visible';
        }
      });
    }
  
    
    const observer = new IntersectionObserver(handleIntersection, options);
  
    
    observer.observe(insideDiv);
  });
  