document.getElementById('loader_text').innerHTML = 'Loading Golden Eddies...'
console.log('Loading Golden Eddies...')

var goldeneddie_type = 0

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
        config.goldeneddie_random = Math.round(Math.random() * 10)
        goldeneddie_random_count = 100
        document.getElementById('goldeneddie_chance').innerHTML = config.goldeneddie_random
        goldeneddierandom()
        
        if(config.goldeneddie_random === 7) {
            document.getElementById('goldeneddie_chance').style.setProperty('color', 'lime')
        } else {
            document.getElementById('goldeneddie_chance').style.setProperty('color', 'red')
        }
    
        if(config.goldeneddie_random === !7) {
            document.getElementById('goldeneddie').style.setProperty('transform', 'scale(0%)')
        }   
    }
}

function goldeneddierandom() {
    if(config.goldeneddie_random === 7) {
        console.log('Golden Eddie Spawned!')
        config.goldeneddiesspawned += 1
        goldeneddie()
    }
}

function goldeneddie() {
    var ge = document.createElement('img');
    ge.setAttribute('class','goldeneddie');
    ge.setAttribute('src','images/goldeneddie.png');

    document.getElementById('goldeneddiecontainer').appendChild(ge),

    ge.style.setProperty('left', `calc(100% * ${Math.random()}`)
    ge.style.setProperty('top', `calc(100% * ${Math.random()}`)
    
    ge.onclick = function () {
        document.getElementById('goldeneddiecontainer').removeChild(ge)
        if(config.spells_unlocked === true) {
            goldeneddie_type = Math.round(Math.random() * 3)
        } else {
            goldeneddie_type = Math.round(Math.random() * 2)
        }

        goldeneddie_click()
    }

    setTimeout(() => {
        ge.style.setProperty('transform','scale(100%)')
    }, 1);

    setTimeout(() => {
        ge.style.setProperty('transform','scale(0%)')

        setTimeout(() => {
            document.getElementById('goldeneddiecontainer').removeChild(ge)
        }, 2000);
    }, 5000);
}

function goldeneddie_click() {
    if(config.goldeneddiesclicked === 0) {
        config.upgrades += 1
    }
    
    if(goldeneddie_type === 0) {
    config.totaleddieorbsraw += (config.countraw * 2 ) - config.countraw
    config.countraw *= 2

    document.getElementById('alert_text').innerHTML = 'Eddie Orbs x2!'
    document.getElementById('alert_text').style.setProperty('width', '150px')

    document.getElementById('count').classList.add('counter-ani')
    
    setTimeout(() => {
        document.getElementById('count').classList.remove('counter-ani')
    }, 1000);


    } else if(goldeneddie_type === 1) {
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


    } else if(goldeneddie_type === 2) {
    document.getElementById('alert_text').innerHTML = 'EPC x4 for 30 seconds!'
    document.getElementById('alert_text').style.setProperty('width', '300px')
    document.getElementById('cpc').style.setProperty('color', 'yellow')
    config.golden_cpcmultiplier *= 4

    document.getElementById('goldeneddie_counter').classList.remove('goldeneddie-counter-ani')
    document.getElementById('goldeneddie_counter').classList.add('goldeneddie-counter-ani')
    
    setTimeout(() => {
        document.getElementById('goldeneddie_counter').classList.remove('goldeneddie-counter-ani')
    }, 30000);
    
    setTimeout(() => {
        config.golden_cpcmultiplier /= 4
    }, 30000);

    } else if(goldeneddie_type === 3) {
        document.getElementById('alert_text').style.setProperty('width', '150px')
        document.getElementById('cpc').style.setProperty('color', 'yellow')
        
        if(config.flasks + 10 > config.flasks_max) {
            document.getElementById('alert_text').innerText = '+' + (config.flasks_max - config.flasks) + ' Flasks!'
            config.totalflasks += config.flasks_max - config.flasks
            config.flasks = config.flasks_max
        } else {
            config.flasks += 10
            config.totalflasks += 10
            document.getElementById('alert_text').innerHTML = '+10 Flasks!'
        }
    } 

    document.getElementById('alert_text').style.setProperty('background-color', 'rgba(253, 255, 125, 0.5)')
    savealert()
    document.getElementById('goldeneddie').hidden = true

    config.goldeneddiesclicked += 1
    if(config.goldeneddiesclicked === 1) {
        achievement18()
    }
    if(config.goldeneddiesclicked === 11) {
        achievement19()
    }
    if(config.goldeneddiesclicked === 111) {
        achievement21()
    }
}