document.getElementById('loader_text').innerHTML = 'Loading Spells'
console.log('Loading Spells...')
setInterval(flaskincrease, 30000)

function flaskincrease() {
    if(config.flasks < config.flasks_max && config.spells_unlocked === true) {
        config.flasks += 1
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
    if(config.spell_golden_cooldown === false && config.flasks >= 20) {
        goldeneddie_type = Math.round(Math.random() * 2)
        goldeneddie_click() 
        silentsave()

        document.getElementById('spell_golden').style.setProperty('filter','grayscale()')
        config.flasks_max += 2
        config.flasks -= 20

        config.spell_golden_cooldown = true

        if(config.flasks >= 20) {
            document.getElementById('spell_price').style.setProperty('color','lime')
        } else {document.getElementById('spell_price').style.setProperty('color','red')}

        setTimeout(() => {
            document.getElementById('spell_golden').style.setProperty('filter','none')
            config.spell_golden_cooldown = false
        }, 2500);
    }
}