document.getElementById('loader_text').innerHTML = 'Loading Upgrades...'
console.log('Loading Upgrades...')


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

function upgrade_platinumcursors_hover() {
    document.getElementById('info_title').innerHTML = "Platinum Cursors";
    document.getElementById('info_cps').innerHTML = "Doubles cursor speed";

    if(config.countraw >= 25000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "25,000"
}

function upgrade_emeraldcursors_hover() {
    document.getElementById('info_title').innerHTML = "Emerald Cursors";
    document.getElementById('info_cps').innerHTML = "Doubles cursor speed";

    if(config.countraw >= 100000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "100,000"
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

    
    if(config.countraw >= 25000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "25,000"
}

function upgrade_diamondfingers_hover() {
    document.getElementById('info_title').innerHTML = "Diamond Fingers";
    document.getElementById('info_cps').innerHTML = "Doubles EPC by how many cursors are owned";

    
    if(config.countraw >= 100000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "100,000"
}

function upgrade_emeraldfingers_hover() {
    document.getElementById('info_title').innerHTML = "Emerald Fingers";
    document.getElementById('info_cps').innerHTML = "Doubles EPC by how many cursors are owned";

    
    if(config.countraw >= 500000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "500,000"
}

function upgrade_rubyfingers_hover() {
    document.getElementById('info_title').innerHTML = "Ruby Fingers";
    document.getElementById('info_cps').innerHTML = "Doubles EPC by how many cursors are owned";

    
    if(config.countraw >= 1000000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1 Million"
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

function upgrade_meatbones_hover() {
    document.getElementById('info_title').innerHTML = "Bones with some meat left over";
    document.getElementById('info_cps').innerHTML = "Triples Bone Speed";
    
    if(config.countraw >= 50000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }
    
    document.getElementById('info_price').innerHTML = "50,000"
}

function upgrade_thebone_hover() {
    document.getElementById('info_title').innerHTML = "THE BONE™";
    document.getElementById('info_cps').innerHTML = "Triples Bone Speed <br> <i>Idea from Zeke<i>";
    
    if(config.countraw >= 250000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "250,000"
}

function upgrade_superfrisbe_hover() {
    document.getElementById('info_title').innerHTML = "The Super Frisbe";
    document.getElementById('info_cps').innerHTML = "Doubles Frisbe Speed";

    
    if(config.countraw >= 100000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "100,000"
}

function upgrade_superepicfrisbe_hover() {
    document.getElementById('info_title').innerHTML = "The Super Epic Frisbe";
    document.getElementById('info_cps').innerHTML = "Triples Frisbe Speed";

    
    if(config.countraw >= 500000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "500,000"
}

function upgrade_superultraepicfrisbe_hover() {
    document.getElementById('info_title').innerHTML = "The Super Ultra Epic Frisbe";
    document.getElementById('info_cps').innerHTML = "Triples Frisbe Speed";

    
    if(config.countraw >= 1500000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1.5 Million"
}

function upgrade_hmtreats_hover() {
    document.getElementById('info_title').innerHTML = "Home Made Treats";
    document.getElementById('info_cps').innerHTML = "Doubles Treat Speed";

    
    if(config.countraw >= 750000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "750,000"
}

function upgrade_barkbites_hover() {
    document.getElementById('info_title').innerHTML = "Bark Bites";
    document.getElementById('info_cps').innerHTML = "Triples Treat Speed";

    
    if(config.countraw >= 1500000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1.5 Million"
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
    document.getElementById('info_cps').innerHTML = "Raises Golden Eddie Spawnrate";

    
    if(config.countraw >= 100000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "100,000"
}

function upgrade_emptybottle_hover() {
    document.getElementById('info_title').innerHTML = "Empty Bottle";
    document.getElementById('info_cps').innerHTML = "Unlocks, Something...";

    
    if(config.countraw >= 250000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "250,000"
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

function upgrade_platinumcursors() {
    if(config.upgrade_platinumcursors_bought === false && config.count >= 25000) {
        document.getElementById('upgrade_platinumcursors').style.setProperty('display', 'none')
        config.upgrade_platinumcursors_bought = true
        config.countraw -= 25000
        config.cursormultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 25000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_emeraldcursors() {
    if(config.upgrade_emeraldcursors_bought === false && config.count >= 100000) {
        document.getElementById('upgrade_emeraldcursors').style.setProperty('display', 'none')
        config.upgrade_emeraldcursors_bought = true
        config.countraw -= 100000
        config.cursormultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 100000
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
    if(config.upgrade_platinumfingers_bought === false && config.count >= 25000) {
        document.getElementById('upgrade_platinumfingers').style.setProperty('display', 'none')
        config.upgrade_platinumfingers_bought = true
        config.countraw -= 25000
        config.clickmultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 25000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_diamondfingers() {
    if(config.upgrade_diamondfingers_bought === false && config.count >= 100000) {
        document.getElementById('upgrade_diamondfingers').style.setProperty('display', 'none')
        config.upgrade_diamondfingers_bought = true
        config.countraw -= 100000
        config.clickmultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 100000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_emeraldfingers() {
    if(config.upgrade_emeraldfingers_bought === false && config.count >= 500000) {
        document.getElementById('upgrade_emeraldfingers').style.setProperty('display', 'none')
        config.upgrade_emeraldfingers_bought = true
        config.countraw -= 500000
        config.clickmultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 500000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_rubyfingers() {
    if(config.upgrade_rubyfingers_bought === false && config.count >= 1000000) {
        document.getElementById('upgrade_rubyfingers').style.setProperty('display', 'none')
        config.upgrade_rubyfingers_bought = true
        config.countraw -= 1000000
        config.clickmultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1000000
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

function upgrade_meatbones() {
    if(config.upgrade_meatbones_bought === false && config.count >= 50000) {
        document.getElementById('upgrade_meatbones').style.setProperty('display', 'none')
        config.upgrade_meatbones_bought = true
        config.countraw -= 50000
        config.bonemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 50000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_thebone() {
    if(config.upgrade_thebone_bought === false && config.count >= 250000) {
        document.getElementById('upgrade_thebone').style.setProperty('display', 'none')
        config.upgrade_thebone_bought = true
        config.countraw -= 250000
        config.bonemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 250000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_superfrisbe() {
    if(config.upgrade_superfrisbe_bought === false && config.count >= 100000) {
        document.getElementById('upgrade_superfrisbe').style.setProperty('display', 'none')
        config.upgrade_superfrisbe_bought = true
        config.countraw -= 100000
        config.frisbemultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 100000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_superepicfrisbe() {
    if(config.upgrade_superepicfrisbe_bought === false && config.count >= 500000) {
        document.getElementById('upgrade_superepicfrisbe').style.setProperty('display', 'none')
        config.upgrade_superepicfrisbe_bought = true
        config.countraw -= 500000
        config.frisbemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 500000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_superultraepicfrisbe() {
    if(config.upgrade_superultraepicfrisbe_bought === false && config.count >= 1500000) {
        document.getElementById('upgrade_superultraepicfrisbe').style.setProperty('display', 'none')
        config.upgrade_superultraepicfrisbe_bought = true
        config.countraw -= 1500000
        config.frisbemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1500000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_hmtreats() {
    if(config.upgrade_hmtreats_bought === false && config.count >= 750000) {
        document.getElementById('upgrade_hmtreats').style.setProperty('display', 'none')
        config.upgrade_hmtreats_bought = true
        config.countraw -= 750000
        config.treatmultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 750000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_barkbites() {
    if(config.upgrade_barkbites_bought === false && config.count >= 1500000) {
        document.getElementById('upgrade_barkbites').style.setProperty('display', 'none')
        config.upgrade_barkbites_bought = true
        config.countraw -= 1500000
        config.treatmultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1500000
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

function upgrade_emptybottle() {
    if(config.upgrade_emptybottle_bought === false && config.count >= 250000) {
        document.getElementById('upgrade_emptybottle').style.setProperty('display', 'none')
        config.upgrade_emptybottle_bought = true
        config.spells_unlocked = true
        config.countraw -= 250000
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 250000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
        unlockspells()

        config.ach14 = true
        achievement14()
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