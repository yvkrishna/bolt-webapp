document.querySelector(".btns").addEventListener('click',(event)=>{
	var userEmail = document.querySelector(".uname").value;
	var userpassword = document.querySelector(".upassword").value;
	var key=0;
new_obj={
	email:userEmail,
	password:userpassword
}
data=[
{
	email:"igk",
	password:"igk"
},
{
	email:"ed",
	password:"ed"
},
{
	email:"sk",
	password:"sk"
},
{
	email:"yvk",
	password:"yvk"
}
];
for (var i=0;i<data.length;i++){
	var e= data[i].email ==new_obj.email;
	var p= data[i].password ==new_obj.password;
	if(e && p){
		console.log("success");
		window.location.href="boltiot.html"
		console.log(window.location.href);
		key=1;
	}
	else{
		console.log("failed");
		window.location.href="login.html"
	}
}
});
