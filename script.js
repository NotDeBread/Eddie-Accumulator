var count = 0
var countraw = 0
var cps = 0
var cpc = 1
var cursorprice = 10
var boneprice = 100
setInterval(clickspersecond, 10)
setInterval(update, 1)

//Eddie Click

function eddieclick() {
    countraw += cpc
    document.getElementById('count').innerHTML = count;
    console.log(countraw)
    
    if(countraw >= cursorprice) {
        document.getElementById('cursorimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('cursorprice').style.setProperty('color', 'green')
    } else {
        document.getElementById('cursorimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('cursorprice').style.setProperty('color', 'red')
    }

    if(count >= boneprice) {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('boneprice').style.setProperty('color', 'green')
    } else {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('boneprice').style.setProperty('color', 'red')
    }
}

//----------BUILDINGS----------//

var buildingtotal = 0
var cursortotal = 0
var bonetotal = 0
var upgrade_goldenfingers_bought = false

//Buy Cursor

function buycursor() {
    if(countraw >= cursorprice) {
        cps += 1
        cursortotal += 1
        countraw -= cursorprice
        cursorprice = Math.round(cursorprice * 1.2)
        document.getElementById('count').innerHTML = count;
        document.getElementById('cps').innerHTML = cps;
        document.getElementById('cpc').innerHTML = cpc;
        document.getElementById('cursorprice').innerHTML = cursorprice;
        console.log(cps)
        
        if(countraw >= cursorprice) {
            document.getElementById('cursorimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('cursorprice').style.setProperty('color', 'green')
        } else {
            document.getElementById('cursorimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('cursorprice').style.setProperty('color', 'red')
        }

        if(count >= boneprice) {
            document.getElementById('boneimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('boneprice').style.setProperty('color', 'green')
        } else {
            document.getElementById('boneimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('boneprice').style.setProperty('color', 'red')
        }
    }
}

//Buy Bone

function buybone() {
    if(countraw >= boneprice) {
        cps += 10
        countraw -= boneprice
        boneprice = Math.round(boneprice * 1.2)
        document.getElementById('count').innerHTML = count;
        document.getElementById('cps').innerHTML = cps;
        document.getElementById('cpc').innerHTML = cpc;
        document.getElementById('boneprice').innerHTML = boneprice;
        console.log(cps)

        if(countraw >= cursorprice) {
            document.getElementById('cursorimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('cursorprice').style.setProperty('color', 'green')
        } else {
            document.getElementById('cursorimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('cursorprice').style.setProperty('color', 'red')
        }

        if(count >= boneprice) {
            document.getElementById('boneimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('boneprice').style.setProperty('color', 'green')
        } else {
            document.getElementById('boneimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('boneprice').style.setProperty('color', 'red')
        }
    }
}

//Click Effects

function clickspersecond() {
    countraw += cps / 100
    count = Math.round(countraw)
    document.getElementById('count').innerHTML = count;
    document.getElementById('cps').innerHTML = cps;
    document.getElementById('cpc').innerHTML = cpc;

    if(countraw >= cursorprice) {
        document.getElementById('cursorimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('cursorprice').style.setProperty('color', 'green')
    } else {
        document.getElementById('cursorimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('cursorprice').style.setProperty('color', 'red')
    }

    if(count >= boneprice) {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('boneprice').style.setProperty('color', 'green')
    } else {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('boneprice').style.setProperty('color', 'red')
    }
}

//Counter Update

function update() {
    count = Math.round(countraw)
}

//----------UPGRADES----------//