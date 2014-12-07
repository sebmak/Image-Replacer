(function( $ ) {

	determineRange = function(width,opts){
		var range = opts.default;
		for(var key in opts){
			if(typeof opts[key].min !== 'undefined' && opts[key].min < width){
				if(typeof opts[key].max !== 'undefined' && opts[key].max >= width){
					return key;
				}
			} else if (typeof opts[key].max !== 'undefined' && opts[key].max >= width){
				range = key;
			}
		}
		return range;
	}

    $.fn.imageReplacer = function( options ) {
 		
    	var opts = $.extend( {}, $.fn.imageReplacer.defaults, options );

		var activeType = opts.default;

    	$(this).on('resize',function(){
    		var width = $(this).width();

    		var range = determineRange(width,opts);

    		if(activeType !== range){
    			activeType = range;
    			$('img').each(function(){
    				var data = $(this).data(activeType);
    				if(typeof data !== 'undefined'){
    					$(this).attr('src',data);
    				}
    			})
    		}
    	})
    };

    $.fn.imageReplacer.defaults = {
	    xl: {
	    	min:1600
	    },
	    lg: {
	    	min:1024,
	    	max:1599
	    },
	    md: {
	    	min: 800,
	    	max: 1023
	    },
	    sm: {
	    	max: 799
	    },
	    default: 'xl'
	};
 
}( jQuery ));