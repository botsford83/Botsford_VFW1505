var sports = ["FOOTBALL", "BASKETBALL", "SOCCER", "BASEBALL", "TENNIS", "HOCKEY", "VOLLEYBALL"];
var sportsArray = 0;
var nextClick = function(){
		if (sportsArray == 6){
        sportsArray = 0;
       	}
        	else{
            sportsArray++;
       		}
				bodyLabel.text = sports[sportsArray];
};
var previousClick = function(){
		if (sportsArray == 0){
        sportsArray = 6;
       	}
        	else{
            sportsArray--;
       		}
				bodyLabel.text = sports[sportsArray];
};
var answerFunc = function(){
	if (bodyLabel.text != sports[sportsArray]) {
		bodyLabel.Font = {fontSize: 30, fontFamily: "Chalkduster", fontWeight: "bold", fontsStyle: "italic"};
		bodyLabel.text = "Please Select A Sport.";
	}
		else{
			bodyLabel.text = "THANK YOU!";
			myHeader.hide();
			headerLabel.hide();
			buttonAnswerView.hide();
			answerLabel.hide();
			buttonNextView.hide();
			buttonPreviousView.hide();
			myNext.hide();
			myPrevious.hide();
		}
			
};
buttonNextView.addEventListener("click", nextClick);
buttonPreviousView.addEventListener("click", previousClick);
buttonAnswerView.addEventListener("click", answerFunc);