var model = {

	paintings: [
		{
			name: "Self",
			src: "img/self.jpg",
			classed: "self-portrait",
			headClass: "self-head"
		},
		{
			name: "Friendship",
			src: "img/friendship.jpg",
			classed: "friendship-portrait",
			headClass: "friendship-head"
		},		
		{
			name: "Field",
			src: "img/field.jpg",
			classed: "field-portrait",
			headClass: "field-head"
		},		{
			name: "Ship",
			src: "img/ship.jpg",
			classed: "ship-portrait",
			headClass: "ship-head"
		},		{
			name: "Flowers",
			src: "img/flowers.jpg",
			classed: "flowers-portrait",
			headClass: "flowers-head"
		},		{
			name: "Stretch",
			src: "img/stretch.jpg",
			classed: "stretch-portrait",
			headClass: "stretch-head"
		}
	]
};

//for width of pictures/shades, do it as a vw of the number of paintings that
//there are total; make it an array, then do array.length/x;

//ORRRRR do it by dimensions; assign a height and length to each item in the
//model when you give it a class/name/etc, and divide it by that
var viewModel = {

	init: function() {

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

ko.applyBindings(viewModel.init());