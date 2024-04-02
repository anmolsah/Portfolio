document.getElementById('mobile-menu-button').addEventListener('click',function(){
    document.getElementById('mobile-menu').classList.toggle('hidden');
})

 // Function to scroll to the top of the page smoothly
 function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// JavaScript code to toggle light mode
document.getElementById('switch-mode').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});



  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyChWA8pJMA_QdJG-Jph0i0iWeZZiaJJZus",
    authDomain: "anmolsahportfolio.firebaseapp.com",
    projectId: "anmolsahportfolio",
    storageBucket: "anmolsahportfolio.appspot.com",
    messagingSenderId: "432687667525",
    appId: "1:432687667525:web:c134ec4c65d5bbeb6d462c",
    measurementId: "G-J8Q2BJ9NFY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
