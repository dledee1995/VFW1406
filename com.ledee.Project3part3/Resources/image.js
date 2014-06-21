var detailWindow = Ti.UI.createWindow({
	backgroundColor : "#999",
	fullscreen : true,
});
var back = Ti.UI.createLabel({
	text : "<< back",
	backgroundColor : "#222",
	color : "999",
	height : 50,
	font : {
		fontSize : 25,
		fontFamily : "Arial"
	},
	width : "100%",
	bottom : 0,
	textAlign : "center"
});

var mainClose = function() {
	detailWindow.close();
};

var galleryArray = [];

for (var i = 0, j = galleryList.length; i < j; i++) {
	console.log(galleryList[i]);
	var detailImage = Ti.UI.createImageView({
		image : "imageGallery/" + galleryList[i],
		//height: size,
		height : "85%",
		width : "100%",
		type : 'photo',
		top : 80,
		name : galleryList[i],
		//index : i
	});

	galleryArray.push(detailImage);

};

var scrollableView = Ti.UI.createScrollableView({

	// accepts an array data type of views
	views : galleryArray,

	height : "92%",
	//height : 10,
	//pagingControlHeight: 0,
	top : 0,
	bottom : 10,
	showPagingControl : true,
	//pagingControlColor:"#black"
});
//rich note: function end

var menu = Ti.UI.createView({
	//backgroundColor : "gray",
	backgroundColor : "black",
	top : 0,
	height : "15%"
});

var nextImage = function(d) {
	//console.log(d.name);

	//currentPage = //old page
	menuLabel.text = d.image;
	scrollableView.currentPage = d.index;
	detailWindow.open();
};

var getData = function(imageSource) {
	menuLabel.text = this.views[this.currentPage].name;
	//console.log(this.views[this.currentPage].name);
	//console.log(scrollableView.currentPage);
};

scrollableView.addEventListener("scrollend", getData);

var menuLabel = Ti.UI.createLabel({
	text : "This will change",
	color : "blue"

});

menu.add(menuLabel);
detailWindow.add(scrollableView);
detailWindow.add(menu);
detailWindow.add(back);

back.addEventListener("click", mainClose);
win.addEventListener("click", function(e) {
	console.log(e.source);
	
	if (e.source.type === "photo") {
		nextImage(e.source);
	}
});
