var galleryWindow = Ti.UI.createWindow({
  backgroundColor: 'white',
  title: "Photo Gallery",
	fullscreen : true
});
var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "imageData");
var galleryList = gallery.getDirectoryListing();

var randomImage = Math.floor(Math.random()*galleryList.length);
console.log(randomImage);

var button = Ti.UI.createButton({
	
	backgroundColor : "#222",
	
	height : 30,
	
	width : "100%",
	bottom : 0
});
	
	
	



var galleryView = Ti.UI.createImageView({
	
	
image:"imageData/" + galleryList[Math.floor(Math.random()*galleryList.length)]

});
var previousNumber ;
var next = function(){
		
		var random = Math.floor(Math.random()*galleryList.length);
	 
	while(random === previousNumber) {
		
	var random = Math.floor(Math.random()*galleryList.length);
	}	
		galleryView.image = "imageData/" + galleryList[random];
	
	previousNumber = random;
	};

	
button.addEventListener("click",next);















var nextPicture = Ti.UI.createLabel({
	text : "Next Picture",
	color : "999",
	
	font : {
		fontSize : 20,
		fontFamily : "Arial"
	},
	width : "100%",
	bottom : 0,
	textAlign : "center"
});

var mainClose = function() {
	detailWindow.close();
};


button.add(nextPicture);
galleryWindow.add(button);
galleryWindow.add(nextPicture);
navigationWindow.openWindow(galleryWindow, {
		animation: true
	});
	
galleryWindow.add(galleryView);

navigationWindow.open();
