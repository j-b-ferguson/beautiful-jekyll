$(document).ready(function(){
	typeWords();
});

var pro = new String("Proficient in ");
var fam = new String("Familiar with ");
var kno = new String("Knowledgeable in ");

function typeWords() {
	new Typed(".typedC", {
		/**
		* @property {array} strings strings to be typed
		* @property {string} stringsElement ID of element containing string children
		*/
		
		strings: [pro.fontcolor( "black" ) + "<span style='font-weight:900;'>R/RStudio</span>",
			  pro.fontcolor( "black" ) + "<span style='font-weight:900;'>RShiny</span>",
			  pro.fontcolor( "black" ) + "<span style='font-weight:900;'>RMarkdown</span>",
			  pro.fontcolor( "black" ) + "<span style='font-weight:900;'>SAS</span>", 
			  pro.fontcolor( "black" ) + "<span style='font-weight:900;'>SQL</span>", 
			  pro.fontcolor( "black" ) + "<span style='font-weight:900;'>Excel</span>",
			  fam.fontcolor( "black" ) + "<span style='font-weight:900;'>Python</span>",
			  fam.fontcolor( "black" ) + "<span style='font-weight:900;'>HTML5</span>",
			  fam.fontcolor( "black" ) + "<span style='font-weight:900;'>CSS</span>",
			  fam.fontcolor( "black" ) + "<span style='font-weight:900;'>JavaScript</span>",
			  fam.fontcolor( "black" ) + "<span style='font-weight:900;'>Git/GitHub</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Mathematics and Science</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Mathematical Modelling</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Statistical Testing</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Statistical Methods</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Regression Models</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Machine Learning</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Predictive Analytics</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Tidy Data Principles</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Data Cleaning</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Data Visualisation</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Data Analysis</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Data Management</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>ETL</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>SQL Queries</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Database Design</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Relational Databases</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>ER Modelling</span></span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Pivot Tables</span>",
			  kno.fontcolor( "black" ) + "<span style='font-weight:900;'>Pivot Charts</span>"
			 ],
		stringsElement: null,

		/**
		* @property {number} typeSpeed type speed in milliseconds
		*/
		typeSpeed: 100,

		/**
		* @property {number} startDelay time before typing starts in milliseconds
		*/
		startDelay: 0,

		/**
		* @property {number} backSpeed backspacing speed in milliseconds
		*/
		backSpeed: 0,

		/**
		* @property {boolean} smartBackspace only backspace what doesn't match the previous string
		*/
		smartBackspace: true,

		/**
		* @property {boolean} shuffle shuffle the strings
		*/
		shuffle: false,

		/**
		* @property {number} backDelay time before backspacing in milliseconds
		*/
		backDelay: 1000,

		/**
		* @property {boolean} fadeOut Fade out instead of backspace
		* @property {string} fadeOutClass css class for fade animation
		* @property {boolean} fadeOutDelay Fade out delay in milliseconds
		*/
		fadeOut: false,
		fadeOutClass: 'typed-fade-out',
		fadeOutDelay: 500,

		/**
		* @property {boolean} loop loop strings
		* @property {number} loopCount amount of loops
		*/
		loop: true,
		loopCount: Infinity,

		/**
		* @property {boolean} showCursor show cursor
		* @property {string} cursorChar character for cursor
		* @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
		*/
		showCursor: true,
		cursorChar: '|',
		autoInsertCss: true,

		/**
		* @property {string} attr attribute for typing
		* Ex: input placeholder, value, or just HTML text
		*/
		attr: null,

		/**
		* @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
		*/
		bindInputFocusEvents: false,

		/**
		* @property {string} contentType 'html' or 'null' for plaintext
		*/
		contentType: 'html',

		/**
		* All typing is complete
		* @param {Typed} self
		*/
		onComplete: (self) => {},

		/**
		* Before each string is typed
		* @param {number} arrayPos
		* @param {Typed} self
		*/
		preStringTyped: (arrayPos, self) => {},

		/**
		* After each string is typed
		* @param {number} arrayPos
		* @param {Typed} self
		*/
		onStringTyped: (arrayPos, self) => {},

		/**
		* During looping, after last string is typed
		* @param {Typed} self
		*/
		onLastStringBackspaced: (self) => {},

		/**
		* Typing has been stopped
		* @param {number} arrayPos
		* @param {Typed} self
		*/
		onTypingPaused: (arrayPos, self) => {},

		/**
		* Typing has been started after being stopped
		* @param {number} arrayPos
		* @param {Typed} self
		*/
		onTypingResumed: (arrayPos, self) => {},

		/**
		* After reset
		* @param {Typed} self
		*/
		onReset: (self) => {},

		/**
		* After stop
		* @param {number} arrayPos
		* @param {Typed} self
		*/
		onStop: (arrayPos, self) => {},

		/**
		* After start
		* @param {number} arrayPos
		* @param {Typed} self
		*/
		onStart: (arrayPos, self) => {},

		/**
		* After destroy
		* @param {Typed} self
		*/
		onDestroy: (self) => {}
	});
}

$( "span:contains('Proficient')").css( "text-decoration", "underline" );	
