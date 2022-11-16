window.onscroll = function() {topbutton()};

function topbutton() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('top_button').style.setProperty('bottom','0')
    } else {
        document.getElementById('top_button').style.setProperty('bottom','-35px')
    }
}

function topclick() {
    document.documentElement.scrollTop = 0
}

function upgrades_collapse() {
    config.upgrades_collapsed = !config.upgrades_collapsed
}

function spells_collapse() {
    config.spells_collapsed = !config.spells_collapsed
}

function warningclick() {
    document.getElementById('warning_').style.setProperty('right','-350px')
}

function list() {
    console.log('Eddie Orbs :', Math.round(config.count))
    console.log('Eddie Orbs (raw) :', config.count)
    console.log('Eddie Orbs per Second:', ((config.cursorcps * config.cursormultiplier) + (config.bonecps * config.bonemultiplier) + (config.frisbecps * config.frisbemultiplier) + (config.treatcps * config.treatmultiplier) + (config.bedcps * config.bedmultiplier) + (config.friendcps * config.friendmultiplier)) * config.goldeneddiemultiplier)
    console.log('Eddie Orbs per Click:', config.cpc)
    console.log('Developer Tools Enabled:', config.devtoolsunlocked)
}

if(config.updateviewed === false) {
    document.getElementById('updatenew').hidden = false
} else {
    document.getElementById('updatenew').hidden = true
    document.getElementById('updatecontainer').style.setProperty('display','none')
}

function updateclose() {
    document.getElementById('updatenew').hidden = true
    document.getElementById('updatecontainer').style.setProperty('display','none')
    config.updateviewed = true
}

document.getElementById('loader_text').innerHTML = ''
console.log('Done!')

setTimeout(() => {
    document.getElementById('loader').style.setProperty('opacity','0')
    document.getElementById('loader_img').style.setProperty('width','0')
    document.getElementById('loader_img').style.setProperty('height','0')
    
    setTimeout(() => {
        document.getElementById('loader').style.setProperty('height','0')
    }, 500);
}, 250);