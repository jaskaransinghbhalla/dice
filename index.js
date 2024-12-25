

function execute(){function rollDice1(){
    var a = Math.random();
    a=Math.floor(a*6);
    a+=1;
    return a;
}

function rollDice2(img){
    var a=rollDice1()
    switch(a){
        case 1:
            document.querySelector(img).setAttribute("src","img/dice1.png");
            break;
        case 2:
            document.querySelector(img).setAttribute("src","img/dice2.png");
            break;
        case 3:
            document.querySelector(img).setAttribute("src","img/dice3.png");
            break;
        case 4:
            document.querySelector(img).setAttribute("src","img/dice4.png");
            break;
        case 5:
            document.querySelector(img).setAttribute("src","img/dice5.png");
            break;
        case 6:
            document.querySelector(img).setAttribute("src","img/dice6.png");
            break;
    }
}
var randomNumber1 = rollDice2(".img1");
var randomNumber2 = rollDice2(".img2");

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
}


