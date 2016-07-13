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
			tags: ["friends", "tree", "forest", "hug", "love"],
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
	closureShow: ko.observableArray(),
	closureHide: ko.observableArray(),

	filter: function() {
        
        Array.prototype.contains = function(searched) {
            for (var r in this) {
                if (this[r] == searched) return true;
            }
            return false;
        };


		var that = this;

		var query = this.query();
		that.show = ko.observableArray();
		that.hide = ko.observableArray();
		that.obj = ko.observableArray();

		model.paintings.forEach(function(obj){

			that.obj.push(obj);
			var tag = obj.tags;
		// works for whole word
		//	console.log(tag.contains(query));

			tag.forEach(function(tags){
				
				var index = tags.indexOf(query);

				if(index > -1){
					
			
					that.show.push(obj);

				}
				else {
					that.hide.push(obj);		
				}
				
			})
		});
		that.filterView();
		that.obj.removeAll();
		that.show.removeAll();

	},

	filterView: function() {
		var that = this;
	//	console.log(this.show(), 'show');
	//	console.log(this.hide(), 'hide');
	//	console.log(that.obj());
		this.obj().forEach(function(obj){
	//		console.log(show);
	//		console.log(that.obj().contains(show));
			//console.log(that.obj().contains(show));
		//	console.log(show);
		//	console.log(that.obj().contains(show));
			if(that.show().contains(obj)){
				console.log(obj);
				obj.visibility(true);
			}
			else {
				obj.visibility(false);
			}
	//		console.log(that.obj().contains(show));
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