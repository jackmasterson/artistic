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
		}
	]
};

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

		$(this.jHeadClass).slideUp(function() {
			
			$(that.jClass).animate({
				opacity: 1
			});
			$(that.jClass).show();
		})
		
	},

	nameShow: function() {

	},

	nameHide: function() {

	}

}

ko.applyBindings(viewModel.init());