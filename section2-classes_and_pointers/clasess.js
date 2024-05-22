// class Cookie{
// 	constructor(color){
// 		this.color=color
// 	};
// };

// let cookieOne = new Cookie("green")


class Cookie{
	constructor(color){
		this.color=color
	};

	//getter 
	getColor(){
		return this.color
	}

	//setter
	// setColor(color){
	// 	this.color=color
	// }

	setColor(color){
		this.color= color
		return this.color;
	}


};

let CookieOne = new Cookie("green")

let getcolour=CookieOne.getColor()
// CookieOne.setColor("yellow") // No need to assign this to newColor
let newColour = CookieOne.setColor("purple");

// Outputs "yellow"

console.log(getcolour) // Outputs "green"
// console.log(CookieOne.getColor())  // Outputs "yellow"

console.log(newColour)