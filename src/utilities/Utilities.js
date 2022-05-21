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

const getHeightFromWord = (word) => {
    const numSpace = word.split(" ").length - 1
    if(word.length < 6){
        return 6;
    }
    return word.length - numSpace;
}

export const calculateResultsForRow = (row, word) => {

    for(let i = 0; i < row.length; i++){
        if(word.includes(row[i].value)){
            row[i].result = "contains";
            if(row[i].value === word.charAt(i)){
                row[i].result = "correct";
            }
        }
        else{
            row[i].result = "incorrect";
        }
    }
}