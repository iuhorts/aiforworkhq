(function () {
  var KEY = 'affhq-consent';
  var GA_ID = 'G-N8301EM44J';

  function loadGA() {
    if (document.getElementById('ga4-script')) return;
    var s = document.createElement('script');
    s.id = 'ga4-script';
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
  }

  function setConsent(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    var b = document.getElementById('cookie-banner');
    if (b) b.remove();
    if (value === 'granted') loadGA();
  }

  function showBanner() {
    if (document.getElementById('cookie-banner')) return;
    var b = document.createElement('div');
    b.id = 'cookie-banner';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Cookie consent');
    b.innerHTML =
      '<p>We use Google Analytics to understand which guides help readers. It sets cookies. ' +
      'You can accept or decline — the site works either way. ' +
      '<a href="/privacy">Privacy policy</a>.</p>' +
      '<div class="cookie-actions">' +
      '<button id="cookie-decline" type="button">Decline</button>' +
      '<button id="cookie-accept" type="button">Accept</button>' +
      '</div>';
    document.body.appendChild(b);
    document.getElementById('cookie-accept').onclick = function () { setConsent('granted'); };
    document.getElementById('cookie-decline').onclick = function () { setConsent('denied'); };
  }

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  if (stored === 'granted') loadGA();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { if (!stored) showBanner(); });
  } else if (!stored) {
    showBanner();
  }

  window.affhqConsent = function () { showBanner(); };
})();
