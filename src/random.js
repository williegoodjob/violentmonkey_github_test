(function() {
    'use strict';

    // 確保 ModuleTest 物件存在
    window.ModuleTest = window.ModuleTest || {};

    // 定義 random 模組
    window.ModuleTest.random = function() {
        function random(min, max) {
            if (typeof min !== 'number' || typeof max !== 'number') {
                throw new Error('參數必須是數字');
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return random;
    };
})();