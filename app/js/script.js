var model = {
	nav: [
		{
			header: "About Jack"
		},
		{
			header: "Search Paintings"
		},
		{
			header: "Filter"
		},
		{
			header: "Pricing"
		}
	],

	paintings: [
		{
			name: "Self",
			src: "img/self.jpg",
			classed: "self-portrait",
			headClass: "self-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["self", "portrait", "me", "woman", "road", "home", "house", 
				"sky"]
		},
		{
			name: "Friendship",
			src: "img/friendship.jpg",
			classed: "friendship-portrait",
			headClass: "friendship-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["friend", "friends", "tree", "forest", "hug"]
		},		
		{
			name: "Field",
			src: "img/field.jpg",
			classed: "field-portrait",
			headClass: "field-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["field", "colorful", "trees", "scenic", "landscape"]
		},		{
			name: "Ship",
			src: "img/ship.jpg",
			classed: "ship-portrait",
			headClass: "ship-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["ship", "sunset", "clouds", "sky"]
		},		{
			name: "Flowers",
			src: "img/flowers.jpg",
			classed: "flowers-portrait",
			headClass: "flowers-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["flowers", "plant", "home", "pot"]
		},		{
			name: "Stretch",
			src: "img/stretch.jpg",
			classed: "stretch-portrait",
			headClass: "stretch-head",
			height: "150",
			width: "300",
			unit: "px",
			tags: ["stretch", "town", "people", "crowd"]
		}
	]
};

viewModel = {

	query: ko.observable(""),
	
	filter: function() {
		console.log(this.query());
	}
};







var showPaintings = {

	init: function() {
		//console.log(this.classed);
		var that = this;
		this.jClass = "."+this.classed;
		this.jHeadClass = "."+this.headClass;
		//console.log(jClass);

		$(this.jHeadClass).fadeOut(function() {
			
			$(that.jClass).animate({
				opacity: 1
			}, 'fast');
			$(that.jClass).show();
		})
		
	},

	nameShow: function() {

	},

	nameHide: function() {

	}

}

ko.applyBindings(viewModel);