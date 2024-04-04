document.getElementById('mobile-menu-button').addEventListener('click',function(){
    document.getElementById('mobile-menu').classList.toggle('hidden');
})

 // Function to scroll to the top of the page smoothly
 function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
        
    });
}

// JavaScript code to toggle light mode
document.getElementById('switch-mode').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});

