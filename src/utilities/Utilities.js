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
    if(word.length < 5){
        return 5;
    }
    return word.length - numSpace;
}

export const calculateResultsForRow = (row, word) => {

    let arr = word.split("");
    let containsArray = [];

    console.log(arr.filter((el) => el === "E"));

    for(let i = 0; i < row.length; i++){
        console.log(containsArray);
        if(arr.includes(row[i].value)){
            if(!containsArray.includes(row[i].value)){
            
                row[i].result = "contains";
                if(row[i].value === word.charAt(i)){
                    row[i].result = "correct";
                    arr[i] = 0;
                }
                else{
                    containsArray.push(row[i].value);
                }
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