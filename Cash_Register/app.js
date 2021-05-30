const btn = document.getElementById("btn")
const statusText = document.getElementById("status")
const changeCash = document.getElementById("change")

btn.addEventListener('click', () => {
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
    statusText.innerHTML = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]).status
    changeCash.innerHTML = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]).change
})

/*
Penny	            $0.01 (PENNY)
Nickel	            $0.05 (NICKEL)
Dime	            $0.1 (DIME)
Quarter	            $0.25 (QUARTER)
Dollar	            $1 (ONE)
Five Dollars	    $5 (FIVE)
Ten Dollars	        $10 (TEN)
Twenty Dollars	    $20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/

function checkCashRegister(price, cash, cid) {
    price = price * 100
    cash = cash * 100
    let cashInDrawer = cid
    let unitValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
    let indexArray = []
    let change = cash - price
    let cashInDrawerSum = 0
    let result = {
        status: "",
        change: []
    }
    let pieceOfCurrencyUnit
    let currencyUnit
    let changePiece
    let counter = 0
    // Entry point. This is where the status of the cash register and the amount of change is analysed
    if (true) {
        cidSum()
        if (cashInDrawerSum < change) {
            result.status = "INSUFFICIENT_FUNDS"
            result.change = []
        } else if (cashInDrawerSum > change) {
            indexArrayFiller()
            if (indexArray.length == 0) {
                result.status = "INSUFFICIENT_FUNDS"
                result.change = []
            } else {
                changeCashMove()
            }
        } else {
            result.status = "CLOSED"
            result.change = cashInDrawer
        }
    }
    // Adds up the total contents of the cash drawer rounded to cents
    function cidSum() {
        for (let i = 0; i < cashInDrawer.length; i++) {
            cashInDrawerSum += cashInDrawer[i][1] * 1000 / 10
        }
        return cashInDrawerSum
    }
    // Fills an array with the indices of the currency units that can be worked with
    function indexArrayFiller() {
        change = change / 100
        if (cashInDrawerSum > 1000) {
            for (let i = unitValues.length - 1; i >= 0; i--) {
                if (change > unitValues[i] || change > cashInDrawer[i]) {
                    indexArray.push(i)
                }
            }
            return indexArray
        } else {
            for (let i = unitValues.length - 1; i >= 0; i--) {
                if (change > unitValues[i] && change > cashInDrawer[i]) {
                    indexArray.push(i)
                }
            }
            return indexArray
        }
    }
    // Rounding the denominations of the cash drawer contents to cents
    function changeConvert() {
        for (let i = 0; i < cashInDrawer.length; i++) {
            if (cashInDrawer[i][1] > 0) {
                cashInDrawer[i][1] = cashInDrawer[i][1] * 1000 / 10
            }
        }
        return cashInDrawer
    }
    // Handling the change
    function changeCashMove() {
        for (let k = 0; k < 1; k++) {
            for (let j = indexArray[k]; j >= 0; j--) {
                if (cashInDrawer[j][1] > change) {
                    result.status = "OPEN"
                    changeCashUnit()
                } else {
                    result.status = "OPEN"
                    changeCashUnit()
                }
            }
        }
        return result
    }
    // Determination of the change per denomination
    function changeCashUnit() {
        change = change * 100
        changeConvert()
        for (let k = 0; k < 1; k++) {
            for (let j = indexArray[k]; j >= 0; j--) {
                if (cashInDrawer[j][1] < change) {
                    change -= cashInDrawer[j][1]
                    result.change.push([])
                    result.change[counter].push(cashInDrawer[j][0])
                    result.change[counter].push(cashInDrawer[j][1] / 100)
                    counter++
                } else if (cashInDrawer[j][1] > change && change > 0) {
                    currencyUnit = unitValues[j] * 100
                    pieceOfCurrencyUnit = Math.floor(change / currencyUnit)
                    changePiece = pieceOfCurrencyUnit * currencyUnit
                    change = change - changePiece
                    if (changePiece != 0) {
                        result.change.push([])
                        result.change[counter].push(cashInDrawer[j][0])
                        result.change[counter].push(changePiece / 100)
                        counter++
                    }
                }
            }
        }
        return result
    }

    return result
}
