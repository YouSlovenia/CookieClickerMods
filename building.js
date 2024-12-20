// Define a new building
Game.Objects['CustomBuilding'] = new Game.Object('CustomBuilding', {
    name: 'Custom Building',
    desc: 'A custom building that produces cookies.',
    basePrice: 1e6, // Initial price
    cps: 100, // Cookies per second
    icon: [25, 14], // Icon coordinates in the spritesheet
    buyFunction: function() {
        // Add custom behavior when purchased
        console.log('Custom building purchased!');
    }
});

// Add the building to the game
Game.Objects['CustomBuilding'].unlock();
Game.Objects['CustomBuilding'].draw();
Game.RefreshBuildings();
