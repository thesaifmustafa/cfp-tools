/* Cash Flow Portal Tools — shared shell injector
 * Inserts the topbar and sidebar into placeholder elements
 * (#cfp-topbar / #cfp-sidebar) and marks the active nav-link
 * based on the current URL.
 *
 * Adding a new tool? Update SIDEBAR_HTML below — every page
 * picks it up automatically. */

(function () {
  'use strict';

  var TOPBAR_HTML =
    '<div class="topbar-inner">' +
      '<a class="topbar-brand" href="./" aria-label="Cash Flow Portal Tools home">' +
        '<span class="logo-mark">' +
          '<svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">' +
            '<path d="M3 14L9 4L15 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
            '<path d="M5.5 10.5H12.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>' +
          '</svg>' +
        '</span>' +
        '<span>Cash Flow Portal</span>' +
      '</a>' +
      '<nav class="topbar-tabs">' +
        '<a class="tab active" href="./">Tools</a>' +
        '<a class="tab" href="https://cashflowportal.com/" rel="noopener">Site</a>' +
      '</nav>' +
      '<div class="topbar-aux">' +
        '<a class="ext-link" href="https://cashflowportal.com/" rel="noopener">cashflowportal.com ↗</a>' +
      '</div>' +
    '</div>';

  var SIDEBAR_HTML =
    '<div class="search" role="button" tabindex="0" aria-label="Search (placeholder)">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<circle cx="11" cy="11" r="8"></circle>' +
        '<line x1="21" y1="21" x2="16.65" y2="16.65"></line>' +
      '</svg>' +
      '<span class="search-text">Search...</span>' +
      '<span class="search-kbd">⌘K</span>' +
    '</div>' +
    '<div class="nav-group">' +
      '<h4>Tools</h4>' +
      '<ul class="nav-list">' +
        '<li><a class="nav-link" href="diagnostic.html">Capital Raise Failure Diagnostic</a></li>' +
      '</ul>' +
    '</div>' +
    '<div class="nav-group">' +
      '<h4>Calculators</h4>' +
      '<ul class="nav-list">' +
        '<li><a class="nav-link" href="pricing.html">Investor Portal Pricing</a></li>' +
        '<li><a class="nav-link" href="readiness.html">Deal Readiness &amp; LP Friction</a></li>' +
      '</ul>' +
    '</div>' +
    '<div class="nav-group">' +
      '<h4>Coming soon</h4>' +
      '<ul class="nav-list">' +
        '<li><a class="nav-link disabled" aria-disabled="true">ROI &amp; Time Savings <span class="nav-tag">Soon</span></a></li>' +
        '<li><a class="nav-link disabled" aria-disabled="true">K-1 Estimator <span class="nav-tag">Soon</span></a></li>' +
        '<li><a class="nav-link disabled" aria-disabled="true">Capital Call Modeler <span class="nav-tag">Soon</span></a></li>' +
      '</ul>' +
    '</div>' +
    '<div class="nav-group">' +
      '<h4>About</h4>' +
      '<ul class="nav-list">' +
        '<li><a class="nav-link disabled" aria-disabled="true">About these tools</a></li>' +
        '<li><a class="nav-link disabled" aria-disabled="true">How scoring works</a></li>' +
        '<li><a class="nav-link" href="https://cashflowportal.com/" rel="noopener">Cash Flow Portal ↗</a></li>' +
      '</ul>' +
    '</div>';

  function getCurrentPage() {
    var path = (window.location.pathname || '').toLowerCase();
    var file = path.split('/').pop();
    if (!file || file === 'index.html') return 'index.html';
    return file;
  }

  function setActive(sidebar, page) {
    var links = sidebar.querySelectorAll('.nav-link[href]');
    for (var i = 0; i < links.length; i++) {
      var href = (links[i].getAttribute('href') || '').toLowerCase();
      if (href === page) {
        links[i].classList.add('active');
        return;
      }
    }
  }

  function init() {
    var topbar = document.getElementById('cfp-topbar');
    if (topbar) topbar.innerHTML = TOPBAR_HTML;

    var sidebar = document.getElementById('cfp-sidebar');
    if (sidebar) {
      sidebar.innerHTML = SIDEBAR_HTML;
      var page = getCurrentPage();
      if (page !== 'index.html') setActive(sidebar, page);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
