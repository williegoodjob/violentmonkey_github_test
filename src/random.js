window.ModuleTest.random = function () {
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return random;
};
