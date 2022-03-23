const gearIcon = new Vivus(
    'gears',
    {
        type: 'scenario',
        duration: 200
    }
);

function playGears() {
    gearIcon.stop().reset().play();
}
