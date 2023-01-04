
const reviews = [
    {
        id: 1,
        name: "enoch antoei",
        job: "web developer",
        pic: "./enoch.jpg",
        text: "The staff was great. The receptionists were very helpful and answered all our questions. The room was clean and bright, and room service was always on time. Will be coming back!",
    },
    {
        id: 2,
        name: "keziah amber",
        job: "ux designer",
        pic: "./keziah.jpg",
        text: "The tool X has really automated some of our company's processes. We now spend less time doing manual work. It's making [problem] very easy for us. Thanks to its scheduling feature.",
    },
    {
        id: 3,
        name: "fred davies",
        job: "consultant",
        pic: "./fred.jpg",
        text: "I got a pair of boots from store X and I'm very satisfied. They are high-quality and worth the money. The store also offered free shipping at that price so that's a plus",
    },
    {
        id: 4,
        name: "susan smith",
        job: "secretary",
        pic: "./susan.jpg",
        text: "My husband and I went for dinner in restaurant X and really enjoyed the atmosphere. The food was fresh and delicious and the best part was that the chef sent us a dessert.",
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.querySelector('.info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item of reviews object to 0, because is index based
let currentItem = 0;

//load initial item
/*
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    console.log(item)
    img.src = item.pic;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}); 

we refactor it to make more reusable below
*/

window.addEventListener('DOMContentLoaded', function () {
    showIndvidual();
});

//show the individual based on item
function showIndvidual() {
    const item = reviews[currentItem];
    console.log(item)
    img.src = item.pic;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Acessing next individual
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    };
    showIndvidual();
})


// Acessing previous individual
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    };
    showIndvidual();
});

// random button
randomBtn.addEventListener('click', () => {
currentItem =  Math.floor(Math.random() * reviews.length);

showIndvidual();

});