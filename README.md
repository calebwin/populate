# populate-js
populate.js  is simple JavaScript library that lets you easily populating HTML lists. All you have to do is provide the data for the list and the general structure of each list item. Then you can simply call the populate function and your list will be populated with the data recycling elements already in the list and generating new ones only if necessary.

## How to use it
To get a good idea of how populate.js works, let's start with a simple list in html
```
<ul id="list">
  <!-- Leave this blank so we can dynamically populate it --->
</ul>
```
Let say we want to fill our list with some fruits. To call the populate function as shown below we need two paramaters.
```
var list = document.getElementById("list");
list.populate(fruits, fruitItemStructure);
```
Namely an array of our fruits and an array that represents the general structure of each list item. Here's the array of fruits.
```
var fruits = [
	{ name : "Apple", calories : 95 },
  { name : "Banana", calories : 105 },
  { name : "Orange", calories : 45 }
];
```
Each element in our array of fruits is an object. Each object represents the data that will be needed for each list item. Next we need an array that represents the general structure of each list item.
```
var fruitItemStructure = [
	{tag:"h3", properties : [{attr : "class", val : "header"}], val : "name"},
	{tag:"h4", properties : [{attr : "class", val : "subheader"}], val : "calories"}
];
```
Each item in the list will contain some HTML elements that need to be created. This array provides the general structure of the HTML elements in each list item. Each object in this array represents an HTML element to be created. In the case of our list of fruits, we only need 2 HTML elements - one for the name of the fruit and the other for its calorie count. Each object has 3 properties -
1. `tag` - The tag of the HTML element
2. `properties` - An array of the properties of the tag (e.g. - id, class, width, height, href); each of the objects in this array have 2 properties - `attr` - the attribute of the HTML element and `val` - the value of the attribute of the HTML element
3. val - The text to be attatched to the HTML element; empty if you don't want any text

And lastly - all you have to do is call the populate function!
```
var list = document.getElementById("list");
list.populate(fruits, fruitItemStructure);
```
So putting all of that together, here's the full code sample -
```
var list = document.getElementById("list");
var fruits = [
	{ name : "Apple", calories : 95 },
  { name : "Banana", calories : 105 },
  { name : "Orange", calories : 45 }
];
var tropicalFruits = [
	{ name : "Pineapple", calories : 452 },
  { name : "Mango", calories : 201 }
];
var fruitItemStructure = [
	{tag:"h3", properties : [{attr : "class", val : "header"}], val : "name"},
	{tag:"h4", properties : [{attr : "class", val : "header"}], val : "calories"}
];
list.populate(fruits, fruitItemStructure);
list.populate(tropicalFruits, fruitItemStructure);
```
I have 2 data-sets to demonstrate the behind-the-scenes element recycling that takes place.

Feel free to use this for non-commercial or commercial use with or without credit. I am continuing to develop and optimize populate.js and hope to increase its efficiancy and usefulness.
