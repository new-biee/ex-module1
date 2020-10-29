function findValue(id, arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === id){
            return true;
        }
    }return false;
}
console.log(findValue(0,[1,2,3,5,15,6,7]));