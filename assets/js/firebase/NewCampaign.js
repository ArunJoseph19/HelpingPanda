function New_Campaign() {
    //Grab order data from the form
    var folder_name = document.getElementById("campaign_name").value
    var firebaseOrdersCollection = database.ref('Trial/'+folder_name);
    var firebaseOrdersCollection2 = database.ref('Backup/'+folder_name);
    var d = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];     
    var order = {
        ID: 0,//user.uid,
        FirstName: $('#first_name').val(),
        LastName: $('#last_name').val(),
        NGOName: $('#NGO_name').val(),
        Email: $('#EMAIL').val(),
        CampaignAuthPhone: $('#camapign_phone').val(),        
        CampaignName: $('#campaign_name').val(), //another way you could write is $('#myForm [name="fullname"]').
        CampaignAim: $('#campaign_aim').val(),
        CampaignSummary: $('#camapign_summary').val(), 
        CampaignGoal: $('#camapign_funding_goal').val(), //another way you could write is $('#myForm [name="fullname"]').
        CampaignIncome: 0,
        Commission: 0,
        CampaignStartDate: $('#camapign_start_date').val(),
        CampaignEndDate: $('#camapign_end_date').val(),
        Start: d.getDate()+months[d.getMonth()]+d.getYear(),
        Motivation: $('#campaign_motivation').val(),
        NGOAbout: $('#campaign_about').val(),
        CampaignURLs: $('#camapign_urls').val(),
        CampaignPricing: $('#campaign_pricing').val(),
        CampaignFunding: $('#campaign_funding').val(),
        PaymentURL: "RazorPayURL of the Campaign",
        div: "",
        PageURL: "PageURL of the Campaign",

        LinkedIn: "https://www.linkedin.com/company/panda-helping",
        Twitter: "https://twitter.com/helping_panda",
        Instagram: "https://www.instagram.com/helpingpanda/",
        Facebook: "https://www.facebook.com/HelpingPandaLLP/",
        
        URL1: "ImageURL1 of the Campaign",
        URL2: "ImageURL2 of the Campaign",
        URL3: "ImageURL3 of the Campaign",            
    };
    var folder_name = document.getElementById("campaign_name").value
    //'push' (aka add) your order to the existing list
    if(folder_name.length!=0){
    firebaseOrdersCollection.set(order); //'orders' is the name of the 'collection' (aka database table)
    firebaseOrdersCollection2.set(order);
    alert("Thank you!! We will reach out to you soon!!")
    location.replace("https://helpingpanda.in/");
    //upload();
    }
    else{
      alert("Fill in all fields")
    }
//location.replace("https://helping-panda.web.app/");
};


