const input = document.getElementById('in')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

//Btn event handler

btn.addEventListener('click', () => {
    let str = input.value
    input.value = ''
    result.innerHTML = rot13(str)
})

function rot13(str) {
    let abcArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let text = str.toUpperCase()
    let txtArr = new Array()
    let position
    let stepper

    for (let i = 0; i < text.length; i++) {
        if (!abcArray.includes(text[i])) {
            txtArr.push(text[i])
        } else {
            position = abcArray.indexOf(text[i])
            if (position < 13) {
                stepper = position + 13
                txtArr.push(abcArray[stepper])
            } else {
                stepper = position - 13
                txtArr.push(abcArray[stepper])
            }
            position = 0
            stepper = 0
        }
    }
    let meaningfulText = txtArr.join("")
    return meaningfulText
}

