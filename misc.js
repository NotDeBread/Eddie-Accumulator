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

function noti_open() {
    document.getElementById('notis').style.setProperty('right', '0')
}

function noti_close() {
    document.getElementById('notis').style.setProperty('right', '-25%')
}

function upgrades_collapse() {
    config.upgrades_collapsed = !config.upgrades_collapsed
}