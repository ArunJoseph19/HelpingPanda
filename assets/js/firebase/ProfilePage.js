function Show_Campaigns(count) {
	// body...
for (var i = count; i >= 1; i--) {
  var x = document.getElementById('myPopup'+i);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
}

function No_Campaigns() {
	// body...
    cnt=2
	var y = document.getElementById("NoCampaigns");
    var x = document.getElementById("YesCampaigns");
	if(cnt===0){
	y.style.display="block";
	console.log(cnt)
	}else{
    x.style.display="block";
    }

}

function render_campaigns(count) {
    // body...
    alert(count)
    var Campaign = database.ref().child('Trial/');
        Campaign.on('value',function(orders){
        orders.forEach(function(firebaseOrderReference){
                order = firebaseOrderReference.val();
                if(order.ID=="OikaE0fWx0SJclH5ta3bRDMrREN2"){
                Name =   ``+order.CampaignName+``    
                Summary = ``+order.CampaignSummary+``
                Aim = ``+order.CampaignAim+``
                Goal = ``+order.CampaignGoal+``
                IMG1 = ``+order.URL1+``
                Dat = ``+order.Start+``
                div = ``+order.div+`` 

                document.getElementById('aim'+div).innerHTML = Name;
                document.getElementById('summary'+div).innerHTML = Summary;
                document.getElementById('aim'+div).innerHTML = Aim;
                document.getElementById('goal'+div).innerHTML = Goal;
                document.getElementById('img'+div).src = IMG1;
                document.getElementById('date'+div).innerHTML = Dat;
        }
            });        
        });          

}


function profile_show() {
	// body...
var Campaign = database.ref().child('Trial/');
var count=0;
        //create a 'listener' which waits for changes to the values inside the firebaseOrdersCollection 
        Campaign.on('value',function(orders){
            
            //this is saying foreach order do the following function...
            orders.forEach(function(firebaseOrderReference){
                //this gets the actual data (JSON) for the order.
                order = firebaseOrderReference.val();
                console.log(order); //check your console to see it!
                 //create html for the individual order
                //note: this is hard to make look pretty! Be sure to keep your indents nice :-)
                //IMPORTANT: we use ` here instead of ' (notice the difference?) That allows us to use enters
                if(order.ID=="OikaE0fWx0SJclH5ta3bRDMrREN2"){
                count = count+1               
            }

            });No_Campaigns(count);
            render_campaigns(count);
            Show_Campaigns(count)
            });          

}