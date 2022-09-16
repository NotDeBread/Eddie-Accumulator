var goldeneddie_random_count = config.goldeneddiecount / 100

setInterval(() => {
    goldeneddie_randomize()    
}, config.goldeneddiecount);

setInterval(() => {
    if(config.goldeneddie_random_count <= 0) {
        goldeneddie_random_count = config.goldeneddiecount
    }
    
    if(config.goldeneddies_unlocked === true) {
        goldeneddie_random_count -= 1
        document.getElementById('goldeneddie_chance_count').innerHTML = goldeneddie_random_count
    }
        
}, config.goldeneddiecount / 100);

function goldeneddie_randomize() {
    if(config.goldeneddies_unlocked === true) {
        goldeneddie_random = Math.round(Math.random() * 10)
        goldeneddie_random_count = 100
        goldeneddierandom()
        document.getElementById('goldeneddie_chance').innerHTML = goldeneddie_random
        
        if(goldeneddie_random === 7) {
            document.getElementById('goldeneddie_chance').style.setProperty('color', 'lime')
        } else {
            document.getElementById('goldeneddie_chance').style.setProperty('color', 'red')
        }
    
        if(goldeneddie_random === !7) {
            document.getElementById('goldeneddie').style.setProperty('transform', 'scale(0%)')
        }   
    }
}

function goldeneddierandom() {
    if(goldeneddie_random === 7) {
        console.log('Golden Eddie Spawned!')
        goldeneddie()
    }
}

function goldeneddie() {
    document.getElementById('goldeneddie').style.setProperty('left', `calc(100vw * ${Math.random()}`)
    document.getElementById('goldeneddie').style.setProperty('top', `calc(100vh * ${Math.random()}`)
    document.getElementById('goldeneddie').style.setProperty('transform', 'scale(100%)')

    setTimeout(() => {
        document.getElementById('goldeneddie').style.setProperty('transform', 'scale(0%)')

        setTimeout(() => {
            document.getElementById('goldeneddie').hidden = false
        }, 2000);
    }, 5000);
}

function goldeneddie_click() {
    config.totaleddieorbsraw += (config.countraw * 7 ) - config.totaleddieorbsraw
    config.countraw *= 7
    document.getElementById('alert_text').style.setProperty('width', '150px')
    document.getElementById('alert_text').style.setProperty('background-color', 'rgba(253, 255, 125, 0.5)')
    document.getElementById('alert_text').innerHTML = 'Eddie Orbs x7!'
    savealert()
    document.getElementById('goldeneddie').hidden = true
    config.goldeneddiesclicked += 1

    if(config.goldeneddiesclicked === 1) {
        config.upgrades += 1
    }
}