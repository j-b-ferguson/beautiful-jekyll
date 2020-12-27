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
		
		strings: [pro.fontcolor( "black" ) + "R/RStudio".bold(), 
			  pro.fontcolor( "black" ) + "SAS".bold(), 
			  pro.fontcolor( "black" ) + "SQL".bold(), 
			  pro.fontcolor( "black" ) + "Excel".bold(),
			  fam.fontcolor( "black" ) + "Python".bold(),
			  fam.fontcolor( "black" ) + "HTML5".bold(),
			  fam.fontcolor( "black" ) + "CSS".bold(),
			  fam.fontcolor( "black" ) + "JavaScript".bold(),
			  fam.fontcolor( "black" ) + "Git/GitHub".bold(),
			  kno.fontcolor( "black" ) + "Mathematics and Science".bold(),
			  kno.fontcolor( "black" ) + "Mathematical Modelling".bold(),
			  kno.fontcolor( "black" ) + "Statistical Testing".bold(),
			  kno.fontcolor( "black" ) + "Statistical Methods".bold(),
			  kno.fontcolor( "black" ) + "Machine Learning".bold(),
			  kno.fontcolor( "black" ) + "Tidy Data Principles".bold(),
			  kno.fontcolor( "black" ) + "Data Cleaning".bold(),
			  kno.fontcolor( "black" ) + "Data Visualisation".bold(),
			  kno.fontcolor( "black" ) + "Data Analysis".bold(),
			  kno.fontcolor( "black" ) + "Data Management".bold(),
			  kno.fontcolor( "black" ) + "SQL Queries".bold(),
			  kno.fontcolor( "black" ) + "The Relational Model".bold(),
			  kno.fontcolor( "black" ) + "Relational Databases".bold(),
			  kno.fontcolor( "black" ) + "ER Modelling".bold(),
			  kno.fontcolor( "black" ) + "UML".bold(),
			  kno.fontcolor( "black" ) + "Excel Pivot Tables".bold(),
			  kno.fontcolor( "black" ) + "Excel Pivot Charts".bold()
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
