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
    document.getElementById('spell_desc').innerHTML = 'Spawns a Golden Eddie'

    if(config.countraw >= config.spell_golden_price) {
        document.getElementById('spell_price').style.setProperty('color','lime')
    } else {document.getElementById('spell_price').style.setProperty('color','red')}

    if(config.spell_golden_price >= 1000000) {
        document.getElementById('spell_price').innerHTML = numeral(config.spell_golden_price).format('0.000a') 
    } else {document.getElementById('spell_price').innerHTML = numeral(config.spell_golden_price).format('0,00')}
}

function spell_golden() {
    if(config.spell_golden_cooldown === false && config.countraw >= config.spell_golden_price) {
        config.goldneddierandom === 7
        goldeneddie() 

        document.getElementById('spell_golden').style.setProperty('filter','grayscale()')

        config.spell_golden_cooldown = true
        config.countraw -= config.spell_golden_price
        config.spell_golden_price *= 1.5
        config.eddieorbsspent += config.spell_golden_price

        //Price Formatter

        if(config.spell_golden_price >= 1000000) {
            document.getElementById('spell_price').innerHTML = numeral(config.spell_golden_price).format('0.000a') 
        } else {document.getElementById('spell_price').innerHTML = numeral(config.spell_golden_price).format('0,00')}


        setTimeout(() => {
            document.getElementById('spell_golden').style.setProperty('filter','none')
            config.spell_golden_cooldown = false
        }, 10000);
    }
}