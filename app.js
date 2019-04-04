(function($) {

	var app = $.sammy('#app', function() {
		this.use('Template');

		this.around(function(callback) {
			var context = this;
			this.load('data/articles.json')
					.then(function(items) {
						context.items = items;
					})
					.then(callback);
		});

		this.get('#/', function(context) {
			context.app.swap('');
			$.each(this.items, function(i, item) {
				context.render('templates/article.template', {id: i, item: item})
							 .appendTo(context.$element());
			});
		});
		
		//OLD SECTION, example from download
		/*
		this.get('#/about/', function(context) {
				var str=location.href.toLowerCase();
				context.app.swap('');
				context.render('templates/about.template', {})
							 .appendTo(context.$element());
		});
		*/

		//HERE IS THE NEW SECTION
		this.get('#/registrar/', function(context) {
				var str=location.href.toLowerCase();
				context.app.swap('');
				context.render('templates/registrar.template', {})
							 .appendTo(context.$element());
		});
		this.get('#/calendar/', function(context) {
				context.app.swap('');
				context.render('templates/calendar.template', {})
							 .appendTo(context.$element());
		});
		this.get('#/step1-when/', function(context) {
				context.app.swap('');
				context.render('templates/step1-when.template', {})
							 .appendTo(context.$element());
		});
		this.get('#/step2-concentrations/', function(context) {
				context.app.swap('');
				context.render('templates/step2-concentrations.template', {})
							 .appendTo(context.$element());
		});
		this.get('#/step3/', function(context) {
				context.app.swap('');
				context.render('templates/step3.template', {})
							 .appendTo(context.$element());
		});

		this.get('#/article/:id', function(context) {
			this.item = this.items[this.params['id']];
			if (!this.item) { return this.notFound(); }
			this.partial('templates/article-detail.template');
		});


		this.before('.*', function() {

				var hash = document.location.hash;
				$("nav").find("a").removeClass("current");
				$("nav").find("a[href='"+hash+"']").addClass("current");
	 });

	});

	$(function() {
		app.run('#/registrar/');
	});

})(jQuery);