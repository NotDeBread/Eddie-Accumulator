const config = JSON.parse(localStorage.getItem('save')) ?? {
    buildingtotal: 0,
    cursortotal: 0,
    bonetotal: 0,
    frisbetotal: 0,
    treattotal: 0,
    
    
    count: 0,
    countraw: 0,
    cpsdisplay: 0,
    cpc: 1,
    timesclicked: 0,
    
    cursorcps: 0,
    bonecps: 0,
    frisbecps: 0,
    treatcps: 0,
    
    clickmultiplier: 1,
    cursormultiplier: 1,
    bonemultiplier: 1,

    cursorprice: 10,
    boneprice: 100,
    frisbeprice: 500,
    treatprice: 1000,

    
    totalupgrade: 0,
    upgrade_goldenfingers_bought: false,
    upgrade_platinumfingers_bought: false,
    upgrade_silvercursors_bought: false,
    upgrade_baconbones_bought: false,

    upgrades: 0,

    setting1var: true,
    setting2var: false,
    setting3var: true,

    autosave: true,
    monospace: false,
    shortnumbers: true,
}

var settingsopen = false
var creditsopen = false

var cps = 0

var deletevar = 0

var ach_countdown = 0

setInterval(achievementcountdown, 1000)
setInterval(clickspersecond, 10)
setInterval(update, 1)
setInterval(upgrade_update, 1)
setInterval(autosave, 60000)

function eddieclick() {
    config.countraw += config.cpc
    config.timesclicked += 1

    counterformat()

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

    if(config.timesclicked === 1) {
        document.getElementById('ach_title').innerHTML = 'Click'
        document.getElementById('ach_desc').innerHTML = 'Click Eddie 1 Time.'
        achievement1()
    }
}

function load() {
    if(config.autosave === true) {
        document.getElementById('setting1-img').src = "images/icons/checkbox2.png"
    } else if(config.autosave === false) {
        document.getElementById('setting1-img').src = "images/icons/checkbox1.png"
    }
}

//Credits

function credits() {

    //Open
    
        if(!creditsopen) {
            document.getElementById('credits_img').src = "images/icons/back.png"
            document.getElementById('credits').style.setProperty('width', '150px')
            document.getElementById('credits').style.setProperty('height', '150px')
            document.getElementById('credits').style.setProperty('background-color', 'var(--darkerbg)')
            document.getElementById('credits_content').style.setProperty('opacity', '1')
            document.getElementById('credits_header').style.setProperty('color', 'rgba(255, 255, 255, 255)')
            document.getElementById('label_left').style.setProperty('opacity','0')
        }
    
    //Close
    
        if(creditsopen) {
            document.getElementById('credits_img').src = "images/icons/users.png"
            document.getElementById('credits').style.setProperty('width', '40px')
            document.getElementById('credits').style.setProperty('height', '40px')
            document.getElementById('credits').style.setProperty('background-color', 'transparent')
            document.getElementById('credits_content').style.setProperty('opacity', '0')
            document.getElementById('credits_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')
        }
        creditsopen = !creditsopen
}

//Settings

function settings() {

//Open

    if(!settingsopen) {
        document.getElementById('settings_img').src = "images/icons/back.png"
        document.getElementById('settings').style.setProperty('width', '250px')
        document.getElementById('settings').style.setProperty('height', '200px')
        document.getElementById('settings').style.setProperty('background-color', 'var(--darkerbg)')
        document.getElementById('settings_content').style.setProperty('opacity', '1')
        document.getElementById('settings_header').style.setProperty('color', 'rgba(255, 255, 255, 255)')
        document.getElementById('label_left').style.setProperty('opacity','0')
    }

//Close

    if(settingsopen) {
        document.getElementById('settings_img').src = "images/icons/settings.png"
        document.getElementById('settings').style.setProperty('width', '40px')
        document.getElementById('settings').style.setProperty('height', '40px')
        document.getElementById('settings').style.setProperty('background-color', 'transparent')
        document.getElementById('settings_content').style.setProperty('opacity', '0')
        document.getElementById('settings_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')
        document.getElementById('deletebutton_text').innerHTML = 'Delete Save'
        deletevar = 0

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

function setting2() {
    if(config.setting2var) {
        document.getElementById('setting2-img').src = "images/icons/checkbox1.png"
        config.monospace = false
    } 
    
    if(!config.setting2var) {
        document.getElementById('setting2-img').src = "images/icons/checkbox2.png"
        config.monospace = true
    }

    config.setting2var = !config.setting2var
}

function setting3() {
    if(!config.setting3var) {
        document.getElementById('setting3-img').src = "images/icons/checkbox2.png"
        config.shortnumbers = true
    } 
    
    if(config.setting3var) {
        document.getElementById('setting3-img').src = "images/icons/checkbox1.png"
        config.shortnumbers = false
    }

    config.setting3var = !config.setting3var
}

function autosave() {
    if(config.autosave === true) {
        localStorage.setItem('save', JSON.stringify(config))
        console.log('AutoSaved', config.count, 'Eddie Orbs!')
        savenoti()
    } //There alex
}

function save() {
    localStorage.setItem('save', JSON.stringify(config))
    console.log('Saved', config.count, 'Eddie Orbs!')
    savenoti()
}

function savenoti() {
    document.getElementById('savenoti').style.setProperty('opacity','1')
    document.getElementById('savenoti').style.setProperty('transform', 'scale(100%)')
    setTimeout(() => {
        document.getElementById('savenoti').style.setProperty('opacity','0')
        document.getElementById('savenoti').style.setProperty('transform', 'scale(75%)')
    }, 3000);
}

function deletebutton() {
    document.getElementById('deletebutton_text').innerHTML = 'Are you sure?'
    deletevar += 1

    if (deletevar === 2) {
        deletesave()
    }
}

function defaultbutton() {
    config.autosave = true
    config.setting1var = true
    config.monospace = false
    config.setting2var = false
    config.shortnumbers = true
    config.setting3var = true
    document.getElementById('setting1-img').src = "images/icons/checkbox2.png"
    document.getElementById('setting2-img').src = "images/icons/checkbox2.png"
    document.getElementById('setting3-img').src = "images/icons/checkbox1.png"
}

function deletesave() {
    localStorage.removeItem('save', JSON.stringify(config))
    window.location.reload();
}

function labelenter() {
    if(settingsopen === false && creditsopen === false) {
        document.getElementById('label_left').style.setProperty('opacity','1')
        document.getElementById('label_left').style.setProperty('transform', 'translateX(0px)')
    }
}

function labelleave() {
    document.getElementById('label_left').style.setProperty('opacity','0')
    document.getElementById('label_left').style.setProperty('transform', 'translateX(20px)')
}

function labelsettings() {
    document.getElementById('label_left').style.setProperty('transform', 'translateY(0px)')
    document.getElementById('label_left').style.setProperty('top', '40px')
    document.getElementById('label_left').innerHTML = 'Settings'
}

function labelcredits() {
    document.getElementById('label_left').style.setProperty('top', '80px')
    document.getElementById('label_left').innerHTML = 'Credits'
}

//----------BUILDINGS----------//

//Buy Cursor

function buycursor() {
    if (config.countraw >= config.cursorprice) {
        config.cursorcps += 1
        config.cursortotal += 1
        config.countraw -= config.cursorprice
        config.cursorprice = Math.round(config.cursorprice * 1.1)

        counterupdate()

        document.getElementById('info_cps').innerHTML = config.cursorcps * config.cursormultiplier
        document.getElementById('info_owned').innerHTML = config.cursortotal

        if (config.countraw >= config.cursorprice) {
            document.getElementById('cursorimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('cursorprice').style.setProperty('color', 'lime')
        } else {
            document.getElementById('cursorimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('cursorprice').style.setProperty('color', 'red')
        }

        if (config.cursortotal === 5) {
            config.upgrades += 1
        }
        if (config.cursortotal === 10) {
            config.upgrades += 1
        }
        if (config.cursortotal === 25) {
            config.upgrades += 1
        }

        if(config.cursortotal === 1)
            achievement2()
        }

        if(config.cursortotal === 10) {
            achievement3()
        }
    }

//Buy Bone

function buybone() {
    if (config.countraw >= config.boneprice) {
        config.bonecps += 10
        config.cpsdisplay += 10
        config.bonetotal += 1
        config.countraw -= config.boneprice
        config.boneprice = Math.round(config.boneprice * 1.1)

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
        
        if(config.bonetotal === 10) {
            config.upgrades += 1
        }
    }
}

function buyfrisbe() {
    if (config.countraw >= config.frisbeprice) {
        config.frisbecps += 50
        config.cpsdisplay += 50
        config.frisbetotal += 1
        config.countraw -= config.frisbeprice
        config.frisbeprice = Math.round(config.frisbeprice * 1.1)

        counterupdate()

        document.getElementById('info_cps').innerHTML = config.frisbecps
        document.getElementById('info_owned').innerHTML = config.frisbetotal

        if (config.count >= config.frisbeprice) {
            document.getElementById('frisbeimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('frisbeprice').style.setProperty('color', 'lime')
        } else {
            document.getElementById('frisbeimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('frisbeprice').style.setProperty('color', 'red')
        }
    }
}

function buytreat() {
    if (config.countraw >= config.treatprice) {
        config.treatcps += 100
        config.cpsdisplay += 50
        config.treattotal += 1
        config.countraw -= config.treatprice
        config.treatprice = Math.round(config.treatprice * 1.1)


        counterupdate()

        document.getElementById('info_cps').innerHTML = config.treatcps
        document.getElementById('info_owned').innerHTML = config.treattotal

        if (config.count >= config.treatprice) {
            document.getElementById('treatimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('treatprice').style.setProperty('color', 'lime')
        } else {
            document.getElementById('treatimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('treatprice').style.setProperty('color', 'red')
        }
    }
}

//Click Effects

function clickspersecond() {
    config.countraw += (config.cursorcps * config.cursormultiplier ) / 100
    config.countraw += (config.bonecps * config.bonemultiplier) / 100
    config.countraw += config.frisbecps / 100
    config.countraw += config.treatcps / 100
    config.count = Math.round(config.countraw)

    counterformat()
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

    if (config.count >= config.frisbeprice) {
        document.getElementById('frisbeimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('frisbeprice').style.setProperty('color', 'lime')
    } else {
        document.getElementById('frisbeimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('frisbeprice').style.setProperty('color', 'red')
    }

    if (config.count >= config.treatprice) {
        document.getElementById('treatimg').style.setProperty('filter', 'brightness(100%)')
        document.getElementById('treatprice').style.setProperty('color', 'lime')
    } else {
        document.getElementById('treatimg').style.setProperty('filter', 'brightness(75%)')
        document.getElementById('treatprice').style.setProperty('color', 'red')
    }

    if(config.count >= 500){
        document.getElementById('upgrade_silvercursors_price').style.setProperty('color', 'lime')
        document.getElementById('upgrade_silvercursors_img').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_silvercursors_price').style.setProperty('color', 'red')
        document.getElementById('upgrade_silvercursors_img').style.setProperty('filter', 'brightness(75%)')
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

    if(config.count >= 20000){
        document.getElementById('upgrade_baconbones_price').style.setProperty('color', 'lime')
        document.getElementById('upgrade_baconbones_img').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_baconbones_price').style.setProperty('color', 'red')
        document.getElementById('upgrade_baconbones_img').style.setProperty('filter', 'brightness(75%)')
    }
}

//Counter Update

function cursor_hover() {
    document.getElementById('info_title').innerHTML = "Cursor";
    document.getElementById('info_cps').innerHTML = config.cursorcps * config.cursormultiplier;
    document.getElementById('info_owned').innerHTML = config.cursortotal;
    document.getElementById('info_owned').style.setProperty('color', 'grey');
    document.getElementById('owned_label').style.setProperty('opacity', '1')
    document.getElementById('info_label').innerHTML = "CPS: ";
}

function bone_hover() {
    document.getElementById('info_title').innerHTML = "Bone";
    document.getElementById('info_cps').innerHTML = config.bonecps * config.bonemultiplier;
    document.getElementById('info_owned').innerHTML = config.bonetotal;
    document.getElementById('info_owned').style.setProperty('color', 'grey');
    document.getElementById('owned_label').style.setProperty('opacity', '1')
    document.getElementById('info_label').innerHTML = "CPS: ";
}

function frisbe_hover() {
    document.getElementById('info_title').innerHTML = "Frisbe";
    document.getElementById('info_cps').innerHTML = config.frisbecps;
    document.getElementById('info_owned').innerHTML = config.frisbetotal;
    document.getElementById('info_owned').style.setProperty('color', 'grey');
    document.getElementById('owned_label').style.setProperty('opacity', '1')
    document.getElementById('info_label').innerHTML = "CPS: ";
}

function treat_hover() {
    document.getElementById('info_title').innerHTML = "Treat";
    document.getElementById('info_cps').innerHTML = config.treatcps;
    document.getElementById('info_owned').innerHTML = config.treattotal;
    document.getElementById('info_owned').style.setProperty('color', 'grey');
    document.getElementById('owned_label').style.setProperty('opacity', '1')
    document.getElementById('info_label').innerHTML = "CPS: ";
}

//----------UPGRADES----------//

function upgrade_silvercursors_hover() {
    document.getElementById('info_title').innerHTML = "Silver Cursors";
    document.getElementById('info_cps').innerHTML = "Doubles cursor speed";
    document.getElementById('info_owned').style.setProperty('color', 'transparent');
    document.getElementById('owned_label').style.setProperty('opacity', '0');
    document.getElementById('info_label').innerHTML = "";
}

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

function upgrade_baconbones_hover() {
    document.getElementById('info_title').innerHTML = "Bacon Flavored Bones";
    document.getElementById('info_cps').innerHTML = "Doubles Bone Speed";
    document.getElementById('info_owned').style.setProperty('color', 'transparent');
    document.getElementById('owned_label').style.setProperty('opacity', '0');
    document.getElementById('info_label').innerHTML = "";
}

function upgrade_silvercursors() {
    if(config.upgrade_silvercursors_bought === false && config.count >= 500) {
        document.getElementById('upgrade_silvercursors').style.setProperty('display', 'none')
        config.upgrade_silvercursors_bought = true
        config.countraw -= 500
        config.cursormultiplier *= 2
        config.upgrades -= 1
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_goldenfingers() {
    if(config.upgrade_goldenfingers_bought === false && config.count >= 1000) {
        document.getElementById('upgrade_goldenfingers').style.setProperty('display', 'none')
        config.upgrade_goldenfingers_bought = true
        config.countraw -= 1000
        config.clickmultiplier += 1
        config.upgrades -= 1
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_platinumfingers() {
    if(config.upgrade_platinumfingers_bought === false && config.count >= 10000) {
        document.getElementById('upgrade_platinumfingers').style.setProperty('display', 'none')
        config.upgrade_platinumfingers_bought = true
        config.countraw -= 10000
        config.clickmultiplier *= 2
        config.upgrades -= 1
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_baconbones() {
    if(config.upgrade_baconbones_bought === false && config.count >= 20000) {
        document.getElementById('upgrade_baconbones').style.setProperty('display', 'none')
        config.upgrade_baconbones_bought = true
        config.countraw -= 20000
        config.bonemultiplier *= 2
        config.upgrades -= 1
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_update() {
    if(config.upgrade_platinumfingers_bought === true && config.cursortotal >=1) {
        config.cpc = config.cursortotal * config.clickmultiplier;
        document.getElementById('upgrade_platinumfingers').style.setProperty('display', 'none')
    }
        
    if(config.upgrade_goldenfingers_bought === true && config.cursortotal >= 1) {
        config.cpc = config.cursortotal * config.clickmultiplier
        document.getElementById('upgrade_goldenfingers').style.setProperty('display', 'none')
    }
}

//----------EVENTS----------//

function update() {

    cps = ((config.cursorcps * config.cursormultiplier) + (config.bonecps * config.bonemultiplier) + config.frisbecps + config.treatcps)
    document.getElementById('cps').innerHTML = cps

    config.count = Math.round(config.countraw)
    
    if(config.monospace === true) {
        document.getElementById('count').style.setProperty('font-family', 'inconsolata')
        document.getElementById('setting2-img').src = "images/icons/checkbox2.png"
    }
    if(config.monospace === false) {
        document.getElementById('count').style.setProperty('font-family', 'renogare')
        document.getElementById('setting2-img').src = "images/icons/checkbox1.png"
    }

    if(config.shortnumbers === true) {
        document.getElementById('setting3-img').src = "images/icons/checkbox2.png"
    }
    if(config.shortnumbers === false) {
        document.getElementById('setting3-img').src = "images/icons/checkbox1.png"
    }

    if(config.cursortotal >= 5 && config.upgrade_silvercursors_bought === false){
        document.getElementById('upgrade_silvercursors').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
        }
    if(config.cursortotal >= 10){
        document.getElementById('upgrade_goldenfingers').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
        }
    if(config.cursortotal >= 25){
        document.getElementById('upgrade_platinumfingers').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
    if(config.bonetotal >= 10 && config.upgrade_baconbones_bought === false){
        document.getElementById('upgrade_baconbones').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function achievement1() {
    document.getElementById('achievement1').style.setProperty('left', '10px')
    config.ach_countdown = 5
}

function achievement2() {
    document.getElementById('achievement2').style.setProperty('left', '10px')
    config.ach_countdown = 5
}

function achievement3() {
    document.getElementById('achievement3').style.setProperty('left', '10px')
    config.ach_countdown = 5
}

function achievementcountdown() {
    if(config.ach_countdown >= 0 && config.ach_countdown >= 1)
    config.ach_countdown -= 1

    if(config.ach_countdown === 1) {
        achievementclose()
        console.log('hi')
    }
}

function achievementclose() {
    document.getElementById('achievement1').style.setProperty('left', '-250px')
    document.getElementById('achievement2').style.setProperty('left', '-250px')
    document.getElementById('achievement3').style.setProperty('left', '-250px')

}

function counterupdate() {
    counterformat()
    document.getElementById('cpc').innerHTML = config.cpc;
    document.getElementById('cursorprice').innerHTML = config.cursorprice;
    document.getElementById('boneprice').innerHTML = config.boneprice;
    document.getElementById('frisbeprice').innerHTML = config.frisbeprice;
    document.getElementById('treatprice').innerHTML = config.treatprice;
}

function counterformat() {
    if(config.shortnumbers === true) {
        if(config.count >= 1000000) {
            document.getElementById('count').innerHTML = numeral(config.count).format('0.00a');
        } else {
            document.getElementById('count').innerHTML = numeral(config.count).format('0,00')
        }
    } else {
        document.getElementById('count').innerHTML = numeral(config.count).format('0,00')
    }
}