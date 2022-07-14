var provider_FB = new firebase.auth.FacebookAuthProvider();
provider.addScope('user_birthday');
firebase.auth().languageCode = 'en';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
provider.setCustomParameters({
  'display': 'popup'
});

function facebookSignin() {
   firebase.auth().signInWithPopup(provider_FB).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
   });
}

function facebookSignout() {
   firebase.auth().signOut().then(function() {
      console.log('Signout successful!')
   }, function(error) {
      console.log('Signout failed')
   });
}