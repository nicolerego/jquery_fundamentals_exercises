// Exercises: The DOM

// EXERCISE: The Logo Hijack
var logo = document.querySelectorAll('#hplogo img')[0];
logo.src = "https://s.yimg.com/rz/l/yahoo_en-US_f_p_142x37_2x.png";

var searchButton = document.querySelectorAll('.gbqfba #gbqfsa')[0];
searchButton.innerHTML = "Yahooo!"

// EXERCISE: About Me
var body = document.getElementsByTagName('body')[0];
body.style.fontFamily =  "Arial, sans-serif";

var nickname = document.getElementById("nickname");
nickname.innerHTML = "Nikki";
var favorites = document.getElementById("favorites");
favorites.innerHTML = "Nutella";
var hometown = document.getElementById("hometown");
hometown.innerHTML = "Etobicoke";

var listItems = document.getElementsByTagName('li');
for (var i =0; i < listItems.length; i++) {
  var listItem = listItems[i];
  listItem.className = "listItem"
}

var photo = document.createElement('img');
photo.src = "https://avatars3.githubusercontent.com/u/8106303?v=3&s=160";
body.appendChild(photo);


// EXERCISE: The Book List
for (var count = 0; count < books.length; count++) {
	var book = books[count];
	var body = document.getElementsByTagName('body')[0];
	var paragraph = document.createElement('p');
	var paragraphText = document.createTextNode(book.title + " by " + book.author);
	paragraph.appendChild(paragraphText);
	body.appendChild(paragraph);
	}

// BONUS
var body = document.getElementsByTagName('body')[0];
var ul = document.createElement('ul');
body.appendChild(ul);

for (var count = 0; count < books.length; count++) {
	var book = books[count];
	var li = document.createElement('li');
	var liText = document.createTextNode(book.title + " by " + book.author + " ");
	li.appendChild(liText);
	ul.appendChild(li);
	var image = document.createElement('img');
	image.src = book.photo
	li.appendChild(image);

	image.style.height = "100px";
	
	if (book.alreadyRead === true) {
		image.style.opacity = 0.1
	};
}