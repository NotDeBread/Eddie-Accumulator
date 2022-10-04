document.getElementById('loader_text').innerHTML = 'Loading Menus...'
console.log('Loading Settings...')

var settingsopen = false
var creditsopen = false
var devtoolsopen = false

setInterval(autosave, 60000)

function settings() {

//Open

    if(!settingsopen) {
        document.getElementById('settings_img').src = "images/icons/back.png"
        document.getElementById('settings').style.setProperty('width', '250px')
        document.getElementById('settings').style.setProperty('height', '260px')
        document.getElementById('settings').style.setProperty('background-color', 'var(--darkerbg)')
        document.getElementById('settings_content').style.setProperty('opacity', '1')
        document.getElementById('settings_header').style.setProperty('color', 'rgba(255, 255, 255, 255)')
        document.getElementById('label_left').style.setProperty('opacity','0')
    }

//Close

    if(settingsopen) {
        document.getElementById('settings_img').src = "images/icons/settings.png"
        document.getElementById('settings').style.setProperty('width', '40px')
        document.getElementById('settings').style.setProperty('height', '40px')
        document.getElementById('settings').style.setProperty('background-color', 'transparent')
        document.getElementById('settings_content').style.setProperty('opacity', '0')
        document.getElementById('settings_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')
        document.getElementById('deletebutton_text').innerHTML = 'Delete Save'
        deletevar = 0

    }
    settingsopen = !settingsopen

    document.getElementById('devtools_img').src = "images/icons/tool.png"
    document.getElementById('devtools').style.setProperty('width', '40px')
    document.getElementById('devtools').style.setProperty('height', '40px')
    document.getElementById('devtools').style.setProperty('background-color', 'transparent')
    document.getElementById('devtools_content').style.setProperty('opacity', '0')
    document.getElementById('devtools_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')

    devtoolsopen = false

    document.getElementById('credits_img').src = "images/icons/users.png"
    document.getElementById('credits').style.setProperty('width', '40px')
    document.getElementById('credits').style.setProperty('height', '40px')
    document.getElementById('credits').style.setProperty('background-color', 'transparent')
    document.getElementById('credits_content').style.setProperty('opacity', '0')
    document.getElementById('credits_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')

    creditsopen = false
}

function setting1() {
    if(!config.setting1var) {
        document.getElementById('setting1-img').src = "images/icons/checkbox2.png"
        config.autosave = true
    } 
    
    if(config.setting1var) {
        document.getElementById('setting1-img').src = "images/icons/checkbox1.png"
        config.autosave = false
    }

    config.setting1var = !config.setting1var
}

function setting2() {
    if(config.setting2var) {
        document.getElementById('setting2-img').src = "images/icons/checkbox1.png"
        config.monospace = false
    } 
    
    if(!config.setting2var) {
        document.getElementById('setting2-img').src = "images/icons/checkbox2.png"
        config.monospace = true
    }

    config.setting2var = !config.setting2var
}

function setting3() {
    if(!config.setting3var) {
        document.getElementById('setting3-img').src = "images/icons/checkbox2.png"
        config.shortnumbers = true
    } 
    
    if(config.setting3var) {
        document.getElementById('setting3-img').src = "images/icons/checkbox1.png"
        config.shortnumbers = false
    }

    config.setting3var = !config.setting3var
}

function setting4() {
    if(!config.setting4var) {
        document.getElementById('setting4-img').src = "images/icons/checkbox2.png"
        config.walter = true
        document.getElementById('eddie').src = 'images/walter.gif'
        document.getElementById('webtitle').innerHTML = 'Walter Accumulator'
        document.getElementById('topper_title').innerHTML = 'Walter Accumulator'
        document.getElementById('favicon').href = 'images/icon2.png'
    } 
    
    if(config.setting4var) {
        document.getElementById('setting4-img').src = "images/icons/checkbox1.png"
        config.walter = false
        document.getElementById('eddie').src = 'images/EddieSphere.gif'
        document.getElementById('webtitle').innerHTML = 'Eddie Accumulator'
        document.getElementById('topper_title').innerHTML = 'Eddie Accumulator'
        document.getElementById('favicon').href = 'images/icon.png'
    }

    config.setting4var = !config.setting4var
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

function savealert() {
    document.getElementById('savealert').style.setProperty('opacity','1')
    document.getElementById('savealert').style.setProperty('transform', 'scale(100%)')
    setTimeout(() => {
        document.getElementById('savealert').style.setProperty('opacity','0')
        document.getElementById('savealert').style.setProperty('transform', 'scale(75%)')
    }, 3000);
}

function deletebutton() {
    document.getElementById('deletebutton_text').innerHTML = 'Are you sure?'
    deletevar += 1

    if (deletevar === 2) {
        deletesave()
    }
}

function defaultbutton() {
    config.autosave = true
    config.setting1var = true
    config.monospace = false
    config.setting2var = false
    config.shortnumbers = true
    config.setting3var = true
    config.walter = false
    config.setting4var = false
    document.getElementById('setting1-img').src = "images/icons/checkbox2.png"
    document.getElementById('setting2-img').src = "images/icons/checkbox1.png"
    document.getElementById('setting3-img').src = "images/icons/checkbox2.png"
    document.getElementById('setting4-img').src = "images/icons/checkbox1.png"
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
            document.getElementById('devtools').style.setProperty('height', '250px')
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

        document.getElementById('settings_img').src = "images/icons/settings.png"
        document.getElementById('settings').style.setProperty('width', '40px')
        document.getElementById('settings').style.setProperty('height', '40px')
        document.getElementById('settings').style.setProperty('background-color', 'transparent')
        document.getElementById('settings_content').style.setProperty('opacity', '0')
        document.getElementById('settings_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')
        document.getElementById('deletebutton_text').innerHTML = 'Delete Save'

        settingsopen = false

        document.getElementById('credits_img').src = "images/icons/users.png"
        document.getElementById('credits').style.setProperty('width', '40px')
        document.getElementById('credits').style.setProperty('height', '40px')
        document.getElementById('credits').style.setProperty('background-color', 'transparent')
        document.getElementById('credits_content').style.setProperty('opacity', '0')
        document.getElementById('credits_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')

        creditsopen = false
}

function dev_x10() {
    config.countraw *= 10
    config.totaleddieorbsraw *= 10
}

function dev_golden() {
    goldeneddie_random = 7
    document.getElementById('goldeneddie_chance').innerHTML = goldeneddie_random
    document.getElementById('goldeneddie_chance').style.setProperty('color', 'lime')
    goldeneddie()
}

function dev_x10cpc() {
    config.cpcmultiplier *= 10
    document.getElementById('cpc').innerHTML = config.cpc * config.cpcmultiplier
}

function dev_10xCursors() {
    for (let index = 0; index < 10; index++) {
        buycursor()
    }
}

function dev_10xBones() {
    for (let index = 0; index < 10; index++) {
        buybone()
    }
}

function dev_10xFrisbes() {
    for (let index = 0; index < 10; index++) {
        buyfrisbe()
    }
}

function dev_10xTreats() {
    for (let index = 0; index < 10; index++) {
        buytreat()
    }
}

function dev_10xBeds() {
    for (let index = 0; index < 10; index++) {
        buybed()
    }
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

        document.getElementById('settings_img').src = "images/icons/settings.png"
        document.getElementById('settings').style.setProperty('width', '40px')
        document.getElementById('settings').style.setProperty('height', '40px')
        document.getElementById('settings').style.setProperty('background-color', 'transparent')
        document.getElementById('settings_content').style.setProperty('opacity', '0')
        document.getElementById('settings_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')
        document.getElementById('deletebutton_text').innerHTML = 'Delete Save'

        settingsopen = false
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
    document.getElementById('settings_img').src = "images/icons/settings.png"
    document.getElementById('settings').style.setProperty('width', '40px')
    document.getElementById('settings').style.setProperty('height', '40px')
    document.getElementById('settings').style.setProperty('background-color', 'transparent')
    document.getElementById('settings_content').style.setProperty('opacity', '0')
    document.getElementById('settings_header').style.setProperty('color', 'rgba(255, 255, 255, 0)')
    document.getElementById('deletebutton_text').innerHTML = 'Delete Save'

    settingsopen = false

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