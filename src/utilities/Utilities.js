export const getInitialBoardState = (word) => {
    let arr = [];
    for(let i = 0; i < 6; i++){
        let row = [];
        for(let j = 0; j < word.length; j++){
            if(word[j] === " "){
                row.push("_");
            }
            else{
                row.push(" ");
            }
        }
        arr.push(row);
    }
    return arr;
}