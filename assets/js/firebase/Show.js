var activecampaigns_list = ["Feed the dogs in and around BMSIT&M","Support The Martyrs","Hair for better"]
var finishedcampaigns_list = ["Raffle Fundraiser for Therapy","Yoga and Meditation for Mental Health","Distribution of relief materials","Blankets for the Needy","Ration Box Drive","Christmas Campaign","Bed Facility for Orphans"]


function HTML_Show_LiveCampaigns(index) {
	// body...
var Campaign = database.ref().child('Trial');
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
                for (var i = 0; i <= index; i++) {
                if(order.CampaignName==activecampaigns_list[i]){
                Name =   ``+order.CampaignName+``
                Goal = ``+order.CampaignGoal+``
                Inc = ``+order.CampaignIncome+``
                Start = ``+order.CampaignStartDate+``
                End = ``+order.CampaignEndDate+``
                IMG = ``+order.URL1+``
                PageURL = ``+order.PageURL+``
               	NGOName = ``+order.NGOName+``
                //add the individual order html to the end of the allOrdersHtml list
                //allOrdersHtml = allOrdersHtml + individialOrderHtml;
                var div_Live_ID = i+1
                document.getElementById('Name_Live_'+div_Live_ID).innerHTML = Name;
                document.getElementById('Name_Live_'+div_Live_ID).href = PageURL;
                document.getElementById('Income_Live_'+div_Live_ID).innerHTML = Inc;
                document.getElementById('Goal_Live_'+div_Live_ID).innerHTML = Goal;
                document.getElementById('Img_Live_'+div_Live_ID).src = IMG;
				document.getElementById('Progress_Live_'+div_Live_ID).value = (Inc*100)/Goal;
				document.getElementById('Progress_Live_Per_'+div_Live_ID).innerHTML = Math.round((Inc*100)/Goal)+"%";
				document.getElementById('Campaigner_Live_'+div_Live_ID).innerHTML = NGOName;
				document.getElementById('Live_Button'+div_Live_ID).href = PageURL;
                // document.getElementById('Start').innerHTML = Start;''
                // document.getElementById('End').innerHTML = End;
            }
        }
            });
        }); 
        HTML_Show_DoneCampaigns(4)                    
	}

function HTML_Show_DoneCampaigns(index) {
	// body...
var Campaign = database.ref().child('Trial');
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
                for (var i = 0; i <= index; i++) {
                if(order.CampaignName==finishedcampaigns_list[i]){
                Name =   ``+order.CampaignName+``
                Goal = ``+order.CampaignGoal+``
                Inc = ``+order.CampaignIncome+``
                Start = ``+order.CampaignStartDate+``
                End = ``+order.CampaignEndDate+``
                IMG = ``+order.URL1+``
                PageURL = ``+order.PageURL+``
                NGOName = ``+order.NGOName+``
                //add the individual order html to the end of the allOrdersHtml list
                //allOrdersHtml = allOrdersHtml + individialOrderHtml;
                var div_Done_ID = i+1
                document.getElementById('Name_Done_'+div_Done_ID).innerHTML = Name;
                document.getElementById('Name_Done_'+div_Done_ID).href = PageURL;
                document.getElementById('Income_Done_'+div_Done_ID).innerHTML = Inc;
                document.getElementById('Goal_Done_'+div_Done_ID).innerHTML = Goal;
                document.getElementById('Img_Done_'+div_Done_ID).src = IMG;
                document.getElementById('Progress_Done_'+div_Done_ID).value = (Inc*100)/Goal;
                console.log(Inc/Goal*100);
				document.getElementById('Progress_Done_Per_'+div_Done_ID).innerHTML = Math.round((Inc*100)/Goal)+"%";
				document.getElementById('Campaigner_Done_'+div_Done_ID).innerHTML = NGOName;
				document.getElementById('Done_Button'+div_Done_ID).href = PageURL;
                // document.getElementById('Start').innerHTML = Start;
                // document.getElementById('End').innerHTML = End;
            }
        }
            });
        });                     
}
