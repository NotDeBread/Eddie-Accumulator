var eps = (config.cursorcps * config.cursormultiplier) + (config.bonecps * config.bonemultiplier) + (config.frisbecps * config.frisbemultiplier) + (config.treatcps * config.treatmultiplier) + (config.bedcps * config.bedmultiplier) + (config.friendcps * config.friendmultiplier)
var eddieorbs = config.countraw


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

document.getElementById('stat_timesclicked').innerHTML = numeral(config.timesclicked).format('0,00')
document.getElementById('stat_goldeneddies').innerHTML = config.goldeneddiesclicked
if(config.goldeneddiesspawned > 0 && config.goldeneddiesclicked > 0) {
    document.getElementById('stat_ge_precent').innerHTML = '( ' + Math.round(( config.goldeneddiesclicked / config.goldeneddiesspawned ) * 100) + '% )'
}
document.getElementById('stat_upgrades').innerHTML = config.totalupgrades
document.getElementById('stat_achievements').innerHTML = config.totalachievements
document.getElementById('stat_goldeneddies_s').innerHTML = config.goldeneddiesspawned

if(eddieorbs >= 1000000000000000000000000000000000) {
    document.getElementById('eddieorbs').innerHTML = 'Infinity'
} else if(eddieorbs >= 1000000) {
    document.getElementById('eddieorbs').innerHTML = numeral(config.count).format('0.000a');
} else {
    document.getElementById('eddieorbs').innerHTML = numeral(config.count).format('0,00')
}

if(eps >= 1000000) {
    document.getElementById('eps').innerHTML = numeral(eps).format('0.000a')
} else {document.getElementById('eps').innerHTML = numeral(eps).format('0,00')}

if(config.cpc * config.cpcmultiplier * config.golden_cpcmultiplier >= 1000000) {
    document.getElementById('epc').innerHTML = numeral(config.cpc * config.cpcmultiplier * config.golden_cpcmultiplier).format('0.000a')
} else {document.getElementById('epc').innerHTML = numeral(config.cpc * config.cpcmultiplier * config.golden_cpcmultiplier).format()}

if(config.totaleddieorbs >= 1000000 && config.shortnumbers === true) {
    document.getElementById('total').innerHTML = numeral(config.totaleddieorbs).format('0.000a')
} else {
    document.getElementById('total').innerHTML = numeral(config.totaleddieorbs).format('0,00')
}

//----------UPGRADES----------//

if(config.totalupgrades >= 1) {
    document.getElementById('no_upgrades').style.setProperty('display','none')
}


if(config.upgrade_silvercursors_bought === true) {
    document.getElementById('upgrade_silvercursors').hidden = false
}

if(config.upgrade_goldencursors_bought === true) {
    document.getElementById('upgrade_goldencursors').hidden = false
}

if(config.upgrade_platinumcursors_bought === true) {
    document.getElementById('upgrade_platinumcursors').hidden = false
}


if(config.upgrade_platinumcursors_bought === true) {
    document.getElementById('upgrade_platinumcursors').hidden = false
}

if(config.upgrade_emeraldcursors_bought === true) {
    document.getElementById('upgrade_emeraldcursors').hidden = false
}

if(config.upgrade_goldenfingers_bought === true) {
    document.getElementById('upgrade_goldenfingers').hidden = false
}

if(config.upgrade_platinumfingers_bought === true) {
    document.getElementById('upgrade_platinumfingers').hidden = false
}

if(config.upgrade_diamondfingers_bought === true) {
    document.getElementById('upgrade_diamondfingers').hidden = false
}

if(config.upgrade_emeraldfingers_bought === true) {
    document.getElementById('upgrade_emeraldfingers').hidden = false
}

if(config.upgrade_rubyfingers_bought === true) {
    document.getElementById('upgrade_rubyfingers').hidden = false
}

if(config.upgrade_baconbones_bought === true) {
    document.getElementById('upgrade_baconbones').hidden = false
}

if(config.upgrade_meatbones_bought === true) {
    document.getElementById('upgrade_meatbones').hidden = false
}

if(config.upgrade_thebone_bought === true) {
    document.getElementById('upgrade_thebone').hidden = false
}

if(config.upgrade_superfrisbe_bought === true) {
    document.getElementById('upgrade_superfrisbe').hidden = false
}

if(config.upgrade_superepicfrisbe_bought === true) {
    document.getElementById('upgrade_superepicfrisbe').hidden = false
}

if(config.upgrade_superultraepicfrisbe_bought === true) {
    document.getElementById('upgrade_superultraepicfrisbe').hidden = false
}

if(config.upgrade_hmtreats_bought === true) {
    document.getElementById('upgrade_hmtreats').hidden = false
}

if(config.upgrade_barkbites_bought === true) {
    document.getElementById('upgrade_barkbites').hidden = false
}

if(config.upgrade_frostedtreats_bought === true) {
    document.getElementById('upgrade_frostedtreats').hidden = false
}

if(config.upgrade_xlbed_bought === true) {
    document.getElementById('upgrade_xlbed').hidden = false
}

if(config.upgrade_goldeneddies_bought === true) {
    document.getElementById('upgrade_goldeneddies').hidden = false
}

if(config.upgrade_shimmeringeddies_bought === true) {
    document.getElementById('upgrade_shimmeringeddies').hidden = false
}

if(config.upgrade_emptybottle_bought === true) {
    document.getElementById('upgrade_emptybottle').hidden = false
}


function upgradett_enter() {
    document.getElementById('upgradett').style.setProperty('opacity','1')
    document.getElementById('upgradett').style.setProperty('right','-330px')
}

function upgradett_leave() {
    document.getElementById('upgradett').style.setProperty('opacity','0')
    document.getElementById('upgradett').style.setProperty('right','-340px')
}

function silvercursors_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Silver Cursors'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles Cursor Speed'
}

function goldencursors_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Golden Cursors'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles Cursor Speed'
}

function platinumcursors_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Platinum Cursors'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles Cursor Speed'
}

function emeraldcursors_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Emerald Cursors'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles Cursor Speed'
}

function goldenfingers_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Golden Fingers'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles EPC by how many cursors are owned'
}

function platinumfingers_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Platinum Fingers'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles EPC by how many cursors are owned'
}

function diamondfingers_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Diamond Fingers'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles EPC by how many cursors are owned'
}

function emeraldfingers_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Emerald Fingers'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles EPC by how many cursors are owned'
}

function rubyfingers_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Ruby Fingers'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles EPC by how many cursors are owned'
}

function baconbones_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Bacon Flavored Bones'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles Bone Speed'
}

function meatbones_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Bones with some meat left over'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Triples Bone Speed'
}

function thebone_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'THE BONE™'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Triples Bone Speed <br> <i style="color: grey">Idea from Zeke<i>'
}

function superfrisbe_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Super Frisbe'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles Frisbe Speed'
}

function superepicfrisbe_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Super Epic Frisbe'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Triples Frisbe Speed'
}

function superultraepicfrisbe_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Super Ultra Epic Frisbe'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Triples Frisbe Speed'
}

function hmtreats_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Home Made Treats'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles Treat Speed'
}

function barkbites_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Bark Bites'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Triples Treat Speed'
}

function frostedtreats_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Frosted Treats'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Triples Treat Speed'
}

function xlbed_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'XL Bed'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Doubles Bed Speed'
}

function goldeneddies_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Golden Eddies'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Unlocks Golden Eddies'
}

function shimmeringeddies_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Shimmering Eddies'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Raises Golden Eddie Spawnrate'
}

function emptybottle_hover() {
    document.getElementById('upgrade_tt_title').innerHTML = 'Empty Bottle'
    document.getElementById('upgrade_tt_desc').innerHTML = 'Unlocks Spells'
}

//----------RANKS----------//

if(config.totaleddieorbs < 1000) {
    document.getElementById('rank').src = 'images/ranks/rank-d.png'
    document.getElementById('rank_progress_overlay').style.setProperty('background-color','rgb(132, 86, 75)')
    document.getElementById('rank_progress').innerHTML = numeral(1000 - config.totaleddieorbs).format('0,00')
    document.getElementById('rank_progress_overlay').style.setProperty('width', (config.totaleddieorbs / 1000) * 100 + '%')

} else if(config.totaleddieorbs < 10000) {
    document.getElementById('rank').src = 'images/ranks/rank-dplus.png'
    document.getElementById('rank_progress_overlay').style.setProperty('background-color','rgb(242, 118, 107)')
    document.getElementById('rank_progress').innerHTML = numeral(10000 - config.totaleddieorbs).format('0,00')
    document.getElementById('rank_progress_overlay').style.setProperty('width', (config.totaleddieorbs / 10000) * 100 + '%')

} else if(config.totaleddieorbs < 100000) {
    document.getElementById('rank').src = 'images/ranks/rank-c.png'
    document.getElementById('rank_progress_overlay').style.setProperty('background-color','rgb(191, 143, 96)')
    document.getElementById('rank_progress').innerHTML = numeral(100000 - config.totaleddieorbs).format('0,00')
    document.getElementById('rank_progress_overlay').style.setProperty('width', (config.totaleddieorbs / 100000) * 100 + '%')

} else if(config.totaleddieorbs < 1000000) {
    document.getElementById('rank').src = 'images/ranks/rank-cplus.png'
    document.getElementById('rank_progress_overlay').style.setProperty('background-color','rgb(208, 158, 79)')
    document.getElementById('rank_progress').innerHTML = numeral(1000000 - config.totaleddieorbs).format('0,00')
    document.getElementById('rank_progress_overlay').style.setProperty('width', (config.totaleddieorbs / 1000000) * 100 + '%')
} else if(config.totaleddieorbs < 10000000) {
    document.getElementById('rank').src = 'images/ranks/rank-b.png'
    document.getElementById('rank_progress_overlay').style.setProperty('background-color','rgb(248, 219, 113)')
    document.getElementById('rank_progress').innerHTML = numeral(10000000 - config.totaleddieorbs).format('0,00')
    document.getElementById('rank_progress_overlay').style.setProperty('width', (config.totaleddieorbs / 10000000) * 100 + '%')
} else if(config.totaleddieorbs < 100000000) {
    document.getElementById('rank').src = 'images/ranks/rank-bplus.png'
    document.getElementById('rank_progress_overlay').style.setProperty('background-color','rgb(250, 246, 109)')
    document.getElementById('rank_progress').innerHTML = numeral(100000000 - config.totaleddieorbs).format('0,00')
    document.getElementById('rank_progress_overlay').style.setProperty('width', (config.totaleddieorbs / 100000000) * 100 + '%')
} else if(config.totaleddieorbs < 1000000000) {
    document.getElementById('rank').src = 'images/ranks/rank-a.png'
    document.getElementById('rank_progress_overlay').style.setProperty('background-color','rgb(153, 229, 80)')
    document.getElementById('rank_progress').innerHTML = numeral(1000000000 - config.totaleddieorbs).format('0,00')
    document.getElementById('rank_progress_overlay').style.setProperty('width', (config.totaleddieorbs / 1000000000) * 100 + '%')
} else if(config.totaleddieorbs < 10000000000) {
    document.getElementById('rank').src = 'images/ranks/rank-aplus.png'
    document.getElementById('rank_progress_overlay').style.setProperty('background-color','rgb(73, 236, 102)')
    document.getElementById('rank_progress').innerHTML = numeral(10000000000 - config.totaleddieorbs).format('0,00')
    document.getElementById('rank_progress_overlay').style.setProperty('width', (config.totaleddieorbs / 10000000000) * 100 + '%')
} else if(config.totaleddieorbs < 100000000000) {
    document.getElementById('rank').src = 'images/ranks/rank-s.png'
    document.getElementById('rank_progress_overlay').style.setProperty('background-color','rgb(91, 110, 225)')
    document.getElementById('rank_progress').innerHTML = numeral(100000000000 - config.totaleddieorbs).format('0,00')
    document.getElementById('rank_progress_overlay').style.setProperty('width', (config.totaleddieorbs / 100000000000) * 100 + '%')
} else {
    document.getElementById('rank').src = 'images/ranks/rank-splus.png'
    document.getElementById('rank_text').innerHTML = 'Maximum Rank!'
    document.getElementById('rank_progress_overlay').style.setProperty('background-color','rgb(82, 78, 238)')
    document.getElementById('rank_progress_overlay').style.setProperty('width', '100%')
}

//---------ACHIEVEMENTS----------//

if(config.ach1 === true) {
    document.getElementById('achievement1-title').innerHTML = 'Click'
    document.getElementById('achievement1-title').style.setProperty('color','white')
    document.getElementById('achievement1-desc').innerHTML = 'Click Eddie 1 Time'
}

if(config.ach2 === true) {
    document.getElementById('achievement2-title').innerHTML = 'Eddie Incursion'
    document.getElementById('achievement2-title').style.setProperty('color','white')
    document.getElementById('achievement2-desc').innerHTML = 'Buy 1 Cursor'
}

if(config.ach3 === true) {
    document.getElementById('achievement3-title').innerHTML = 'Eddie Invasion'
    document.getElementById('achievement3-title').style.setProperty('color','white')
    document.getElementById('achievement3-desc').innerHTML = 'Buy 10 Cursors'
}

if(config.ach4 === true) {
    document.getElementById('achievement4-title').innerHTML = 'House of Eddies'
    document.getElementById('achievement4-title').style.setProperty('color','white')
    document.getElementById('achievement4-desc').innerHTML = 'Reach 100 Total Eddie Orbs'
}

if(config.ach5 === true) {
    document.getElementById('achievement5-title').innerHTML = 'Building of Eddies'
    document.getElementById('achievement5-title').style.setProperty('color','white')
    document.getElementById('achievement5-desc').innerHTML = 'Reach 1,000 Total Eddie Orbs'
}

if(config.ach6 === true) {
    document.getElementById('achievement6-title').innerHTML = 'City of Eddies'
    document.getElementById('achievement6-title').style.setProperty('color','white')
    document.getElementById('achievement6-desc').innerHTML = 'Reach 10,000 Total Eddie Orbs'
}

if(config.ach7 === true) {
    document.getElementById('achievement7-title').innerHTML = 'County of Eddies'
    document.getElementById('achievement7-title').style.setProperty('color','white')
    document.getElementById('achievement7-desc').innerHTML = 'Reach 100,000 Total Eddie Orbs'
}

if(config.ach8 === true) {
    document.getElementById('achievement8-title').innerHTML = 'State of Eddies'
    document.getElementById('achievement8-title').style.setProperty('color','white')
    document.getElementById('achievement8-desc').innerHTML = 'Reach 1 Million Total Eddie Orbs'
}

if(config.ach9 === true) {
    document.getElementById('achievement9-title').innerHTML = 'Country of Eddies'
    document.getElementById('achievement9-title').style.setProperty('color','white')
    document.getElementById('achievement9-desc').innerHTML = 'Reach 10 Million Total Eddie Orbs'
}

if(config.ach10 === true) {
    document.getElementById('achievement10-title').innerHTML = 'Continent of Eddies'
    document.getElementById('achievement10-title').style.setProperty('color','white')
    document.getElementById('achievement10-desc').innerHTML = 'Reach 100 Million Total Eddie Orbs'
}

if(config.ach11 === true) {
    document.getElementById('achievement11-title').innerHTML = 'Planet of Eddies'
    document.getElementById('achievement11-title').style.setProperty('color','white')
    document.getElementById('achievement11-desc').innerHTML = 'Reach 1 Billion Total Eddie Orbs'
}

if(config.ach12 === true) {
    document.getElementById('achievement12-title').innerHTML = 'Solar System of Eddies'
    document.getElementById('achievement12-title').style.setProperty('color','white')
    document.getElementById('achievement12-desc').innerHTML = 'Reach 10 Billion Total Eddie Orbs'
}

if(config.ach13 === true) {
    document.getElementById('achievement13-title').innerHTML = 'Wrong Eddie Orb'
    document.getElementById('achievement13-title').style.setProperty('color','white')
    document.getElementById('achievement13-desc').innerHTML = 'Click The Loading Screen Icon'
}

if(config.ach14 === true) {
    document.getElementById('achievement14-title').innerHTML = 'Youre a Wizard Eddie'
    document.getElementById('achievement14-title').style.setProperty('color','white')
    document.getElementById('achievement14-desc').innerHTML = 'Unlock Spells'
}