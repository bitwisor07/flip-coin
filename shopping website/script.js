function flipCoin() {
    var coin = document.querySelector('.coin');
    coin.classList.add('animate');
  
    setTimeout(function() {
      coin.classList.remove('animate');
      var result = Math.random() < 0.5 ? 'Heads' : 'Tails';
      alert('Coin result: ' + result);
    }, 1000);
  }