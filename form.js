var nmarray=["murtaza","gaurav","sagar","rahul"];
var agearray=[22,21,19,20];
var gdarray=["male","male","male","male"];
var emarray=["khilawala62@gmail.com","gauravkamble019@gmail.com","sagar.kirtane1999@gmail.com","dalvi69@gmail.com"];
var unArray = ["mutuz786", "grv1998", "sgk123", "dissrdx"];
var pwArray = ["murtazazaa", "12345678", "kirtane", "riot"];
var score=[0,0,0,0];
var count;

function validate() 
{
    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var valid = false;

    for (var i=0; i <unArray.length; i++) 
    {
        if ((un == unArray[i]) && (pw == pwArray[i])) 
       {
            valid = true;
            break;
        }
    }

    if (valid) 
   {
        alert ("Login was successful");
	window.location = "basm/1.html";
    }
    else 
   {
        alert("Invalid Username and/or Password! Please try again. You will not be able to submit this form without a successful login")
        document.getElementById("password").value = "";
        document.getElementById("username").value = "";
        document.getElementById("username").focus();
    }
}
function register()
{
   var nm = document.getElementById("name").value;
   var age = document.getElementById("age").value;
   var gd = document.getElementById("gender").value;
   var em = document.getElementById("email").value;
   var un = document.getElementById("username1").value;
   var pw = document.getElementById("password1").value;
   var pw = document.getElementById("password2").value;
   var valid="false"

   if(nm==""||age==""||gd==""||em==""||un1==""|pw1==""|pw2=="")
   {
        alert("Kindly enter the respected information");
        break;
        if(pw1!=pw2)
       {
           alert("Password is not matching");
           break;
           for (var i=0; i <unArray.length; i++) 
           {
              if (un == unArray[i]) 
              {
                 alert("Username already taken");
                 break;
              }
           }
           valid="true";                   
       }
   }
   if(valid="true")
   {
      nmarray.push(nm);
      agearray.push(age);
      gdarray.push(gd);
      emarray.push(em);
      unarray.push(um);
      pwarray.push(pm);
      score.push(00);
      alert("Your account has been registered");
   }
   else
   {
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("gender").value = "";
      document.getElementById("email").value = "";
      document.getElementById("username1").value = "";
      document.getElementById("password1").value = "";
      document.getElementById("password2").value = "";
      document.getElementById("username").focus();
   }
}




