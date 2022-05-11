export const getInitialBoardState = (word) => {
    //Status = {"correct", "incorrect", "letterExists"};
    let arr = [];
    for(let i = 0; i < getHeightFromWord(word); i++){
        let row = [];
        for(let j = 0; j < word.length; j++){
            if(word[j] === " "){
                row.push({ value: "_", status: "space" });
            }
            else{
                row.push({ value: " ", status: "empty" });
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
