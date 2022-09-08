
if(config.totaleddieorbs >= 1000000 && config.shortnumbers === true) {
    document.getElementById('stat_eddieorbs').innerHTML = numeral(config.totaleddieorbs).format('0.000a')
} else {
    document.getElementById('stat_eddieorbs').innerHTML = numeral(config.totaleddieorbs).format('0,00')
}

if(config.eddieorbsspent >= 1000000 && config.shortnumbers === true) {
    document.getElementById('stat_eddieorbsspent').innerHTML = numeral(config.eddieorbsspent).format('0.000a')
} else {
    document.getElementById('stat_eddieorbsspent').innerHTML = numeral(config.eddieorbsspent).format('0,00')
}

document.getElementById('stat_timesclicked').innerHTML = config.timesclicked
document.getElementById('stat_goldeneddies').innerHTML = config.goldeneddiesclicked
document.getElementById('stat_upgrades').innerHTML = config.totalupgrades
document.getElementById('stat_achievements').innerHTML = config.totalachievements


