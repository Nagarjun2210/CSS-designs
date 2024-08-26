const card = document.getElementById('card');
const front = document.getElementById('front');
const back = document.getElementById('back');

function flipCard() {
    front.classList.toggle('front-rotate');
    back.classList.toggle('back-rotate');
    console.log("card clicked");
};
