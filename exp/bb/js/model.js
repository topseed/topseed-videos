var Book = Backbone.Model.extend({
	defaults: {
		ID: "",
		BookName: ""
	},

	idAttribute: "ID"
});

var BooksCollection = Backbone.Collection.extend({
	model: Book
});