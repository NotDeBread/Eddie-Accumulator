function buycursor() {
    if (config.countraw >= config.cursorprice || devtoolsopen === true) {
        config.cursorcps += 1
        config.cursortotal += 1
        config.countraw -= config.cursorprice
        config.eddieorbsspent += config.cursorprice
        config.cursorprice = Math.round(config.cursorprice * 1.1)

        document.getElementById('item_tt_eps').innerHTML = config.cursorcps * config.cursormultiplier


        counterupdate()

        document.getElementById('info_cps').innerHTML = config.cursorcps * config.cursormultiplier
        document.getElementById('cursor_owned').innerHTML = config.cursortotal

        if (config.countraw >= config.cursorprice) {
            document.getElementById('cursorimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('cursorprice').style.setProperty('color', 'lime')
        } else {
            document.getElementById('cursorimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('cursorprice').style.setProperty('color', 'red')
        }

        if (config.cursortotal === 10) {
            config.upgrades += 1
        }
        if (config.cursortotal === 25) {
            config.upgrades += 1
        }
        if (config.cursortotal === 50) {
            config.upgrades += 1
        }
        if (config.cursortotal === 75) {
            config.upgrades += 1
        }

        if(config.cursortotal === 1) {
            achievement2()
        }

        if(config.cursortotal === 10) {
            achievement3()
        }
    }
}
function buybone() {
    if (config.countraw >= config.boneprice || devtoolsopen === true) {
        config.bonecps += 10
        config.cpsdisplay += 10
        config.bonetotal += 1
        config.countraw -= config.boneprice
        config.eddieorbsspent += config.boneprice
        config.boneprice = Math.round(config.boneprice * 1.1)
        
        document.getElementById('item_tt_eps').innerHTML = config.bonecps * config.bonemultiplier

        counterupdate()

        document.getElementById('info_cps').innerHTML = config.bonecps
        document.getElementById('bone_owned').innerHTML = config.bonetotal

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
    if (config.countraw >= config.frisbeprice || devtoolsopen === true) {
        config.frisbecps += 50
        config.cpsdisplay += 50
        config.frisbetotal += 1
        config.countraw -= config.frisbeprice
        config.eddieorbsspent += config.frisbeprice
        config.frisbeprice = Math.round(config.frisbeprice * 1.1)

        document.getElementById('item_tt_eps').innerHTML = config.frisbecps * config.frisbemultiplier

        counterupdate()

        document.getElementById('info_cps').innerHTML = config.frisbecps
        document.getElementById('frisbe_owned').innerHTML = config.frisbetotal

        if (config.count >= config.frisbeprice) {
            document.getElementById('frisbeimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('frisbeprice').style.setProperty('color', 'lime')
        } else {
            document.getElementById('frisbeimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('frisbeprice').style.setProperty('color', 'red')
        }
                
        if(config.frisbetotal === 10) {
            config.upgrades += 1
        }
    }
}


function buytreat() {
    if (config.countraw >= config.treatprice || devtoolsopen === true) {
        config.treatcps += 100
        config.cpsdisplay += 50
        config.treattotal += 1
        config.countraw -= config.treatprice
        config.eddieorbsspent += config.treatprice
        config.treatprice = Math.round(config.treatprice * 1.1)

        document.getElementById('item_tt_eps').innerHTML = config.treatcps * config.treatmultiplier

        counterupdate()

        document.getElementById('info_cps').innerHTML = config.treatcps
        document.getElementById('treat_owned').innerHTML = config.treattotal

        if (config.count >= config.treatprice) {
            document.getElementById('treatimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('treatprice').style.setProperty('color', 'lime')
        } else {
            document.getElementById('treatimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('treatprice').style.setProperty('color', 'red')
        }
    }
}




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

window.onload = function() {
    document.getElementById('cursor_owned').innerHTML = config.cursortotal
    document.getElementById('bone_owned').innerHTML = config.bonetotal
    document.getElementById('frisbe_owned').innerHTML = config.frisbetotal
    document.getElementById('treat_owned').innerHTML = config.treattotal
}



function item_tt_enter() {
    document.getElementById('item-tooltip').style.setProperty('opacity', '1')
    document.getElementById('item-tooltip').style.setProperty('left', '-190px')
}

function item_tt_leave() {
    document.getElementById('item-tooltip').style.setProperty('opacity', '0')
    document.getElementById('item-tooltip').style.setProperty('left', '-200px')
}



function cursor_tt() {
    document.getElementById('item-tooltip').style.setProperty('top', '0px')
    document.getElementById('item_tt_title').innerHTML = "Cursor"
    document.getElementById('item_tt_eps').innerHTML = config.cursorcps * config.cursormultiplier
}

function bone_tt() {
    document.getElementById('item-tooltip').style.setProperty('top', '55px')
    document.getElementById('item_tt_title').innerHTML = "Bone"
    document.getElementById('item_tt_eps').innerHTML = config.bonecps * config.bonemultiplier
}

function frisbe_tt() {
    document.getElementById('item-tooltip').style.setProperty('top', '110px')
    document.getElementById('item_tt_title').innerHTML = "Frisbe"
    document.getElementById('item_tt_eps').innerHTML = config.frisbecps * config.frisbemultiplier
}

function treat_tt() {
    document.getElementById('item-tooltip').style.setProperty('top', '165px')
    document.getElementById('item_tt_title').innerHTML = "Treat"
    document.getElementById('item_tt_eps').innerHTML = config.treatcps * config.treatmultiplier
}