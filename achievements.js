function achievement1() {
    document.getElementById('achievement1').style.setProperty('left', '10px')
    config.totalachievements += 1

    setTimeout(() => {
        document.getElementById('achievement1').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement2() {
    document.getElementById('achievement2').style.setProperty('left', '10px')
    config.totalachievements += 1

    setTimeout(() => {
        document.getElementById('achievement2').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement3() {
    document.getElementById('achievement3').style.setProperty('left', '10px')
    config.totalachievements += 1

    setTimeout(() => {
        document.getElementById('achievement3').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement4() {
    document.getElementById('achievement4').style.setProperty('left', '10px')
    config.totalachievements += 1

    setTimeout(() => {
        document.getElementById('achievement4').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement5() {
    document.getElementById('achievement5').style.setProperty('left', '10px')
    config.totalachievements += 1

    setTimeout(() => {
        document.getElementById('achievement5').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement6() {
    document.getElementById('achievement6').style.setProperty('left', '10px')
    config.totalachievements += 1

    setTimeout(() => {
        document.getElementById('achievement6').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement7() {
    document.getElementById('achievement7').style.setProperty('left', '10px')
    config.totalachievements += 1

    setTimeout(() => {
        document.getElementById('achievement7').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement8() {
    document.getElementById('achievement8').style.setProperty('left', '10px')
    config.totalachievements += 1

    setTimeout(() => {
        document.getElementById('achievement8').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement9() {
    document.getElementById('achievement9').style.setProperty('left', '10px')
    config.totalachievements += 1
    
    setTimeout(() => {
        document.getElementById('achievement9').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement10() {
    document.getElementById('achievement10').style.setProperty('left', '10px')
    config.totalachievements += 1

    setTimeout(() => {
        document.getElementById('achievement10').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement11() {
    document.getElementById('achievement11').style.setProperty('left', '10px')
    config.totalachievements += 1

    setTimeout(() => {
        document.getElementById('achievement11').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement12() {
    document.getElementById('achievement12').style.setProperty('left', '10px')
    config.totalachievements += 1

    setTimeout(() => {
        document.getElementById('achievement12').style.setProperty('left', '-350px')  
    }, 5000);
}

function achievementclose() {
    document.getElementById('achievement1').style.setProperty('left', '-350px')
    document.getElementById('achievement2').style.setProperty('left', '-350px')
    document.getElementById('achievement3').style.setProperty('left', '-350px')
    document.getElementById('achievement4').style.setProperty('left', '-350px')
    document.getElementById('achievement5').style.setProperty('left', '-350px')
    document.getElementById('achievement6').style.setProperty('left', '-350px')
    document.getElementById('achievement7').style.setProperty('left', '-350px')
    document.getElementById('achievement8').style.setProperty('left', '-350px')
    document.getElementById('achievement9').style.setProperty('left', '-350px')
    document.getElementById('achievement10').style.setProperty('left', '-350px')
    document.getElementById('achievement11').style.setProperty('left', '-350px')
    document.getElementById('achievement12').style.setProperty('left', '-350px')

}

function buycursor() {
    if(config.cursortotal === 1)
    achievement2()
    
    if(config.cursortotal === 10) {
        achievement3()
    }
}