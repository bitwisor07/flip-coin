function flipCoin() {
    var coin = document.querySelector('.coin');
    coin.classList.add('animate');
    var img = document.getElementById("myimage");
    setTimeout(function() {
      coin.classList.remove('animate');
      var result = Math.random() < 0.5 ? "res\\image1.jpg" : "res\\image2.jpg";
      img.src = result; 
    }, 100);
  }