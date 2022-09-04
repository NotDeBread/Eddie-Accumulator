setInterval(goldeneddie_randomize, 10000)

function goldeneddie_randomize() {
    goldeneddie_random = Math.round(Math.random() * 7)
    goldeneddierandom()
    if(goldeneddie_random === !7) {
        document.getElementById('goldeneddie').style.setProperty('transform', 'scale(0%)')
    }
}

function goldeneddierandom() {
    if(goldeneddie_random === 7) {
        console.log('Golden Eddie Spawned!')
        goldeneddie()
    }
}

function goldeneddie() {
    document.getElementById('goldeneddie').style.setProperty('left', `calc(100vw * ${Math.random()} - 150px`)
    document.getElementById('goldeneddie').style.setProperty('top', `calc(100vh * ${Math.random()} - 150px)`)
    document.getElementById('goldeneddie').style.setProperty('transform', 'scale(100%)')

    setTimeout(() => {
        document.getElementById('goldeneddie').style.setProperty('transform', 'scale(0%)')

        setTimeout(() => {
            document.getElementById('goldeneddie').hidden = false
        }, 2000);
    }, 5000);
}

function goldeneddie_click() {
    config.countraw *= 7
    document.getElementById('noti_text').style.setProperty('width', '150px')
    document.getElementById('noti_text').innerHTML = 'Eddie Orbs x7!'
    savenoti()
    document.getElementById('goldeneddie').hidden = true
}