document.getElementById('loader_text').innerHTML = 'Loading Spells'
console.log('Loading Spells...')
setInterval(flaskincrease, 30000)
setInterval(spellupdate, 1)
var goldenspell_type = 0

const spelltitle = document.getElementById('spell_title')
const spelldesc = document.getElementById('spell_desc')
const spellprice = document.getElementById('spell_price')

function spellupdate() {
    if(config.flasks >= 20) {
        document.getElementById('spell_golden').style.setProperty('filter','none')
    } else {document.getElementById('spell_golden').style.setProperty('filter','grayscale()')}
    if(config.flasks >= 30) {
        document.getElementById('spell_timeskip').style.setProperty('filter','none')
    } else {document.getElementById('spell_timeskip').style.setProperty('filter','grayscale()')}
    // if(config.flasks >= 50) {
    //     document.getElementById('spell_blitz').style.setProperty('filter','none')
    // } else {document.getElementById('spell_blitz').style.setProperty('filter','grayscale()')}
}

function flaskincrease() {
    if(config.flasks < config.flasks_max && config.spells_unlocked === true) {
        
        if(config.flasks + config.flask_increase > config.flasks_max) {
            config.flasks = config.flasks_max
            config.totalflasks += (config.flask_increase + config.totalflasks - 1)
        } else {
            config.flasks += config.flask_increase
            config.totalflasks += config.flask_increase
        }
    }
} 

function spell_enter() {
    document.getElementById('spell_tooltip').style.setProperty('opacity','1')
    document.getElementById('spell_tooltip').style.setProperty('left','-190px')
}

function spell_leave() {
    document.getElementById('spell_tooltip').style.setProperty('opacity','0')
    document.getElementById('spell_tooltip').style.setProperty('left','-200px')
}

function unlockspells() {
    document.getElementById('spells').hidden = false
}

function spell_golden_hover() {
    spelltitle.innerHTML = 'Spell of Shininess'
    spelldesc.innerHTML = 'Starts a random Golden Eddie effect<br>'
    spellprice.innerHTML = '20 Flasks'

    if(config.flasks >= 20) {
        spellprice.style.setProperty('color','lime')
    } else {spellprice.style.setProperty('color','red')}
}

function spell_blitz_hover() {
    spelltitle.innerHTML = 'Blitz'
    spelldesc.innerHTML = 'EPC equals one half of your current EPS for 10 seconds<br> <span style="color: grey">From UnlivingSkunk#9305 on Discord</span> <br><br> <span style="color: red">NOT STACKABLE</span><br>'
    spellprice.innerHTML = '50 Flasks'

    if(config.flasks >= 50) {
        spellprice.style.setProperty('color','lime')
    } else {spellprice.style.setProperty('color','red')}
}

function spell_timeskip_hover() {
    spelltitle.innerHTML = 'Time Skip'
    spelldesc.innerHTML = 'Make 10 minutes worth of your EPS instantly<br>'
    spellprice.innerHTML = '30 Flasks'

    if(config.flasks >= 30) {
        spellprice.style.setProperty('color','lime')
    } else {spellprice.style.setProperty('color','red')}
}

function spell_add_hover() {
    spelltitle.innerHTML = 'Request a Spell'
    spelldesc.innerHTML = 'Request a spell to be in Eddie Accumulator'
    spellprice.innerHTML = ''
}

function spell_golden() {
    if(config.flasks >= 20 && config.blitzactive === false) {
        goldenspell_type = Math.round(Math.random() * 2)
        goldenspelltype()
        silentsave()

        config.spells_used += 1
        config.flasks_max += 2
        config.flasks -= 20
        config.flasksused += 20

        if(config.flasks >= 20) {
            spellprice.style.setProperty('color','lime')
        } else {spellprice.style.setProperty('color','red')}
    }
}


function spell_timeskip() {
    if(config.flasks >= 30 && config.blitzactive === false) {
        silentsave()
        
        config.countraw += config.cps * 600
        config.totaleddieorbsraw += config.cps * 600
        
        config.spells_used += 1
        config.flasks_max += 3
        config.flasks -= 30
        config.flasksused += 30
        
        if(config.flasks >= 30) {
            spellprice.style.setProperty('color','lime')
        } else {spellprice.style.setProperty('color','red')}
    }
}

// var blitz = 0

// config.cpc = config.cpcmultiplier * config.golden_cpcmultiplier
// config.blitzactive = false
// function spell_blitz() {
//     if(config.flasks >= 50 && config.blitzactive === false) {
//         silentsave()

//         blitz = (config.cps / 2)

//         config.cpc = blitz
//         config.blitzactive = true
//         document.getElementById('cpc').style.setProperty('color', 'red')

//         setTimeout(() => {
//             config.cpc = config.cpcmultiplier * config.golden_cpcmultiplier
//             config.blitzactive = false
//         }, 10000);

//         config.spells_used += 1
//         config.flasks_max += 5
//         config.flasks -= 50
//         config.flasksused += 50

//         if(config.flasks >= 50) {
//             spellprice.style.setProperty('color','lime')
//         } else {spellprice.style.setProperty('color','red')}
//     }
// }

function goldenspelltype() {
    if(goldenspell_type === 0) {
        config.totaleddieorbsraw += (config.countraw * 2 ) - config.countraw
        config.countraw *= 2
    
        document.getElementById('alert_text').innerHTML = 'Eddie Orbs x2!'
        document.getElementById('alert_text').style.setProperty('width', '150px')
    
        document.getElementById('count').classList.add('counter-ani')
        
        setTimeout(() => {
            document.getElementById('count').classList.remove('counter-ani')
        }, 1000);
    
    
        } else if(goldenspell_type === 1) {
        document.getElementById('alert_text').innerHTML = 'Eddie Orb production x3 for 30 seconds!'
        document.getElementById('alert_text').style.setProperty('width', '400px')
        document.getElementById('cps').style.setProperty('color', 'yellow')
        config.goldeneddiemultiplier *= 3
    
        document.getElementById('goldeneddie_counter').classList.remove('goldeneddie-counter-ani')
        document.getElementById('goldeneddie_counter').classList.add('goldeneddie-counter-ani')
        
        setTimeout(() => {
            document.getElementById('goldeneddie_counter').classList.remove('goldeneddie-counter-ani')
        }, 30000);
    
        setTimeout(() => {
            config.goldeneddiemultiplier /= 3
        }, 30000);
    
    
        } else if(goldenspell_type === 2) {
        document.getElementById('alert_text').innerHTML = 'EPC x3 for 30 seconds!'
        document.getElementById('alert_text').style.setProperty('width', '300px')
        document.getElementById('cpc').style.setProperty('color', 'yellow')
        config.golden_cpcmultiplier *= 3
    
        document.getElementById('goldeneddie_counter').classList.remove('goldeneddie-counter-ani')
        document.getElementById('goldeneddie_counter').classList.add('goldeneddie-counter-ani')
        
        setTimeout(() => {
            document.getElementById('goldeneddie_counter').classList.remove('goldeneddie-counter-ani')
        }, 30000);
        
        setTimeout(() => {
            config.golden_cpcmultiplier /= 3
        }, 30000);
    
        }
    
        document.getElementById('alert_text').style.setProperty('background-color', 'rgba(253, 255, 125, 0.5)')
        savealert()
    }