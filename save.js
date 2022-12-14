const config = JSON.parse(localStorage.getItem('save')) ?? {
    buildingtotal: 0,
    cursortotal: 0,
    bonetotal: 0,
    frisbetotal: 0,
    treattotal: 0,
    bedtotal: 0,
    friendtotal: 0,
    
    
    count: 0,
    countraw: 0,
    cps: 0,
    cpc: 1,
    cpcmultiplier: 1,

    timesclicked: 0,
    totaleddieorbs: 0,
    totaleddieorbsraw: 0,
    eddieorbsspent: 0,
    goldeneddiesclicked: 0,
    goldeneddiesspawned: 0,

    trainsclicked: 0,

    goldeneddies_unlocked: false,

    goldeneddiecount: 10000,

    goldeneddie_random: 0,

    cursorcps: 0,
    bonecps: 0,
    frisbecps: 0,
    treatcps: 0,
    bedcps: 0,
    friendcps: 0,
    
    clickmultiplier: 1,
    cursormultiplier: 1,
    bonemultiplier: 1,
    frisbemultiplier: 1,
    treatmultiplier: 1,
    bedmultiplier: 1,
    friendmultiplier: 1,

    cursorprice: 10,
    boneprice: 500,
    frisbeprice: 10000,
    treatprice: 50000,
    bedprice: 250000,
    friendprice: 5000000,

    spells_unlocked: false,
    spells_used: 0,

    
    totalachievements: 0,
    totalupgrades: 0,
    
    //Upgrades//
    
    upgrade_silvercursors_bought: false,
    upgrade_goldencursors_bought: false,
    upgrade_platinumcursors_bought: false,
    upgrade_diamondcursors_bought: false,
    upgrade_emeraldcursors_bought: false,
    upgrade_rubycursors_bought: false,
    
    upgrade_goldenfingers_bought: false,
    upgrade_platinumfingers_bought: false,
    upgrade_diamondfingers_bought: false,
    upgrade_emeraldfingers_bought: false,
    upgrade_rubyfingers_bought: false,
    upgrade_obsidianfingers_bought: false,
    
    upgrade_baconbones_bought: false,
    upgrade_meatbones_bought: false,
    upgrade_thebone_bought: false,
    upgrade_nylonbones_bought: false,
    upgrade_hidebones_bought: false,
    upgrade_stick_bought: false,
    
    upgrade_superfrisbe_bought: false,
    upgrade_superepicfrisbe_bought: false,
    upgrade_superultraepicfrisbe_bought: false,
    upgrade_superultraepicfrisbepro_bought: false,
    upgrade_superultraepicfrisbeproPE_bought: false,
    upgrade_superultraepicfrisbeproPE2026_bought: false,
    
    upgrade_hmtreats_bought: false,
    upgrade_barkbites_bought: false,
    upgrade_frostedtreats_bought: false,
    upgrade_nugget_bought: false,
    upgrade_pizza_bought: false,
    upgrade_bacon_bought: false,
    
    upgrade_xlbed_bought: false,
    upgrade_pillow_bought: false,

    upgrade_walter_bought: false,
    upgrade_lola_bought: false,
    
    upgrade_goldeneddies_bought: false,
    upgrade_shimmeringeddies_bought: false,
    
    upgrade_emptybottle_bought: false,
    upgrade_biggerflasks_bought: false,
    upgrade_reinforcedflasks_bought: false,
    
    
    goldeneddies_check: false,
    emptybottle_check: false,
    biggerflasks_check: false,
    reinforcedflasks_check: false,
    
    goldeneddiemultiplier: 1,
    golden_cpcmultiplier: 1,
    
    flasks: 0,
    flasks_max: 50,
    totalflasks: 0,
    flasksused: 0,
    flask_increase: 1,

    blitzactive: false,
    
    upgrades: 0,
    
    upgrades_collapsed: false,
    spells_collapsed: false,
    
    ach1: false,
    ach3: false,
    ach4: false,
    ach5: false,
    ach6: false,
    ach7: false,
    ach8: false,
    ach9: false,
    ach10: false,
    ach11: false,
    ach12: false,
    ach13: false,
    ach14: false,
    ach15: false,
    ach16: false,
    ach17: false,
    ach18: false,
    ach19: false,
    ach20: false,
    ach21: false,

    ach4_check: false,
    ach5_check: false,
    ach6_check: false,
    ach7_check: false,
    ach8_check: false,
    ach9_check: false,
    ach10_check: false,
    ach11_check: false,
    ach12_check: false,
    ach15_check: false,

    devtoolsunlocked: false,

    autosave: true,
    monospacefont: false,
    shortnumbers: true,
    showcpc: true,

    mode: 0,
    updateviewed: false,
}