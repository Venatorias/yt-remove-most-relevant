// ==UserScript==
// @name         YouTube Remove "Most Relevant"
// @namespace    https://github.com/Venatorias/yt-remove-most-relevant.git
// @version      1.0
// @description  Removes "Most Relevant" (ytd-rich-section-renderer) elements from YouTube subscriptions page
// @author       Orestes Hubbard
// @match        https://www.youtube.com/feed/subscriptions*
// @icon         https://www.google.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove ytd-rich-section-renderer elements
    function removeRichSectionRenderer() {
        // Find all ytd-rich-section-renderer elements
        const richSections = document.querySelectorAll('ytd-rich-section-renderer');
        richSections.forEach(section => {
            console.log('Removing ytd-rich-section-renderer element');
            section.remove();
        });
    }

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeRichSectionRenderer);
    } else {
        removeRichSectionRenderer();
    }

    // Also run periodically to catch dynamically loaded content
    setInterval(removeRichSectionRenderer, 2000);

    // Observe for mutations to catch dynamically added elements
    const observer = new MutationObserver(() => {
        removeRichSectionRenderer();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
