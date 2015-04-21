//$(function()	//shorthand for $(document).ready(
var AutoObessesions = {};

function garageDoor()
{
	backgroundY -= speed;
	if(backgroundY == -1 * height)
	{
		backgroundY = -1000;
	}
}
function update(deltaTime)
{
    garageDoor();	//should splash update
	//Order of draws matters
	//this isn't needed, set the background in css of the div element being displayed
    context.drawImage(backgroundImage, 0,-10);
    context.drawImage(splashImage, 0, backgroundY);
    timer++;
}
Auction.setup = function()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	if(!auctionStop) 
	{
		requestAnimFrame(Auction.setup);
		
		//if(appState == GAME_MODE.AUCTION)
		//{
			update();
			Auction.update();
		//}
		//timer++;
		//ticker++;
	}
}
function auctionMode(deltaTime)
{	//in-Auction update, core of game logic
   //context.clearRect(0, 0, canvas.width, canvas.height);
   //auctionStop = false;
   //appState = GAME_MODE.AUCTION;
   ticker = 0;
   stop = true;
 
   //playerBid = 0;
   //Auction.endAuction();
   Auction.setup();//auctionInit();
  
   //shuffleArray(enemyBids);
   //shuffleArray(bidders);
   //shuffleArray(enemyCaps);
  // shuffleArray(vehiclePrice);
 
   //context.font = '26px arial, sans-serif';  
      	
	//if(appState == GAME_MODE.AUCTION)
	//{
	//	console.log("Snap, crackle , pop");
		
	//}
	//else
	//{
		//auctionStop = true;
		//appState = GAME_MODE.RUNNING;
		
		//resetStates();
	//}  	 
  
   //auctionMode.update = function() 
  // {
    	//Auction.playerBidding();
     	//console.log(endGame);
   //}
  
  //$('#Auction').show();
  //$('#menu').removeClass('gameMenu');
  //$('#menu').addClass('Auction');
  //$('.sound').show();

  //assetLoader.sounds.gameOver.pause();
  //assetLoader.sounds.going.pause();
  //assetLoader.sounds.sold.pause();
  //assetLoader.sounds.bg.currentTime = 0;
  //assetLoader.sounds.bg.loop = true;
  //assetLoader.sounds.bg.play();
}

function createReader()
{
	if(window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
		  
	if(xmlhttp)
	{
		
	}
	else
	{	//open warning page, error loading data
	  window.open("/pdf/2014Schedule.pdf", "_blank");
	}
	
	return xmlhttp;
}

function openDoc(url, reader)
{	//parse xml document in xml DOM object
	reader.open("GET",url,false);
	reader.send();
	var doc=reader.responseXML;	//access DOM object tree
  
	return doc;
}
//executed after the html document is processed
$(document).ready(function()
{
	Storage.local.clear();
	function init()
	{
	  if (!stop) 
	  {
	    requestAnimFrame(init);
	  
	  	update();
	  	
	    if((timer >= 300.00) && (timer <= 900.00))
		{
			appState = GAME_MODE.MAIN_MENU;
		  	mainMenu();
		  
		}  
		timer++;
	    ticker++;
	  }
	
	}

function loadCars(doc){
	//carNodes = doc.getElementsByTagName('Vehicle');
	//carsLength = carNodes.length;
	//for(var i = 0; i < carsLength; i++){
		//var item = carNodes.item(i);
		//item.getAttribute("name"); 
		//create new car
	//}
	//use jquery?
	var list = doc.childNodes;
	var node = list[0];	//acessing nodes work
//	var v = node.item(i);
	//var cn = node.childNodes;
	var atrs = node.attributes;
	//TODO:accessing attribute elements breaks...
	
//	var parts = node.getElementById('upgrades');
//	var name = atrs.getNamedItem('name');
//	var n = node.getAttribute('name');
	//var atrs = node.attributes;
	//var n = node.getAttribute('year');
//	var n = node.getAttribute('make');
	//for(var i = 0; i < list.length; i++){
		//userGarage.append(Vehicle(list[i]) )
//	}
}

function loadXMLDoc(url)
{
	reader = createReader();
	var doc = openDoc(url, reader);
	
	if(typeof doc === 'undefined')
	{
		return false;
	}
	loadCars(doc);
	return true;
}

/*
//LOAD Vehicle XML, this was working, now can't find source file!
var vehiclePath = './vehicles.xml';	//should be the location of file on server

if(loadXMLDoc(vehiclePath) == false)
{	//loading xml resource failed, display warning
	window.open("/pdf/2014Schedule.pdf", "_blank");		//display warning page
}


var vDoc = document.querySelector('link[rel="import"]');	//document Vehicles.html
var vehicles = document.getElementById('Vehicles');
var cn = vehicles.firstChild;
for(var carNode in vehicles.childNodes)
{
	var newCar = Vehicle(car);
	//instantiate js object or retain html node 'car' for read only access
}


function initGarage()
{	//initilize user's garage will available cars,
	//accessed from user.xml, referenced from database vehicle.xml
	//parse user xml
	//get user with ID
	var userNode = getElementById('');
	for(child in userNode)
	{
		var carID = child.getAttributeById('id');
		userGarage.push(VehicleXML.getElementById(carID) );
	}
	return;
}
function addCar(car)
{	//call after user wins auction, adding car to garage and user.xml
	var garage = userNode.getElementById('garage');
	if(node with id exists)
	{
		alert('already own car with id:' + car.id);
	}
	else
	{
		garage.addNode('<ch>' + car.id + '</ch>');
		//commit changes to server
	}
}
*/

//Load the splash screen first
assetLoader.finished = function() 
{
  switchStates();
}	

//app may only exist in one state at a time
function switchStates( GAME_MODE) 
{	 //call various update based on appState
	switch (GAME_MODE) 
	{
		case SPLASH:
			splash();
		break;
		
		case MAIN_MENU:
			mainMenu();
		break;  
		   
		case AUCTION:
			Auction.update();
		break;
		        
		case REPAIR:
			Repair.update();
		break;
		
		case ADD_FUNDS:
			Store.update();
		break;
		
		case TUTORIAL:
			//Tutorial.update();
		break;
		
		case NEW_USER:
			//Register();
			splash();
		break;
		
		case LOGIN_USER:
			//Login.update();
		break;
			
		default:
			RUNNING; 
		// etc...
	}
}

//Show the splash after loading all assets 
function splash() 
{
  init();
  $('#progress').hide();
  $('#splash').removeClass('#Register');
  $('#Register').hide();
   assetLoader.sounds.engine.play();

  $('#splash').show();
  $('.sound').show();  
}

function Register()
{
	stop = true;
	auctionStop = true;
	context.clearRect(0, 0, canvas.width, canvas.height);
	$('#Register').show();
	//$('#RegisterForm').show();

	getMyContact();
	appState = GAME_MODE.NEW_USER;
	if(appState == GAME_MODE.NEW_USER)
	{
		console.log("Register THis");
	
	}	

}
 
//Main Menu  
function mainMenu() 
{ 
  for (var sound in assetLoader.sounds) 
  {
    if (assetLoader.sounds.hasOwnProperty(sound)) 
    {
      assetLoader.sounds[sound].muted = !playSound;
    }
  }
   
  $('#progress').hide();
  $('#splash').hide();
  $('#Register').hide();
  $('#menu').removeClass('#Register');
  $('#main').show();
  $('#menu').addClass('main');
  $('.sound').show();
}

money = 50000;
// Start the game - reset all variables and entities, spawn ground and water.
function startGame() 
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	//$('#game-over').style.display = 'none';
	document.getElementById('game-over').style.display = 'none';
	document.getElementById('gameMenu').style.display = 'true';  
	appState = GAME_MODE.RUNNING;
	player.reset();
	ticker = 0;
	stop = false;
	auctionStop = true;
	
	playerBid = 0;
	
	context.font = '26px arial, sans-serif';
	// Create gradient
	var gradient=context.createLinearGradient(36,40,600,1);
	gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.5","blue");
	gradient.addColorStop("1.0","green");
	// Fill with gradient
	context.fillStyle = gradient;
	appState = GAME_MODE.RUNNING;
	
	switchStates();
	
	if(appState == GAME_MODE.RUNNING)
	{
	console.log("Run , run squirrel");
	
	}	
	
	assetLoader.sounds.gameOver.pause();
	assetLoader.sounds.bg.currentTime = 0;
	assetLoader.sounds.bg.loop = true;
	assetLoader.sounds.bg.play();
}

Auction.endAuction = function()
{
	if(endGame)
    {
    	Auction.sold();    	
    }
    else
	{
	  endGame == false;
	}
}

Auction.sold = function()
{	//enemy wins auction, car goes to them
	//$('.sold').style.display = 'true';
	//document.getElementById('sold').style.display = 'true';
	stop = true;
	auctionStop = true;
	
	//for(var i = 0; i < enemyBids.length; i++)
	//{
		//$('#enemyBid').html(enemyBids[i]);	//write enemy bid to html?
	//}
	jq.Auction.menu.hide();
	//jq.Auction.menu.children().hide();
	$('#sold').show();
	//disable user from entering an auction for this car again
	
	//in case of unintended bugs, make sure user doesn't already own car
	if(playerWon && Auction._car !== null)
	{
		var hasCar = false;
		
		for(var i = 0; i < userGarage.length; i++)
		{
			if(Auction._car.name/*id*/ == userGarage[i].name/*id*/)
			{
				hasCar = true;
				break;
			}
		}
		if(!hasCar){
			userGarage.push(Auction._car);	//creates a copy of car, giving it to user
			Auction._car = null;	//no more car to sell
		}
		Garage.save();
	}
	assetLoader.sounds.bg.pause();
	assetLoader.sounds.gameOver.currentTime = 0;
	assetLoader.sounds.gameOver.play();
	assetLoader.sounds.bidder.pause();
	assetLoader.sounds.sold.play();
}

function gameOver() 
{
	//$('.game-over').style.display = 'true';
	auctionStop = true;
	document.getElementById('game-over').style.display = 'true';
	resetStates();
	stop = true;
		//Show a message that player has insufficient funds
	$('#money').html(money);	//set value in the html element
	//$('#Auction').hide();
	$('#game-over').show();
	//reset AI timers
	startEndBids = [false,false,false,false];
	endBidTimers = [0,0,0,0];
	//
	//disable user from entering auction for this car
	//Auction._car = null;	//no more car to sell
	// assetLoader.sounds.bg.pause();
	assetLoader.sounds.gameOver.currentTime = 0;
	assetLoader.sounds.gameOver.play();		
}
//
//Menu state start game button
//
$('.play').click(function() 
{
  $('#menu').hide();
  $('#gameMenu').show();
  //delete splash
  //delete credits
  //delete menu image, since the game can not navigate back to this screen after clicking
  startGame();
});
$('.Register').click(function() 
{
  $('#menu').hide();
  $('#Register').show();
  Register();
  //delete splash
  //delete credits
  //delete menu image, since the game can not navigate back to this screen after clicking
});


//GameOver screen restart button
$('.restart').click(function() 
{
  $('#game-over').hide();
  $('#gameMenu').hide();

  resetStates();
  startGame();
});

//InMenuButtons
//auction Button
jq.AuctionSelect.backBtn.click(function() 
{
	jq.Game.menu.toggle();
	jq.AuctionSelect.menu.toggle();
	//$('#menu').addClass('auction');
	//AuctionSelect.init();
});
jq.Game.toAuctionBtn.click(function() 
{
	jq.Game.menu.hide();
	jq.AuctionSelect.menu.show();
	//$('#menu').addClass('auction');
	AuctionSelect.init();
});/*
jq.Game.toAuctionBtn.click(function() 
{
	$('#auction').show();
	//$('#gameMenu').hide();
	jq.Game.menu.hide();
	//$('#menu').addClass('auction');
	Auction.init();
	auctionMode();
});*/
//Auction State Back Button
jq.Auction.backBtn.click(function()
{
	resetStates();
	startGame();
  
	$('#Auction').hide();
	jq.Game.menu.show();
	//var car = userGarage[curCarIndex];
	//jq.Game.homeImg.attr('src', car.getFullPath() );
	//$('#menu').removeClass('Auction');
	//$('#menu').addClass('gameMenu');
	
});
//Inside Auction Bid Button
$('#bid').click(function()
{
	Auction.playerBidding();
	playerDidBid = true;
});
//Repair to menu Repair
/*function toogleRepair(){
	$('#gameMenu').toggle();
	$('#RepairShop').toggle();
    //$('#RepairShop').children().toggle(0();
}*/
jq.Game.repairBtn.click(function()
{
	//toggleRepair();
	//$('#gameMenu')
	jq.Game.menu.hide();
	jq.RepairShop.menu.show();
	//appState = GAME_MODE.Repair;
});
//RepairMenu Back Button 
jq.RepairShop.backBtn.click(function()
{
	//toggleRepair();
  	jq.RepairShop.menu.hide();
 	//$('#gameMenu')
	jq.Game.menu.show();
	resetStates();
	//appState = GAME_MODE.Main_Menu;
});

//function rotateBtns(index)
//{		
	//setCarBtnText(index.data.index, c);
//	setCarBtnText(2, c1);
	/*var btns = [
		$('#carSelBtn0'),
		$('#carSelBtn1'),
		$('#carSelBtn2')
		//$('#carSelBtn3'),
		//$('#carSelBtn4')
		
	];*/
	//btns[0].children('label#make').text('Jaguar');
	//btns[0].children('label#year').text('1969');
	//btns[0].children('label#name').text('E-Type Series II 4.2 Roadster');
	   
	//
	//
	//for(var i = 0; i < btns.length; i++)
	//{
		//var tmp = btns[i];
		//if(tmp.positio.left <= 100)
		//{
			//hide
			//animate
			//tmp.animate({left:'250px'}, 200);
		//}else if(tmp.hidden() )
		//{
			//animate
			//show
		//}
		//else{
			//tmp.animate({right:'50px'}, 200);
		//}
	//}
	
//}
function initUser(userName, pw)
{	//load a registered user after comfirmation from server
}
function initGuest()
{	//loads guest profile, if one does not exist it is created
	if('guest' in Storage.local){
		//returns an object of format {money:number, garage:[]}
		//player = JSON.parse(Storage.local.guest);
	}
	else{
		//create new guest account, to be stored in browser
		//Storage.local.guest = JSON.stringify({money:50000, garage:[]});
	}

}
//$('#guestPlay').click(initGuest);
//Sound Button
$('.sound').click(function() 
{
  var $this = $(this);
  // sound off
  if ($this.hasClass('sound-on')) 
  {
    $this.removeClass('sound-on').addClass('sound-off');
    playSound = false;
  }
  // sound on
  else 
  {
    $this.removeClass('sound-off').addClass('sound-on');
    playSound = true;
  }
  if (canUseLocalStorage) 
  {
    localStorage.setItem('kandi.playSound', playSound);
  }
  // mute or unmute all sounds
  for (var sound in assetLoader.sounds) 
  {
    if (assetLoader.sounds.hasOwnProperty(sound)) 
    {
      assetLoader.sounds[sound].muted = !playSound;
    }
  }
});
$('button#restart').click(function(){
	$('#sold').hide();
	jq.Game.menu.show();
	appState = GAME_MODE.MAIN_MENU;
});
assetLoader.downloadAll();
});