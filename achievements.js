setInterval(achievementcountdown, 1000)
var ach_countdown = 0


function achievement1() {
    document.getElementById('achievement1').style.setProperty('left', '10px')
    config.ach_countdown = 5
    config.totalachievements += 1
}

function achievement2() {
    document.getElementById('achievement2').style.setProperty('left', '10px')
    config.ach_countdown = 5
    config.totalachievements += 1

}

function achievement3() {
    document.getElementById('achievement3').style.setProperty('left', '10px')
    config.ach_countdown = 5
    config.totalachievements += 1

}

function achievementcountdown() {
    if(config.ach_countdown >= 0 && config.ach_countdown >= 1)
    config.ach_countdown -= 1

    if(config.ach_countdown === 1) {
        achievementclose()
    }
}

function achievementclose() {
    document.getElementById('achievement1').style.setProperty('left', '-250px')
    document.getElementById('achievement2').style.setProperty('left', '-250px')
    document.getElementById('achievement3').style.setProperty('left', '-250px')

}

function buycursor() {
    if(config.cursortotal === 1)
    achievement2()
    
    if(config.cursortotal === 10) {
        achievement3()
    }
}