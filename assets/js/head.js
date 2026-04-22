window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.QS_GA4_ID = window.QS_GA4_ID || 'G-XXXXXXXXXX';
if (window.QS_GA4_ID && window.QS_GA4_ID !== 'G-XXXXXXXXXX') {
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${window.QS_GA4_ID}`;
  document.head.appendChild(gaScript);
  gtag('js', new Date());
  gtag('config', window.QS_GA4_ID, { anonymize_ip: true });
}
window.QS_GSC_TOKEN = 'REPLACE_WITH_SEARCH_CONSOLE_TOKEN';
