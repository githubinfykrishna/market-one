function validateForm() {
  var fname = document.myForm.fname.value;
  var lname = document.myForm.lname.value;
  var title= document.myForm.title.value;
  var email = document.myForm.email.value;
  var phone = document.myForm.phone.value;
  var client = document.myForm.client.value;
  if (fname == "" || fname == null) {
	document.getElementById('labelfname').style.color = "#ff0000";
	document.getElementById('fname').style.border = "1px solid #ff0000";
    return false;
  }else{
    document.getElementById('labelfname').style.color = "";
	document.getElementById('fname').style.border = "";
  }
  if (lname == "" || lname == null) {
	document.getElementById('labellname').style.color = "#ff0000";
	document.getElementById('lname').style.border = "1px solid #ff0000";
    return false;
  }else{
    document.getElementById('labellname').style.color = "";
	document.getElementById('lname').style.border = "";
  }
  if (title == "" || title == null) {
	document.getElementById('labeltitle').style.color = "#ff0000";
	document.getElementById('title').style.border = "1px solid #ff0000";
    return false;
  }else{
    document.getElementById('labeltitle').style.color = "";
	document.getElementById('title').style.border = "";
  }
  if (email == "" || email == null) {
	document.getElementById('labelemail').style.color = "#ff0000";
	document.getElementById('email').style.border = "1px solid #ff0000";
    return false;
  }else{
    document.getElementById('labelemail').style.color = "";
	document.getElementById('email').style.border = "";
  }
  if (phone == "" || phone == null) {
	document.getElementById('labelphone').style.color = "#ff0000";
	document.getElementById('phone').style.border = "1px solid #ff0000";
    return false;
  }else{
    document.getElementById('labelphone').style.color = "";
	document.getElementById('phone').style.border = "";
  } 
   if(client == "Select" ) {
     document.getElementById('labelclient').style.color = "#ff0000";
	 document.getElementById('client').style.border = "1px solid #ff0000";
     return false;
    }else{
    document.getElementById('labelclient').style.color = "";
	document.getElementById('client').style.border = "";
  } 
  return true;
}