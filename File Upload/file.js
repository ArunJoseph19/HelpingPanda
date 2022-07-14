//// CHOICE /////
var files = [];
document.getElementById("files").addEventListener("change", function(e) {
  files = e.target.files;
});

///// SEND FILES //////
document.getElementById("send").addEventListener("click", function() {

  if (files.length != 0) {
    for (let i = 0; i < files.length; i++) {
      var storage = firebase.storage().ref(files[i].name);
      var upload = storage.put(files[i]);
      upload.on("state_changed", function progress(snapshot) {
          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress").value = percentage;
        },

        function error() {alert("Error uploading file.");},

        function complete() {document.getElementById( "uploading").innerHTML += `${files[i].name} uploaded <br />`;}); }
    
    } else {alert("No file chosen."); }
});
////////////////////////////////////

// GET URL ////////////////////
document.getElementById("get_url").addEventListener("click", function() {
  var get_url_file = document.getElementById("name").value;
  var storage = firebase.storage().ref(get_url_file);
  storage.getDownloadURL().then(function(url) {document.getElementById("response").innerHTML += `${url}  <br />`; })
                                         .catch(function(error) {alert("Error encountered."); });

});
////////////////////////////////////


// LIST FILES ////////////////////
document.getElementById("list_files").addEventListener("click", function() {
  var storageRef = firebase.storage().ref();
  storageRef.listAll().then(function(result) {
  result.items.forEach(function(urlFile) {document.getElementById("response_list").innerHTML +=  `${urlFile}  <br />`; });
                              }).catch(function(error) {alert("No file chosen."); });                     
});

////////////////////////////////////
