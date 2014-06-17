var deviceWidth = Ti.Platform.displayCaps.platformWidth;
var numberOfViews = 57;
var rowCount = 4;
var margain = 10;
var trueWidth = deviceWidth - margain * (rowCount + 1);
var size = trueWidth / rowCount;

var win = Ti.UI.createWindow({
	backgroundColor : "#333",
	fullscreen : true,
	title : "Sport Images"
});
var heading = Ti.UI.createLabel({

	text : "NFL Stars",
	backgroundColor : "#222",
	color : "#999",
	height : 50,
	font : {
		fontSize : 23,
		fontFamily : "Arial"
	},
	width : "100%",
	top : 0,
	textAlign : "center"
});

var viewContainer = Ti.UI.createScrollView({
	layout : "horizontal",
	contentWidth : deviceWidth
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "imageGallery");
var galleryList = gallery.getDirectoryListing();

var makeViews = function() {
	for (var i = 0; i < numberOfViews; i++) {

		var newView = Ti.UI.createView({
			top : "10dp",
			left : "10dp",
			content : "imageGallery/" + galleryList[i],
			backgroundColor : "#555",
			width : size,
			height : size

		});
		var theImage = Ti.UI.createImageView({
			image : "imageGallery/" + galleryList[i],
			/*top : 0,
			 left : 10,*/
			height : size,
			//width: 50,
			parent : newView,
			type : 'photo',
			index : i
		});

		/*var newLabel = Ti.UI.createLabel({
		 text : i + 1

		 });

		 newView.add(newLabel);*/

		newView.add(theImage);
		//viewContainer.add(newView);
		viewContainer.add(newView);
	}
};

viewContainer.add(heading);
makeViews();
win.add(viewContainer);
var loadFile = Ti.include("images.js");
win.open();

