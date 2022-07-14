var Other_Campaign_Name = "helping-panda"
function camp(name) {
Other_Campaign_Name = name;
var Campaign = database.ref().child('Trial/');
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
                FName = ``+order.FirstName+``
                LName = ``+order.LastName+``
                About = ``+order.NGOAbout+``
                Goal = ``+order.CampaignGoal+``
                Inc = ``+order.CampaignIncome+``
                Start = ``+order.CampaignStartDate+``
                End = ``+order.CampaignEndDate+``
                URL = ``+order.PaymentURL+``
                Category = ``+order.CampaignCategory+``
                
                IMG1 = ``+order.URL1+``
                IMG2 = ``+order.URL2+``
                IMG3 = ``+order.URL3+``

                LI = ``+order.LinkedIn+`` 
                TW = ``+order.Twitter+``
                IG = ``+order.Instagram+``
                FB = ``+order.Facebook+``
                //add the individual order html to the end of the allOrdersHtml list
                //allOrdersHtml = allOrdersHtml + individialOrderHtml;
                document.getElementById('CampaignNameMain').innerHTML = Name;
                document.getElementById('CampaignName').innerHTML = Name;
                document.getElementById('CampaignSummary').innerHTML = Summary;
                document.getElementById('CampaignAim').innerHTML = Aim;
                document.getElementById('CampaignMotivation').innerHTML = Motivation;
                document.getElementById('NGOName').innerHTML = FName +" "+ LName;
                document.getElementById('NGOAbout').innerHTML = About;
                document.getElementById('CampaignIncome').innerHTML = Inc;
                document.getElementById('CampaignGoal').innerHTML = Goal;
                document.getElementById('CampaignStart').innerHTML = Start;
                document.getElementById('CampaignEnd').innerHTML = End;
                document.getElementById('progress').style.width = Inc/Goal;

                document.getElementById('progress').value = (Inc*100)/Goal;
                document.getElementById('progress').innerHTML = (Inc*100)/Goal+"%";
                document.getElementById('PayURL1').href = URL;
                document.getElementById('PayURL2').href = URL;
                document.getElementById('PayURL3').href = URL;
                document.getElementById('CampaignCategory').innerHTML = Category;

                document.getElementById('LI').href = LI;
                document.getElementById('TW').href = TW;
                document.getElementById('IG').href = IG;
                document.getElementById('FB').href = FB;

                document.getElementById('IMG1').src = IMG1;
                document.getElementById('IMG2').src = IMG2; 
                document.getElementById('IMG3').src = IMG3;             

            }
            });
        });                     
}


var campaigns_Name = ["Feed Doggos","Raffle Fundraiser for Therapy","Support The Martyrs","Hair for better"]
var campaigns_IMG = ["https://storage.googleapis.com/helping-panda.appspot.com/campaigns/top.png","https://storage.googleapis.com/helping-panda.appspot.com/campaigns/top.png",
"https://storage.googleapis.com/helping-panda.appspot.com/campaigns/top.png","https://storage.googleapis.com/helping-panda.appspot.com/campaigns/top.png"]
var campaigns_URL = ["./Doggos.html","./Raffle Fundraiser for Therapy.html","./Support The Martyrs.html","./Hair for better.html"]

var ActiveCampaigns = 4
var arr = [];
while(arr.length < ActiveCampaigns){
    var r = Math.floor(Math.random() * ActiveCampaigns-1) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr)
for (var i = 1; i < 4; i++) {
    if(campaigns_Name[arr[i]]!=Other_Campaign_Name){
    document.getElementById('Other_Name'+i).innerHTML=campaigns_Name[arr[i]]
    document.getElementById('Other_IMG'+i).src=campaigns_IMG[arr[i]]
    document.getElementById('Other_URL'+i).href=campaigns_URL[arr[i]]
    }
}