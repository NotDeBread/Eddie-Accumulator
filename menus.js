document.getElementById('loader_text').innerHTML = 'Loading Menus...'
console.log('Loading Settings...')

var creditsopen = false
var devtoolsopen = false

setInterval(autosave, 60000)

function settingsopen() {
    document.getElementById('settings').style.setProperty('display','flex')
    
    setTimeout(() => {
        document.getElementById('game').style.setProperty('filter','blur(10px)')
        document.getElementById('settings_container').style.setProperty('width','50vw')
        document.getElementById('settings_container').style.setProperty('height','50vh')
        document.getElementById('settings_container').style.setProperty('opacity','1')
        document.getElementById('settings_content').style.setProperty('opacity','1')
    }, 1);

    if(config.autosave === true) {
        document.getElementById('cb_1').src = 'images/icons/checkbox2.png'
    } else {document.getElementById('cb_1').src = 'images/icons/checkbox1.png'}

    if(config.monospacefont === true) {
        document.getElementById('cb_2').src = 'images/icons/checkbox2.png'
    } else {document.getElementById('cb_2').src = 'images/icons/checkbox1.png'}

    if(config.shortnumbers === true) {
        document.getElementById('cb_3').src = 'images/icons/checkbox2.png'
    } else {document.getElementById('cb_3').src = 'images/icons/checkbox1.png'}

    if(config.showcpc === true) {
        document.getElementById('cb_4').src = 'images/icons/checkbox2.png'
    } else {document.getElementById('cb_4').src = 'images/icons/checkbox1.png'}
}

function settingsclose() {
    document.getElementById('settings_container').style.setProperty('width','0vw')
    document.getElementById('settings_container').style.setProperty('height','0vh')
    document.getElementById('settings_container').style.setProperty('opacity','0')
    document.getElementById('settings_content').style.setProperty('opacity','0')
    document.getElementById('game').style.setProperty('filter','blur(0px)')
    setTimeout(() => {
        document.getElementById('settings').style.setProperty('display','none')
        document.getElementById('deletebutton').innerHTML = 'Delete Save'
    }, 250);
}

if(config.monospacefont === true) {
    document.getElementById('count').style.setProperty('font-family','inconsolata')
} else {
    document.getElementById('count').style.setProperty('font-family','renogare')
}

function setting1() {
    if(document.getElementById('cb_1').src = 'images/icons/checkbox1.png' && config.autosave === false) {

        document.getElementById('cb_1').src = 'images/icons/checkbox2.png'
        config.autosave = true

    } else {

        document.getElementById('cb_1').src = 'images/icons/checkbox1.png'
        config.autosave = false

    }
}


function setting2() {
    if(document.getElementById('cb_2').src = 'images/icons/checkbox1.png' && config.monospacefont === false) {

        document.getElementById('cb_2').src = 'images/icons/checkbox2.png'
        document.getElementById('count').style.setProperty('font-family','inconsolata')
        config.monospacefont = true

    } else {

        document.getElementById('cb_2').src = 'images/icons/checkbox1.png'
        document.getElementById('count').style.setProperty('font-family','renogare')
        config.monospacefont = false

    }
}


function setting3() {
    if(document.getElementById('cb_3').src = 'images/icons/checkbox1.png' && config.shortnumbers === false) {

        document.getElementById('cb_3').src = 'images/icons/checkbox2.png'
        config.shortnumbers = true

    } else {

        document.getElementById('cb_3').src = 'images/icons/checkbox1.png'
        config.shortnumbers = false

    }
}

function setting4() {
    if(document.getElementById('cb_4').src = 'images/icons/checkbox1.png' && config.showcpc === false) {

        document.getElementById('cb_4').src = 'images/icons/checkbox2.png'
        config.showcpc = true

    } else {

        document.getElementById('cb_4').src = 'images/icons/checkbox1.png'
        config.showcpc = false

    }
}

function eddie() {
    document.getElementById('mode').innerText = 'Eddie'
    document.getElementById('eddie').src = 'images/spheres/EddieSphere.gif'
    document.getElementById('webtitle').innerText = 'Eddie Accumulator'
    document.getElementById('topper_title').innerText = 'Eddie Accumulator' 
}

function walter() {
    document.getElementById('mode').innerText = 'Walter'
    document.getElementById('eddie').src = 'images/spheres/WalterSphere.gif'
    document.getElementById('webtitle').innerText = 'Walter Accumulator'
    document.getElementById('topper_title').innerText = 'Walter Accumulator'
}

function shadow() {
    document.getElementById('mode').innerText = 'Shadow'
    document.getElementById('eddie').src = 'images/spheres/ShadowSphere.gif'
    document.getElementById('webtitle').innerText = 'Shadow Accumulator'
    document.getElementById('topper_title').innerText = 'Shadow Accumulator'
}

function bruno() {
    document.getElementById('mode').innerText = 'Bruno'
    document.getElementById('eddie').src = 'images/spheres/BrunoSphere.gif'
    document.getElementById('webtitle').innerText = 'Bruno Accumulator'
    document.getElementById('topper_title').innerText = 'Bruno Accumulator'
}

function cj() {
    document.getElementById('mode').innerText = 'CJ'
    document.getElementById('eddie').src = 'images/spheres/CJSphere.gif'
    document.getElementById('webtitle').innerText = 'CJ Accumulator'
    document.getElementById('topper_title').innerText = 'CJ Accumulator'
}

function sabastion() {
    document.getElementById('mode').innerText = 'Sabastion'
    document.getElementById('eddie').src = 'images/spheres/SabastionSphere.gif'
    document.getElementById('webtitle').innerText = 'Sabastion Accumulator'
    document.getElementById('topper_title').innerText = 'Sabastion Accumulator'
}

function lola() {
    document.getElementById('mode').innerText = 'Lola'
    document.getElementById('eddie').src = 'images/spheres/LolaSphere.gif'
    document.getElementById('webtitle').innerText = 'Lola Accumulator'
    document.getElementById('topper_title').innerText = 'Lola Accumulator'
}


if (config.mode === 0){
    eddie()
}

if(config.mode === 1) {
    walter()
} 

if(config.mode === 2) {
    shadow()
} 

if(config.mode === 3) {
    bruno()
} 

if(config.mode === 4) {
    cj()
} 

if(config.mode === 5) {
    sabastion()
}

if(config.mode === 6) {
    lola()
}

function modenext() {
    if(config.mode === 6) {
        config.mode = 0
    } else {config.mode ++}

    if (config.mode === 0){
        eddie()
    }

    if(config.mode === 1) {
        walter()
    } 
    
    if(config.mode === 2) {
        shadow()
    }

    if(config.mode === 3) {
        bruno()
    }

    if(config.mode === 4) {
        cj()
    }
    if(config.mode === 5) {
        sabastion()
    }
    if(config.mode === 6) {
        lola()
    }
    silentsave()
}

function modeback() {
    if(config.mode === 0) {
        config.mode = 6
    } else {config.mode --}

    if (config.mode === 0){
        eddie()
    }

    if(config.mode === 1) {
        walter()
    } 
    
    if(config.mode === 2) {
        shadow()
    }

    if(config.mode === 3) {
        bruno()
    }

    if(config.mode === 4) {
        cj()
    }

    if(config.mode === 5) {
        sabastion()
    }

    if(config.mode === 6) {
        lola()
    }
    silentsave()
}

function deletebutton() {
    if(document.getElementById('deletebutton').innerHTML === 'Delete Save') {
        document.getElementById('deletebutton').innerHTML = 'Are You Sure?'
        document.getElementById('game').style.setProperty('filter','blur(20px)')
    } else if(document.getElementById('deletebutton').innerHTML === 'Are You Sure?') {
        deletesave()
    }
}

function autosave() {
    if(config.autosave === true) {
        localStorage.setItem('save', JSON.stringify(config))
        console.log('AutoSaved', numeral(config.count).format('0,00'), 'Eddie Orbs!')
        document.getElementById('alert_text').style.setProperty('width', '100px')
        document.getElementById('alert_text').style.setProperty('background-color', 'rgba(0, 0, 0, 50%)')
        document.getElementById('alert_text').innerHTML = 'Saved!'
        savealert()
    } //There alex
}

function save() {
    localStorage.setItem('save', JSON.stringify(config))
    console.log('Saved', numeral(config.count).format('0,00'), 'Eddie Orbs!')
    document.getElementById('alert_text').style.setProperty('width', '100px')
    document.getElementById('alert_text').style.setProperty('background-color', 'rgba(0, 0, 0, 50%)')
    document.getElementById('alert_text').innerHTML = 'Saved!'
    savealert()
}

function silentsave() {
    localStorage.setItem('save', JSON.stringify(config))
    console.log('Saved', numeral(config.count).format('0,00'), 'Eddie Orbs!')
}

function savealert() {
    document.getElementById('savealert').style.setProperty('opacity','1')
    document.getElementById('savealert').style.setProperty('transform', 'scale(100%)')
    setTimeout(() => {
        document.getElementById('savealert').style.setProperty('opacity','0')
        document.getElementById('savealert').style.setProperty('transform', 'scale(75%)')
    }, 3000);
}

function deletesave() {
    localStorage.removeItem('save', JSON.stringify(config))
    window.location.reload();
}

function load() {
    if(config.autosave === true) {
        document.getElementById('setting1-img').src = "images/icons/checkbox2.png"
    } else if(config.autosave === false) {
        document.getElementById('setting1-img').src = "images/icons/checkbox1.png"
    }
}

//Devtools

function devtools() {

    //Open
    
        if(!devtoolsopen) {
            document.getElementById('devtools_img').src = "images/icons/back.png"
            document.getElementById('devtools').style.setProperty('width', '200px')
            document.getElementById('devtools').style.setProperty('height', '450px')
            document.getElementById('devtools').style.setProperty('background-color', 'var(--darkerbg)')
            document.getElementById('devtools_content').style.setProperty('opacity', '1')
            document.getElementById('devtools_header').style.setProperty('color', 'rgba(255, 255, 255, 255)')
            document.getElementById('label_left').style.setProperty('opacity','0')
        }
    
    //Close
    
        if(devtoolsopen) {
            document.getElementById('devtools_img').src = "images/icons/tool.png"
            document.getElementById('devtools').style.setProperty('width', '40px')
            document.getElementById('devtools').style.setProperty('height', '40px')
            document.getElementById('devtools').style.setProperty('background-color', 'transparent')
            document.getElementById('devtools_content').style.setProperty('opacity', '0')
            document.getElementById('devtools_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')
        }
        devtoolsopen = !devtoolsopen

        document.getElementById('credits_img').src = "images/icons/users.png"
        document.getElementById('credits').style.setProperty('width', '40px')
        document.getElementById('credits').style.setProperty('height', '40px')
        document.getElementById('credits').style.setProperty('background-color', 'transparent')
        document.getElementById('credits_content').style.setProperty('opacity', '0')
        document.getElementById('credits_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')

        creditsopen = false
}

//Credits

function credits() {

    //Open
    
        if(!creditsopen) {
            document.getElementById('credits_img').src = "images/icons/back.png"
            document.getElementById('credits').style.setProperty('width', '150px')
            document.getElementById('credits').style.setProperty('height', '180px')
            document.getElementById('credits').style.setProperty('background-color', 'var(--darkerbg)')
            document.getElementById('credits_content').style.setProperty('opacity', '1')
            document.getElementById('credits_header').style.setProperty('color', 'rgba(255, 255, 255, 255)')
            document.getElementById('label_left').style.setProperty('opacity','0')
        }
    
    //Close
    
        if(creditsopen) {
            document.getElementById('credits_img').src = "images/icons/users.png"
            document.getElementById('credits').style.setProperty('width', '40px')
            document.getElementById('credits').style.setProperty('height', '40px')
            document.getElementById('credits').style.setProperty('background-color', 'transparent')
            document.getElementById('credits_content').style.setProperty('opacity', '0')
            document.getElementById('credits_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')
        }
        creditsopen = !creditsopen

        document.getElementById('devtools_img').src = "images/icons/tool.png"
        document.getElementById('devtools').style.setProperty('width', '40px')
        document.getElementById('devtools').style.setProperty('height', '40px')
        document.getElementById('devtools').style.setProperty('background-color', 'transparent')
        document.getElementById('devtools_content').style.setProperty('opacity', '0')
        document.getElementById('devtools_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')

        devtoolsopen = false
}

function labelenter() {
    if(settingsopen === false && creditsopen === false && devtoolsopen === false) {
        document.getElementById('label_left').style.setProperty('opacity','1')
        document.getElementById('label_left').style.setProperty('transform', 'translateX(0px)')
    }
}

function labelleave() {
    document.getElementById('label_left').style.setProperty('opacity','0')
    document.getElementById('label_left').style.setProperty('transform', 'translateX(20px)')
}

function labelsettings() {
    document.getElementById('label_left').style.setProperty('top', '39px')
    document.getElementById('label_left').innerHTML = 'Settings'
    document.getElementById('label_left').style.setProperty('width', '90px')

}

function labelcredits() {
    document.getElementById('label_left').style.setProperty('top', '75px')
    document.getElementById('label_left').innerHTML = 'Credits'
    document.getElementById('label_left').style.setProperty('width', '90px')
}

function labelstats() {
    document.getElementById('label_left').style.setProperty('top', '110px')
    document.getElementById('label_left').innerHTML = 'Statistics'
    document.getElementById('label_left').style.setProperty('width', '110px')
}

function labeldevtools() {
    document.getElementById('label_left').style.setProperty('top', '145px')
    document.getElementById('label_left').innerHTML = 'Developer Tools'
    document.getElementById('label_left').style.setProperty('width', '140px')
}

function bodyclick() {

    settingsclose()
    noti_close()

    document.getElementById('credits_img').src = "images/icons/users.png"
    document.getElementById('credits').style.setProperty('width', '40px')
    document.getElementById('credits').style.setProperty('height', '40px')
    document.getElementById('credits').style.setProperty('background-color', 'transparent')
    document.getElementById('credits_content').style.setProperty('opacity', '0')
    document.getElementById('credits_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')

    creditsopen = false

    document.getElementById('devtools_img').src = "images/icons/tool.png"
    document.getElementById('devtools').style.setProperty('width', '40px')
    document.getElementById('devtools').style.setProperty('height', '40px')
    document.getElementById('devtools').style.setProperty('background-color', 'transparent')
    document.getElementById('devtools_content').style.setProperty('opacity', '0')
    document.getElementById('devtools_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')

    devtoolsopen = false
}

function noti_open() {
    document.getElementById('notis').style.setProperty('right', '0')
}

function noti_close() {
    document.getElementById('notis').style.setProperty('right', '-25vw')
}