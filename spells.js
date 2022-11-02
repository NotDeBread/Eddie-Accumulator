document.getElementById('loader_text').innerHTML = 'Loading Spells'
console.log('Loading Spells...')
setInterval(flaskincrease, 30000)
var goldenspell_type = 0


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
    document.getElementById('spell_title').innerHTML = 'Spell of Shininess'
    document.getElementById('spell_desc').innerHTML = 'Starts a random Golden Eddie effect'
    document.getElementById('spell_price').innerHTML = '20 Flasks'

    if(config.flasks >= 20) {
        document.getElementById('spell_price').style.setProperty('color','lime')
    } else {document.getElementById('spell_price').style.setProperty('color','red')}
}

function spell_golden() {
    if(config.flasks >= 20 || devtoolsopen === true) {
        goldenspell_type = Math.round(Math.random() * 2)
        goldenspelltype()
        silentsave()

        config.spells_used += 1
        config.flasks_max += 2
        config.flasks -= 20
        config.flasksused += 20

        if(config.flasks >= 20) {
            document.getElementById('spell_price').style.setProperty('color','lime')
        } else {document.getElementById('spell_price').style.setProperty('color','red')}
    }
}

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