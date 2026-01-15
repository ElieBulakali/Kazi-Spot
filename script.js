// Mark all elements as active immediately on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('active');
  });
  
  console.log("Landing page ready");
});
