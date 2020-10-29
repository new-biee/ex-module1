class Char {
    constructor(str) {
        this.str = str;
    }

    check(charArr) {
        let count = 0;
        for (let i = 0; i < charArr.length; i++) {
            for (let j = 0; j < this.str.length; j++) {
                if (this.str.charAt(j) == charArr[i]) {
                    count++;
                }
            }
        }
        if (count == 0) {
            return false;
        }
        return count;
    }

    setChar(str) {
        this.str = str;
    }
}

let string = new Char();
string.setChar("vutuananh");
let char = string.check(["a", "o", "e", "u", "i"]);
console.log(char);