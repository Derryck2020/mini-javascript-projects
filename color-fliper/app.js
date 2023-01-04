const colors = ['blue', 'green', 'rgba(122,75,189)', '#f15025'] //these represent that we are going to have with different types.

const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    //get random number between 0 - 3;
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

//this function will generate random numbers from 0 - 3 which correspond to the colors array
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
};
