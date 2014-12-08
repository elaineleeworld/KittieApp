angular
	.module("kittyApp")
	.controller("KittiesController", KittiesControllerFunc);

	function KittiesControllerFunc (){

	this.kittyList = 
			[
		{
			catName: 'Karl',
			monthsOld: 5,
			gender: 'boy',
			image: "images/carl.png",
			adopted: true,
		},
		{
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "images/jack.png",
			adopted: false
		},
		{
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "images/oscar.png",
			adopted: false
		},
		{
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "images/princessmew.png",
			adopted: false
		}

		]
	}

	this.adoptedKitty = adoptedKitty;
	this.remainingKitty = remainingKitty;

	function adoptedKitty(){
			return this.kittyList.filter(function(x) {return x.adopted === false;})
		}

	function remainingKitty(){
		return this.kittyList.filter(function(x) {return x.adopted === true;})
	}