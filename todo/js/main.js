(function() {
  var _firebaseInitialConnect = false;
  var app = document.querySelector('#app');
  var signInContainer = document.querySelector('#signIn');
  var signInButton = document.querySelector('#signInButton');
  var spinner = document.querySelector('#spinner');

  app._firebaseConnectHandler = function(e) {
    if (_firebaseInitialConnect) return;
    signInButton.classList.add('active');
    _firebaseInitialConnect = true;
    spinner.parentElement.removeChild(spinner);
  };

  app._updateSignInDisplayStatus = function(e) {
    if (!_firebaseInitialConnect || !e || !e.detail) return;
    var userData = e.detail.value;
    signInContainer.classList[userData ? 'add' : 'remove']('inactive');
  }

  signInButton.addEventListener('click', function() {
    document.querySelector('firebase-auth').signInWithPopup();
  });
  document.addEventListener('sign-out', function() {
    document.querySelector('firebase-auth').signOut();
  });
  window.onerror = function(err) {
    var reporter = document.querySelector('#errors');
    if (err && reporter && reporter.ref && reporter.ref.push) reporter.ref.push(err);
  };

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });

    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.onstatechange = function(event) {
        if (event.target.state === 'redundant') {
          document.querySelector('#toast').open();
        }
      };
    };
  };
})();