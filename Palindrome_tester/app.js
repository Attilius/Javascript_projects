const input = document.getElementById('in')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

//Btn event handler

btn.addEventListener('click', () => {
    let str = input.value
    input.value = ''
    result.innerHTML = palindrome(str)
})

function palindrome(str) {
    let charArray = [" ", ",", ".", "-", "_", "/", "`\`", "(", ")"]
    let text = str.toLowerCase()
    for (let k = 0; k < charArray.length; k++) {
        if (text.includes(charArray[k])) {
            text = text.split(charArray[k])
            text = text.join("")
        }
    }

    let arr = new Array()
    let arr2 = new Array()
    let result = ""
    for (let i = 0; i < text.length; i++) {
        arr.push(text[i])
    }

    for (let j = arr.length - 1; j >= 0; j--) {
        arr2.push(arr[j])
    }
    result = arr2.join("")
    if (text !== result) {
        return false
    }
    return true
}

