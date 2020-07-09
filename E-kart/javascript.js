localStorage.setItem("name","");
//Random Background
function randombg(){
totalCount=4;
var num = Math.ceil( Math.random() * totalCount );
document.body.background = num+'.jpg';
document.body.style.backgroundSize = "cover";
}

//To Validate Email and load Password Page
function dothis(){
	var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(document.getElementById("emailhere").value==""){
	document.getElementById("errormsg").innerHTML="Enter a valid Email address";
	document.getElementById("popup_container").style.visibility="visible";
	}
	else{
	if(document.getElementById("emailhere").value.match(mailformat)){
		if(document.getElementById('pf').value!=""){
	 localStorage.setItem("email",document.getElementById("emailhere").value);
	 localStorage.setItem("pass",document.getElementById("pf").value);
	 window.open("loading.html","_self");
	 localStorage.setItem("time","1500");
	 localStorage.setItem("link","Login.html");
 }
 else{
 document.getElementById("errormsg").innerHTML="Password cannot be left empty";
	document.getElementById("popup_container").style.visibility="visible";
	document.getElementById("pf").value.focus();
 }}
 else {
    document.getElementById("errormsg").innerHTML="Enter a valid Email address";
	document.getElementById("popup_container").style.visibility="visible";
    document.getElementById("emailhere").value.focus();
 }
}}

//To go back
function goback(){
	window.open("login.html","_self");
}

//To Reset Password
function pass_reset(){
	if(document.getElementById("pass").value==""){
	document.getElementById("errormsg").innerHTML="Pasword cannot be empty";
	document.getElementById("popup_container").style.visibility="visible";
	}
	else{
	if(localStorage.getItem("email")==document.getElementById("email_field").value){
	localStorage.setItem("pass",document.getElementById("pass_field").value);
	alert("PASSWORD RESETED SUCCESSFULLY");
	window.open("login.html","_self");
    }
    else{
    document.getElementById("errormsg").innerHTML="No user is registed with the email "+document.getElementById("email_field").value;
	document.getElementById("popup_container").style.visibility="visible";
    }
}}

//Load forget password page
function forget_password(){
   localStorage.setItem("time","1000");
    localStorage.setItem("link","password_reset.html");
    window.open('loading.html',"_self");
}

//Check details in login page 
function loginchecker(){
	if(document.getElementById("loginmail").value=="" || document.getElementById("loginpass").value==""){
		document.getElementById("errormsg").innerHTML="Each field is required";
	document.getElementById("popup_container").style.visibility="visible";
	}
	else{
	var get_mail=localStorage.getItem("email");
	var get_pass=localStorage.getItem("pass");
	var login_mail=document.getElementById("loginmail").value;
	var login_pass=document.getElementById("loginpass").value;
	if(get_mail!=login_mail || get_pass!=login_pass){
	document.getElementById("errormsg").innerHTML="Username Or Paasword is Incorrect";
	document.getElementById("popup_container").style.visibility="visible";
	}
	else{
		window.open("home.html","_self");
	}
}}


//Loading Animation
var myVar;
function loader() {
    myVar = setTimeout(function(){ window.open(localStorage.getItem("link"),"_self");
myStopFunction();
     }, localStorage.getItem("time"));
}
function myStopFunction() {
    clearTimeout(myVar);
}

//PopUp Error
function closepopup(){
document.getElementById("popup_container").style.visibility="hidden";
}

//Loading different videos at refresh
function videoloader(){
totalCount=4;
var num = Math.ceil( Math.random() * totalCount );
var player = document.getElementById('vdo');
var source=document.getElementById("source");
player.pause();
source.src="ad"+num+".mp4";
player.load();
player.play();
}


//Real time Calculation
function startCalc(){
 interval = setInterval("total()",1);
}
function total(){
var price=localStorage.getItem("price");
var quantity=document.getElementById("qty_field").value;
var totalprice=price*quantity;
document.getElementById("totalp").innerHTML=totalprice;
}
function stopCalc(){
clearInterval(interval);
}

//load Delivery Page
function delivery(){
window.open("DeliveryPage.html","_self");
}

//gives default value to the quantity
function givevalue(){
document.getElementById("qty_field").value="1";
document.getElementById("pprice").innerText=localStorage.getItem("price");
document.getElementById("totalp").innerText=localStorage.getItem("price");
}

//specspage
function getdata(a) {
	var getpro=localStorage.getItem("name");
    if(getpro==""){
	if(a=='1'){
	localStorage.setItem("What",a);	
	localStorage.setItem("Product"+a,"Name : Macbook Air");	
	localStorage.setItem("Price"+a,"Price : 53899");
	localStorage.setItem("Photo"+a,"apple1.jpeg");
	localStorage.setItem("name","Macbook Air");
	total++;
}
else if(a=='2'){
	localStorage.setItem("What",a);	
	localStorage.setItem("Product"+a,"Name : Mi A1");	
	localStorage.setItem("Price"+a,"Price : 13999");
	localStorage.setItem("Photo"+a,"mi.jpeg");
	localStorage.setItem("name","Mi A1");
}
else if(a=='3'){
	localStorage.setItem("What",a);	
	localStorage.setItem("Product"+a,"Name : Iphone X ");	
	localStorage.setItem("Price"+a,"Price : 97999");
	localStorage.setItem("Photo"+a,"iphonex.jpeg");
	localStorage.setItem("name","IphoneX");
}
alert("Item Added To Cart Successfully");
}
else if(getpro=="Macbook Air"||getpro=="Mi A1"||getpro=="IphoneX"){
alert("Cart is full");
var cnf=confirm("Want to replace the item in the cart with new item");
if(cnf==1){
	localStorage.setItem("name","");
	getdata(a);
}
else{
	alert("Cancelled");
}
}}


//cart buy
function cartbuy(){
localStorage.setItem("price",localStorage.getItem("cartprice"));
localStorage.setItem("name",document.getElementById('product1').innerText);
window.open("buynow.html","_self");
}

//buynow()
function buynow(a){

	if(a=='1'){
	localStorage.setItem("name","Macbook Air");
	localStorage.setItem("price","53899");
}
else if(a=='2'){
	localStorage.setItem("name","Mi A1");
	localStorage.setItem("price","13999");
}
else if(a=='3'){
	localStorage.setItem("name","Iphone X");
	localStorage.setItem("price","97999");
}
	window.open("buynow.html","_self");
}


function opener(a){
	if(a=='1'){
	window.open('home.html',"_self");		
	}
	else if(a=='2'){
		window.open('AboutUs.html',"_self");		
	}
	else if(a=='3'){
		window.open('Cart.html',"_self");
	}
}

function username(){
document.getElementById('nameofuser').innerHTML=localStorage.getItem("email");
}

function loaditems(){
document.getElementById('nameofuser').innerHTML=localStorage.getItem("email");
var a=localStorage.getItem("What");
		document.getElementById('img1').innerHTML="<img  src="+localStorage.getItem("Photo"+a)+" width=\x22 80px \x22>";
		document.getElementById('product1').innerText=localStorage.getItem("Product"+a);
		document.getElementById('price1').innerText=localStorage.getItem("Price"+a);
		document.getElementById('tp').innerText=localStorage.getItem("Price"+a);
        if(a=='1'){
        	localStorage.setItem("cartprice","53899");
        }
        else if(a=='2'){
        	localStorage.setItem("cartprice","13999");
        }
        if(a=='3'){
        	localStorage.setItem("cartprice","97999");
        }
}

//searchbox in description page
function err(){
if(document.getElementById('searchbox').value==""){
	alert("Enter Something");
}
else if(document.getElementById('searchbox').value=="IphoneX"){
window.open("iphonespecs.html","_self");
}
else if(document.getElementById('searchbox').value=="Mi A1"){
window.open("mispecs.html","_self");
}
else if(document.getElementById('searchbox').value=="Macbook"){
window.open("macspecs.html","_self");
}
else{
	window.open("https://www.flipkart.com/search?q="+document.getElementById('searchbox').value+"&otracker=start&as-show=off&as=off","_self");
}
}

function loadlogin(){
window.open("E-kart.html","_self");
}
