function maximizeImage(img) {
    var maximizedImg = document.getElementById("maximized-img");
    maximizedImg.src = img.src;
    document.querySelector(".maximized-image").style.display = "block";
  }
  
  function closeMaximizedImage() {
    document.querySelector(".maximized-image").style.display = "none";
  }
  