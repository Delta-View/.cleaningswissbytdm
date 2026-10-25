(function(){
  var s=document.querySelector('.sticky'),t=document.getElementById('devis');
  if(!s||!t||!('IntersectionObserver' in window))return;
  new IntersectionObserver(function(e){s.classList.toggle('off',e[0].isIntersecting)},{threshold:.2}).observe(t);
})();
