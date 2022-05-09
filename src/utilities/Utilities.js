export const getInitialBoardState = (word) => {
    //Status = {"correct", "incorrect", "letterExists"};
    let arr = [];
    for(let i = 0; i < 6; i++){
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