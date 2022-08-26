const config = JSON.parse(localStorage.getItem('save')) ?? {
    buildingtotal: 0,
    cursortotal: 0,
    bonetotal: 0,
    balltotal: 0,


    count: 0,
    countraw: 0,
    cpsdisplay: 0,
    cpc: 1,
    
    
    cursorcps: 0,
    bonecps: 0,
    ballcps: 0,


    cursorprice: 10,
    boneprice: 100,
    ballprice: 500,


    upgrade_goldenfingers_bought: false
}



var cps = 0

setInterval(clickspersecond, 10)
setInterval(update, 1)
setInterval(upgrade_goldenfingers_update, 1)
setInterval(autosave, 60000)

function eddieclick() {
    config.countraw += config.cpc
    document.getElementById('count').innerHTML = config.count;

    if (config.countraw >= config.cursorprice) {
        document.getElementById('cursorimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('cursorprice').style.setProperty('color', 'green')
    } else {
        document.getElementById('cursorimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('cursorprice').style.setProperty('color', 'red')
    }

    if (config.count >= config.boneprice) {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('boneprice').style.setProperty('color', 'green')
    } else {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('boneprice').style.setProperty('color', 'red')
    }
}

function autosave(){
    localStorage.setItem('save', JSON.stringify(config))
    console.log('Saved', config.count, 'Eddie Orbs!')
}

//----------BUILDINGS----------//

//Buy Cursor

function buycursor() {
    if (config.countraw >= config.cursorprice) {
        config.cursorcps += 1
        config.cpsdisplay += 1
        config.cursortotal += 1
        config.countraw -= config.cursorprice
        config.cursorprice = Math.round(config.cursorprice * 1.2)

        counterupdate()

        document.getElementById('info_cps').innerHTML = config.cursorcps
        document.getElementById('info_owned').innerHTML = config.cursortotal

        if (config.countraw >= config.cursorprice) {
            document.getElementById('cursorimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('cursorprice').style.setProperty('color', 'green')
        } else {
            document.getElementById('cursorimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('cursorprice').style.setProperty('color', 'red')
        }
    }
}

//Buy Bone

function buybone() {
    if (config.countraw >= config.boneprice) {
        config.bonecps += 10
        config.cpsdisplay += 10
        config.bonetotal += 1
        config.countraw -= config.boneprice
        config.boneprice = Math.round(config.boneprice * 1.2)

        counterupdate()

        document.getElementById('info_cps').innerHTML = config.bonecps
        document.getElementById('info_owned').innerHTML = config.bonetotal

        if (config.count >= config.boneprice) {
            document.getElementById('boneimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('boneprice').style.setProperty('color', 'green')
        } else {
            document.getElementById('boneimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('boneprice').style.setProperty('color', 'red')
        }
    }
}

function buyball() {
    if (config.countraw >= config.ballprice) {
        config.ballcps += 50
        config.cpsdisplay += 50
        config.balltotal += 1
        config.countraw -= config.ballprice
        config.ballprice = Math.round(config.ballprice * 1.2)

        counterupdate()

        document.getElementById('info_cps').innerHTML = config.ballcps
        document.getElementById('info_owned').innerHTML = config.balltotal

        if (config.count >= config.ballprice) {
            document.getElementById('ballimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('ballprice').style.setProperty('color', 'green')
        } else {
            document.getElementById('ballimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('ballprice').style.setProperty('color', 'red')
        }
    }
}

//Click Effects

function clickspersecond() {
    config.countraw += config.cursorcps / 100
    config.countraw += config.bonecps / 100
    config.countraw += config.ballcps / 100
    config.count = Math.round(config.countraw)

    counterupdate()

    if (config.countraw >= config.cursorprice) {
        document.getElementById('cursorimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('cursorprice').style.setProperty('color', 'green')
    } else {
        document.getElementById('cursorimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('cursorprice').style.setProperty('color', 'red')
    }

    if (config.count >= config.boneprice) {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('boneprice').style.setProperty('color', 'green')
    } else {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('boneprice').style.setProperty('color', 'red')
    }

        if (config.count >= config.boneprice) {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('boneprice').style.setProperty('color', 'green')
    } else {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('boneprice').style.setProperty('color', 'red')
    }

    if (config.count >= config.ballprice) {
        document.getElementById('ballimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('ballprice').style.setProperty('color', 'green')
    } else {
        document.getElementById('ballimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('ballprice').style.setProperty('color', 'red')
    }

    if(config.count >= 1000){
        document.getElementById('upgrade_goldenfingers_price').style.setProperty('color', 'green')
        document.getElementById('upgrade_goldenfingers_img').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_goldenfingers_price').style.setProperty('color', 'red')
        document.getElementById('upgrade_goldenfingers_img').style.setProperty('filter', 'brightness(75%)')
    }
}

//Counter Update

function cursor_hover() {
    document.getElementById('info_title').innerHTML = "Cursor";
    document.getElementById('info_cps').innerHTML = config.cursorcps;
    document.getElementById('info_owned').innerHTML = config.cursortotal;
    document.getElementById('info_owned').style.setProperty('color', 'grey');
    document.getElementById('owned_label').style.setProperty('opacity', '1')
    document.getElementById('info_label').innerHTML = "CPS: ";
}

function bone_hover() {
    document.getElementById('info_title').innerHTML = "Bone";
    document.getElementById('info_cps').innerHTML = config.bonecps;
    document.getElementById('info_owned').innerHTML = config.bonetotal;
    document.getElementById('info_owned').style.setProperty('color', 'grey');
    document.getElementById('owned_label').style.setProperty('opacity', '1')
    document.getElementById('info_label').innerHTML = "CPS: ";
}

function ball_hover() {
    document.getElementById('info_title').innerHTML = "Ball";
    document.getElementById('info_cps').innerHTML = config.ballcps;
    document.getElementById('info_owned').innerHTML = config.balltotal;
    document.getElementById('info_owned').style.setProperty('color', 'grey');
    document.getElementById('owned_label').style.setProperty('opacity', '1')
    document.getElementById('info_label').innerHTML = "CPS: ";
}

//----------UPGRADES----------//

function upgrade_goldenfingers_hover() {
    document.getElementById('info_title').innerHTML = "Golden Fingers";
    document.getElementById('info_cps').innerHTML = "Changes the CPC based on how many cursors are owned.";
    document.getElementById('info_owned').style.setProperty('color', 'transparent');
    document.getElementById('owned_label').style.setProperty('opacity', '0');
    document.getElementById('info_label').innerHTML = "";
}

function upgrade_goldenfingers() {
    if(config.upgrade_goldenfingers_bought === false && config.count >= 1000) {
        document.getElementById('upgrade_goldenfingers').style.setProperty('display', 'none')
        config.upgrade_goldenfingers_bought = true
        config.countraw -= 1000
    }
}

function upgrade_goldenfingers_update() {
    if(config.upgrade_goldenfingers_bought === true && config.cursortotal >= 1) {
        config.cpc = config.cursortotal;

    }
}

//----------EVENTS----------//

function update() {

    cps = (config.cursorcps + config.bonecps + config.ballcps)

    config.count = Math.round(config.countraw)
    if(config.cursortotal >= 10){
        document.getElementById('upgrade_goldenfingers').hidden = false;
    }
}

function counterupdate() {
    document.getElementById('count').innerHTML = config.count;
    document.getElementById('cps').innerHTML = config.cpsdisplay;
    document.getElementById('cpc').innerHTML = config.cpc;
    document.getElementById('cursorprice').innerHTML = config.cursorprice;
    document.getElementById('boneprice').innerHTML = config.boneprice;
    document.getElementById('ballprice').innerHTML = config.ballprice;
}