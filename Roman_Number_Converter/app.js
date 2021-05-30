const input = document.getElementById('in')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

//Btn event handler

btn.addEventListener('click', () => { 
    let num = parseInt(input.value)
    input.value = ''
    result.innerHTML = convertToRoman(num)
})

function convertToRoman(num) {
    // Basic roman numbers
    const one = "I"
    const five = "V"
    const ten = "X"
    const fifty = "L"
    const hundred = "C"
    const fivehundred = "D"
    const thousand = "M"
    // Return variables for local value functions
    let romanOnes = ""
    let romanTens = ""
    let romanHundreds = ""
    let romanThousands = ""
    // Loop variables 1-3
    let resultOnes = ""
    let resultTens = ""
    let resultHundreds = ""
    let resultThousands = ""
    // Parameters of local value functions
    let ones
    let tens
    let hundreds
    let thousands
    let strNum = num.toString() // Number convert to string for local value test
    let arr = new Array()

    for (let j = 0; j < strNum.length; j++) {
        arr.push(strNum[j]) // Loading local values into an array
    }
    // Calling local value functions
    switch (arr.length) {
        case 1:
            ones = parseInt(arr[0])
            onesItem(ones)
            break;
        case 2:
            ones = parseInt(arr[1])
            tens = parseInt(arr[0])
            if (tens > 0 && ones > 0) {
                onesItem(ones)
                tensItem(tens)
            } else {
                tensItem(tens)
            }
            break;
        case 3:
            ones = parseInt(arr[2])
            tens = parseInt(arr[1])
            hundreds = parseInt(arr[0])
            if (hundreds > 0 && tens > 0 && ones > 0) {
                onesItem(ones)
                tensItem(tens)
                hundredsItem(hundreds)
            } else if (hundreds > 0 && tens > 0) {
                tensItem(tens)
                hundredsItem(hundreds)
            } else if (hundreds > 0 && ones > 0) {
                onesItem(ones)
                hundredsItem(hundreds)
            } else {
                hundredsItem(hundreds)
            }

            break;
        case 4:
            ones = parseInt(arr[3])
            tens = parseInt(arr[2])
            hundreds = parseInt(arr[1])
            thousands = parseInt(arr[0])
            if (thousands > 0 && hundreds > 0 && tens > 0 && ones > 0) {
                onesItem(ones)
                tensItem(tens)
                hundredsItem(hundreds)
                thousandsItem(thousands)
            } else if (thousands > 0 && hundreds > 0 && tens) {
                tensItem(tens)
                hundredsItem(hundreds)
                thousandsItem(thousands)
            } else if (thousands > 0 && hundreds > 0 && ones > 0) {
                onesItem(ones)
                hundredsItem(hundreds)
                thousandsItem(thousands)
            } else if (thousands > 0 && tens > 0 && ones > 0) {
                onesItem(ones)
                tensItem(tens)
                thousandsItem(thousands)
            }else if (thousands > 0 && hundreds > 0) {
                hundredsItem(hundreds)
                thousandsItem(thousands)
            } else if (thousands > 0 && tens > 0) {
                tensItem(tens)
                thousandsItem(thousands)
            } else if (thousands > 0 && ones > 0) {
                onesItem(ones)
                thousandsItem(thousands)
            } else {
                thousandsItem(thousands)
            }
            break;

        default:
            break;
    }
    
    function onesItem(ones) {
        for (let i = 1; i < 4; i++) {
            resultOnes += one
            if (ones === i) {
                romanOnes = resultOnes
            }
        }

        switch (ones) {
            case 4:
                romanOnes = one + five
                break;
            case 5:
                romanOnes = five
                break;
            case 9:
                romanOnes = one + ten
                break;

            default:
                break;
        }

        let five_ = five
        for (let i = 6; i < 9; i++) {
            five_ += one
            if (ones === i) {
                romanOnes = five_
            }
        }
        return romanOnes
    }

    function tensItem(tens) {
        for (let i = 1; i < 4; i++) {
            resultTens += ten
            if (tens === i) {
                romanTens = resultTens
            }
        }

        switch (tens) {
            case 4:
                romanTens = ten + fifty
                break;
            case 5:
                romanTens = fifty
                break;
            case 9:
                romanTens = ten + hundred
                break;

            default:
                break;
        }

        let fifty_ = fifty
        for (let i = 6; i < 9; i++) {
            fifty_ += ten
            if (tens === i) {
                romanTens = fifty_
            }
        }
        return romanTens
    }

    function hundredsItem(hundreds) {
        for (let i = 1; i < 4; i++) {
            resultHundreds += hundred
            if (hundreds === i) {
                romanHundreds = resultHundreds
            }
        }

        switch (hundreds) {
            case 4:
                romanHundreds = hundred + fivehundred
                break;
            case 5:
                romanHundreds = fivehundred
                break;
            case 9:
                romanHundreds = hundred + thousand
                break;

            default:
                break;
        }

        let fivehundred_ = fivehundred
        for (let i = 6; i < 9; i++) {
            fivehundred_ += hundred
            if (hundreds === i) {
                romanHundreds = fivehundred_
            }
        }
        return romanHundreds
    }

    function thousandsItem(thousands) {
        for (let i = 1; i < 4; i++) {
            resultThousands += thousand
            if (thousands === i) {
                romanThousands = resultThousands
            }
        }
        return romanThousands
    } 
    return romanThousands + romanHundreds + romanTens + romanOnes;
}

