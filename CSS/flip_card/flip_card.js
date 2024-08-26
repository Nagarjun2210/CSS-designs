const card = document.getElementById('card');
const front = document.getElementById('front');
const back = document.getElementById('back');

function flipCard() {
    front.classList.add('front-rotate');
    back.classList.add('back-rotate');
    console.log("card clicked");
};

function flipBack() {
    front.classList.remove('front-rotate');
    back.classList.remove('back-rotate');
    console.log("card clicked");
}
