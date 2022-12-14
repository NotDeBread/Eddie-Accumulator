document.getElementById('loader_text').innerHTML = 'Loading Script...'
console.log('Loading Script...')

const favicon = document.getElementById("favicon");

var goldeneddie_random = 0
var freeze = false

config.goldeneddiemultiplier = 1
config.golden_cpcmultiplier = 1
config.spell_golden_cooldown = false

setInterval(clickspersecond, 25)
setInterval(rankupdate, 1)
setInterval(rankupdate_img, 500)
setInterval(update, 1)

var pulse = function() {
    var e = document.createElement('span');
    e.setAttribute('class','click');
    if((config.cpc * config.cpcmultiplier) * config.golden_cpcmultiplier >= 1000000 && config.shortnumbers === true) {
        e.innerHTML = numeral((config.cpc * config.cpcmultiplier) * config.golden_cpcmultiplier).format('0.000a')
    } else {
        e.innerHTML = numeral((config.cpc * config.cpcmultiplier) * config.golden_cpcmultiplier).format('0,00')
    }
    if(config.golden_cpcmultiplier > 1) {
        e.style.setProperty('transform','scale(150%) translateX(-30%) translateY(-50%)')
        e.style.setProperty('color','yellow')
    }
    document.body.appendChild(e),
    e.style.top = event.pageY + 'px',
    e.style.left = event.pageX + 'px',

    setTimeout(function() {
        document.body.removeChild(e)
    }, 1000)

}

function eddieenter() {
    if(config.showcpc === true) {
        document.addEventListener('click', pulse)
    }
}

function eddieleave() {
    if(config.showcpc === true) {
        document.removeEventListener('click', pulse)
    }
}

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

    if (config.timesclicked === 250) {
        config.upgrades += 1
    }

    if (config.timesclicked === 500) {
        config.upgrades += 1
    }

    if (config.timesclicked === 1000) {
        config.upgrades += 1
    }

    if (config.timesclicked === 1500) {
        config.upgrades += 1
    }
    if (config.timesclicked === 2500) {
        config.upgrades += 1
    }
}

function clickspersecond() {

    if(freeze === false) {
        config.countraw += (config.cursorcps * config.cursormultiplier ) / 40 * config.goldeneddiemultiplier
        config.countraw += (config.bonecps * config.bonemultiplier) / 40 * config.goldeneddiemultiplier
        config.countraw += (config.frisbecps * config.frisbemultiplier) / 40 * config.goldeneddiemultiplier
        config.countraw += (config.treatcps * config.treatmultiplier) / 40 * config.goldeneddiemultiplier
        config.countraw += (config.bedcps * config.bedmultiplier) / 40 * config.goldeneddiemultiplier
        config.countraw += (config.friendcps * config.friendmultiplier) / 40 * config.goldeneddiemultiplier
        config.totaleddieorbsraw += (config.cursorcps * config.cursormultiplier ) / 40 * config.goldeneddiemultiplier
        config.totaleddieorbsraw += (config.bonecps * config.bonemultiplier) / 40 * config.goldeneddiemultiplier
        config.totaleddieorbsraw += (config.frisbecps * config.frisbemultiplier) / 40 * config.goldeneddiemultiplier
        config.totaleddieorbsraw += (config.treatcps * config.treatmultiplier) / 40 * config.goldeneddiemultiplier
        config.totaleddieorbsraw += (config.bedcps * config.bedmultiplier) / 40 * config.goldeneddiemultiplier
        config.totaleddieorbsraw += (config.friendcps * config.friendmultiplier) / 40 * config.goldeneddiemultiplier
        config.count = config.countraw
    
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
    
        if (config.count >= config.bedprice) {
            document.getElementById('bedimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('bedprice').style.setProperty('color', 'lime')
        } else {
            document.getElementById('bedimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('bedprice').style.setProperty('color', 'red')
        }
    
        if (config.count >= config.friendprice) {
            document.getElementById('friendimg').style.setProperty('filter', 'brightness(100%)')
            document.getElementById('friendprice').style.setProperty('color', 'lime')
        } else {
            document.getElementById('friendimg').style.setProperty('filter', 'brightness(75%)')
            document.getElementById('friendprice').style.setProperty('color', 'red')
        }
    
        if(config.countraw < 0) {
            config.countraw = 0
        }
    }
}

//----------EVENTS----------//

function update() {
    
    if(config.cps >= 1000000) {
        document.getElementById('cps').innerHTML = numeral(config.cps).format('0.000a')
    } else {document.getElementById('cps').innerHTML = numeral(config.cps).format('0,00')}

    config.cps = ((config.cursorcps * config.cursormultiplier) + (config.bonecps * config.bonemultiplier) + (config.frisbecps * config.frisbemultiplier) + (config.treatcps * config.treatmultiplier) + (config.bedcps * config.bedmultiplier) + (config.friendcps * config.friendmultiplier)) * config.goldeneddiemultiplier

    config.count = config.countraw
    config.totaleddieorbs = Math.round(config.totaleddieorbs)

    if(config.devtoolsunlocked === true) {
        document.getElementById('devtools').hidden = false
    }

    if(config.upgrades >= 1 && config.upgrades_collapsed === false) {
        document.getElementById('no_upgrades').hidden = true
    } else {
        document.getElementById('no_upgrades').hidden = false
    }

    if(config.totalupgrades === 39) {
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

    if(config.spells_collapsed === true) {
        document.getElementById('spells_header_img').style.setProperty('transform', 'rotate(180deg)')
        document.getElementById('spells-all').style.setProperty('display','none')
    } else {
        document.getElementById('spells_header_img').style.setProperty('transform', 'rotate(90deg)')
        document.getElementById('spells-all').style.setProperty('display','unset')
    }

    if(config.totaleddieorbs >= 100000 && config.goldeneddies_check === false) {
        config.upgrades += 1
        config.goldeneddies_check = !config.goldeneddies_check
    }

    if(config.totaleddieorbs >= 500000 && config.emptybottle_check === false) {
        config.upgrades += 1
        config.emptybottle_check = !config.emptybottle_check
    }

    if(config.totaleddieorbs >= 1000000 && config.biggerflasks_check === false && config.upgrade_emptybottle_bought === true) {
        config.upgrades += 1
        config.biggerflasks_check = !config.biggerflasks_check
    }

    if(config.totaleddieorbs >= 1000000 && config.reinforcedflasks_check === false && config.upgrade_biggerflasks_bought === true) {
        config.upgrades += 1
        config.reinforcedflasks_check = !config.reinforcedflasks_check
    }

    if(config.goldeneddiemultiplier === 1) {
        document.getElementById('cps').style.setProperty('color', 'white')
    }

    if(config.golden_cpcmultiplier === 1 && config.blitzactive === false) {
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
    if(config.totaleddieorbs >= 100000000000 && config.ach15_check === false) {
        achievement15()
        config.ach15_check = !config.ach15_check
    }

    if(config.spells_unlocked === true) {
        document.getElementById('spells').hidden = false
    }

    if(config.count >= 1000000000) {
        document.getElementById('sphereglow').style.setProperty('opacity','1')
    } else if(config.count >= 1000000) {
        document.getElementById('sphereglow').style.setProperty('opacity','0.75')
    } else {
        document.getElementById('sphereglow').style.setProperty('opacity','0')
    }

    document.getElementById('spell_bar_overlay').style.setProperty('width', (config.flasks / config.flasks_max) * 100 + '%')
    document.getElementById('flasks').innerHTML = config.flasks
    document.getElementById('flasks_max').innerHTML = config.flasks_max

    config.totaleddieorbs = Math.round(config.totaleddieorbsraw)
}


function counterupdate() {
    counterformat()

    if(config.cpc * config.cpcmultiplier * config.golden_cpcmultiplier >= 1000000 && config.shortnumbers === true) {
        document.getElementById('cpc').innerHTML = numeral(config.cpc * config.cpcmultiplier * config.golden_cpcmultiplier).format('0.000a')
    } else {document.getElementById('cpc').innerHTML = numeral(config.cpc * config.cpcmultiplier * config.golden_cpcmultiplier).format()}

    if(config.cursorprice >= 1000000 && config.shortnumbers === true) {
        document.getElementById('cursorprice').innerHTML = numeral(config.cursorprice).format('0.000a');
    } else {document.getElementById('cursorprice').innerHTML = numeral(config.cursorprice).format('0,00')}

    if(config.boneprice >= 1000000 && config.shortnumbers === true) {
        document.getElementById('boneprice').innerHTML = numeral(config.boneprice).format('0.000a');
    } else {document.getElementById('boneprice').innerHTML = numeral(config.boneprice).format('0,00');}

    if(config.frisbeprice >= 1000000 && config.shortnumbers === true) {
        document.getElementById('frisbeprice').innerHTML = numeral(config.frisbeprice).format('0.000a');
    } else {document.getElementById('frisbeprice').innerHTML = numeral(config.frisbeprice).format('0,00');}

    if(config.treatprice >= 1000000 && config.shortnumbers === true) {
        document.getElementById('treatprice').innerHTML = numeral(config.treatprice).format('0.000a');
    } else {document.getElementById('treatprice').innerHTML = numeral(config.treatprice).format('0,00');}

    if(config.bedprice >= 1000000 && config.shortnumbers === true) {
        document.getElementById('bedprice').innerHTML = numeral(config.bedprice).format('0.000a');
    } else {document.getElementById('bedprice').innerHTML = numeral(config.bedprice).format('0,00');}

    if(config.friendprice >= 1000000 && config.shortnumbers === true) {
        document.getElementById('friendprice').innerHTML = numeral(config.friendprice).format('0.000a');
    } else {document.getElementById('friendprice').innerHTML = numeral(config.friendprice).format('0,00');}
}

function counterformat() {
    if(config.shortnumbers === true) {
         if(config.countraw >= 1000000) {
            document.getElementById('count').innerHTML = numeral(config.countraw).format('0.000a');
        } else {
            document.getElementById('count').innerHTML = numeral(config.countraw).format('0,00')
        }
    } else {
        document.getElementById('count').innerHTML = numeral(config.countraw).format('0,00')
    }
}

//---------OTHER----------//

window.addEventListener('keydown', (event) => {
    if(event.key === 'q' && event.ctrlKey && config.devtoolsunlocked === false) {
        document.getElementById('devtools').hidden = false
        config.devtoolsunlocked = true
        console.log('Developer Tools Unlocked!')
        document.getElementById('warning').innerHTML = '<br>DEVELOPER TOOLS ENABLED'
        document.getElementById('warning_').style.setProperty('right','0px')
        if(config.ach17 === false) {
            achievement17()
        }
    }
});

if(config.devtoolsunlocked === true) {
    document.getElementById('warning').innerHTML = '<br>DEVELOPER TOOLS ENABLED'
}

function rankupdate() {
    if(config.totaleddieorbs <= 1000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-dplus)')
    } else if(config.totaleddieorbs <= 10000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-c)')
    } else if(config.totaleddieorbs <= 100000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-cplus)')
    } else if(config.totaleddieorbs <= 1000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-b)')
    } else if(config.totaleddieorbs <= 10000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-bplus)')
    } else if(config.totaleddieorbs <= 100000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-a)')
    } else if(config.totaleddieorbs <= 1000000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-aplus)')
    } else if(config.totaleddieorbs <= 10000000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-s)')
    } else if(config.totaleddieorbs <= 100000000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-splus)')
    } else if(config.totaleddieorbs <= 1000000000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-ss)')
    }

    if(config.totaleddieorbs < 1000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-d)')

        if(1000 - config.totaleddieorbs >= 1000000) {
            document.getElementById('rank_count').innerHTML = numeral(1000 - config.totaleddieorbs).format('0.000a')
        } else {document.getElementById('rank_count').innerHTML = numeral(1000 - config.totaleddieorbs).format('0,00')}

        document.getElementById('rank_progress').style.setProperty('width', (config.totaleddieorbs / 1000) * 100 + '%')
    
    } else if(config.totaleddieorbs < 10000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-dplus)')

        if(10000 - config.totaleddieorbs >= 1000000) {
            document.getElementById('rank_count').innerHTML = numeral(10000 - config.totaleddieorbs).format('0.000a')
        } else {document.getElementById('rank_count').innerHTML = numeral(10000 - config.totaleddieorbs).format('0,00')}

        document.getElementById('rank_progress').style.setProperty('width', ((config.totaleddieorbs - 1000) / (10000 - 1000)) * 100 + '%')
    
    } else if(config.totaleddieorbs < 100000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-c)')

        if(100000 - config.totaleddieorbs >= 1000000) {
            document.getElementById('rank_count').innerHTML = numeral(100000 - config.totaleddieorbs).format('0.000a')
        } else {document.getElementById('rank_count').innerHTML = numeral(100000 - config.totaleddieorbs).format('0,00')}

        document.getElementById('rank_progress').style.setProperty('width', ((config.totaleddieorbs - 10000) / (100000 - 10000)) * 100 + '%')
    
    } else if(config.totaleddieorbs < 1000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-cplus)')

        if(1000000 - config.totaleddieorbs >= 1000000) {
            document.getElementById('rank_count').innerHTML = numeral(1000000 - config.totaleddieorbs).format('0.000a')
        } else {document.getElementById('rank_count').innerHTML = numeral(1000000 - config.totaleddieorbs).format('0,00')}

        document.getElementById('rank_progress').style.setProperty('width', ((config.totaleddieorbs - 100000) / (1000000 - 100000)) * 100 + '%')

    } else if(config.totaleddieorbs < 10000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-b)')

        if(10000000 - config.totaleddieorbs >= 1000000) {
            document.getElementById('rank_count').innerHTML = numeral(10000000 - config.totaleddieorbs).format('0.000a')
        } else {document.getElementById('rank_count').innerHTML = numeral(10000000 - config.totaleddieorbs).format('0,00')}

        document.getElementById('rank_progress').style.setProperty('width', ((config.totaleddieorbs - 1000000) / (10000000 - 1000000)) * 100 + '%')

    } else if(config.totaleddieorbs < 100000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-bplus)')

        if(100000000 - config.totaleddieorbs >= 1000000) {
            document.getElementById('rank_count').innerHTML = numeral(100000000 - config.totaleddieorbs).format('0.000a')
        } else {document.getElementById('rank_count').innerHTML = numeral(100000000 - config.totaleddieorbs).format('0,00')}

        document.getElementById('rank_progress').style.setProperty('width', ((config.totaleddieorbs - 10000000) / (100000000 - 10000000)) * 100 + '%')

    } else if(config.totaleddieorbs < 1000000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-a)')

        if(1000000000 - config.totaleddieorbs >= 1000000) {
            document.getElementById('rank_count').innerHTML = numeral(1000000000 - config.totaleddieorbs).format('0.000a')
        } else {document.getElementById('rank_count').innerHTML = numeral(1000000000 - config.totaleddieorbs).format('0,00')}

        document.getElementById('rank_progress').style.setProperty('width', ((config.totaleddieorbs - 100000000) / (1000000000 - 100000000)) * 100 + '%')

    } else if(config.totaleddieorbs < 10000000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-aplus)')

        if(10000000000 - config.totaleddieorbs >= 1000000) {
            document.getElementById('rank_count').innerHTML = numeral(10000000000 - config.totaleddieorbs).format('0.000a')
        } else {document.getElementById('rank_count').innerHTML = numeral(10000000000 - config.totaleddieorbs).format('0,00')}

        document.getElementById('rank_progress').style.setProperty('width', ((config.totaleddieorbs - 1000000000) / (10000000000 - 1000000000)) * 100 + '%')

    } else if(config.totaleddieorbs < 100000000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-s)')

        if(100000000000 - config.totaleddieorbs >= 1000000) {
            document.getElementById('rank_count').innerHTML = numeral(100000000000 - config.totaleddieorbs).format('0.000a')
        } else {document.getElementById('rank_count').innerHTML = numeral(100000000000 - config.totaleddieorbs).format('0,00')}

        document.getElementById('rank_progress').style.setProperty('width', ((config.totaleddieorbs - 10000000000) / (100000000000 - 10000000000)) * 100 + '%')

    } else if(config.totaleddieorbs < 1000000000000) {
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-splus)')
        if(1000000000000 - config.totaleddieorbs >= 1000000) {
            document.getElementById('rank_count').innerHTML = numeral(1000000000000 - config.totaleddieorbs).format('0.000a')
        } else {document.getElementById('rank_count').innerHTML = numeral(1000000000000 - config.totaleddieorbs).format('0,00')}

        document.getElementById('rank_progress').style.setProperty('width', ((config.totaleddieorbs - 100000000000) / (1000000000000 - 100000000000)) * 100 + '%')

    } else {
        document.getElementById('rank_text').innerHTML = 'Maximum Rank!'
        document.getElementById('rank_progress').style.setProperty('background-color','var(--rank-ss)')
        document.getElementById('rank_progress').style.setProperty('width', '100%')
    }
}

function rankupdate_img() {

    if(config.totaleddieorbs < 1000) {
        document.getElementById('rank').src = 'images/ranks/rank-d.png'
    
    } else if(config.totaleddieorbs < 10000) {
        document.getElementById('rank').src = 'images/ranks/rank-dplus.png'
    
    } else if(config.totaleddieorbs < 100000) {
        document.getElementById('rank').src = 'images/ranks/rank-c.png'
    
    } else if(config.totaleddieorbs < 1000000) {
        document.getElementById('rank').src = 'images/ranks/rank-cplus.png'

    } else if(config.totaleddieorbs < 10000000) {
        document.getElementById('rank').src = 'images/ranks/rank-b.png'

    } else if(config.totaleddieorbs < 100000000) {
        document.getElementById('rank').src = 'images/ranks/rank-bplus.png'

    } else if(config.totaleddieorbs < 1000000000) {
        document.getElementById('rank').src = 'images/ranks/rank-a.png'

    } else if(config.totaleddieorbs < 10000000000) {
        document.getElementById('rank').src = 'images/ranks/rank-aplus.png'

    } else if(config.totaleddieorbs < 100000000000) {
        document.getElementById('rank').src = 'images/ranks/rank-s.png'

    } else if(config.totaleddieorbs < 1000000000000) {
        document.getElementById('rank').src = 'images/ranks/rank-splus.png'

    } else {
        document.getElementById('rank').src = 'images/ranks/rank-ss.png'
    }
}