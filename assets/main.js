/* Lutz Slab Leak Pros (?v=1) */
(function(){
  // Mobile menu
  var btn = document.getElementById('menuBtn');
  var links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', function(){ links.classList.toggle('open'); });
  }
  // Service area "view all" expander
  var toggle = document.getElementById('areasToggle');
  var areas = document.getElementById('areasList');
  if (toggle && areas) {
    toggle.addEventListener('click', function(e){
      e.preventDefault();
      areas.classList.toggle('open');
      toggle.textContent = areas.classList.contains('open') ? 'Show fewer areas' : 'View all service areas';
    });
  }
  // Footer year
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();
