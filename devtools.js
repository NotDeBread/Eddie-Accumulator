document.getElementById('loader_text').innerHTML = 'Loading Developer Tools...'
console.log('Loading Developer Tools...')

function dev_x10() {
    config.countraw *= 10
    config.totaleddieorbsraw *= 10
}

function dev_x2() {
    config.countraw *= 2
    config.totaleddieorbsraw *= 2
}

function dev_golden() {
    goldeneddie_random = 7
    document.getElementById('goldeneddie_chance').innerHTML = goldeneddie_random
    document.getElementById('goldeneddie_chance').style.setProperty('color', 'lime')
    goldeneddie()
}

function dev_x10cpc() {
    config.cpcmultiplier *= 10
    document.getElementById('cpc').innerHTML = config.cpc * config.cpcmultiplier
}

function dev_unlockspells() {
    config.spells_unlocked = true
    config.upgrade_emptybottle_bought = true
    config.totalupgrades += 1
    unlockspells()

    config.ach14 = true
    achievement14()
    save()
}

function dev_maxflasks() {
    config.flasks = config.flasks_max
}

function dev_infiniteflasks() {
    config.flasks = 1e+400
}

function dev_x10maxflasks() {
    config.flasks_max *= 10
}

function dev_10xCursors() {
    for (let index = 0; index < 10; index++) {
        buycursor()
    }
}

function dev_10xBones() {
    for (let index = 0; index < 10; index++) {
        buybone()
    }
}

function dev_10xFrisbes() {
    for (let index = 0; index < 10; index++) {
        buyfrisbe()
    }
}

function dev_10xTreats() {
    for (let index = 0; index < 10; index++) {
        buytreat()
    }
}

function dev_10xBeds() {
    for (let index = 0; index < 10; index++) {
        buybed()
    }
}

function dev_10xFriends() {
    for (let index = 0; index < 10; index++) {
        buyfriend()
    }
}