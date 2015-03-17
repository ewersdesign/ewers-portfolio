module.exports = function (grunt) {

	grunt.initConfig({
	  concat: {
	    options: {
	      stripBanners: true,
	      banner: ' ',
	    },
	    js: {
	      src: [ 'js/wow.min.js', 'js/jquery.waypoints.min.js', 'js/inview.min.js', 'js/parallax.js', 'js/jquery.mixitup.min.js', 'js/content-filter.js', 'js/modernizr.custom.js', 'js/main.js'],
	      dest: 'build/js/scripts.js',
	    },
	    css: {
	      src: ['css/animate.min.css', 'css/hover-min.css', 'css/normalize.css', 'scss/style.css'],
	      dest: 'build/css/styles.css',
	    },
	  },

	  uglify: {
	    js: {
	      files: {
	        'js/scripts.min.js': ['build/js/scripts.js']
	      }
	    }
	  },

	  cssmin: {
		  target: {
		    files: {
		      'css/styles.min.css': ['build/css/styles.css']
		    }
		  }
		},

	watch: {
	  options: {
       		livereload: 9000,
       		interval: 5007
        },
	  js: {
	    files: ['js/main.js'],
	    tasks: ['concat', 'uglify'],
	  },
	  scss: {
	    files: ['scss/style.css'],
	    tasks: ['concat', 'cssmin'],
	  },
	},
		express:{
			all:{
				options:{
					port:9000,
					hostname:'localhost',
					bases:['.'],
					livereload: true
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-express');

	grunt.registerTask('default', ["concat", "uglify", "cssmin", "express", "watch"]);
	grunt.registerTask('server', ["express", "watch"]);

};