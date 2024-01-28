

function Final({randNum, term}){
    let result= "";
    if(term){
        if(randNum > term){
            result = "Lower";
        }else if (randNum < term) {
            result = "Higher";
        } else if(randNum == term){
            result = "Yeah your guess is correct";
        }else{
            result="Enter valid input!"
        }
    }

    return <h3>You Guessed: {result}</h3>
}

export default Final;