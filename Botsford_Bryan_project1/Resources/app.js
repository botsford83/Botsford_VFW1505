
var mainWindow = Ti.UI.createWindow({
	//Reserved Properties
	title: "My First Window",
	backgroundColor: "#fff",
	backgroundImage: "camo.png",
	backgroundRepeat: true,
});

//Views
var myHeader = Ti.UI.createView({
	//Reserved Properties
	backgroundColor: "#333",
	borderColor: "red",
	borderRadius: 20,
	borderWidth: 1,
	height: 100,
	top: 20,
	left: 20,
	right: 20,
});
var myBody = Ti.UI.createView({
	backgroundColor: "#333",
	borderColor: "red",
	borderRadius: 20,
	borderWidth: 1,
	height: 200,
	top: myHeader.top + myHeader.height + 20,
	left: 20,
	right: 20,
});
var buttonNextView = Ti.UI.createView({
	backgroundColor: "#333",
	font: {fontSize: 50, fontFamily: "Chalkduster", fontWeight: "bold", fontsStyle: "italic"},
	bottom: 20,
	right: 20,
	borderRadius: 30,
	height: 70,
	width: 100,
	borderColor: "red",
	borderWidth: 1,
});
var buttonPreviousView = Ti.UI.createView({
	backgroundColor: "#333",
	font: {fontSize: 50, fontFamily: "Chalkduster", fontWeight: "bold", fontsStyle: "italic"},
	bottom: 20,
	left: 20,
	borderRadius: 30,
	height: 70,
	width: 100,
	borderColor: "red",
	borderWidth: 1,
});
var buttonAnswerView = Ti.UI.createView({
	backgroundColor: "#333",
	borderColor: "red",
	borderRadius: 20,
	borderWidth: 1,
	height: 100,
	top: myBody.top + myBody.height + 20,
	left: 20,
	right: 20,
});
//Labels
var headerLabel = Ti.UI.createLabel({
	text: "Please select the sport you would like to participate in.",
	color: "Red",
	font: {fontSize: 14, fontFamily: "Chalkduster", fontWeight: "bold", fontsStyle: "italic"},
	textAlign: "center",
	left: 20,
	right: 20,
	top: myHeader.height /2,
});
var bodyLabel = Ti.UI.createLabel({
	text: "",
	color: "Red",
	font: {fontSize: 30, fontFamily: "Chalkduster", fontWeight: "bold", fontsStyle: "italic"},
	textAlign: "center",
	top: myBody.top / 2,
	right: 25,
	left: 25,
	bottm: 25,
});
var myNext = Ti.UI.createLabel({
	text: "NEXT ->",
	color: "red",
	font: {fontSize: 14, fontFamily: "Chalkduster", fontWeight: "bold", fontsStyle: "italic"},
	textAlign: "center",
});
var myPrevious = Ti.UI.createLabel({
	text: "<- Previous",
	color: "red",
	font: {fontSize: 14, fontFamily: "Chalkduster", fontWeight: "bold", fontsStyle: "italic"},
	textAlign: "center",
});
var answerLabel = Ti.UI.createLabel({
	text: "ACCEPT",
	color: "Red",
	font: {fontSize: 40, fontFamily: "Chalkduster", fontWeight: "bold", fontsStyle: "italic"},
	textAlign: "center",
	top: buttonAnswerView.top + 25,
	right: 25,
	left: 25,
});

var loadFile = require("FUNCTIONS");
mainWindow.add(myHeader, myBody, myNext, myPrevious, buttonNextView, buttonPreviousView, headerLabel, buttonAnswerView, answerLabel);
myBody.add(bodyLabel);
buttonNextView.add(myNext);
buttonPreviousView.add(myPrevious);
mainWindow.open();