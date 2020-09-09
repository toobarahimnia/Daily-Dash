/* =================================

CS50x project
All Rights Reserved © 2020 Tooba Rahimnia

================================= */


let currentVersion = '2.0';


/* =================================
				get the name
================================= */
var userName = localStorage.getItem('receivedName');

if (userName == null) {
	userName ="friend";
}

// ask for user's name
function saveName() {

  localStorage.setItem('receivedName', userName);
}

function changeName() {


  var inputName = document.getElementById("name-input").value;

	if (inputName === "") {
		alert("No name? I doubt it, try again :) ");
	} else {
		userName = inputName;
		document.getElementById("name").innerHTML = userName;
	}
  saveName();

  document.getElementById("name-input").value = "";

  getGreeting();
}

document.getElementById("name-form").addEventListener('submit', function(e) {
	e.preventDefault();

	changeName();

});

function getName() {
	userName = localStorage.getItem('receivedName');
};

getName();


/* =================================
		Greeting based on name
================================= */
function getGreeting() {

// greeting based on thetime of the day
  var welcome;
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  if (minute < 10) {
      minute = "0" + minute;
  }
  if (second < 10) {
      second = "0" + second;
  }
  if (hour < 12) {
      welcome = "Good morning,";
  } else if (hour < 17) {
      welcome = "Good afternoon,";
  } else {
      welcome = "Good evening,";
  }
  document.getElementById("greeting").innerHTML  = `${welcome}`;
}

getGreeting();

function getName() {
	document.getElementById("name").innerHTML = `${userName} `;
}

getName();



/* =================================
	          compliment
================================= */
var msgArr = new Array();
msgArr[0] = "\"When I look at the sun, I'm reminded of your future because it's so bright that it's literally blinding me.\"";
msgArr[1] = "\"Nothing in life is guaranteed, except death, taxes, and my unending appreciation for you.\"";
msgArr[2] = "\"If you were an animal, I think you'd be a jellyfish, because you're adorable, elegant, and fierce all at the same time.\""
msgArr[3] = "\"Only two things make me cry: your beautiful soul, and the first 10 minutes of Up.\"";
msgArr[4] = "It's hard to come up with so many compliments for the other people who downloaded me, but not for you cause you're special.";
msgArr[5] = "\"Do you have any idea how beautiful you are? It's, like, a little alarming.\"";
msgArr[6] = "\"I don't think I could assign you a Hogwarts house because you're just too amazingly complex to be put in a box like that.\"";
msgArr[7] = "\"Your personality sparkles like a fine sparkling water, without the gross aftertaste.\"";
msgArr[8] = "\"Nothing in life is as beautiful as your soul, except your hair, your eyes, and our friendship.\"";
msgArr[9] = "\"You know what I love about you? Literally everything.\"";
msgArr[10] = "You have impeccable taste. This is me saying, thank you for downloading this extension.";
msgArr[11] = "\"You and I are a country-pop song, because my appreciation for you is both cheesy and embarrassingly addictive.\"";
msgArr[12] = "\"Be the Beyoncé of your own life today.\"";
msgArr[13] = "\"You're attractive, funny, and you smell good. Not that I'm standing right behind you right now or anything. I just know.\"";
msgArr[14] = "\"I thought all the love songs were about grilled cheese, until I met you.\"";
msgArr[15] = "\"Do you have any idea how beautiful you are? It's, like, a little alarming.\"";
msgArr[16] = "\"If you were a Halloween candy, you'd be a king-sized chocolate bar, because you're worth a lot and you delight small children with your presence.\"";
msgArr[17] = "\"When you make up your mind, nothing stands in your way.\"";
msgArr[18] = "\"That thing you don't like about yourself is what makes you really interesting.\"";
msgArr[19] = "\"Your inside is even more beautiful than your outside.\"";
msgArr[20] = "\"You're always learning new things and trying to better yourself. That's awesome.\"";
msgArr[21] = "\"Everyone gets knocked down sometimes; only people like you get back up again and keep going.\"";
msgArr[22] = "\"Actions speak louder than words, and yours tell an incredible story.\"";
msgArr[23] = "\"Everything would be better if more people were like you.\"";
msgArr[24] = "\"When you're not afraid to be yourself, that's when you're incredible.\"";
msgArr[25] = "\"You're even better than a unicorn because you're real.\"";


window.onload = function () {
   document.getElementById("msgDiv").innerHTML = msgArr[Math.floor(Math.random()*msgArr.length)];
}


/* =================================
	Open Settings Menu
================================= */

function openSettings() {
	document.getElementById("settings-wheel").classList.toggle("settings-open");
	document.getElementById("settings").classList.toggle("settings-open");
	// dismissNotification();
}

document.getElementById("settings-wheel").addEventListener('click', function() {
	openSettings();
})


/* =================================
	   Theme Settings
================================= */
var userTheme = localStorage.getItem('receivedTheme');

if (localStorage.getItem('receivedTheme') == null) {
	userTheme = "library";
}

function saveTheme() {
	localStorage.setItem('receivedTheme', userTheme);
}

function changeTheme() {
	var formElement = document.getElementById("select-theme");
	let data = new FormData(formElement);

	let newTheme = data.get("theme");

	if (newTheme != null) {
		userTheme = newTheme;
		saveTheme();
	}

	document.body.className = userTheme;
	setBackground();
}

let selectedThemeInput = document.querySelector(`[value='${userTheme}']`);
if (selectedThemeInput) {
	selectedThemeInput.checked = true;
}

changeTheme()

document.getElementById("select-theme").addEventListener('change', function() {
    changeTheme();
});



/* ====================================
	  If the background is Customed
======================================= */
var customURL = localStorage.getItem('receivedURL');

document.getElementById("url-input").value = customURL;

function setBackground() {
	if (customURL == "" || customURL == null) {
		document.getElementById("html").style.backgroundImage = "url(img/" + userTheme + ".jpg)";
		document.getElementById("resetBtn").className = "nameBtn resetBtn";
	} else {
		document.getElementById("html").style.backgroundImage = "url(" + customURL + ")";
		document.getElementById("resetBtn").className += " visible";
	}
}

setBackground();

function saveBackground() {
	localStorage.setItem('receivedURL', customURL);
}

function customBackground() {
	customURL = document.getElementById("url-input").value;

	setBackground();

	saveBackground();
}

document.getElementById("background-image-url").addEventListener('submit', function() {
    customBackground();
});



/* =================================
	    Custom Reset Button
================================= */

document.getElementById("resetBtn").addEventListener('click', function() {
	document.getElementById("url-input").value = "";
	customBackground();
});



/* =================================
	        Time
================================= */
function getDateTime() {
		var dt = new Date();
		document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+
		(("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+
		(("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
}

getDateTime();


/* ===========================
	      To Do List
============================== */

// save any changes made already
function saveState() {
	localStorage.setItem('toDoState', document.getElementById("ul-task-list").innerHTML);
}


//checkmark and delete
document.getElementById("ul-task-list").addEventListener('click', function(e) {
	if (e.target.className == "close") {
		var listItem = e.target.parentElement;
		document.getElementById("ul-task-list").removeChild(listItem);

	} else if (e.target.tagName === 'LI') {
		e.target.classList.toggle('checked');
	}
	saveState();

}, false);

// Add New List Item (works with enter button)

function newElement() {
	var inputValue = document.getElementById("myInput").value;

	if (inputValue === "") {
		alert("Give me something to add! I can't work with an empty item.");
	} else {
		document.getElementById("ul-task-list").innerHTML += '<li>' + inputValue
		+ '<span class="close">×</span></li>';
	}

    document.getElementById("myInput").value = "";

	saveState();

}

document.getElementById("input-and-add-form").addEventListener('submit', function() {
    newElement();
});


