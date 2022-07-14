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
var count=0;
//initialize your firebase
firebase.initializeApp(config);
const database = firebase.database();
const auth = firebase.auth();
var provider_Google = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = 'en';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

function campaign_name() {
    // body...
if(count==0){
var names_admin = [];
var Campaign = database.ref().child('Trial/');
    Campaign.on('value',function(orders){
    //this is saying foreach order do the following function...
    orders.forEach(function(firebaseOrderReference){
        //this gets the actual data (JSON) for the order.
        order = firebaseOrderReference.val();
        Name =   ``+order.CampaignName+``
        names_admin.push("<br>"+Name);
    });                     
    document.getElementById('campaign_names_list').innerHTML = names_admin;
    });
    console.log(names_admin);
    count=1;
}
}

function camp_admin() {
Other_Campaign_Name = name;
var Campaign = database.ref().child('Trial/');
name = document.getElementById('CampaignNameAdmin').value;
        //create a 'listener' which waits for changes to the values inside the firebaseOrdersCollection 
        Campaign.on('value',function(orders){
        
            //create an empty string that will hold our new HTML
            var CName,CGoal,CAim,CAuth,CInc, order;
            
            //this is saying foreach order do the following function...
            orders.forEach(function(firebaseOrderReference){
                //this gets the actual data (JSON) for the order.
                order = firebaseOrderReference.val();
                console.log(order); //check your console to see it!
                 //create html for the individual order
                //note: this is hard to make look pretty! Be sure to keep your indents nice :-)
                //IMPORTANT: we use ` here instead of ' (notice the difference?) That allows us to use enters
                if(order.CampaignName==name){
                Name =   ``+order.CampaignName+``
                Summary = ``+order.CampaignSummary+``
                Aim = ``+order.CampaignAim+``
                Motivation = ``+order.Motivation+``
                About = ``+order.NGOAbout+``
                Goal = ``+order.CampaignGoal+``
                Inc = ``+order.CampaignIncome+``
                div = ``+order.div+``
                RazorURL = ``+order.PaymentURL+``
                PageURL = ``+order.PageURL+``
                Category = ``+order.CampaignCategory+``

                URL1 = ``+order.URL1+``
                URL2 = ``+order.URL2+``
                URL3 = ``+order.URL3+``

                LI = ``+order.LinkedIn+`` 
                TW = ``+order.Twitter+``
                IG = ``+order.Instagram+``
                FB = ``+order.Facebook+``
                //add the individual order html to the end of the allOrdersHtml list
                //allOrdersHtml = allOrdersHtml + individialOrderHtml;
                document.getElementById('camapign_admin_name').innerHTML = Name;
                document.getElementById('camapign_admin_summary').innerHTML = Summary;
                document.getElementById('campaign_admin_aim').innerHTML = Aim;
                document.getElementById('campaign_admin_motivation').innerHTML = Motivation;
                document.getElementById('campaign_admin_about').innerHTML = About;
                document.getElementById('camapign_admin_income').innerHTML = Inc;
                document.getElementById('camapign_admin_goal').innerHTML = Goal;
                document.getElementById('camapign_admin_Razorurl').innerHTML = RazorURL;
                document.getElementById('camapign_admin_Pageurl').innerHTML = PageURL;
                document.getElementById('camapign_admin_category').innerHTML = Category;
                document.getElementById('camapign_admin_DIV').innerHTML = div;

                document.getElementById('LI').innerHTML = LI;
                document.getElementById('TW').innerHTML = TW;
                document.getElementById('IG').innerHTML = IG;
                document.getElementById('FB').innerHTML = FB;

                document.getElementById('camapign_ImageURL1').innerHTML = URL1;
                document.getElementById('camapign_ImageURL2').innerHTML = URL2; 
                document.getElementById('camapign_ImageURL3').innerHTML = URL3;               
            }
            });
        });                     
}

function Edit_Campaign() {
    //Grab order data from the form
    var folder_name = document.getElementById("camapign_admin_name").value
    var firebaseOrdersCollection = database.ref('Trial/'+folder_name);
    var firebaseOrdersCollection2 = database.ref('Backup/'+folder_name); 

    firebaseOrdersCollection.update({ 
        CampaignName: document.getElementById('camapign_admin_name').value,
        CampaignSummary: document.getElementById('camapign_admin_summary').value,
        CampaignAim: document.getElementById('campaign_admin_aim').value,
        Motivation: document.getElementById('campaign_admin_motivation').value,
        NGOAbout: document.getElementById('campaign_admin_about').value,
        CampaignGoal: document.getElementById('camapign_admin_goal').value,
        CampaignIncome: document.getElementById('camapign_admin_income').value,
        div: document.getElementById('camapign_admin_DIV').value,
        PaymentURL: document.getElementById('camapign_admin_Razorurl').value,
        PageURL: document.getElementById('camapign_admin_Pageurl').value,
        CampaignCategory: document.getElementById('camapign_admin_category').value,
        URL1: document.getElementById('camapign_ImageURL1').value,
        URL2: document.getElementById('camapign_ImageURL2').value,
        URL3: document.getElementById('camapign_ImageURL3').value,
        LinkedIn: document.getElementById('LI').value,
        Twitter: document.getElementById('TW').value,
        Instagram: document.getElementById('IG').value,
        Facebook: document.getElementById('FB').value,
         });
    console.log(folder_name);
    // firebaseOrdersCollection2.update({ CampaignName: document.getElementById('C1Inc').value });
    alert("Done");
//location.replace("https://helping-panda.web.app/");
};

function login(){
  var person = prompt("Please enter your super secret password", "Harry Potter");
  if (person != "Tupperware") {
    txt = "User cancelled the prompt.";
    location.replace("https://helpingpanda.in");
  } 
}