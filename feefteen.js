let gmail = function(str){
	let arr = str.split(" ");
	let ans = [];
  	for(let x of arr){	
  		if(x.match(/@.*?\.com/g)!=null)
  		ans.push(x);
	}
	return ans;
}

alert(gmail("abc@gmail.com tata tatabye@gmail.com"));

