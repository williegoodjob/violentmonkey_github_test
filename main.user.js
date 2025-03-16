// ==UserScript==
// @name         模組化測試腳本
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  測試瀏覽器對模組化功能的處理
// @author       Your name
// @match        *://*/*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// @require      https://raw.githubusercontent.com/williegoodjob/violentmonkey_github_test/refs/heads/main/src/random.js
// ==/UserScript==

// 主程序
(function() {
    'use strict';
    
    try {
        // 確保 ModuleTest 物件存在
        window.ModuleTest = window.ModuleTest || {};

        // 初始化模組
        if (typeof window.ModuleTest.random !== 'function') {
            console.error('Random 模組載入失敗');
            return;
        }

        // 使用模組
        const random = window.ModuleTest.random();
        console.log('產生隨機數字:', random(1, 100));
        
    } catch (error) {
        console.error('腳本執行錯誤:', error);
    }
})();