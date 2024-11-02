// function codingScoreCheck(arrOfmarks, cutOffMarks) {
//     let myPromise = new Promise((resolve, reject) => {
//         let averageScore = arrOfmarks.reduce((acc, num) => acc + num, 0) / arrOfmarks.length

//         setTimeout(() => {
//             if (averageScore >= cutOffMarks) {
//                 resolve(`your average score is ${averageScore}`)
//             } else {
//                 reject("Sorry you haven't cleared the coding round")
//             }
//         }, 3000)
//     })
//     myPromise
//         .then((message) => console.log(message))
//         .catch((error) => console.log(error))
// }

//codingScoreCheck([54, 76, 42, 43, 34, 65, 78], 50)


// question 2

// function HUKUMUScoreCheck(arrOfmarks,cuttOff){

//     let promise = new Promise((res,rej)=>{
//         let averageScore = arrOfmarks.reduce((acc,num)=>acc+num,0)/arrOfmarks.length
//         setTimeout(()=>{
//             console.log (Math.floor(averageScore))
//             if(averageScore >= cuttOff){
//                 res(`your average score is ${averageScore}`)
//             }else{
//                 rej(`Sorry you haven't cleared the HUKUMU round`)
//             }
//         },2000)

//     })
//     promise.then((message)=>console.log(message)).catch((err)=>console.log(err))

// }

// HUKUMUScoreCheck([54, 76, 42, 83, 34, 65, 78],40)


function unitMovementCheck(averageCodingScore, averageHukumuScore, cuttOffMark) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let averageScore = (averageCodingScore + averageHukumuScore) / 2
            if (averageScore >= cuttOffMark) {
                res(`average score : ${averageScore}`)
            } else {
                rej(`Sorry you haven't cleared the final cutoff`)
            }
        }, 2000)
    })

}

unitMovementCheck(50, 60, 80)
    .then((message) => console.log(message))
    .catch((error) => console.log(error))
