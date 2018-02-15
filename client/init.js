const CLIENT_ID = '559633011777-sro43h0pgdpf7plh30of69cujdf4p2q4.apps.googleusercontent.com';

function init() {
  return gapi.load('auth2', function() {
    gapi.auth2.init({ client_id: CLIENT_ID })
      .then(function(response) {
        window.GoogleAuth = response;
        console.log('response from init', window.GoogleAuth);
      });
  });
}
