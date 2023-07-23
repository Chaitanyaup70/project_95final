var firebaseConfig = {
    apiKey: "AIzaSyAphTrjg5MYaG0E7KxB8DeynFO9f5EW7Ok",
    authDomain: "kwiter-6f579.firebaseapp.com",
    databaseURL: "https://kwiter-6f579-default-rtdb.firebaseio.com",
    projectId: "kwiter-6f579",
    storageBucket: "kwiter-6f579.appspot.com",
    messagingSenderId: "551901858065",
    appId: "1:551901858065:web:0cf598bb4f9e567fd864b0"
  };
     
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var user=localStorage.getItem("user_name");
  var room=localStorage.getItem("add_room");
  function send(){
     msg=document.getElementById("message").value;
     firebase.database().ref(room).push({
        name:user,
        message:msg,
        like:0

     })
     document.getElementById("message").value=""
     
  }
  function log_out(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("add_room");
   window.location="index.html";
 }
 function get_data(){
  firebase.database().ref("/"+room_name).on('value',function(snapshot){
   document.getElementById("sending_message").innerHTML="";
   snapshot.forEach(function(childsnapshot){
      childKey=childsnapshot.key;
      childdata=childsnapshot.val();
      if(childKey!="purpose"){
         message_id=childKey;
         message_data=childdata;
         message=message_data["message"]
         like=message_data["like"]
         name=message_data["name"]
         name_tag="<h4>"+name+"<img class='img1' src='tick.png'></h4>"
         message_tag="<h4>"+message+"</h4>"
         like_button="<button class='btn btn-warning' id="+message_id+"value="+like+"onclick='like_msg(this.id)'>"
         span_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button>"
      }

   })
  })
 }
  