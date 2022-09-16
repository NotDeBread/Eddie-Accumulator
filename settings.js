setInterval(autosave, 60000)

function settings() {

//Open

    if(!settingsopen) {
        document.getElementById('settings_img').src = "images/icons/back.png"
        document.getElementById('settings').style.setProperty('width', '250px')
        document.getElementById('settings').style.setProperty('height', '250px')
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