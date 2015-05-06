Ti.UI.setBackgroundColor("#000");


var margin = 20;
var font = {fontSize: 14, fontFamily: "Helvetica", fontWeight: "bold", fontsStyle: "italic"};
var sports = ["football", "basketball", "soccer", "baseball"];

var mainWindow = Ti.UI.createWindow({
	//Reserved Properties
	title: "My First Window",
	backgroundColor: "#fff",
	backgroundImage: "camo.png",
	backgroundRepeat: true,
});

var myHeader = Ti.UI.createView({
	//Reserved Properties
	backgroundColor: "#333",
	borderColor: "red",
	borderRadius: 5,
	borderWidth: 1,
	height: 100,
	top: margin,
	left: margin,
	right: margin,
	//These are custom properties
	id: "Header",
	cost: "$100",
});

var headerLabel = Ti.UI.createLabel({
	text: "Please select the sport you would like to participate in",
	color: "black",
	font: font,
	textAlign: "center",
	top: myHeader.height /2,
	//right: 25,
	//left: 25,
	//bottm: 25,
});

var myBody = Ti.UI.createView({
	backgroundColor: "#333",
	borderColor: "red",
	borderRadius: 5,
	borderWidth: 1,
	height: 100,
	top: myHeader.top + myHeader.height + margin,
	left: margin,
	right: margin,
});


var bodyLabel = Ti.UI.createLabel({
	text: "",
	color: "black",
	font: font,
	textAlign: "center",
	top: 25,
	right: 25,
	left: 25,
	bottm: 25,
});


var buttonNextView = Ti.UI.createView({
	backgroundColor: "#333",
	bottom: margin,
	right: margin,
	borderRadius: 5,
	height: 20,
	width: 50,
	borderColor: "red",
	borderWidth: 1,
});

var myNext = Ti.UI.createLabel({
	text: "NEXT ->",
	color: "red",
	font: font,
	textAlign: "center",
});

var buttonPreviousView = Ti.UI.createView({
	backgroundColor: "#333",
	bottom: margin,
	left: margin,
	borderRadius: 5,
	height: 20,
	width: 60,
	borderColor: "red",
	borderWidth: 1,
});

var myPrevious = Ti.UI.createLabel({
	text: "Previous <-",
	color: "red",
	font: font,
	textAlign: "center",
});

var changeText = function(){
	while(sports.length < 3) {
		
	}
};

buttonNextView.addEventListener("click", changeText);
buttonPreviousView.addEventListener("click", changeText);

mainWindow.add(myHeader, myBody, myNext, myPrevious, buttonNextView, buttonPreviousView, headerLabel);
myBody.add(bodyLabel);
buttonNextView.add(myNext);
buttonPreviousView.add(myPrevious);
mainWindow.open();