var fillInputStyle = {
height: "100%"
// ,
// top: "-35px",
// left: "-10px"
}
var prevEle= "";

function triggerAnim(str){
  // document.write(str);
  if(prevEle!=""){
    // document.write("hello");
  var val = document.forms["contact-us-form"][prevEle].value;
  var row;
//Object.assign():

// Object.assign(document.getElementById("fname-row100").style,fillInputStyle);
  if(val.replace(/\s/g, "") != ""){
    console.log(prevEle+" has values")
    // document.write("hello");
    if(prevEle=='lname' || prevEle=='fname'){
      row = 'fname'
    }else{
      row = 'email'
    }
    Object.assign(document.getElementById(row+"-row100").style,fillInputStyle);
Object.assign(document.getElementById(prevEle+"-inputBox").style,fillInputStyle);
Object.assign(document.getElementById(prevEle+"-line").style,fillInputStyle);
  }
}
prevEle = ""+str+"";

    // document.forms["contact-us-form"]["fname"].style = fillInputStyle;
    // document.write("Hello World!");
    // document.getElementById("fname-input").background-color = "red"; //fillInputStyle;
    // setAttribute("style","height: 100%");
    // document.getElementsByClassName("row100").setAttribute("style","height: 100%");
    // document.getElementById("fname-inputBox").style = fillInputStyle;
    // document.getElementById("fname-line").style = fillInputStyle;
  
}

function validateForm() {
  var x = document.forms["contact-us-form"]["fname"].value;
  if (x == "") {
    //   alert("'First Name' can not be empty!!");
    asAlertMsg({
      type: "error",
      title: "Empty Field",
      message: "'First Name' can not be empty!!",

      button: {
        title: "Close Button",
        bg: "Cancel Button"
      }
    });
    return false;
  }

  var x = document.forms["contact-us-form"]["lname"].value;
  if (x == "") {
    //   alert("'Last Name' can not be empty!!");
    asAlertMsg({
      type: "error",
      title: "Empty Field",
      message: "'Last Name' can not be empty!!",

      button: {
        title: "Close Button",
        bg: "Cancel Button"
      }
    });
    return false;
  }

  var x = document.forms["contact-us-form"]["email"].value;
  if (x == "") {
    //   alert("'Email' can not be empty!!");
    asAlertMsg({
      type: "error",
      title: "Empty Field",
      message: "'E-mail' can not be empty!!",

      button: {
        title: "Close Button",
        bg: "Cancel Button"
      }
    });
    return false;
  }

  var x = document.forms["contact-us-form"]["m-num"].value;
  if (x == "") {
    //   alert("'Mobile Number' can not be empty!!");
    asAlertMsg({
      type: "error",
      title: "Empty Field",
      message: "'Mobile Number' can not be empty!!",

      button: {
        title: "Close Button",
        bg: "Cancel Button"
      }
    });
    return false;
  }
  // else if (isNaN(x)){
  //     alert("'Mobile Number' must be NUMERICAL!!");
  //     return false;
  // }

  var x = document.forms["contact-us-form"]["msg"].value;
  if (x == "") {
    //   alert("'Message' can not be empty!!");
    asAlertMsg({
      type: "error",
      title: "Empty Field",
      message: "'Message' can not be empty!!",

      button: {
        title: "Close Button",
        bg: "Cancel Button"
      }
    });
    return false;
  } else {
    asAlertMsg({
      type: "success",
      title: "Submitted",
      message: "Request submitted successfully!!",

      button: {
        title: "Close Button",
        bg: "Cancel Button"
      }
    });
    return true;
  }
}