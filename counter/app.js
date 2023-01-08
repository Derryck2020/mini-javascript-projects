//set initial count to zero
let count = 0;

// set variables for value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//console.log(btns) //This will give a NodeList, which we can perform only forEach array method on it.

//We selected all the buttons with forEach(), as we are looping through the buttons, we add an addEventListener for each click
btns.forEach(el => { 
    el.addEventListener('click', function(e){
        //here we are using the event(e) object to get the currentTarget and classList property on each click
        console.log(e.currentTarget.classList); //we can console.log to check the classList available on the button
        //let assign it to a variable called styles which will save each time we click on our button
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count --;
        } else if (styles.contains('increase')) {
            count += 2;
        } else {
            count = 0;
            //we set another if statments for colors
        } if (count > 0){
            value.style.color = 'green';
        } if (count < 0){
            value.style.color = 'red';
        } if (count === 0) {
            value.style.color = 'black';
        };
        value.textContent = count;
    });
});
