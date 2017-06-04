module.exports = function main(num) {
    
	var arr0=[["._."],["|.|"],["|_|"]];
	var arr1=[["..."],["..|"],["..|"]];

	var arr2=[["._."],["._|"],["|_."]];
	var arr3=[["._."],["._|"],["._|"]];

	var arr4=[["..."],["|_|"],["..|"]];
	var arr5=[["._."],["|_."],["._|"]];

	var arr6=[["._."],["|_."],["|_|"]];
	var arr7=[["._."],["..|"],["..|"]];

	var arr8=[["._."],["|_|"],["|_|"]];
	var arr9=[["._."],["|_|"],["..|"]];
	var arr=[arr0,arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9];

	var strr="";
	var oldnum=[];
	var realnum=parseInt(num);
	while(realnum!==0)
	{  
		
		oldnum.push(realnum%10);
		
      	realnum=parseInt(realnum/10);
	}
	for (var k = 0; k< 3; k++) {
	for (var i = oldnum.length-1; i>=0; i--) {
		if(i===0)
		{strr=strr+(arr[(oldnum[i])][k]);
		}
		else{
			strr=strr+(arr[(oldnum[i])][k]+" ");
		}
	}
	strr=strr+("\n");
	}
	
return strr;
 
};