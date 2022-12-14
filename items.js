document.getElementById('loader_text').innerHTML = 'Loading Items...'
console.log('Loading Items...')

if(config.totaleddieorbs <= 50000) {
    document.getElementById('frisbeimg').style.setProperty('display','none')
} else {
    document.getElementById('frisbeimg').style.setProperty('display','flex')
}

if(config.totaleddieorbs <= 250000) {
    document.getElementById('treatimg').style.setProperty('display','none')
} else {
    document.getElementById('treatimg').style.setProperty('display','flex')
}

if(config.totaleddieorbs <= 1250000) {
    document.getElementById('bedimg').style.setProperty('display','none')
} else {
    document.getElementById('bedimg').style.setProperty('display','flex')
}

if(config.totaleddieorbs <= 25000000) {
    document.getElementById('friendimg').style.setProperty('display','none')
} else {
    document.getElementById('friendimg').style.setProperty('display','flex')
}

function buycursor() {
    if (config.countraw >= config.cursorprice || devtoolsopen === true) {
        config.cursorcps += 1
        config.cursortotal += 1
        config.countraw -= config.cursorprice
        config.eddieorbsspent += config.cursorprice
        config.cursorprice = Math.round(config.cursorprice * 1.1)

        document.getElementById('item_tt_eps').innerHTML = numeral(config.cursorcps * config.cursormultiplier).format('0,00')
        document.getElementById('item_tt_epseach').innerHTML = config.cursormultiplier


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

        if (config.cursortotal === 25) {
            config.upgrades += 1
        }
        if (config.cursortotal === 50) {
            config.upgrades += 1
        }
        if (config.cursortotal === 75) {
            config.upgrades += 1
        }
        if (config.cursortotal === 100) {
            config.upgrades += 1
        }
        if (config.cursortotal === 125) {
            config.upgrades += 1
        }
        if (config.cursortotal === 150) {
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
        
        document.getElementById('item_tt_eps').innerHTML = numeral(config.bonecps * config.bonemultiplier).format('0,00')
        document.getElementById('item_tt_epseach').innerHTML = 10 * config.bonemultiplier

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

        if(config.bonetotal === 25) {
            config.upgrades += 1
        }

        if(config.bonetotal === 50) {
            config.upgrades += 1
        }

        if(config.bonetotal === 75) {
            config.upgrades += 1
        }
        if(config.bonetotal === 100) {
            config.upgrades += 1
        }
        if(config.bonetotal === 125) {
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

        document.getElementById('item_tt_eps').innerHTML = numeral(config.frisbecps * config.frisbemultiplier).format('0,00')
        document.getElementById('item_tt_epseach').innerHTML = 50 * config.frisbemultiplier

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

        if(config.frisbetotal === 25) {
            config.upgrades += 1
        }

        if(config.frisbetotal === 50) {
            config.upgrades += 1
        }
        if(config.frisbetotal === 75) {
            config.upgrades += 1
        }
        if(config.frisbetotal === 100) {
            config.upgrades += 1
        }
        if(config.frisbetotal === 125) {
            config.upgrades += 1
        }
    }
}


function buytreat() {
    if (config.countraw >= config.treatprice || devtoolsopen === true) {
        config.treatcps += 100
        config.cpsdisplay += 100
        config.treattotal += 1
        config.countraw -= config.treatprice
        config.eddieorbsspent += config.treatprice
        config.treatprice = Math.round(config.treatprice * 1.1)

        document.getElementById('item_tt_eps').innerHTML = numeral(config.treatcps * config.treatmultiplier).format('0,00')
        document.getElementById('item_tt_epseach').innerHTML = 100 * config.treatmultiplier

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

        if(config.treattotal === 10) {
            config.upgrades += 1
        }
        if(config.treattotal === 25) {
            config.upgrades += 1
        }
        if(config.treattotal === 50) {
            config.upgrades += 1
        }
        if(config.treattotal === 75) {
            config.upgrades += 1
        }
        if(config.treattotal === 100) {
            config.upgrades += 1
        }
        if(config.treattotal === 125) {
            config.upgrades += 1
        }
    }
}

function buybed() {
    if (config.countraw >= config.bedprice || devtoolsopen === true) {
        config.bedcps += 1000
        config.cpsdisplay += 1000
        config.bedtotal += 1
        config.countraw -= config.bedprice
        config.eddieorbsspent += config.bedprice
        config.bedprice = Math.round(config.bedprice * 1.1)

        document.getElementById('item_tt_eps').innerHTML = numeral(config.bedcps * config.bedmultiplier).format('0,00')
        document.getElementById('item_tt_epseach').innerHTML = 1000 * config.bedmultiplier

        counterupdate()

        document.getElementById('info_cps').innerHTML = config.bedcps
        document.getElementById('bed_owned').innerHTML = config.bedtotal

        if (config.count >= config.bedprice) {
            document.getElementById('bedimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('bedprice').style.setProperty('color', 'lime')
        } else {
            document.getElementById('bedimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('bedprice').style.setProperty('color', 'red')
        }

        if(config.bedtotal === 10) {
            config.upgrades += 1
        }
        if(config.bedtotal === 25) {
            config.upgrades += 1
        }
    }
}

function buyfriend() {
    if (config.countraw >= config.friendprice || devtoolsopen === true) {
        config.friendcps += 10000
        config.cpsdisplay += 10000
        config.friendtotal += 1
        config.countraw -= config.friendprice
        config.eddieorbsspent += config.friendprice
        config.friendprice = Math.round(config.friendprice * 1.1)

        document.getElementById('item_tt_eps').innerHTML = numeral(config.friendcps * config.friendmultiplier).format('0,00')
        document.getElementById('item_tt_epseach').innerHTML = 10000 * config.friendmultiplier

        counterupdate()

        document.getElementById('info_cps').innerHTML = config.friendcps
        document.getElementById('friend_owned').innerHTML = config.friendtotal

        if (config.count >= config.friendprice) {
            document.getElementById('friendimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('friendprice').style.setProperty('color', 'lime')
        } else {
            document.getElementById('friendimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('friendprice').style.setProperty('color', 'red')
        }

        if(config.friendtotal === 10) {
            config.upgrades += 1
        }
        if(config.friendtotal === 25) {
            config.upgrades += 1
        }
    }
}

document.getElementById('cursor_owned').innerHTML = config.cursortotal
document.getElementById('bone_owned').innerHTML = config.bonetotal
document.getElementById('frisbe_owned').innerHTML = config.frisbetotal
document.getElementById('treat_owned').innerHTML = config.treattotal
document.getElementById('bed_owned').innerHTML = config.bedtotal
document.getElementById('friend_owned').innerHTML = config.friendtotal


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
    document.getElementById('item_tt_eps').innerHTML = numeral(config.cursorcps * config.cursormultiplier).format('0,00')
    document.getElementById('item_tt_epseach').innerHTML = numeral(config.cursormultiplier).format('0,00')
}

function bone_tt() {
    document.getElementById('item-tooltip').style.setProperty('top', '55px')
    document.getElementById('item_tt_title').innerHTML = "Bone"
    document.getElementById('item_tt_eps').innerHTML = numeral(config.bonecps * config.bonemultiplier).format('0,00')
    document.getElementById('item_tt_epseach').innerHTML = numeral(10 * config.bonemultiplier).format('0,00')
}

function frisbe_tt() {
    document.getElementById('item-tooltip').style.setProperty('top', '110px')
    document.getElementById('item_tt_title').innerHTML = "Frisbe"
    document.getElementById('item_tt_eps').innerHTML = numeral(config.frisbecps * config.frisbemultiplier).format('0,00')
    document.getElementById('item_tt_epseach').innerHTML = numeral(50 * config.frisbemultiplier).format('0,00')
}

function treat_tt() {
    document.getElementById('item-tooltip').style.setProperty('top', '165px')
    document.getElementById('item_tt_title').innerHTML = "Treat"
    document.getElementById('item_tt_eps').innerHTML = numeral(config.treatcps * config.treatmultiplier).format('0,00')
    document.getElementById('item_tt_epseach').innerHTML = numeral(100 * config.treatmultiplier).format('0,00')
}

function bed_tt() {
    document.getElementById('item-tooltip').style.setProperty('top', '220px')
    document.getElementById('item_tt_title').innerHTML = "Bed"
    document.getElementById('item_tt_eps').innerHTML = numeral(config.bedcps * config.bedmultiplier).format('0,00')
    document.getElementById('item_tt_epseach').innerHTML = numeral(1000 * config.bedmultiplier).format('0,00')
}

function friend_tt() {
    document.getElementById('item-tooltip').style.setProperty('top', '275px')
    document.getElementById('item_tt_title').innerHTML = "Friend"
    document.getElementById('item_tt_eps').innerHTML = numeral(config.friendcps * config.friendmultiplier).format('0,00')
    document.getElementById('item_tt_epseach').innerHTML = numeral(10000 * config.friendmultiplier).format('0,00')
}