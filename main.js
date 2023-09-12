//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

function findDogNames(digString, dogNames){

    for (let name of dogNames){
        
        let found = dogString.includes(name)
        if ( found == true) {
            console.log("Matched dogname")
        } else {
            console.log("Thats a damn cat")
        }
    }
}

findDogNames(dogString, dogNames)



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]
console.log(arr)

function signatureMove(arr){

    for (let index = 0; index < arr.length; index++){

        // if(index % 2 == 0){
        //     arr.splice(index, 1, "even index");
        // }

        if(index == 0){
            arr.splice(index, 1, "Kamehameha")
        } else if(index == 2){
            arr.splice(index, 1, "Burning Attack")
        } else if(index == 4){
            arr.splice(index, 1, "Ultimate Kamehameha")
        }
    }
}

signatureMove(arr)

//Codewars problems

// Question 1

//Python version
// def number_to_string(num):
//     string = str(num)
//     return string

//JavaScript version
function numberToString(num) {
    let string = num.toString()
    return string
  }

// Question 2

//Python version
// def solution(string):   
//     new_string = string[::-1]
//     return new_string

//JavaScript version
function solution(str){
    return str.split('').reverse().join('');  //split() divides string into an array;\
    // reverse() reverses the array I made; join() joins the array into a string again.
}
  