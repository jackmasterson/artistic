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
				"sky"],
			visibility: ko.observable(true)
		},
		{
			name: "Friendship",
			src: "img/friendship.jpg",
			classed: "friendship-portrait",
			headClass: "friendship-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["friend", "friends", "tree", "forest", "hug", "love"],
			visibility: ko.observable(true)
		},		
		{
			name: "Field",
			src: "img/field.jpg",
			classed: "field-portrait",
			headClass: "field-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["field", "colorful", "trees", "scenic", "landscape"],
			visibility: ko.observable(true)
		},		{
			name: "Ship",
			src: "img/ship.jpg",
			classed: "ship-portrait",
			headClass: "ship-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["ship", "sunset", "clouds", "sky"],
			visibility: ko.observable(true)
		},		{
			name: "Flowers",
			src: "img/flowers.jpg",
			classed: "flowers-portrait",
			headClass: "flowers-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["flowers", "plant", "home", "pot"],
			visibility: ko.observable(true)
		},		{
			name: "Stretch",
			src: "img/stretch.jpg",
			classed: "stretch-portrait",
			headClass: "stretch-head",
			height: "150",
			width: "300",
			unit: "px",
			tags: ["stretch", "town", "people", "crowd"],
			visibility: ko.observable(true)
		}
	]
};

viewModel = {

	query: ko.observable(""),

	filter: function() {
		var query = this.query();

		model.paintings.forEach(function(obj){
			var index;
			var tag = obj.tags;
			var domObj = ko.observable(document.getElementsByClassName(obj.classed));
		//	console.log(domObj());
			
			tag.forEach(function(tags){
				
				index = tags.indexOf(query);
				
				if(index > -1){
					
					obj.visibility(true);

				}
				else {
					obj.visibility(false);
				}
				console.log(obj.visibility());
			})
		})
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