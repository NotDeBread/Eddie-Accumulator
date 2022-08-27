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

    
    
    totalupgrade: 0,
    upgrade_goldenfingers_bought: false,
    upgrade_platinumfingers_bought: false,

    setting1var: true,

    autosave: true,
}

var settingsopen = false

var cps = 0

var noti_countdown = 0

var upgrades = 1
var cursormultiplier = 1

setInterval(clickspersecond, 10)
setInterval(update, 1)
setInterval(upgrade_update, 1)
setInterval(autosave, 60000)

function eddieclick() {
    config.countraw += config.cpc

    document.getElementById('count').innerHTML = config.count;

    if (config.countraw >= config.cursorprice) {
        document.getElementById('cursorimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('cursorprice').style.setProperty('color', 'lime')
    } else {
        document.getElementById('cursorimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('cursorprice').style.setProperty('color', 'red')
    }

    if (config.count >= config.boneprice) {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('boneprice').style.setProperty('color', 'lime')
    } else {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('boneprice').style.setProperty('color', 'red')
    }
}

//Settings

function settings() {

//Open

    if(!settingsopen) {
        document.getElementById('settings_img').src = "images/icons/back.png"
        document.getElementById('settings').style.setProperty('width', '250px')
        document.getElementById('settings').style.setProperty('height', '100px')
        document.getElementById('settings').style.setProperty('background-color', 'var(--darkerbg)')
        document.getElementById('settings_content').style.setProperty('opacity', '1')
        document.getElementById('settings_header').style.setProperty('color', 'rgba(255, 255, 255, 255)')
    }

//Close

    if(settingsopen) {
        document.getElementById('settings_img').src = "images/icons/settings.png"
        document.getElementById('settings').style.setProperty('width', '40px')
        document.getElementById('settings').style.setProperty('height', '40px')
        document.getElementById('settings').style.setProperty('background-color', 'transparent')
        document.getElementById('settings_content').style.setProperty('opacity', '0')
        document.getElementById('settings_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')
    }
    settingsopen = !settingsopen
}

function setting1() {
    if(!config.setting1var) {
        document.getElementById('setting1-img').src = "images/icons/checkbox2.png"
        config.autosave = true
    } 
    
    if(config.setting1var) {
        document.getElementById('setting1-img').src = "images/icons/checkbox1.png"
        config.autosave = false
    }

    config.setting1var = !config.setting1var
}

function autosave() {
    if(config.autosave === true) {
    localStorage.setItem('save', JSON.stringify(config))
    console.log('AutoSaved', config.count, 'Eddie Orbs!')
    savenoti()
    }
}

function save() {
    localStorage.setItem('save', JSON.stringify(config))
    console.log('Saved', config.count, 'Eddie Orbs!')
    savenoti()
}

function savenoti() {
    document.getElementById('savenoti').style.setProperty('opacity','1')
    setTimeout(() => {
        document.getElementById('savenoti').style.setProperty('opacity','0')
    }, 3000);
}

function deletesave(){
    localStorage.removeItem('save', JSON.stringify(config))
    window.location.reload();
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
            document.getElementById('cursorprice').style.setProperty('color', 'lime')
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
            document.getElementById('boneprice').style.setProperty('color', 'lime')
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
            document.getElementById('ballprice').style.setProperty('color', 'lime')
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
        document.getElementById('cursorprice').style.setProperty('color', 'lime')
    } else {
        document.getElementById('cursorimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('cursorprice').style.setProperty('color', 'red')
    }

    if (config.count >= config.boneprice) {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('boneprice').style.setProperty('color', 'lime')
    } else {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('boneprice').style.setProperty('color', 'red')
    }

        if (config.count >= config.boneprice) {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('boneprice').style.setProperty('color', 'lime')
    } else {
        document.getElementById('boneimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('boneprice').style.setProperty('color', 'red')
    }

    if (config.count >= config.ballprice) {
        document.getElementById('ballimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('ballprice').style.setProperty('color', 'lime')
    } else {
        document.getElementById('ballimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('ballprice').style.setProperty('color', 'red')
    }

    if(config.count >= 1000){
        document.getElementById('upgrade_goldenfingers_price').style.setProperty('color', 'lime')
        document.getElementById('upgrade_goldenfingers_img').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_goldenfingers_price').style.setProperty('color', 'red')
        document.getElementById('upgrade_goldenfingers_img').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 10000){
        document.getElementById('upgrade_platinumfingers_price').style.setProperty('color', 'lime')
        document.getElementById('upgrade_platinumfingers_img').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_platinumfingers_price').style.setProperty('color', 'red')
        document.getElementById('upgrade_platinumfingers_img').style.setProperty('filter', 'brightness(75%)')
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

function upgrade_platinumfingers_hover() {
    document.getElementById('info_title').innerHTML = "Platinum Fingers";
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
        cursormultiplier += 1
    }
}

function upgrade_platinumfingers() {
    if(config.upgrade_platinumfingers_bought === false && config.count >= 10000) {
        document.getElementById('upgrade_platinumfingers').style.setProperty('display', 'none')
        config.upgrade_goldenfingers_bought = true
        config.countraw -= 10000
        cursormultiplier *= 2
    }
}

function upgrade_update() {
    if(config.upgrade_platinumfingers_bought === true && config.cursortotal >=1) {
        config.cpc = config.cursortotal * cursormultiplier;
        document.getElementById('upgrade_platinumfingers').style.setProperty('display', 'none')
    }
        
    if(config.upgrade_goldenfingers_bought === true && config.cursortotal >= 1) {
            config.cpc = config.cursortotal * cursormultiplier
            document.getElementById('upgrade_goldenfingers').style.setProperty('display', 'none')
    }
    
}

//----------EVENTS----------//

function update() {

    cps = (config.cursorcps + config.bonecps + config.ballcps)

    config.count = Math.round(config.countraw)
    
    if(config.cursortotal >= 10){
        document.getElementById('upgrade_goldenfingers').hidden = false;
    }
    if(config.cursortotal >= 25){
        document.getElementById('upgrade_platinumfingers').hidden = false;
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