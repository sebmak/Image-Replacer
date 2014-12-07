# jQuery Image Replacer

##Description

Replaces images at defined breakpoints. A great way to add responsive loaded images to your site. Its small, ~600Bytes minified, and a little flexible flexible.

##Usage

###Set your HTML
```html

<img src="/path/to/image.jpg" data-xl="/path/to/xl/image.jpg" data-lg="/path/to/lg/image.jpg" data-md="/path/to/md/image.jpg" /> 

```

###Activate Plugin
```javascript

	$(window).imageReplacer();

```

###Customize Breakpoints (optional)
```javascript

	$(window).imageReplacer(
		{
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
		}
	)

```

##Further Usage

###Run On Load

Run the javascript on load to detect if already at a smaller size. Default = ``` true ```

```javascript

	$(window).imageResizer({onload:true})

```

##Let Me Know

Let me know if there are any bugs. I built this in just under 20 minutes so I have not thuroughly tested it. I will be very happy to fix any bugs you have :) [Email Me](mailto:darthnoob@gmail.com)