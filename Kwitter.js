function add_user(){
    username=document.getElementById("input1").value;
    localStorage.setItem("input1",username);
    window.location="Kwitter_room.html";
    console.log("hello");
}