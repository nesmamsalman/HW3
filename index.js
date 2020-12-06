const allData = require('./array');

function batterTypes(){
	var allBatterTypes =[];
	var batterArrays =[];

	for ( var i=0 ; i<allData.length ; i++) {

		batterArrays = allData[i].batters.batter;


        for (var batterElement of batterArrays) {
		     allBatterTypes.push(batterElement.type);





		}
		
		}
    return allBatterTypes;

}

function toppingTypes(){
	var allToppingTypes =[];
	var toppingArrays =[];

	  for ( var i=0 ; i<allData.length ; i++) {
          
          toppingArrays = allData[i].topping;


        for (var toppingElement of toppingArrays) {
		  
          allToppingTypes.push(toppingElement.type);

	}

	}
   
return allToppingTypes;

} 


function ppuAverage(){


	var Average =0;

	for ( var element of allData) {

		Average += element.ppu;
	}
    
      return (Average/allData.length);


}

function ppuSum(){

	var Sum =0;

	for ( var element of allData) {

		Sum += element.ppu;
	
	}
    
return Sum;

}


function allIds(){

  var allIds = [];

	  for ( var i=0 ; i<allData.length ; i++) {

      
       	batterArrays = allData[i].batters.batter;


        for (var batterElement of batterArrays) {
		     allIds.push(batterElement.id);}


        toppingArrays = allData[i].topping;
         for (var toppingElement of toppingArrays) {
		  
          allIds.push(toppingElement.id);}
		}       
      return allIds;

}


