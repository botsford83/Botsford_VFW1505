//Global Variables
var margin = 20;
var font = {fontSize: 14, fontFamily: "Chalkduster", fontWeight: "bold", fontsStyle: "italic"};
var sports = ["FOOTBALL", "BASKETBALL", "SOCCER", "BASEBALL"];
var sportsArray = 0;
var nextClick = function(){
		if (sportsArray == 3){
        sportsArray = 0;
       	}
        	else{
            sportsArray++;
       		}
				bodyLabel.text = sports[sportsArray];
};
var previousClick = function(){
		if (sportsArray == 0){
        sportsArray = 3;
       	}
        	else{
            sportsArray--;
       		}
				bodyLabel.text = sports[sportsArray];
};
buttonNextView.addEventListener("click", nextClick);
buttonPreviousView.addEventListener("click", previousClick);


