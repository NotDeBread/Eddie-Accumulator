document.getElementById('loader_text').innerHTML = 'Loading Achievements...'
console.log('Loading Achievemets...')

function achievement1() {
    document.getElementById('ach_title').innerHTML = 'Click'
    document.getElementById('ach_desc').innerHTML = 'Click Eddie 1 Time'
    document.getElementById('achievement').style.setProperty('left', '10px')
    config.totalachievements += 1
    config.ach1 = true


    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement2() {
    document.getElementById('ach_title').innerHTML = 'Eddie Incursion'
    document.getElementById('ach_desc').innerHTML = 'Buy 1 Cursor'
    document.getElementById('achievement').style.setProperty('left', '10px')
    config.totalachievements += 1
    config.ach2 = true

    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement3() {
    document.getElementById('ach_title').innerHTML = 'Eddie Invasion'
    document.getElementById('ach_desc').innerHTML = 'Buy 10 Cursors '
    document.getElementById('achievement').style.setProperty('left', '10px')
    config.totalachievements += 1
    config.ach3 = true

    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement4() {
    document.getElementById('ach_title').innerHTML = 'House of Eddies'
    document.getElementById('ach_desc').innerHTML = 'Reach 100 Total Eddie Orbs'
    document.getElementById('achievement').style.setProperty('left', '10px')
    config.totalachievements += 1
    config.ach4 = true

    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement5() {
    document.getElementById('ach_title').innerHTML = 'Building of Eddies'
    document.getElementById('ach_desc').innerHTML = 'Reach 1,000 Total Eddie Orbs'
    document.getElementById('achievement').style.setProperty('left', '10px')
    config.totalachievements += 1
    config.ach5 = true

    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement6() {
    document.getElementById('ach_title').innerHTML = 'City of Eddies'
    document.getElementById('ach_desc').innerHTML = 'Reach 10,000 Total Eddie Orbs'
    document.getElementById('achievement').style.setProperty('left', '10px')
    config.totalachievements += 1
    config.ach6 = true

    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement7() {
    document.getElementById('ach_title').innerHTML = 'County of Eddies'
    document.getElementById('ach_desc').innerHTML = 'Reach 100,000 Total Eddie Orbs'
    document.getElementById('achievement').style.setProperty('left', '10px')
    config.totalachievements += 1
    config.ach7 = true

    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement8() {
    document.getElementById('achievement').style.setProperty('left', '10px')
    document.getElementById('ach_title').innerHTML = 'State of Eddies'
    document.getElementById('ach_desc').innerHTML = 'Reach 1 Million Total Eddie Orbs'
    config.totalachievements += 1
    config.ach8 = true

    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement9() {
    document.getElementById('ach_title').innerHTML = 'Country of Eddies'
    document.getElementById('ach_desc').innerHTML = 'Reach 10 Million Total Eddie Orbs'
    document.getElementById('achievement').style.setProperty('left', '10px')
    config.totalachievements += 1
    config.ach9 = true
    
    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement10() {
    document.getElementById('ach_title').innerHTML = 'Countinent of Eddies'
    document.getElementById('ach_desc').innerHTML = 'Reach 100 Million Total Eddie Orbs'
    document.getElementById('achievement').style.setProperty('left', '10px')
    config.totalachievements += 1
    config.ach10 = true

    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement11() {
    document.getElementById('ach_title').innerHTML = 'Planet of Eddies'
    document.getElementById('ach_desc').innerHTML = 'Reach 1 Billion Total Eddie Orbs'
    document.getElementById('achievement').style.setProperty('left', '10px')
    config.totalachievements += 1
    config.ach11 = true

    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')
    }, 5000);
}

function achievement12() {
    document.getElementById('ach_title').innerHTML = 'Solar System of Eddies'
    document.getElementById('ach_desc').innerHTML = 'Reach 10 Billion Total Eddie Orbs'
    document.getElementById('achievement').style.setProperty('left', '10px')
    config.totalachievements += 1
    config.ach12 = true

    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')  
    }, 5000);
}

function achievement13() {
    document.getElementById('ach_title').innerHTML = 'Wrong Eddie Orb'
    document.getElementById('ach_desc').innerHTML = 'That is not the right eddie orb...'
    document.getElementById('achievement').style.setProperty('left', '10px')
    config.totalachievements += 1
    config.ach13 = true

    setTimeout(() => {
        document.getElementById('achievement').style.setProperty('left', '-350px')  
    }, 5000);
}

function achievementclose() {
    document.getElementById('achievement').style.setProperty('left', '-350px')
}