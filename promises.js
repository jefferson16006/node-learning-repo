// const fetchData = new Promise((resolve, reject) => {
//     const isSuccessful = true
//     setTimeout(() => {
//         if(isSuccessful){
//             resolve("Data fetched successfully!")
//         }else{
//             reject("Error fetching data!")
//         }
//     }, 1500)
// })

// fetchData
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })

const faultyStep = () => {
    return new Promise((resolve, reject) => {
        isSuccess = false
        if (isSuccess) {
            setTimeout(() => resolve('Correct'), 1000)
        }else{
            setTimeout(() => reject('Something went wrong!'), 1000)
        }
    })
}

faultyStep()
    .then(result => console.log(result))
    .catch(err => console.log('Error:', err))