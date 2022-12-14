document.getElementById('loader_text').innerHTML = 'Loading Train...'
console.log('Loading Train...')

var trainrandomizer = 0

setInterval(() => {
    trainrandom()
}, 60000);

function trainrandom() {
    trainrandomizer = Math.round(Math.random() * 4)

    document.getElementById('train_chance').innerHTML = trainrandomizer

    if(trainrandomizer === 4) {
        train()
    }
}


function train() {
    document.getElementById('train').hidden = false
    document.getElementById('train').style.setProperty('left','125%')

    setTimeout(() => {
        if(document.getElementById('train').hidden === false) {
            document.getElementById('train').hidden = true
            document.getElementById('train').style.setProperty('left','-200px')
        }
    }, 30000);

}

function trainclick() {
    if((config.countraw * 7 ) - config.countraw >= 1000000) {
        document.getElementById('alert_text').innerHTML = 'DeBread Delivered ' + numeral(Math.round((config.countraw * 7 ) - config.countraw)).format('0.000a') + ' Eddie Orbs!'
    } else {
        document.getElementById('alert_text').innerHTML = 'DeBread Delivered ' + numeral(Math.round((config.countraw * 7 ) - config.countraw)).format('0,00') + ' Eddie Orbs!'
    }
    if((config.countraw * 7) === 0) {
        achievement20()
    }
    
    config.countraw *= 7
    config.totaleddieorbsraw += ((config.countraw * 7 ) - config.countraw)

    config.trainsclicked += 1
    
    document.getElementById('alert_text').style.setProperty('background-color', 'rgba(81, 61, 255, 0.5)')
    document.getElementById('alert_text').style.setProperty('width', 'fit-content')
    document.getElementById('cps').style.setProperty('color', 'yellow')
    savealert()

    document.getElementById('train').hidden = true
    document.getElementById('train').style.setProperty('left','-200px')
}