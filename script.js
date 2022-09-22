const favicon = document.getElementById("favicon");

var settingsopen = false
var creditsopen = false
var devtoolsopen = false

var cps = 0

var deletevar = 0

var goldeneddie_random = 0

setInterval(clickspersecond, 25)
setInterval(update, 1)

function eddieclick() {
    config.countraw += (config.cpc * config.cpcmultiplier) * config.golden_cpcmultiplier
    config.totaleddieorbsraw += (config.cpc * config.cpcmultiplier) * config.golden_cpcmultiplier
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

    if (config.timesclicked === 100) {
        config.upgrades += 1
    }

    if (config.timesclicked === 1000) {
        config.upgrades += 1
    }
}

//Devtools

function devtools() {

    //Open
    
        if(!devtoolsopen) {
            document.getElementById('devtools_img').src = "images/icons/back.png"
            document.getElementById('devtools').style.setProperty('width', '200px')
            document.getElementById('devtools').style.setProperty('height', '210px')
            document.getElementById('devtools').style.setProperty('background-color', 'var(--darkerbg)')
            document.getElementById('devtools_content').style.setProperty('opacity', '1')
            document.getElementById('devtools_header').style.setProperty('color', 'rgba(255, 255, 255, 255)')
            document.getElementById('label_left').style.setProperty('opacity','0')
        }
    
    //Close
    
        if(devtoolsopen) {
            document.getElementById('devtools_img').src = "images/icons/tool.png"
            document.getElementById('devtools').style.setProperty('width', '40px')
            document.getElementById('devtools').style.setProperty('height', '40px')
            document.getElementById('devtools').style.setProperty('background-color', 'transparent')
            document.getElementById('devtools_content').style.setProperty('opacity', '0')
            document.getElementById('devtools_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')
        }
        devtoolsopen = !devtoolsopen
}

function dev_x10() {
    config.countraw *= 10
    config.totaleddieorbsraw *= 10
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

//Credits

function credits() {

    //Open
    
        if(!creditsopen) {
            document.getElementById('credits_img').src = "images/icons/back.png"
            document.getElementById('credits').style.setProperty('width', '150px')
            document.getElementById('credits').style.setProperty('height', '180px')
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

function labelenter() {
    if(settingsopen === false && creditsopen === false && devtoolsopen === false) {
        document.getElementById('label_left').style.setProperty('opacity','1')
        document.getElementById('label_left').style.setProperty('transform', 'translateX(0px)')
    }
}

function labelleave() {
    document.getElementById('label_left').style.setProperty('opacity','0')
    document.getElementById('label_left').style.setProperty('transform', 'translateX(20px)')
}

function labelsettings() {
    document.getElementById('label_left').style.setProperty('top', '39px')
    document.getElementById('label_left').innerHTML = 'Settings'
    document.getElementById('label_left').style.setProperty('width', '90px')

}

function labelcredits() {
    document.getElementById('label_left').style.setProperty('top', '75px')
    document.getElementById('label_left').innerHTML = 'Credits'
    document.getElementById('label_left').style.setProperty('width', '90px')
}

function labelstats() {
    document.getElementById('label_left').style.setProperty('top', '110px')
    document.getElementById('label_left').innerHTML = 'Statistics'
    document.getElementById('label_left').style.setProperty('width', '110px')
}

function labeldevtools() {
    document.getElementById('label_left').style.setProperty('top', '145px')
    document.getElementById('label_left').innerHTML = 'Developer Tools'
    document.getElementById('label_left').style.setProperty('width', '140px')
}



function clickspersecond() {
    config.countraw += (config.cursorcps * config.cursormultiplier ) / 40 * config.goldeneddiemultiplier
    config.countraw += (config.bonecps * config.bonemultiplier) / 40 * config.goldeneddiemultiplier
    config.countraw += (config.frisbecps * config.frisbemultiplier) / 40 * config.goldeneddiemultiplier
    config.countraw += (config.treatcps * config.treatmultiplier) / 40 * config.goldeneddiemultiplier
    config.totaleddieorbsraw += (config.cursorcps * config.cursormultiplier ) / 40 * config.goldeneddiemultiplier
    config.totaleddieorbsraw += (config.bonecps * config.bonemultiplier) / 40 * config.goldeneddiemultiplier
    config.totaleddieorbsraw += (config.frisbecps * config.frisbemultiplier) / 40 * config.goldeneddiemultiplier
    config.totaleddieorbsraw += (config.treatcps * config.treatmultiplier) / 40 * config.goldeneddiemultiplier
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
        document.getElementById('upgrade_silvercursors').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_silvercursors').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 1000){
        document.getElementById('upgrade_goldenfingers').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_goldenfingers').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 10000){
        document.getElementById('upgrade_platinumfingers').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_platinumfingers').style.setProperty('filter', 'brightness(75%)')
    }
    
    if(config.count >= 20000){
        document.getElementById('upgrade_baconbones').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_baconbones').style.setProperty('filter', 'brightness(75%)')
    }
    
    if(config.count >= 50000){
            document.getElementById('upgrade_diamondfingers').style.setProperty('filter', 'brightness(100%)')
    } else {
            document.getElementById('upgrade_diamondfingers').style.setProperty('filter', 'brightness(75%)')
    }
    
    if(config.count >= 50000){
        document.getElementById('upgrade_superfrisbe').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_superfrisbe').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 75000){
        document.getElementById('upgrade_goldeneddies').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_goldeneddies').style.setProperty('filter', 'brightness(75%)')
    }
    
    if(config.count >= 100000){
        document.getElementById('upgrade_shimmeringeddies').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_shimmeringeddies').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.countraw < 0) {
        config.countraw = 0
    }
}

//----------EVENTS----------//

function update() {

    cps = ((config.cursorcps * config.cursormultiplier) + (config.bonecps * config.bonemultiplier) + (config.frisbecps * config.frisbemultiplier) + config.treatcps) * config.goldeneddiemultiplier
    document.getElementById('cps').innerHTML = cps

    config.count = Math.round(config.countraw)
    config.totaleddieorbs = Math.round(config.totaleddieorbs)

    if(config.timesclicked >= 100 && config.upgrade_silvercursors_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_silvercursors').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
        } else {document.getElementById('upgrade_silvercursors').hidden = true}

    if(config.timesclicked >= 1000 && config.upgrade_goldencursors_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_goldencursors').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
        } else {document.getElementById('upgrade_goldencursors').hidden = true}

    if(config.cursortotal >= 10 && config.upgrades_collapsed === false){
        document.getElementById('upgrade_goldenfingers').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
        } else {document.getElementById('upgrade_goldenfingers').hidden = true}

    if(config.cursortotal >= 25 && config.upgrades_collapsed === false){
        document.getElementById('upgrade_platinumfingers').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    } else {document.getElementById('upgrade_platinumfingers').hidden = true}

    if(config.cursortotal >= 50 && config.upgrade_diamondfingers_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_diamondfingers').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    } else {document.getElementById('upgrade_diamondfingers').hidden = true}

    if(config.cursortotal >= 75 && config.upgrade_emeraldfingers_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_emeraldfingers').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    } else {document.getElementById('upgrade_emeraldfingers').hidden = true}

    if(config.bonetotal >= 10 && config.upgrade_baconbones_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_baconbones').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    } else {document.getElementById('upgrade_baconbones').hidden = true}

    if(config.frisbetotal >= 10 && config.upgrade_superfrisbe_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_superfrisbe').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    } else {document.getElementById('upgrade_superfrisbe').hidden = true}

    if(config.totaleddieorbsraw >= 100000 && config.upgrade_goldeneddies_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_goldeneddies').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    } else {document.getElementById('upgrade_goldeneddies').hidden = true}

    if(config.goldeneddiesclicked >= 1 && config.upgrade_shimmeringeddies_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_shimmeringeddies').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    } else {document.getElementById('upgrade_shimmeringeddies').hidden = true}

    if(config.devtoolsunlocked === true) {
        document.getElementById('devtools').hidden = false
    }

    if(config.monospace === true) {
        document.getElementById('count').style.setProperty('font-family', 'inconsolata')
        document.getElementById('setting2-img').src = "images/icons/checkbox2.png"
    }
    if(config.monospace === false) {
        document.getElementById('count').style.setProperty('font-family', 'renogare')
        document.getElementById('setting2-img').src = "images/icons/checkbox1.png"
    }

    if(config.upgrades >= 1 && config.upgrades_collapsed === false) {
        document.getElementById('no_upgrades').hidden = true
    } else {
        document.getElementById('no_upgrades').hidden = false
    }

    if(config.totalupgrades === 10) {
        document.getElementById('no_upgrades').innerHTML = "All upgrades found!"
    }

    if(config.upgrades_collapsed === true) {
        document.getElementById('no_upgrades').hidden = true
        document.getElementById('upgrade_collapse_img').style.setProperty('transform', 'rotate(180deg)')
        document.getElementById('upgrade_countall').innerHTML = " - "
        document.getElementById('upgrade_count').innerHTML = config.upgrades
    } else {
        document.getElementById('upgrade_collapse_img').style.setProperty('transform', 'rotate(90deg)')
        document.getElementById('upgrade_countall').innerHTML = ""
        document.getElementById('upgrade_count').innerHTML = ""
    }

    if(config.totaleddieorbs >= 100000 && config.goldeneddies_check === false) {
        config.upgrades += 1
        config.goldeneddies_check = !config.goldeneddies_check
    }

    if(config.goldeneddiemultiplier === 1) {
        document.getElementById('cps').style.setProperty('color', 'white')
    }

    if(config.golden_cpcmultiplier === 1) {
        document.getElementById('cpc').style.setProperty('color', 'white')
    }

    if(config.totaleddieorbs >= 100 && config.ach4_check === false) {
        achievement4()
        config.ach4_check = !config.ach4_check
    }
    if(config.totaleddieorbs >= 1000 && config.ach5_check === false) {
        achievement5()
        config.ach5_check = !config.ach5_check
    }
    if(config.totaleddieorbs >= 10000 && config.ach6_check === false) {
        achievement6()
        config.ach6_check = !config.ach6_check
    }
    if(config.totaleddieorbs >= 100000 && config.ach7_check === false) {
        achievement7()
        config.ach7_check = !config.ach7_check
    }
    if(config.totaleddieorbs >= 1000000 && config.ach8_check === false) {
        achievement8()
        config.ach8_check = !config.ach8_check
    }
    if(config.totaleddieorbs >= 10000000 && config.ach9_check === false) {
        achievement9()
        config.ach9_check = !config.ach9_check
    }
    if(config.totaleddieorbs >= 100000000 && config.ach10_check === false) {
        achievement10()
        config.ach10_check = !config.ach10_check
    }
    if(config.totaleddieorbs >= 1000000000 && config.ach11_check === false) {
        achievement11()
        config.ach11_check = !config.ach11_check
    }
    if(config.totaleddieorbs >= 10000000000 && config.ach12_check === false) {
        achievement12()
        config.ach12_check = !config.ach12_check
    }

    config.totaleddieorbs = Math.round(config.totaleddieorbsraw)
}

window.onload = function() {
    if(config.walter === true) {
        document.getElementById('eddie').src = "images/walter.gif"
    } else {
        document.getElementById('eddie').src = "images/EddieSphere.gif"
    }

    if(config.shortnumbers === true) {
        document.getElementById('setting3-img').src = "images/icons/checkbox2.png"
    }
    if(config.shortnumbers === false) {
        document.getElementById('setting3-img').src = "images/icons/checkbox1.png"
    }

    if(config.walter === true) {
        document.getElementById('setting4-img').src = "images/icons/checkbox2.png"
    }
    if(config.walter === false) {
        document.getElementById('setting4-img').src = "images/icons/checkbox1.png"
    }
}

function counterupdate() {
    counterformat()
    document.getElementById('cpc').innerHTML = config.cpc * config.cpcmultiplier * config.golden_cpcmultiplier;
    document.getElementById('cursorprice').innerHTML = config.cursorprice;
    document.getElementById('boneprice').innerHTML = config.boneprice;
    document.getElementById('frisbeprice').innerHTML = config.frisbeprice;
    document.getElementById('treatprice').innerHTML = config.treatprice;
}

function counterformat() {
    if(config.shortnumbers === true) {
        if(config.count >= 1000000) {
            document.getElementById('count').innerHTML = numeral(config.count).format('0.000a');
        } else {
            document.getElementById('count').innerHTML = numeral(config.count).format('0,00')
        }
    } else {
        document.getElementById('count').innerHTML = numeral(config.count).format('0,00')
    }
}

//---------OTHER----------//

window.addEventListener('keydown', (event) => {
    if(event.key === 'q' && event.ctrlKey && config.devtoolsunlocked === false) {
        document.getElementById('devtools').hidden = false
        config.devtoolsunlocked = true
        console.log('Developer Tools Unlocked!')
    }
});