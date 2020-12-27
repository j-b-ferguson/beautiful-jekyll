$(document).ready(function(){
	typeWords();
});

var pro = new String("Proficient in ");
var fam = new String("Familiar with ");
var kno = new String("Knowledgeable in ");

var proN = pro.style.fontWeight="300";
var famN = fam.style.fontWeight="300";
var knoN = kno.style.fontWeight="300";

function typeWords() {
	new Typed(".typedC", {
		/**
		* @property {array} strings strings to be typed
		* @property {string} stringsElement ID of element containing string children
		*/
		
		strings: [proN.fontcolor( "black" ) + "R/RStudio".style.fontWeight="700", 
			  proN.fontcolor( "black" ) + "SAS".style.fontWeight="700", 
			  proN.fontcolor( "black" ) + "SQL".style.fontWeight="700", 
			  proN.fontcolor( "black" ) + "Excel".style.fontWeight="700",
			  famN.fontcolor( "black" ) + "Python".style.fontWeight="700",
			  famN.fontcolor( "black" ) + "HTML5".style.fontWeight="700",
			  famN.fontcolor( "black" ) + "CSS".style.fontWeight="700",
			  famN.fontcolor( "black" ) + "JavaScript".style.fontWeight="700",
			  famN.fontcolor( "black" ) + "Git/GitHub".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Mathematics and Science".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Mathematical Modelling".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Statistical Testing".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Statistical Methods".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Machine Learning".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Tidy Data Principles".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Data Cleaning".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Data Visualisation".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Data Analysis".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Data Management".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "SQL Queries".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "The Relational Model".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Relational Databases".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "ER Modelling".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "UML".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Excel Pivot Tables".style.fontWeight="700",
			  knoN.fontcolor( "black" ) + "Excel Pivot Charts".style.fontWeight="700"
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
