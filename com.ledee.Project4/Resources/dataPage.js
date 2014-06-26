var loadFile = require("JSON");

//console.log(loadFile.data.NFCEast.teams[0].img);

var openDetail = function(D) {
	//console.log(D.image);
	
	var detailWindow = Ti.UI.createWindow({
		backgroundColor : "black",
		fullscreen : true,
		Title : D.title
	});

	var detailText = Ti.UI.createLabel({
		text : D.detail,
		top : 50,
		color : "#fff"

	});
	
	var descriptionText = Ti.UI.createLabel({
		text: D.record,
		top : 100,
		color : "#fff"

	});
	
	console.log(D.record);
	
	var testImageView = Ti.UI.createImageView({
		image: D.image,
		//bottom : 50,
		height:"50%",
		width:"100%"
	});
	detailWindow.add(descriptionText);
	detailWindow.add(testImageView);
	detailWindow.add(detailText);
	navigationWindow.openWindow(detailWindow);
};

var dataWindow = Ti.UI.createWindow({
  backgroundColor: 'white',
  title: "Data",
	fullscreen : true
});

var table = Ti.UI.createTableView({
	top : 10,
	//top : 40,
	left : 10,
	right : 10,
	bottom : 80
});

var tableSections = [];
for (var n in loadFile.data) {
	//create tableViewSections
	var tvs = Ti.UI.createTableViewSection({
		headerTitle : loadFile.data[n].headTitle,
		footerTitle : loadFile.data[n].footTitle
	});
	for (var i = 0, j = loadFile.data[n].teams.length; i < j; i++) {
		var row = Ti.UI.createTableViewRow({
			title : loadFile.data[n].teams[i].Title,
			detail : loadFile.data[n].teams[i].desc,
			record : loadFile.data[n].teams[i].record,
			image:  loadFile.data[n].teams[i].img
			//loadFile.data.NFCEast.teams[0].img
		});
		tvs.add(row);
		//row.addEventListener("click", openDetail);
	}
	tableSections.push(tvs);
}
table.addEventListener("click", function(listing){
	openDetail(listing.source);
	
	
});












navigationWindow.openWindow(dataWindow, {
		animation: true
	});
	



table.setData(tableSections);
dataWindow.add(table);
//win.open();
navigationWindow.open();
