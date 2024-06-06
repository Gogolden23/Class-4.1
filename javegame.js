function Doit() {

    return Math.floor(Math.random() * 10) + 1;

}
 
function trade() {
    let deck1 = Doit();
    let deck2 = Doit();
    let sum = deck1 + deck2;
    let result = "";
    
    if (sum === 30 || sum === 15 ) {
        result = 'You lose $50!!'
    } else if (sum ===  25 || sum === 20 || sum === 10) {
        result = 'You win $100!!';

    }
    else {
        result = 'Keep trying or Cash out?'
    }
    document.getElementById("result").innerHTML = result;


}

function eaiser() {
    return Math.floor(Math.random() * 6) + 1;
   
}
function Swap() {
    let roll1 = eaiser();
    let roll2 = eaiser();
    let sum = roll1 + roll2;
    let result2 = "";

    if (sum === 6 || sum === 11){
        result2 ='You won $100'
        }
        else if (sum === 1|| sum === 5 || sum === 4) {
            result2 = 'You lose $50'

    } 
    else {
        result2 = 'Keep Trying come on!!'
      
    }
    document.getElementById("result2").innerHTML = result2;

}



 
       
 
            
            





