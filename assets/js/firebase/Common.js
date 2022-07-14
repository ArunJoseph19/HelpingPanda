
function _Newsletter() {
	// body...
	var Newsletter_Email = document.getElementById("newsletter_email").value;
	var Newsletter_Name = document.getElementById("newsletter_name").value;

	if(Newsletter_Email.length!=0){
		var firebaseOrdersCollection = database.ref('Newsletters Subscriptions/'+Newsletter_Name);
		Info = {
			UserName: Newsletter_Name,
			EmailID: Newsletter_Email,
		};
		firebaseOrdersCollection.set(Info);

		document.getElementById("newsletter_subscibe").innerHTML = "Done!!"
	}
	else{
		document.getElementById("newsletter_subscibe").innerHTML = "Enter a Valid Email"
	}
}

function _Newsletter2() {
	// body...
	var Newsletter_Email = document.getElementById("newsletter_email_footer").value;

	if(Newsletter_Email.length!=0){
		var firebaseOrdersCollection = database.ref('Newsletters Subscriptions/'+Newsletter_Name);
		Info = {
			EmailID: Newsletter_Email,
		};
		firebaseOrdersCollection.set(Info);

		document.getElementById("newsletter_email_footer").innerHTML = "Done!!"
	}
	else{
		document.getElementById("newsletter_subscibe").innerHTML = "Enter a Valid Email"
	}
}


function _Comment(Campaign_Name) {

	var Comment_text = document.getElementById("comment_campaign").value;
	var Comment_Name = document.getElementById("comment_name").value;

	var d = new Date();
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	if(Comment_text.length<20){
		document.getElementById("comment_button").innerHTML = "Enter comment more than 20 Characters"
	}else
	if(Comment_text.length>200){
		document.getElementById("comment_button").innerHTML = "Comment should be within 200 Characters"
	}
	else{
		var firebaseOrdersCollection = database.ref('Comment/'+Campaign_Name+" "+d.getMinutes()+"-"+d.getHours()+"-"+d.getDate());
		Info = {
			Comment: Comment_text,
			Name: Comment_Name,
			Campaign: Campaign_Name,
			Date: d.getDate(),
			Month:  months[d.getMonth()],
			Year: 2021,
		}
		firebaseOrdersCollection.set(Info);

		document.getElementById("comment_button").innerHTML = "Thank You!!"
	}
}

function _Contact() {

	var Contact_Subject= document.getElementById("comment_subject").value;
	var Contact_Message = document.getElementById("comment_message").value;
	var Contact_Email = document.getElementById("contact_email").value;
	var Contact_Name = document.getElementById("contact_name").value;
	alert(Contact_Subject);
	if(Contact_Message.length<20){
		document.getElementById("contact_button").innerHTML = "Enter comment more than 20 Characters"
	}else
	if(Comment_text.length>500){
		document.getElementById("contact_button").innerHTML = "Comment should be within 500 Characters"
	}
	else{
		var firebaseOrdersCollection = database.ref('Contact/'+Contact_Subject);
		Info = {
			Subject: Comment_text,
			Message: Contact_Message,
			Name: Contact_Name,
			Email: Contact_Email,
		}
		firebaseOrdersCollection.set(Info);

		document.getElementById("contact_button").innerHTML = "Thank You!!"
	}
}

//Cookie Alert
if (localStorage.getItem("cookieSeen") != "shown"){
		$(document).ready(function(){   
	    setTimeout(function () {
	        $("#cookieConsent").fadeIn(200);
	     }, 4000);
	    localStorage.setItem("cookieSeen","shown")
	    $("#closeCookieConsent, .cookieConsentOK").click(function() {
	        $("#cookieConsent").fadeOut(200);
    	}); 
	}); 
}

//Global Firebase Declaration
var config = {
    apiKey: "AIzaSyBCLcEoVKqDfDXxeMxOvPeXAb9A4PA53fw",
    authDomain: "helping-panda.firebaseapp.com",
    databaseURL: "https://helping-panda.firebaseio.com",
    projectId: "helping-panda",
    storageBucket: "helping-panda.appspot.com",
    messagingSenderId: "546878085356",
    appId: "1:546878085356:web:dad9843ec075ac0f41adc9",
    measurementId: "G-DN8V0MNE82"
};

//initialize your firebase
firebase.initializeApp(config);
const database = firebase.database();
const auth = firebase.auth();
var provider_Google = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = 'en';
const analytics = firebase.analytics();
firebase.analytics().logEvent('notification_received');
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

function googleSignin() {
	firebase.auth().signInWithPopup(provider_Google).then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  user = result.user;
	  console.log(user);
	  // ...
	  name = user.displayName;
  	  email = user.email;
  	  photoUrl = user.photoURL;
  	  emailVerified = user.emailVerified;
  	  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
	  document.getElementById('User_Profile').src = photoUrl;
	  document.getElementById('User_Name').innerHTML = name;
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});
	var user = auth.currentUser;
	console.log(user)
}

function googleSignout() {
   firebase.auth().signOut()
	
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}

var header = 
'<!-- Header Start -->' +
        '<div class="header-area">' +
            '<div class="main-header ">' +
                '<div class="header-top d-none d-lg-block">' +
                    '<div class="container-fluid">' +
                        '<div class="col-xl-12">' +
                            '<div class="row d-flex justify-content-between align-items-center">' +
                                '<div class="header-info-left d-flex">' +
                                    '<ul>     ' +
                                        '<li><span class="fa fa-phone"></span> +91 6363066715</li>' +
                                        '<li><span class="fa fa-envelope"></span> helpingpandaofficial@gmail.com</li>' +
                                    '</ul> ' +
                                    '<div class="header-social">' +
                                        '<ul>' +
                                            '<li><a href="https://twitter.com/helping_panda"><i class="fab fa-twitter"></i></a></li>' +
                                            '<li><a href="https://www.facebook.com/Helping-Panda-106846051046470/"><i class="fab fa-facebook-f"></i></a></li>' +
                                            '<li><a href="https://www.linkedin.com/company/53192504/"><i class="fab fa-linkedin-in"></i></a></li>' +
                                            '<li><a href="https://www.instagram.com/helpingpanda/"><i class="fab fa-instagram"></i></a></li>' +
                                        '</ul>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="header-info-right d-flex align-items-center">' +
                                    '<ul class="contact-now">     ' +
                                      '<!-- <li><img src="https://storage.googleapis.com/helping-panda.appspot.com/campaigns/top.png" class="login" id="User_Profile" alt="User Image">' +
                                      '<a id="User_Name" onmouseover="logout_btn()" style="cursor: pointer;">Login</a></li> -->' +
                                  '</ul>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="header-bottom  header-sticky">' +
                    '<div class="container-fluid">' +
                        '<div class="row align-items-center">' +
                            '<!-- Logo -->' +
                            '<div class="col-xl-2 col-lg-2">' +
                                '<div class="logo">' +
                                    '<a href="index.html"><img src="assets/img/logo/logo.png" alt="Helping Panda Logobar"></a>' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-xl-10 col-lg-10">' +
                                '<div class="menu-wrapper  d-flex align-items-center justify-content-end">' +
                                    '<!-- Main-menu -->' +
                                    '<div class="main-menu d-none d-lg-block">' +
                                        '<nav>' +
                                            '<ul id="navigation">               ' +                                                                           
                                                '<li><a href="New Campaign.html"><b>Start a campaign</b></a></li> ' +
                                                '<li><a href="Campaigns.html">All Campaigns</a></li>       ' +
                                                '<li><a href="How It Works.html">How it Works</a></li>' +
                                                '<!-- <li><a href="events.html">Social Events</a>' +
                                                    '<ul class="submenu">' +
                                                        '<li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdbx4F-TFfZmUJC6Abkfs623OxZSlKjBWvsxc9DMsk9neyZ2Q/viewform">Learn C Language</a></li>' +
                                                        '<li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeGj2lVR8DE55UW0J0KkLLJMPzWNvw5w6IgMhbppAqTzob4Wg/viewform">Movie For a Cause</a></li>' +
                                                    '</ul>' +
                                                '</li> -->' +
                                                '<li><a href="about.html">About</a></li>' +
                                                '</li>' +
                                                '<li><a href="#">More</a>' +
                                                    '<ul class="submenu">' +
                                                        '<li><a href="./Pricing.html">Pricing</a></li>' +
                                                        '<li><a href="./FAQs.html">FAQs</a></li>' +
                                                        '<li><a href="./blog.html">Blog</a></li>' +
                                                        '<li><a href="./contact.html">Contact Us</a></li>' +
                                                    '</ul>    ' +
                                                '</li>' +
                                            '</ul>' +
                                        '</nav>' +
                                    '</div>' +
                                    '<!-- Header-btn -->' +
                                    '<div class="header-right-btn d-none d-lg-block ml-20">' +
                                        '<a href="Campaigns.html" class="btn header-btn">Donate</a>' +
                                    '</div>' +
                                '</div>' +
                            '</div> ' +
                           ' <!-- Mobile Menu -->' +
                            '<div class="col-12">' +
                                '<div class="mobile_menu d-block d-lg-none"></div>'+
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<!-- Header End -->';

var footer =         
	'<div class="footer-wrapper section-bg2" data-background="assets/img/gallery/footer_bg.png">' +
        '<!-- Footer Top-->' +
        '<div class="footer-area footer-padding">' +
            '<div class="container">' +
                '<div class="row d-flex justify-content-between">' +
                    '<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">' +
                    '<div class="single-footer-caption mb-50">' +
                        '<div class="single-footer-caption mb-30">' +
                            '<div class="footer-tittle">' +
                                '<div class="footer-logo mb-20">' +
                                    '<a href="index.html"><img src="assets/img/logo/logobar.png" alt="" style="height: 50px"></a>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<p style="color: grey;">Helping Panda aspires to collectively give back to society, by building a bridge to fulfill that goal</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">' +
                        '<div class="single-footer-caption mb-50">' +
                            '<div class="footer-tittle">' +
                                '<h4>Company</h4>' +
                                '<ul>' +
                                '<li><a href="./How It Works.html">How it works</a></li>' +
                                '<li><a href="./FAQs.html">Pricing</a></li>' +
                                '<li><a href="./about.html">About Us</a></li>' +                                
                                '<li><a href="./Campaigns.html">Campaigns</a></li>' +
                                '<li><a href="./blog.html">Blog</a></li>' +
                                '</ul>' +
                            '</div>' +
                        '</div>' +
                    '<div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">' +
                        '<div class="single-footer-caption mb-50">' +
                            '<div class="footer-tittle">' +
                                '<h4>Contact Info</h4>' +
                                '<ul>' +
                                    '<li>' +
                                        '<p><span class="fa fa-map-marker"></span><a href="https://goo.gl/maps/6dNtTey4YbZnMA1D7" target="_blank"> 1821,24th cross, 5th B Main Rd, B Block, Sahakar Nagar, Bengaluru, Karnataka 560092, India</a></p>' +
                                    '</li>' +
                                    '<li><span class="fa fa-phone"></span> +91 6363066715</a></li>' +
                                    '<li><span class="fa fa-envelope"></span><a class="mail" href="mailto:helpingpandaofficial@gmail.com"> helpingpandaofficial@gmail.com</li>' +
                                '</ul>' +
                            '</div>' +
                        '</div>' +
                   '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<!-- footer-bottom -->' +
        '<div class="footer-bottom-area">' +
            '<div class="container">' +
                '<div class="footer-border">' +
                    '<div class="row d-flex justify-content-between align-items-center">' +
                        '<div class="col-xl-10 col-lg-9 ">' +
                            '<div class="footer-copy-right">' +
                                '<p><a href="https://storage.googleapis.com/helping-panda.appspot.com/docs/Privacy%20Policy.pdf" style="color: grey"> Privacy Policy </a>|<a href="https://storage.googleapis.com/helping-panda.appspot.com/docs/Terms%20%26%20Conditions.pdf" style="color: grey"> Terms & Conditions</a></p>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-xl-2 col-lg-3">' +
                            '<div class="footer-social f-right">' +
                                '<a href="https://twitter.com/helping_panda"><i class="fab fa-twitter"></i></a>' +
                                '<a href="https://www.facebook.com/Helping-Panda-106846051046470/"><i class="fab fa-facebook-f"></i></a>' +
                                '<a href="https://www.linkedin.com/company/53192504/"><i class="fab fa-linkedin-in"></i></a>' +
                                '<a href="https://www.instagram.com/helpingpanda/"><i class="fab fa-instagram"></i></a>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';


$(function(){
       document.getElementById("header").innerHTML += header;
       //document.getElementById("footer").innerHTML += footer;  
    });

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

var user = auth.currentUser;
var name, email, photoUrl, uid, emailVerified;

auth.onAuthStateChanged(function(user){    
		if (user != null) {
		  email = user.email;
		  photoUrl = user.photoURL;
		  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
		                   // this value to authenticate with your backend server, if
		                   // you have one. Use User.getToken() instead.
		  document.getElementById('User_Profile').src = photoUrl;
		  document.getElementById('User_Name').innerHTML = name;
		  document.getElementById('User_Name').onclick = function(){	googleSignout(); }
		  document.getElementById('User_Profile').onclick = function(){  	googleSignout(); }
		}
		else{
		  document.getElementById('User_Profile').src = "https://storage.googleapis.com/helping-panda.appspot.com/campaigns/top.png";
		  document.getElementById('User_Name').innerHTML = "Login";
		  document.getElementById('User_Name').onclick = function(){	googleSignin();	}
		}
  });


