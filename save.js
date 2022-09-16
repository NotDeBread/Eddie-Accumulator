const config = JSON.parse(localStorage.getItem('save')) ?? {
    buildingtotal: 0,
    cursortotal: 0,
    bonetotal: 0,
    frisbetotal: 0,
    treattotal: 0,
    
    
    count: 0,
    countraw: 0,
    cpsdisplay: 0,
    cpc: 1,
    cpcmultiplier: 1,

    timesclicked: 0,
    totaleddieorbsraw: 0,
    eddieorbsspent: 0,
    goldeneddiesclicked: 0,

    goldeneddies_unlocked: false,

    goldeneddiecount: 10000,

    cursorcps: 0,
    bonecps: 0,
    frisbecps: 0,
    treatcps: 0,
    
    clickmultiplier: 1,
    cursormultiplier: 1,
    bonemultiplier: 1,
    frisbemultiplier: 1,
    treatmultiplier: 1,

    cursorprice: 10,
    boneprice: 500,
    frisbeprice: 5000,
    treatprice: 10000,

    totalachievements: 0,
    totalupgrades: 0,

    upgrade_goldenfingers_bought: false,
    upgrade_platinumfingers_bought: false,
    upgrade_silvercursors_bought: false,
    upgrade_baconbones_bought: false,
    upgrade_superfrisbe_bought: false,
    upgrade_diamondfingers_bought: false,
    upgrade_goldeneddies_bought: false,
    upgrade_shimmeringeddies_bought: false,

    upgrades: 0,

    upgrades_collapsed: false,

    setting1var: true,
    setting2var: false,
    setting3var: true,
    setting4var: false,

    autosave: true,
    monospace: false,
    shortnumbers: true,
    walter: false,

    devtoolsunlocked: false,
}