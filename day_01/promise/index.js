const getData = async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
}

getData();



// const mypromise = new Promise((resolve, reject) => {
//     let marks =80;
//     if (marks >= 60) {
//         resolve("You are passed");
//     } else {
//         reject("You are failed");
//     }
// })
// mypromise.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// });