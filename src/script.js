document.getElementById('mobile-menu-button').addEventListener('click',function(){
    document.getElementById('mobile-menu').classList.toggle('hidden');
})
document.addEventListener("DOMContentLoaded", function () {
    const charts = document.querySelectorAll(".chart");
    charts.forEach(chart => {
        const percentage = parseInt(chart.getAttribute("data-percent")); 
        chart.style.width = percentage + "%";
    });
});

 // Function to scroll to the top of the page smoothly
 function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}