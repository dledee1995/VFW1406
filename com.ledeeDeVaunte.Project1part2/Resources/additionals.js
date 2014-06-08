var array = ["football", "basketball", "soccer", "golf", "volleyball"];

var i = 0;

var arrayText = Ti.UI.createLabel({
	//text : array,
	text : array[i],
	color : "#fff",
	font : {
		fontSize : 10,
		fontFamily : "times New Roman",
		fontStyle : "italic"
	}

});

var headerView = Ti.UI.createView({
	backgroundColor : "black",
	height : "100",
	borderRadius : 10,
	borderWidth : 5,
	borderColor : "blue",
	top : 20,
	left : 20,
	right : 20
});

var clickviewNext = Ti.UI.createView({
	backgroundColor : "black",
	height : "50",
	width : "50",
	borderRadius : 5,
	borderWidth : 5,
	borderColor : "blue",
	bottom : 20,
	right : 20,

});
var nextText = Ti.UI.createLabel({
	text : "Next",
	color : "#fff",
	font : {
		fontSize : 10,
		fontFamily : "times New Roman",
		fontStyle : "italic"
	}

});
var clickviewPrevious = Ti.UI.createView({
	backgroundColor : "black",
	height : "50",
	width : "50",
	borderRadius : 5,
	borderWidth : 5,
	borderColor : "blue",
	bottom : 20,
	left : 20,

});
var previousText = Ti.UI.createLabel({
	text : "Previous",
	color : "#fff",
	font : {
		fontSize : 10,
		fontFamily : "times New Roman",
		fontStyle : "italic"
	}

});

console.log("additionals.js has been loaded");





clickviewNext.addEventListener("click", function() {
	if(i === (array.length - 1)) {
		i = 0;
		arrayText.text = array[i];
	}else {
		i++;
		arrayText.text = array[i];
	};
});


clickviewPrevious.addEventListener("click", function() {
	if(i === 0) {
		i = (array.length - 1);
		arrayText.text = array[i];
	}else {
		i--;
		arrayText.text = array[i];
	};
});

mainWindow.add(headerView);
clickviewPrevious.add(previousText);
clickviewNext.add(nextText);

mainWindow.add(clickviewPrevious);
headerView.add(arrayText);

mainWindow.add(clickviewNext);
