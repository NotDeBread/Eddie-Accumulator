document.getElementById('loader_text').innerHTML = 'Loading Upgrades...'
console.log('Loading Upgrades...')


setInterval(upgrade_update, 1)
setInterval(update, 1)

function update() {
    if(config.count >= 500){
        document.getElementById('upgrade_silvercursors').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_silvercursors').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 1000){
        document.getElementById('upgrade_goldencursors').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_goldencursors').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 25000){
        document.getElementById('upgrade_platinumcursors').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_platinumcursors').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 250000){
        document.getElementById('upgrade_diamondcursors').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_diamondcursors').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 1000000){
        document.getElementById('upgrade_emeraldcursors').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_emeraldcursors').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 10000000){
        document.getElementById('upgrade_rubycursors').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_rubycursors').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 1000){
        document.getElementById('upgrade_goldenfingers').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_goldenfingers').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 25000){
        document.getElementById('upgrade_platinumfingers').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_platinumfingers').style.setProperty('filter', 'brightness(75%)')
    }
    
    if(config.count >= 250000){
        document.getElementById('upgrade_diamondfingers').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_diamondfingers').style.setProperty('filter', 'brightness(75%)')
    }
        
    if(config.count >= 1000000){
        document.getElementById('upgrade_emeraldfingers').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_emeraldfingers').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 10000000){
        document.getElementById('upgrade_rubyfingers').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_rubyfingers').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 50000000){
        document.getElementById('upgrade_obsidianfingers').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_obsidianfingers').style.setProperty('filter', 'brightness(75%)')
    }
    
    if(config.count >= 20000){
        document.getElementById('upgrade_baconbones').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_baconbones').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 50000){
        document.getElementById('upgrade_meatbones').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_meatbones').style.setProperty('filter', 'brightness(75%)')
    }
    
    if(config.count >= 250000){
        document.getElementById('upgrade_thebone').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_thebone').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 2500000){
        document.getElementById('upgrade_nylonbones').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_nylonbones').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 15000000){
        document.getElementById('upgrade_hidebones').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_hidebones').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 500_000_000){
        document.getElementById('upgrade_stick').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_stick').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 100000){
        document.getElementById('upgrade_superfrisbe').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_superfrisbe').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 500000){
        document.getElementById('upgrade_superepicfrisbe').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_superepicfrisbe').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 1500000){
        document.getElementById('upgrade_superultraepicfrisbe').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_superultraepicfrisbe').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 100000000){
        document.getElementById('upgrade_superultraepicfrisbepro').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_superultraepicfrisbepro').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 1000000000){
        document.getElementById('upgrade_superultraepicfrisbeproPE').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_superultraepicfrisbeproPE').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 50_000_000_000){
        document.getElementById('upgrade_superultraepicfrisbeproPE2026').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_superultraepicfrisbeproPE2026').style.setProperty('filter', 'brightness(75%)')
    }


    if(config.count >= 750000){
        document.getElementById('upgrade_hmtreats').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_hmtreats').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 50000000){
        document.getElementById('upgrade_barkbites').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_barkbites').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 25000000){
        document.getElementById('upgrade_frostedtreats').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_frostedtreats').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 500000000){
        document.getElementById('upgrade_nugget').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_nugget').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 25_000_000_000){
        document.getElementById('upgrade_pizza').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_pizza').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 100_000_000_000){
        document.getElementById('upgrade_bacon').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_bacon').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 5000000){
        document.getElementById('upgrade_xlbed').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_xlbed').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 50000000){
        document.getElementById('upgrade_pillow').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_pillow').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 100000000){
        document.getElementById('upgrade_walter').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_walter').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 1_000_000_000){
        document.getElementById('upgrade_lola').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_lola').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 75000){
        document.getElementById('upgrade_goldeneddies').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_goldeneddies').style.setProperty('filter', 'brightness(75%)')
    }
    
    if(config.count >= 100000){
        document.getElementById('upgrade_shimmeringeddies').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_shimmeringeddies').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 250000){
        document.getElementById('upgrade_emptybottle').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_emptybottle').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 1000000){
        document.getElementById('upgrade_biggerflasks').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_biggerflasks').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.count >= 500_000_000){
        document.getElementById('upgrade_reinforcedflasks').style.setProperty('filter', 'brightness(100%)')
    } else {
        document.getElementById('upgrade_reinforcedflasks').style.setProperty('filter', 'brightness(75%)')
    }

    if(config.totaleddieorbs <= 50000) {
        document.getElementById('frisbeimg').style.setProperty('display','none')
    } else {
        document.getElementById('frisbeimg').style.setProperty('display','flex')
    }
    
    if(config.totaleddieorbs <= 250000) {
        document.getElementById('treatimg').style.setProperty('display','none')
    } else {
        document.getElementById('treatimg').style.setProperty('display','flex')
    }
    
    if(config.totaleddieorbs <= 1250000) {
        document.getElementById('bedimg').style.setProperty('display','none')
    } else {
        document.getElementById('bedimg').style.setProperty('display','flex')
    }
    
    if(config.totaleddieorbs <= 25000000) {
        document.getElementById('friendimg').style.setProperty('display','none')
    } else {
        document.getElementById('friendimg').style.setProperty('display','flex')
    }

    if(config.timesclicked >= 100 && config.upgrade_silvercursors_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_silvercursors').hidden = false;
    } else {document.getElementById('upgrade_silvercursors').hidden = true}

    if(config.timesclicked >= 250 && config.upgrade_goldencursors_bought === false && config.upgrades_collapsed === false && config.upgrade_silvercursors_bought === true){
        document.getElementById('upgrade_goldencursors').hidden = false;
    } else {document.getElementById('upgrade_goldencursors').hidden = true}

    if(config.timesclicked >= 500 && config.upgrade_platinumcursors_bought === false && config.upgrades_collapsed === false && config.upgrade_goldencursors_bought === true){
        document.getElementById('upgrade_platinumcursors').hidden = false;
    } else {document.getElementById('upgrade_platinumcursors').hidden = true}

    if(config.timesclicked >= 1000 && config.upgrade_diamondcursors_bought === false && config.upgrades_collapsed === false && config.upgrade_platinumcursors_bought === true){
        document.getElementById('upgrade_diamondcursors').hidden = false;
    } else {document.getElementById('upgrade_diamondcursors').hidden = true}

    if(config.timesclicked >= 1500 && config.upgrade_emeraldcursors_bought === false && config.upgrades_collapsed === false && config.upgrade_diamondcursors_bought === true){
        document.getElementById('upgrade_emeraldcursors').hidden = false;
    } else {document.getElementById('upgrade_emeraldcursors').hidden = true}

    if(config.timesclicked >= 2500 && config.upgrade_rubycursors_bought === false && config.upgrades_collapsed === false && config.upgrade_emeraldcursors_bought === true){
        document.getElementById('upgrade_rubycursors').hidden = false;
    } else {document.getElementById('upgrade_rubycursors').hidden = true}

    if(config.cursortotal >= 25 && config.upgrades_collapsed === false){
        document.getElementById('upgrade_goldenfingers').hidden = false;
    } else {document.getElementById('upgrade_goldenfingers').hidden = true}

    if(config.cursortotal >= 50 && config.upgrades_collapsed === false){
        document.getElementById('upgrade_platinumfingers').hidden = false;
    } else {document.getElementById('upgrade_platinumfingers').hidden = true}

    if(config.cursortotal >= 75 && config.upgrade_diamondfingers_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_diamondfingers').hidden = false;
    } else {document.getElementById('upgrade_diamondfingers').hidden = true}

    if(config.cursortotal >= 100 && config.upgrade_emeraldfingers_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_emeraldfingers').hidden = false;
    } else {document.getElementById('upgrade_emeraldfingers').hidden = true}

    if(config.cursortotal >= 125 && config.upgrade_rubyfingers_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_rubyfingers').hidden = false;
    } else {document.getElementById('upgrade_rubyfingers').hidden = true}

    if(config.cursortotal >= 150 && config.upgrade_obsidianfingers_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_obsidianfingers').hidden = false;
    } else {document.getElementById('upgrade_obsidianfingers').hidden = true}

    if(config.bonetotal >= 10 && config.upgrade_baconbones_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_baconbones').hidden = false;
    } else {document.getElementById('upgrade_baconbones').hidden = true}
    
    if(config.bonetotal >= 25 && config.upgrade_meatbones_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_meatbones').hidden = false;
    } else {document.getElementById('upgrade_meatbones').hidden = true}

    if(config.bonetotal >= 50 && config.upgrade_thebone_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_thebone').hidden = false;
    } else {document.getElementById('upgrade_thebone').hidden = true}

    if(config.bonetotal >= 75 && config.upgrade_nylonbones_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_nylonbones').hidden = false;
    } else {document.getElementById('upgrade_nylonbones').hidden = true}

    if(config.bonetotal >= 100 && config.upgrade_hidebones_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_hidebones').hidden = false;
    } else {document.getElementById('upgrade_hidebones').hidden = true}

    if(config.bonetotal >= 125 && config.upgrade_stick_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_stick').hidden = false;
    } else {document.getElementById('upgrade_stick').hidden = true}

    if(config.frisbetotal >= 10 && config.upgrade_superfrisbe_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_superfrisbe').hidden = false;
    } else {document.getElementById('upgrade_superfrisbe').hidden = true}

    if(config.frisbetotal >= 25 && config.upgrade_superepicfrisbe_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_superepicfrisbe').hidden = false;
    } else {document.getElementById('upgrade_superepicfrisbe').hidden = true}

    if(config.frisbetotal >= 50 && config.upgrade_superultraepicfrisbe_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_superultraepicfrisbe').hidden = false;
    } else {document.getElementById('upgrade_superultraepicfrisbe').hidden = true}

    if(config.frisbetotal >= 75 && config.upgrade_superultraepicfrisbepro_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_superultraepicfrisbepro').hidden = false;
    } else {document.getElementById('upgrade_superultraepicfrisbepro').hidden = true}

    if(config.frisbetotal >= 100 && config.upgrade_superultraepicfrisbeproPE_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_superultraepicfrisbeproPE').hidden = false;
    } else {document.getElementById('upgrade_superultraepicfrisbeproPE').hidden = true}

    if(config.frisbetotal >= 125 && config.upgrade_superultraepicfrisbeproPE2026_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_superultraepicfrisbeproPE2026').hidden = false;
    } else {document.getElementById('upgrade_superultraepicfrisbeproPE2026').hidden = true}

    if(config.treattotal >= 10 && config.upgrade_hmtreats_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_hmtreats').hidden = false;
    } else {document.getElementById('upgrade_hmtreats').hidden = true}

    if(config.treattotal >= 25 && config.upgrade_barkbites_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_barkbites').hidden = false;
    } else {document.getElementById('upgrade_barkbites').hidden = true}

    if(config.treattotal >= 50 && config.upgrade_frostedtreats_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_frostedtreats').hidden = false;
    } else {document.getElementById('upgrade_frostedtreats').hidden = true}

    if(config.treattotal >= 75 && config.upgrade_nugget_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_nugget').hidden = false;
    } else {document.getElementById('upgrade_nugget').hidden = true}

    if(config.treattotal >= 100 && config.upgrade_pizza_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_pizza').hidden = false;
    } else {document.getElementById('upgrade_pizza').hidden = true}

    if(config.treattotal >= 125 && config.upgrade_bacon_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_bacon').hidden = false;
    } else {document.getElementById('upgrade_bacon').hidden = true}

    if(config.bedtotal >= 10 && config.upgrade_xlbed_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_xlbed').hidden = false;
    } else {document.getElementById('upgrade_xlbed').hidden = true}

    if(config.bedtotal >= 25 && config.upgrade_pillow_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_pillow').hidden = false;
    } else {document.getElementById('upgrade_pillow').hidden = true}

    if(config.friendtotal >= 10 && config.upgrade_walter_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_walter').hidden = false;
    } else {document.getElementById('upgrade_walter').hidden = true}

    if(config.friendtotal >= 25 && config.upgrade_lola_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_lola').hidden = false;
    } else {document.getElementById('upgrade_lola').hidden = true}

    if(config.totaleddieorbsraw >= 100000 && config.upgrade_goldeneddies_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_goldeneddies').hidden = false;
    } else {document.getElementById('upgrade_goldeneddies').hidden = true}

    if(config.totaleddieorbsraw >= 500000 && config.upgrade_emptybottle_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_emptybottle').hidden = false;
    } else {document.getElementById('upgrade_emptybottle').hidden = true}

    if(config.totaleddieorbsraw >= 1000000 && config.upgrade_biggerflasks_bought === false && config.upgrades_collapsed === false && config.upgrade_emptybottle_bought === true){
        document.getElementById('upgrade_biggerflasks').hidden = false;
    } else {document.getElementById('upgrade_biggerflasks').hidden = true}

    if(config.totaleddieorbsraw >= 50_000_000 && config.upgrade_reinforcedflasks_bought === false && config.upgrades_collapsed === false && config.upgrade_biggerflasks_bought === true){
        document.getElementById('upgrade_reinforcedflasks').hidden = false;
    } else {document.getElementById('upgrade_reinforcedflasks').hidden = true}

    if(config.goldeneddiesclicked >= 1 && config.upgrade_shimmeringeddies_bought === false && config.upgrades_collapsed === false){
        document.getElementById('upgrade_shimmeringeddies').hidden = false;
    } else {document.getElementById('upgrade_shimmeringeddies').hidden = true}
}


function upgrade_silvercursors_hover() {
    document.getElementById('info_title').innerHTML = "Silver Cursors";
    document.getElementById('info_cps').innerHTML = "Doubles cursor speed";

    if(config.countraw >= 500) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "500"
}

function upgrade_goldencursors_hover() {
    document.getElementById('info_title').innerHTML = "Golden Cursors";
    document.getElementById('info_cps').innerHTML = "Doubles cursor speed";

    if(config.countraw >= 1000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1,000"
}

function upgrade_platinumcursors_hover() {
    document.getElementById('info_title').innerHTML = "Platinum Cursors";
    document.getElementById('info_cps').innerHTML = "Doubles cursor speed";

    if(config.countraw >= 25000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "25,000"
}

function upgrade_diamondcursors_hover() {
    document.getElementById('info_title').innerHTML = "Diamond Cursors";
    document.getElementById('info_cps').innerHTML = "Doubles cursor speed";

    if(config.countraw >= 250000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "250,000"
}

function upgrade_emeraldcursors_hover() {
    document.getElementById('info_title').innerHTML = "Emerald Cursors";
    document.getElementById('info_cps').innerHTML = "Doubles cursor speed";

    if(config.countraw >= 1000000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1 Million"
}

function upgrade_rubycursors_hover() {
    document.getElementById('info_title').innerHTML = "Ruby Cursors";
    document.getElementById('info_cps').innerHTML = "Doubles cursor speed";

    if(config.countraw >= 10000000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "10 Million"
}

function upgrade_goldenfingers_hover() {
    document.getElementById('info_title').innerHTML = "Golden Fingers";
    document.getElementById('info_cps').innerHTML = "Changes EPC by how many cursors are owned";
    
    if(config.countraw >= 1000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1,000"
}

function upgrade_platinumfingers_hover() {
    document.getElementById('info_title').innerHTML = "Platinum Fingers";
    document.getElementById('info_cps').innerHTML = "Doubles EPC by how many cursors are owned";

    
    if(config.countraw >= 25000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "25,000"
}

function upgrade_diamondfingers_hover() {
    document.getElementById('info_title').innerHTML = "Diamond Fingers";
    document.getElementById('info_cps').innerHTML = "Triples EPC by how many cursors are owned";

    
    if(config.countraw >= 250000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "250,000"
}

function upgrade_emeraldfingers_hover() {
    document.getElementById('info_title').innerHTML = "Emerald Fingers";
    document.getElementById('info_cps').innerHTML = "Triples EPC by how many cursors are owned";

    
    if(config.countraw >= 1000000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1 Million"
}

function upgrade_rubyfingers_hover() {
    document.getElementById('info_title').innerHTML = "Ruby Fingers";
    document.getElementById('info_cps').innerHTML = "Triples EPC by how many cursors are owned";

    
    if(config.countraw >= 10000000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "10 Million"
}

function upgrade_obsidianfingers_hover() {
    document.getElementById('info_title').innerHTML = "Obsidian Fingers";
    document.getElementById('info_cps').innerHTML = "Quadruples EPC by how many cursors are owned";

    
    if(config.countraw >= 50000000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "50 Million"
}

function upgrade_baconbones_hover() {
    document.getElementById('info_title').innerHTML = "Bacon Flavored Bones";
    document.getElementById('info_cps').innerHTML = "Doubles Bone Speed";
    
    if(config.countraw >= 20000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "20,000"
}

function upgrade_meatbones_hover() {
    document.getElementById('info_title').innerHTML = "Bones with some meat left over";
    document.getElementById('info_cps').innerHTML = "Triples Bone Speed";
    
    if(config.countraw >= 50000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }
    
    document.getElementById('info_price').innerHTML = "50,000"
}

function upgrade_thebone_hover() {
    document.getElementById('info_title').innerHTML = "THE BONE™";
    document.getElementById('info_cps').innerHTML = "Triples Bone Speed <br> <i>Idea from Zeke<i>";
    
    if(config.countraw >= 250000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "250,000"
}

function upgrade_nylonbones_hover() {
    document.getElementById('info_title').innerHTML = "Nylon Bones";
    document.getElementById('info_cps').innerHTML = "Triples Bone Speed";
    
    if(config.countraw >= 2500000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "2.5 Million"
}

function upgrade_hidebones_hover() {
    document.getElementById('info_title').innerHTML = "Hide Bones";
    document.getElementById('info_cps').innerHTML = "Triples Bone Speed";
    
    if(config.countraw >= 15000000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "15 Million"
}

function upgrade_stick_hover() {
    document.getElementById('info_title').innerHTML = "Stick";
    document.getElementById('info_cps').innerHTML = "Triples Bone Speed";
    
    if(config.countraw >= 500_000_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "500 Million"
}


function upgrade_superfrisbe_hover() {
    document.getElementById('info_title').innerHTML = "The Super Frisbe";
    document.getElementById('info_cps').innerHTML = "Doubles Frisbe Speed";

    
    if(config.countraw >= 100000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "100,000"
}

function upgrade_superepicfrisbe_hover() {
    document.getElementById('info_title').innerHTML = "The Super Epic Frisbe";
    document.getElementById('info_cps').innerHTML = "Triples Frisbe Speed";

    
    if(config.countraw >= 500000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "500,000"
}

function upgrade_superultraepicfrisbe_hover() {
    document.getElementById('info_title').innerHTML = "The Super Ultra Epic Frisbe";
    document.getElementById('info_cps').innerHTML = "Triples Frisbe Speed";

    
    if(config.countraw >= 1500000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1.5 Million"
}

function upgrade_superultraepicfrisbepro_hover() {
    document.getElementById('info_title').innerHTML = "The Super Ultra Epic Frisbe PRO";
    document.getElementById('info_cps').innerHTML = "Triples Frisbe Speed";

    
    if(config.countraw >= 100_000_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "100 Million"
}

function upgrade_superultraepicfrisbeproPE_hover() {
    document.getElementById('info_title').innerHTML = "The Super Ultra Epic Frisbe PRO (PREMIUM EDITION)";
    document.getElementById('info_cps').innerHTML = "Triples Frisbe Speed";

    
    if(config.countraw >= 1_000_000_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1 Billion"
}

function upgrade_superultraepicfrisbeproPE2026_hover() {
    document.getElementById('info_title').innerHTML = "The Super Ultra Epic Frisbe PRO (PREMIUM EDITION) 2026";
    document.getElementById('info_cps').innerHTML = "Triples Frisbe Speed";

    
    if(config.countraw >= 50_000_000_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "50 Billion"
}

function upgrade_hmtreats_hover() {
    document.getElementById('info_title').innerHTML = "Home Made Treats";
    document.getElementById('info_cps').innerHTML = "Doubles Treat Speed";

    
    if(config.countraw >= 750_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "750,000"
}

function upgrade_barkbites_hover() {
    document.getElementById('info_title').innerHTML = "Bark Bites";
    document.getElementById('info_cps').innerHTML = "Triples Treat Speed";

    
    if(config.countraw >= 50_000_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "50 Million"
}

function upgrade_frostedtreats_hover() {
    document.getElementById('info_title').innerHTML = "Frosted Treats";
    document.getElementById('info_cps').innerHTML = "Triples Treat Speed";

    
    if(config.countraw >= 25_000_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "25 Million"
}

function upgrade_nugget_hover() {
    document.getElementById('info_title').innerHTML = "Nugget";
    document.getElementById('info_cps').innerHTML = "Triples Treat Speed";

    
    if(config.countraw >= 500_000_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "500 Million"
}

function upgrade_pizza_hover() {
    document.getElementById('info_title').innerHTML = "Pizza";
    document.getElementById('info_cps').innerHTML = "Triples Treat Speed";

    
    if(config.countraw >= 25_000_000_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "25 Billion"
}

function upgrade_bacon_hover() {
    document.getElementById('info_title').innerHTML = "Bacon";
    document.getElementById('info_cps').innerHTML = "Triples Treat Speed";

    
    if(config.countraw >= 100_000_000_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "100 Billion"
}

function upgrade_xlbed_hover() {
    document.getElementById('info_title').innerHTML = "XL Bed";
    document.getElementById('info_cps').innerHTML = "Doubles Bed Speed";

    
    if(config.countraw >= 5000000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "5 Million"
}

function upgrade_pillow_hover() {
    document.getElementById('info_title').innerHTML = "Pillow";
    document.getElementById('info_cps').innerHTML = "Triples Bed Speed";

    
    if(config.countraw >= 50000000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "50 Million"
}

function upgrade_walter_hover() {
    document.getElementById('info_title').innerHTML = "Walter";
    document.getElementById('info_cps').innerHTML = "Doubles Friend Speed";

    
    if(config.countraw >= 100_000_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "100 Million"
}

function upgrade_lola_hover() {
    document.getElementById('info_title').innerHTML = "Lola";
    document.getElementById('info_cps').innerHTML = "Triples Friend Speed";

    
    if(config.countraw >= 1_000_000_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1 Billion"
}

function upgrade_goldeneddies_hover() {
    document.getElementById('info_title').innerHTML = "Golden Eddies";
    document.getElementById('info_cps').innerHTML = "Unlocks Golden Eddies";

    
    if(config.countraw >= 75000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "75,000"
}

function upgrade_shimmeringeddies_hover() {
    document.getElementById('info_title').innerHTML = "Shimmering Eddies";
    document.getElementById('info_cps').innerHTML = "Raises Golden Eddie Spawnrate";

    
    if(config.countraw >= 100000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "100,000"
}

function upgrade_emptybottle_hover() {
    document.getElementById('info_title').innerHTML = "Empty Bottle";
    document.getElementById('info_cps').innerHTML = "Unlocks, Something...";

    
    if(config.countraw >= 250000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "250,000"
}

function upgrade_biggerflasks_hover() {
    document.getElementById('info_title').innerHTML = "Bigger Flasks";
    document.getElementById('info_cps').innerHTML = "+1 Flask every 30 seconds";

    
    if(config.countraw >= 1000000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "1 Million"
}

function upgrade_reinforcedflasks_hover() {
    document.getElementById('info_title').innerHTML = "Reinforced Flasks";
    document.getElementById('info_cps').innerHTML = "+1 Flask every 30 seconds";

    
    if(config.countraw >= 500_000_000) {
        document.getElementById('info_price').style.setProperty('color', 'lime')
    } else {
        document.getElementById('info_price').style.setProperty('color', 'red')
    }

    document.getElementById('info_price').innerHTML = "500 Million"
}

function upgrade_silvercursors() {
    if(config.upgrade_silvercursors_bought === false && config.count >= 500) {
        document.getElementById('upgrade_silvercursors').style.setProperty('display', 'none')
        config.upgrade_silvercursors_bought = true
        config.countraw -= 500
        config.cursormultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 500
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_goldencursors() {
    if(config.upgrade_goldencursors_bought === false && config.count >= 1000) {
        document.getElementById('upgrade_goldencursors').style.setProperty('display', 'none')
        config.upgrade_goldencursors_bought = true
        config.countraw -= 1000
        config.cursormultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_platinumcursors() {
    if(config.upgrade_platinumcursors_bought === false && config.count >= 25000) {
        document.getElementById('upgrade_platinumcursors').style.setProperty('display', 'none')
        config.upgrade_platinumcursors_bought = true
        config.countraw -= 25000
        config.cursormultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 25000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_diamondcursors() {
    if(config.upgrade_diamondcursors_bought === false && config.count >= 250000) {
        document.getElementById('upgrade_diamondcursors').style.setProperty('display', 'none')
        config.upgrade_diamondcursors_bought = true
        config.countraw -= 250000
        config.cursormultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 250000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_emeraldcursors() {
    if(config.upgrade_emeraldcursors_bought === false && config.count >= 1000000) {
        document.getElementById('upgrade_emeraldcursors').style.setProperty('display', 'none')
        config.upgrade_emeraldcursors_bought = true
        config.countraw -= 1000000
        config.cursormultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_rubycursors() {
    if(config.upgrade_rubycursors_bought === false && config.count >= 10000000) {
        document.getElementById('upgrade_rubycursors').style.setProperty('display', 'none')
        config.upgrade_rubycursors_bought = true
        config.countraw -= 10000000
        config.cursormultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 10000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}


function upgrade_goldenfingers() {
    if(config.upgrade_goldenfingers_bought === false && config.count >= 1000) {
        document.getElementById('upgrade_goldenfingers').style.setProperty('display', 'none')
        config.upgrade_goldenfingers_bought = true
        config.countraw -= 1000
        config.clickmultiplier += 0
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_platinumfingers() {
    if(config.upgrade_platinumfingers_bought === false && config.count >= 25000) {
        document.getElementById('upgrade_platinumfingers').style.setProperty('display', 'none')
        config.upgrade_platinumfingers_bought = true
        config.countraw -= 25000
        config.clickmultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 25000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_diamondfingers() {
    if(config.upgrade_diamondfingers_bought === false && config.count >= 250000) {
        document.getElementById('upgrade_diamondfingers').style.setProperty('display', 'none')
        config.upgrade_diamondfingers_bought = true
        config.countraw -= 250000
        config.clickmultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 250000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_emeraldfingers() {
    if(config.upgrade_emeraldfingers_bought === false && config.count >= 1000000) {
        document.getElementById('upgrade_emeraldfingers').style.setProperty('display', 'none')
        config.upgrade_emeraldfingers_bought = true
        config.countraw -= 1000000
        config.clickmultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_rubyfingers() {
    if(config.upgrade_rubyfingers_bought === false && config.count >= 10000000) {
        document.getElementById('upgrade_rubyfingers').style.setProperty('display', 'none')
        config.upgrade_rubyfingers_bought = true
        config.countraw -= 10000000
        config.clickmultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 10000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_obsidianfingers() {
    if(config.upgrade_obsidianfingers_bought === false && config.count >= 50000000) {
        document.getElementById('upgrade_obsidianfingers').style.setProperty('display', 'none')
        config.upgrade_obsidianfingers_bought = true
        config.countraw -= 50000000
        config.clickmultiplier *= 4
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 50000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_baconbones() {
    if(config.upgrade_baconbones_bought === false && config.count >= 20000) {
        document.getElementById('upgrade_baconbones').style.setProperty('display', 'none')
        config.upgrade_baconbones_bought = true
        config.countraw -= 20000
        config.bonemultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 20000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_meatbones() {
    if(config.upgrade_meatbones_bought === false && config.count >= 50000) {
        document.getElementById('upgrade_meatbones').style.setProperty('display', 'none')
        config.upgrade_meatbones_bought = true
        config.countraw -= 50000
        config.bonemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 50000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_thebone() {
    if(config.upgrade_thebone_bought === false && config.count >= 250000) {
        document.getElementById('upgrade_thebone').style.setProperty('display', 'none')
        config.upgrade_thebone_bought = true
        config.countraw -= 250000
        config.bonemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 250000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_nylonbones() {
    if(config.upgrade_nylonbones_bought === false && config.count >= 2500000) {
        document.getElementById('upgrade_nylonbones').style.setProperty('display', 'none')
        config.upgrade_nylonbones_bought = true
        config.countraw -= 2500000
        config.bonemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 2500000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_hidebones() {
    if(config.upgrade_hidebones_bought === false && config.count >= 15000000) {
        document.getElementById('upgrade_hidebones').style.setProperty('display', 'none')
        config.upgrade_hidebones_bought = true
        config.countraw -= 15000000
        config.bonemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 15000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_stick() {
    if(config.upgrade_stick_bought === false && config.count >= 500_000_000) {
        document.getElementById('upgrade_stick').style.setProperty('display', 'none')
        config.upgrade_stick_bought = true
        config.countraw -= 500_000_000
        config.bonemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 500_000_000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_superfrisbe() {
    if(config.upgrade_superfrisbe_bought === false && config.count >= 100000) {
        document.getElementById('upgrade_superfrisbe').style.setProperty('display', 'none')
        config.upgrade_superfrisbe_bought = true
        config.countraw -= 100000
        config.frisbemultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 100000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_superepicfrisbe() {
    if(config.upgrade_superepicfrisbe_bought === false && config.count >= 500000) {
        document.getElementById('upgrade_superepicfrisbe').style.setProperty('display', 'none')
        config.upgrade_superepicfrisbe_bought = true
        config.countraw -= 500000
        config.frisbemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 500000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_superultraepicfrisbe() {
    if(config.upgrade_superultraepicfrisbe_bought === false && config.count >= 1500000) {
        document.getElementById('upgrade_superultraepicfrisbe').style.setProperty('display', 'none')
        config.upgrade_superultraepicfrisbe_bought = true
        config.countraw -= 1500000
        config.frisbemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1500000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_superultraepicfrisbepro() {
    if(config.upgrade_superultraepicfrisbepro_bought === false && config.count >= 100000000) {
        document.getElementById('upgrade_superultraepicfrisbepro').style.setProperty('display', 'none')
        config.upgrade_superultraepicfrisbepro_bought = true
        config.countraw -= 100000000
        config.frisbemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 100000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_superultraepicfrisbeproPE() {
    if(config.upgrade_superultraepicfrisbeproPE_bought === false && config.count >= 1000000000) {
        document.getElementById('upgrade_superultraepicfrisbeproPE').style.setProperty('display', 'none')
        config.upgrade_superultraepicfrisbeproPE_bought = true
        config.countraw -= 1000000000
        config.frisbemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1000000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_superultraepicfrisbeproPE2026() {
    if(config.upgrade_superultraepicfrisbeproPE2026_bought === false && config.count >= 50_000_000_000) {
        document.getElementById('upgrade_superultraepicfrisbeproPE2026').style.setProperty('display', 'none')
        config.upgrade_superultraepicfrisbeproPE2026_bought = true
        config.countraw -= 50_000_000_000
        config.frisbemultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 50_000_000_000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}


function upgrade_hmtreats() {
    if(config.upgrade_hmtreats_bought === false && config.count >= 750000) {
        document.getElementById('upgrade_hmtreats').style.setProperty('display', 'none')
        config.upgrade_hmtreats_bought = true
        config.countraw -= 750000
        config.treatmultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 750000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_barkbites() {
    if(config.upgrade_barkbites_bought === false && config.count >= 50000000) {
        document.getElementById('upgrade_barkbites').style.setProperty('display', 'none')
        config.upgrade_barkbites_bought = true
        config.countraw -= 50000000
        config.treatmultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 50000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_frostedtreats() {
    if(config.upgrade_frostedtreats_bought === false && config.count >= 25000000) {
        document.getElementById('upgrade_frostedtreats').style.setProperty('display', 'none')
        config.upgrade_frostedtreats_bought = true
        config.countraw -= 25000000
        config.treatmultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 25000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_nugget() {
    if(config.upgrade_nugget_bought === false && config.count >= 500000000) {
        document.getElementById('upgrade_nugget').style.setProperty('display', 'none')
        config.upgrade_nugget_bought = true
        config.countraw -= 500000000
        config.treatmultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 500000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_pizza() {
    if(config.upgrade_pizza_bought === false && config.count >= 25_000_000_000) {
        document.getElementById('upgrade_pizza').style.setProperty('display', 'none')
        config.upgrade_pizza_bought = true
        config.countraw -= 25_000_000_000
        config.treatmultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 25_000_000_000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_bacon() {
    if(config.upgrade_bacon_bought === false && config.count >= 100_000_000_000) {
        document.getElementById('upgrade_bacon').style.setProperty('display', 'none')
        config.upgrade_bacon_bought = true
        config.countraw -= 100_000_000_000
        config.treatmultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 100_000_000_000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_xlbed() {
    if(config.upgrade_xlbed_bought === false && config.count >= 5000000) {
        document.getElementById('upgrade_xlbed').style.setProperty('display', 'none')
        config.upgrade_xlbed_bought = true
        config.countraw -= 5000000
        config.bedmultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 5000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_pillow() {
    if(config.upgrade_pillow_bought === false && config.count >= 50_000_000) {
        document.getElementById('upgrade_pillow').style.setProperty('display', 'none')
        config.upgrade_pillow_bought = true
        config.countraw -= 50_000_000
        config.bedmultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 50_000_000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_walter() {
    if(config.upgrade_walter_bought === false && config.count >= 100000000) {
        document.getElementById('upgrade_walter').style.setProperty('display', 'none')
        config.upgrade_walter_bought = true
        config.countraw -= 100000000
        config.friendmultiplier *= 2
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 100000000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)

        if(config.mode === 1) {
            achievement16()
        }
    }
}

function upgrade_lola() {
    if(config.upgrade_lola_bought === false && config.count >= 1_000_000_000) {
        document.getElementById('upgrade_lola').style.setProperty('display', 'none')
        config.upgrade_lola_bought = true
        config.countraw -= 1_000_000_000
        config.friendmultiplier *= 3
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1_000_000_000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_goldeneddies() {
    if(config.upgrade_goldeneddies_bought === false && config.count >= 75000) {
        document.getElementById('upgrade_goldeneddies').style.setProperty('display', 'none')
        config.upgrade_goldeneddies_bought = true
        config.countraw -= 75000
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 75000
        config.goldeneddies_unlocked = true
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}


function upgrade_shimmeringeddies() {
    if(config.upgrade_shimmeringeddies_bought === false && config.count >= 100000) {
        document.getElementById('upgrade_shimmeringeddies').style.setProperty('display', 'none')
        config.upgrade_shimmeringeddies_bought = true
        config.countraw -= 100000
        config.goldeneddiecount -= 1000
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 100000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
        save()
    }
}

function upgrade_emptybottle() {
    if(config.upgrade_emptybottle_bought === false && config.count >= 250000) {
        document.getElementById('upgrade_emptybottle').style.setProperty('display', 'none')
        config.upgrade_emptybottle_bought = true
        config.spells_unlocked = true
        config.countraw -= 250000
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 250000
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
        unlockspells()

        config.ach14 = true
        achievement14()
        save()
    }
}

function upgrade_biggerflasks() {
    if(config.upgrade_biggerflasks_bought === false && config.count >= 1000000) {
        document.getElementById('upgrade_biggerflasks').style.setProperty('display', 'none')
        config.upgrade_biggerflasks_bought = true
        config.countraw -= 1000000
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 1000000
        config.flask_increase += 1
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_reinforcedflasks() {
    if(config.upgrade_reinforcedflasks_bought === false && config.count >= 500_000_000) {
        document.getElementById('upgrade_reinforcedflasks').style.setProperty('display', 'none')
        config.upgrade_reinforcedflasks_bought = true
        config.countraw -= 500_000_000
        config.upgrades -= 1
        config.totalupgrades += 1
        config.eddieorbsspent += 500_000_000
        config.flask_increase += 1
        document.documentElement.style.setProperty('--upgrades', config.upgrades)
    }
}

function upgrade_update() {
    if(config.upgrade_platinumfingers_bought === true && config.cursortotal >=1) {
        config.cpc = config.cursortotal * config.clickmultiplier * config.cpcmultiplier;
        document.getElementById('upgrade_platinumfingers').style.setProperty('display', 'none')
    }
        
    if(config.upgrade_goldenfingers_bought === true && config.cursortotal >= 1) {
        config.cpc = config.cursortotal * config.clickmultiplier * config.cpcmultiplier;
        document.getElementById('upgrade_goldenfingers').style.setProperty('display', 'none')
    }
}

function upgradetooltip_enter() {
    document.getElementById('upgrade_tooltip').style.setProperty('opacity', '1')
    document.getElementById('upgrade_tooltip').style.setProperty('left', '-215px')
}

function upgradetooltip_leave() {
    document.getElementById('upgrade_tooltip').style.setProperty('opacity', '0')
    document.getElementById('upgrade_tooltip').style.setProperty('left', '-225px')
}