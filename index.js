  var randomNumber1=Math.floor(Math.random() * 6 ) + 1;

  var randomImageDice1= "images/dice" + randomNumber1 + ".png";

  var image1 = document.querySelector("img.img1");

  image1.setAttribute("src",randomImageDice1);

  var randomNumber2=Math.floor(Math.random() * 6 ) + 1;

  var randomImageDice2= "images/dice" + randomNumber2 + ".png";

  var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageDice2);

  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩player1 win!";
  }
  else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="player2 win!🚩";
  }
  else{
    document.querySelector("h1").innerHTML="Draw!";
  }
