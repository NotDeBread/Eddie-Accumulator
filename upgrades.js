setInterval(upgrade_update, 1)

function upgrade_silvercursors_hover() {
    document.getElementById('info_title').innerHTML = "Silver Cursors";
    document.getElementById('info_cps').innerHTML = "Doubles cursor speed";

    if(config.countraw >= 500) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "500"
}

function upgrade_goldencursors_hover() {
    document.getElementById('info_title').innerHTML = "Golden Cursors";
    document.getElementById('info_cps').innerHTML = "Doubles cursor speed";

    if(config.countraw >= 1000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1,000"
}

function upgrade_goldenfingers_hover() {
    document.getElementById('info_title').innerHTML = "Golden Fingers";
    document.getElementById('info_cps').innerHTML = "Doubles EPC by how many cursors are owned";
    
    if(config.countraw >= 1000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1,000"
}

function upgrade_platinumfingers_hover() {
    document.getElementById('info_title').innerHTML = "Platinum Fingers";
    document.getElementById('info_cps').innerHTML = "Doubles EPC by how many cursors are owned";

    
    if(config.countraw >= 10000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "10,000"
}

function upgrade_diamondfingers_hover() {
    document.getElementById('info_title').innerHTML = "Diamond Fingers";
    document.getElementById('info_cps').innerHTML = "Doubles EPC by how many cursors are owned";

    
    if(config.countraw >= 50000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "50,000"
}

function upgrade_emeraldfingers_hover() {
    document.getElementById('info_title').innerHTML = "Emerald Fingers";
    document.getElementById('info_cps').innerHTML = "Doubles EPC by how many cursors are owned";

    
    if(config.countraw >= 100000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "100,000"
}

function upgrade_baconbones_hover() {
    document.getElementById('info_title').innerHTML = "Bacon Flavored Bones";
    document.getElementById('info_cps').innerHTML = "Doubles Bone Speed";
    
    if(config.countraw >= 20000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "20,000"
}

function upgrade_superfrisbe_hover() {
    document.getElementById('info_title').innerHTML = "The Super Ultra Mega Deluxe Epic Frisbe Pro (XTREME Premium Edition) MAX PRO 2023™ 🔥💯😱👌😂😈";
    document.getElementById('info_cps').innerHTML = "Doubles Frisbe Speed";

    
    if(config.countraw >= 50000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "50,000"
}

function upgrade_goldeneddies_hover() {
    document.getElementById('info_title').innerHTML = "Golden Eddies";
    document.getElementById('info_cps').innerHTML = "Unlocks Golden Eddies";

    
    if(config.countraw >= 75000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "75,000"
}

function upgrade_shimmeringeddies_hover() {
    document.getElementById('info_title').innerHTML = "Shimmering Eddies";
    document.getElementById('info_cps').innerHTML = "Raises Golden Eddie spawnrate";

    
    if(config.countraw >= 100000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "100,000"
}

function upgrade_silvercursors() {
    if(config.upgrade_silvercursors_bought === false && config.count >= 500) {
        document.getElementById('upgrade_silvercursors').style.setProperty('display', 'none')
        config.upgrade_silvercursors_bought = true
        config.countraw -= 500
        config.cursormultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 500
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_goldencursors() {
    if(config.upgrade_goldencursors_bought === false && config.count >= 1000) {
        document.getElementById('upgrade_goldencursors').style.setProperty('display', 'none')
        config.upgrade_goldencursors_bought = true
        config.countraw -= 1000
        config.cursormultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_goldenfingers() {
    if(config.upgrade_goldenfingers_bought === false && config.count >= 1000) {
        document.getElementById('upgrade_goldenfingers').style.setProperty('display', 'none')
        config.upgrade_goldenfingers_bought = true
        config.countraw -= 1000
        config.clickmultiplier += 0
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1000
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
        config.totalupgrades += 1
        config.eddieorbsspent += 10000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_diamondfingers() {
    if(config.upgrade_diamondfingers_bought === false && config.count >= 50000) {
        document.getElementById('upgrade_diamondfingers').style.setProperty('display', 'none')
        config.upgrade_diamondfingers_bought = true
        config.countraw -= 50000
        config.clickmultiplier += 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 50000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_emeraldfingers() {
    if(config.upgrade_emeraldfingers_bought === false && config.count >= 100000) {
        document.getElementById('upgrade_emeraldfingers').style.setProperty('display', 'none')
        config.upgrade_emeraldfingers_bought = true
        config.countraw -= 10000
        config.clickmultiplier += 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 10000
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
        config.totalupgrades += 1
        config.eddieorbsspent += 20000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_superfrisbe() {
    if(config.upgrade_superfrisbe_bought === false && config.count >= 50000) {
        document.getElementById('upgrade_superfrisbe').style.setProperty('display', 'none')
        config.upgrade_superfrisbe_bought = true
        config.countraw -= 20000
        config.frisbemultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 50000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_goldeneddies() {
    if(config.upgrade_goldeneddies_bought === false && config.count >= 75000) {
        document.getElementById('upgrade_goldeneddies').style.setProperty('display', 'none')
        config.upgrade_goldeneddies_bought = true
        config.countraw -= 75000
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 75000
        config.goldeneddies_unlocked = true
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}


function upgrade_shimmeringeddies() {
    if(config.upgrade_shimmeringeddies_bought === false && config.count >= 100000) {
        document.getElementById('upgrade_shimmeringeddies').style.setProperty('display', 'none')
        config.upgrade_shimmeringeddies_bought = true
        config.countraw -= 100000
        config.goldeneddiecount -= 1000
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 100000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
        
        save()
    }
}

function upgrade_update() {
    if(config.upgrade_platinumfingers_bought === true && config.cursortotal >=1) {
        config.cpc = config.cursortotal * config.clickmultiplier * config.cpcmultiplier;
        document.getElementById('upgrade_platinumfingers').style.setProperty('display', 'none')
    }
        
    if(config.upgrade_goldenfingers_bought === true && config.cursortotal >= 1) {
        config.cpc = config.cursortotal * config.clickmultiplier * config.cpcmultiplier;
        document.getElementById('upgrade_goldenfingers').style.setProperty('display', 'none')
    }
}

function upgradetooltip_enter() {
    document.getElementById('upgrade_tooltip').style.setProperty('opacity', '1')
    document.getElementById('upgrade_tooltip').style.setProperty('left', '-215px')
}

function upgradetooltip_leave() {
    document.getElementById('upgrade_tooltip').style.setProperty('opacity', '0')
    document.getElementById('upgrade_tooltip').style.setProperty('left', '-225px')
}