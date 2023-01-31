


function totalcost(){

	let totalprice = 0;
	let y=0;

	
		let u=document.forms[0];
			
			 	let w=u.pr;
			    y=w.options[w.selectedIndex].value;
			    if(y==0)
			    	totalprice = 0;
			    else
			    totalprice = y*20 + 15;
		
	
	
	document.getElementById("total").innerHTML="مجموع  + هزینه پست   :"+totalprice;
};










function show(){
	let totalprice = 0;
	let y=0;

	
		let u=document.forms[0];
			
			 	let w=u.pr;
			    y=w.options[w.selectedIndex].value;
			    totalprice = y*20;
		
	
	
	document.getElementById("total").innerHTML="مجموع: "+totalprice;
};













function validation(){
	
	let f=document.getElementById("term1");

	if(f.checked==true )
		alert(" با تشکر از خرید شما");
	else alert("لطفا قوانین و مقررات ر اقبول کنید");
	
};