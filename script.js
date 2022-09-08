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
    config.countraw += (config.cpc * config.cpcmultiplier)
    config.totaleddieorbsraw += (config.cpc * config.cpcmultiplier)
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
    document.getElementById('label_left').style.setProperty('top', '115px')
    document.getElementById('label_left').innerHTML = 'Statistics'
    document.getElementById('label_left').style.setProperty('width', '110px')
}

function labeldevtools() {
    document.getElementById('label_left').style.setProperty('top', '155px')
    document.getElementById('label_left').innerHTML = 'Developer Tools'
    document.getElementById('label_left').style.setProperty('width', '140px')
}



function clickspersecond() {
    config.countraw += (config.cursorcps * config.cursormultiplier ) / 40
    config.countraw += (config.bonecps * config.bonemultiplier) / 40
    config.countraw += (config.frisbecps * config.frisbemultiplier) / 40
    config.countraw += (config.treatcps * config.treatmultiplier) / 40
    config.totaleddieorbsraw += (config.cursorcps * config.cursormultiplier ) / 40
    config.totaleddieorbsraw += (config.bonecps * config.bonemultiplier) / 40
    config.totaleddieorbsraw += (config.frisbecps * config.frisbemultiplier) / 40
    config.totaleddieorbsraw += (config.treatcps * config.treatmultiplier) / 40
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
    
    if(config.count >= 50000){
            document.getElementById('upgrade_diamondfingers_price').style.setProperty('color', 'lime')
            document.getElementById('upgrade_diamondfingers_img').style.setProperty('filter', 'brightness(100%)')
    } else {
            document.getElementById('upgrade_diamondfingers_price').style.setProperty('color', 'red')
            document.getElementById('upgrade_diamondfingers_img').style.setProperty('filter', 'brightness(75%)')
    }
    
    if(config.count >= 50000){
        document.getElementById('upgrade_superfrisbe_price').style.setProperty('color', 'lime')
        document.getElementById('upgrade_superfrisbe_img').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_superfrisbe_price').style.setProperty('color', 'red')
        document.getElementById('upgrade_superfrisbe_img').style.setProperty('filter', 'brightness(75%)')
    }
    
    if(config.count >= 100000){
        document.getElementById('upgrade_shimmeringeddies_price').style.setProperty('color', 'lime')
        document.getElementById('upgrade_shimmeringeddies_img').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_shimmeringeddies_price').style.setProperty('color', 'red')
        document.getElementById('upgrade_shimmeringeddies_img').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.countraw < 0) {
        config.countraw = 0
    }
}

//----------EVENTS----------//

function update() {

    cps = ((config.cursorcps * config.cursormultiplier) + (config.bonecps * config.bonemultiplier) + (config.frisbecps * config.frisbemultiplier) + config.treatcps)
    document.getElementById('cps').innerHTML = cps

    config.count = Math.round(config.countraw)
    config.totaleddieorbs = Math.round(config.totaleddieorbs)

    if(config.timesclicked >= 100 && config.upgrade_silvercursors_bought === false){
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
    if(config.cursortotal >= 50 && config.upgrade_diamondfingers_bought === false){
        document.getElementById('upgrade_diamondfingers').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
    if(config.bonetotal >= 10 && config.upgrade_baconbones_bought === false){
        document.getElementById('upgrade_baconbones').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
    if(config.frisbetotal >= 10 && config.upgrade_superfrisbe_bought === false){
        document.getElementById('upgrade_superfrisbe').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
    if(config.goldeneddiesclicked === 1 && config.upgrade_shimmeringeddies_bought === false){
        document.getElementById('upgrade_shimmeringeddies').hidden = false;
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }

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
    document.getElementById('cpc').innerHTML = config.cpc * config.cpcmultiplier;
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

function footerlabelenter() {
    document.getElementById('label_footer').style.setProperty('opacity', '1')
    document.getElementById('footer_text').style.setProperty('opacity', '0')
    document.getElementById('label_footer').style.setProperty('margin-top', '7px')
}

function footerlabelleave() {
    document.getElementById('label_footer').style.setProperty('opacity', '0')
    document.getElementById('footer_text').style.setProperty('opacity', '1')
    document.getElementById('label_footer').style.setProperty('margin-top', '0px')
}

function htmlhover() {
    document.getElementById('label_footer').innerHTML = 'HTML'
    document.getElementById('label_footer').style.setProperty('transform', 'translateX(-25px)')
}

function csshover() {
    document.getElementById('label_footer').innerHTML = 'CSS'
    document.getElementById('label_footer').style.setProperty('transform', 'translateX(0px)')
}

function jshover() {
    document.getElementById('label_footer').innerHTML = 'JS'
    document.getElementById('label_footer').style.setProperty('transform', 'translateX(25px)')
}

window.addEventListener('keydown', (event) => {
    if(event.key === 'q' && event.ctrlKey) {
        document.getElementById('devtools').hidden = false
        config.devtoolsunlocked = true
        console.log('Developer Tools Unlocked!')
    }
});
