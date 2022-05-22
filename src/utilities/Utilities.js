import { people } from "../resources/people";

export const getInitialBoardState = (word) => {
    //Status = {"correct", "incorrect", "letterExists"};
    let arr = [];
    for(let i = 0; i < getHeightFromWord(word); i++){
        let row = [];
        for(let j = 0; j < word.length; j++){
            if(word[j] === " "){
                row.push({ value: "_", status: "space", result: "null" });
            }
            else{
                row.push({ value: " ", status: "empty", result: "null" });
            }
        }
        arr.push(row);
    }
    return arr;
}

export const getHeightFromWord = (word) => {
    const numSpace = word.split(" ").length - 1
    if(word.length < 5){
        return 5;
    }
    return word.length - numSpace;
}

export const calculateResultsForRow = (row, word) => {
    let lettersCount = getLetterCounts(word);
    let arr = word.split("");

    for(let i = 0; i < row.length; i++){
        if(row[i].value === word.charAt(i)){
            row[i].result = "correct";
            lettersCount[row[i].value]--;
        }
    }

    for(let i = 0; i < row.length; i++){
        if(!(row[i].result === "correct")){
            if(arr.includes(row[i].value)){

                row[i].result = "contains";

                if(lettersCount[row[i].value] > 0){
                    lettersCount[row[i].value]--;
                }
                else{
                    row[i].result = "incorrect";
                }
            }
            else{
                row[i].result = "incorrect";
            }
        }
    }
}

const getLetterCounts = (word) => {
    let letters = {};
    for(let i = 0; i < word.length; i++){
        if(letters[word[i]]){
            letters[word[i]]++;
        }
        else{
            letters[word[i]] = 1;
        }
    }
    return letters; 
}

export const getPerson = () => {
    // const today = new Date();
    // if(people[today.getDate()%20] == undefined){
    //     return people[0];
    // }
    // return people[today.getDate()%20];
    // return{name: "bob"}
    return people[0];
}