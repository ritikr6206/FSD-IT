const mypromise = new Promise((resolve, reject) => {
    let marks =80;
    if (marks >= 60) {
        resolve("You are passed");
    } else {
        reject("You are failed");
    }
})
mypromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});