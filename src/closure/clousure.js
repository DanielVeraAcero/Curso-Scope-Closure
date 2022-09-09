
function greetings() {
    let userName = 'Daniel'
    function displayUserName() {
        return `Hello ${userName}`
    }
    return displayUserName
}

const g = greetings();
console.log(g);
console.log(g());