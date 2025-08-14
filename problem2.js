function onlyCharacter(input) {
    if (typeof input !== "string") {
        return "Invalid";
    }
    return input.replace(/\s+/g, "").toUpperCase();
}
console.log(onlyCharacter(true));
