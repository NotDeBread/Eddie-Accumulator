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

function warningclick() {
    document.getElementById('warning_').style.setProperty('right','-350px')
}

document.getElementById('loader_text').innerHTML = 'Done!'
console.log('Done!')

setTimeout(() => {
    document.getElementById('loader').style.setProperty('opacity','0')
    
    setTimeout(() => {
        document.getElementById('loader').style.setProperty('height','0')
    }, 500);
}, 250);