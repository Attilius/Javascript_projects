const input = document.getElementById('in')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

//Btn event handler

btn.addEventListener('click', () => {
    let str = input.value
    input.value = ''
    result.innerHTML = telephoneCheck(str)
})

function telephoneCheck(str) {
    let phoneNumber = str
    let validCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")", "-", " "]
    let arr = new Array()
    arr.push(phoneNumber.split(" "))

    // Specific characters check
    for (let i = 0; i < phoneNumber.length; i++) {
        if (!validCharArray.includes(phoneNumber[i])) {
            return false
        }
    }

    if (phoneNumber.length < 10) { 
        return false
    } else if (phoneNumber.charAt(0) != "1" && phoneNumber.charAt(0) != "5" &&
        phoneNumber.charAt(0) != "(") { // Phone number first character check
        return false
    } else if (arr[0][0].length == 2 && arr[0][0].charAt(0) == "1" ||
               arr[0][0].length == 2 && arr[0][0].charAt(0) == "5") { // String length and first character check in array
        return false
    } else if (phoneNumber.charAt(phoneNumber.length - 1) == ")") { // Phone number last character check
        return false
    } else if (phoneNumber.includes("(") && !phoneNumber.includes(")") ||
        phoneNumber.includes(")") && !phoneNumber.includes("(")) { // Missing backet check
        return false
    } else if (phoneNumber.length == 13 && !arr[0][0].includes("-")) { // Phone number length & missing dash check
        return false
    }
    return true
}

/* [test cases]
telephoneCheck("1 555-555-5555") should return true. <=OK

telephoneCheck("1 (555) 555-5555") should return true. <=OK

telephoneCheck("5555555555") should return true. <=OK 

telephoneCheck("555-555-5555") should return true. <=OK 

telephoneCheck("(555)555-5555") should return true. <=OK

telephoneCheck("1(555)555-5555") should return true. <=OK

telephoneCheck("555-5555") should return false. <=OK

telephoneCheck("5555555") should return false. <=OK

telephoneCheck("1 555)555-5555") should return false. <=OK

telephoneCheck("1 555 555 5555") should return true. <=OK

telephoneCheck("1 456 789 4444") should return true. <=OK

telephoneCheck("123**&!!asdf#") should return false. <=OK

telephoneCheck("55555555") should return false. <=OK

telephoneCheck("(6054756961)") should return false. <=OK

telephoneCheck("2 (757) 622-7382") should return false. <=OK

telephoneCheck("0 (757) 622-7382") should return false. <=OK

telephoneCheck("-1 (757) 622-7382") should return false. <=OK

telephoneCheck("2 757 622-7382") should return false. <=OK

telephoneCheck("10 (757) 622-7382") should return false. <=OK

telephoneCheck("27576227382") should return false. <=OK

telephoneCheck("(275)76227382") should return false. <=OK

telephoneCheck("2(757)6227382") should return false. <=OK

telephoneCheck("2(757)622-7382") should return false. <=OK

telephoneCheck("555)-555-5555") should return false. <=OK

telephoneCheck("(555-555-5555") should return false. <=OK

telephoneCheck("(555)5(55?)-5555") should return false. <=OK

telephoneCheck("55 55-55-555-5") should return false. <=OK
*/