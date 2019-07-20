;(function () {

  if ('serviceWorkder' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js', {scope: '/test-pwa/'})
        .then(function (registration) {
          console.log(registration.scope);
        })
        .catch(function (error) {
          console.log(error);
        })
    });
  }

})();