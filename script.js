// takes an array as an argument so need a parameter and
// returns 10 times the array length for 10 minutes per exercise
/*function calculateWorkoutLength(arr) {
    return arr.length * 10;
}*/

calculateWorkoutLength = arr => arr.length * 10;
// takes two arguments an array and a number of exercises and
// returns a new array generated with random exercises based on
// the number passed into the parameter
generateRandomExercises = (arr, num) => {
    let workout = [];
    
    for(let i = 0;i < num;i++){
        let random = Math.floor(Math.random() * arr.length);

        workout.push(arr[random]);
        
    }
    return workout;
}

console.log(generateRandomExercises(exercises,10));