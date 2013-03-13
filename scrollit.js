// Utility
//object.create polyfill for older browsers
	if(typeof Object.create !== 'function'){
		Object.create = function(obj){
			function F() {};
			F.prototype = obj;
			return new F();
		};
	}

(function($, Window, Document, undefined){
	

	var ScrollIt = {
		init:function(options, elem){
			var self = this;
			self.elem = elem;
			self.$elem = $(elem);

			// check if options is string
			if(typeof options == 'string'){
				//string was passed
				self.targetElem = $(options);
				self.target = $(options).posiiton();
			}else{
				//object was passed
				self.target = $(options).offset;
				$.extend({}, $.fn.scrollIt.options, options)
			}
			self.listen();
		},

		listen: function(){
			//cache this variable to encsure accessibility 
			var self = this;

			//listen for click on all elements with the data-scrollit='true' attribute
			$("[data-scrollit='true']").click(function(e){
				e.preventDefault();
				//check if element has href property
				if($(this).prop('href') !== null || $(this).prop('href') !== ''){
					var id=$(this).attr('href');
					self.TargetElem = $(id);
					self.target = $(id).position();
				}
				else if($(this).attr('data-scrollit-id') == null || $(this).attr('data-scrollit-id') == ''){

				}
				self.evaluate();
			}); 
		},

		evaluate: function(){
			//cache this variable to encsure accessibility 
			var temp;

			//set direction and distance to defaults
			//temp = this.$elem.prop('scrollTop') + Math.abs(this.target.top);
			temp = Math.abs(this.target.top);
			//console.log('temp = '+ this.$elem.prop('scrollTop') + '+ '+ Math.abs(this.target.top)+' =' + temp);
			this.direction = 'up';

			//check if direction and distance need to be adjusted
			if(this.target.top < 0){
				//if direction and distance need to be adjusted 
				//direction is opposite and diatance is equal to top offset
				//temp = Math.abs(this.target.top);
				this.direction = 'down';
			}
			this.distanceY = Math.abs(temp);
			//set step diatance using 60 fps
			//this.step = Math.abs(temp /($.fn.scrollIt.options.duration/(1000/60)));
			this.step = this.distanceY /($.fn.scrollIt.options.duration/16);

			console.log(this);
			if(this.distanceY != 0){
				this.scroll();
			}
		},

		scroll: function(){
			//cache this variable to encsure accessibility 
			var self = this;

			//get current position
			pos = self.$elem.prop('scrollTop');
			if( self.distanceY > 0){
				switch(this.direction){
					case 'down':
						pos = pos - this.step;
						break;
					case 'up':
						pos = pos + this.step;
						break;
				}
				
				self.$elem.prop('scrollTop', pos);
				this.distanceY = this.distanceY - this.step;
				setTimeout(function(){
					self.scroll()
				}, 1000/60);
			}
			else{
				self.TargetElem[0].scrollIntoView (true);
			}
		}
	}

	$.fn.scrollIt = function(options){
		return this.each(function(){
			var scroll = Object.create(ScrollIt);
			scroll.init(options, this);
		});
	}
	$.fn.scrollIt.options = {
		duration: 400
	};
}) (jQuery, window, document);