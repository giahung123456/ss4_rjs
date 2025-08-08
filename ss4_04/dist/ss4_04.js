function check(input) {
    if (typeof input === "string") {
        console.log(input.length);
    }
    else if (typeof input === "number") {
        if (input % 2 === 0) {
            console.log(`chẵn`);
        }
        else {
            console.log(`lẻ`);
        }
    }
}
check(`kuavd`);
export {};
//# sourceMappingURL=ss4_04.js.map