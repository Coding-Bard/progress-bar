window.addEventListener('scroll', updateBar);

function updateBar() {

const progressBar = document.querySelector('.progress');

//Getting the data-size value of progressBar
let {size} = progressBar.dataset;

const main = document.querySelector('.main');
//Getting the height of main 
const mainTextHeight = main.clientHeight;
//Text offset from top of the page
const textOffset = main.offsetTop;
//Getting the window height
const windowHeight = window.innerHeight;
//Getting offset of page height
const windowPageOffset = window.pageYOffset;

//Calculating the percentage of progress
let scrolled = windowHeight + windowPageOffset - textOffset;
let percent = mainTextHeight / 100;
let progress = scrolled / percent;


size = progress.toString();

//Because value can be higher than 100%, in this way we stop the progress on 100%
if(size <= 100) {
    progressBar.style.width = `${size}%`;
} else {
    progressBar.style.width = `100%`;
}

}