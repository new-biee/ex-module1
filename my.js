function math(a, b) {
    if (a === 0) {
        if (b === 0) {
            console.log("PT vô số nghiệm");
        }
        if (b !== 0) {
            console.log("PT vô nghiệm");
        }
    }
    if (a !== 0) {
        console.log("PT có nghiệm x = " + (-b/a));
    }
}

math(5,8);