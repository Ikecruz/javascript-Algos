const fiscalCode = (person) =>{

    function surname (sur) {
        sur = sur.toLowerCase();
        let vowel = "aeiou";
        let vowels ,cons , code;
        vowels = cons = "";
        for(let ele of sur){
            if(vowel.includes(ele)) vowels += ele;
            else cons += ele;
        }
        sur = cons + vowels;
        if (sur.length >= 3) {
            code = sur.substr(0, 3).toUpperCase();
        } else{
            code = (sur + "x".repeat(3 - sur.length)).toUpperCase();
        }

        return code;
    }

    function firstname (first) {
        first = first.toLowerCase();
        let vowel = "aeiou";
        let vowels ,cons , code;
        vowels = cons = "";
        for(let ele of first){
            if(vowel.includes(ele)) vowels += ele;
            else cons += ele;
        }

        if (cons.length > 3) {
            first = cons[0] + cons[2] + cons[3] + vowels;
        } else{
            first = cons + vowels;
        }

        if (first.length >= 3) {
            code = first.substr(0, 3).toUpperCase();
        } else{
            code = (first + "x".repeat(3 - first.length)).toUpperCase();
        }

        return code;
    }

    function last (dob, gender){
        let code = "";

        const months = {1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10:"R", 11:"S", 12:"T"};

        dob = dob.split("/");
        code += dob[2].slice(2);

        code += months[dob[1]]

        if(gender == "M") {
            dob[0] < 10 ? code += `0${dob[0]}` : code += dob[0];
        } else if(gender == "F"){
            code +=  (parseInt(dob[0]) + 40).toString();
        }

        return code;
    }

    return surname(person.surname) + firstname(person.name) + last(person.dob, person.gender);
} 

// TEST

let person1 = {
    name: "Helen",
    surname: "Yu",
    gender: "F",
    dob: "1/12/1950"
}

let person2 = {
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900"
}

console.log(fiscalCode(person1))
console.log(fiscalCode(person2))