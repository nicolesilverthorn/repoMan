﻿//vehicle 'class' and any other api
//the vehicle ID property is a string representation of a bitfield with the sturcture:
//	0x{DA, 0086, 0A}:{make, year, model}
//values are between 00 and FF, allowing for 255x255x255 unique vehicles
//ID's can be prceedurally generated!
//namespace AO
/*
function Driveterain(e,t,da,e,fs)
{	//return object representing a vehicle's driveterain
	this.MAX = {
	//substruct representing static maximum for vehicle upgrades
	//ENGINE:6,
	//TRANSMISSION:6,
	//DRIVE_AXEL:6,
	//EXHAUST:6,
	//FUEL_SYSTEM:6
	};
	return {
		//substruct representing surrent upgrades done to a car
		//ENGINE:e,
		//TRANSMISSION:t,
		//DRIVE_AXEL:da,
		//EXHAUST:e,
		//FUEL_SYSTEM:fs
	};
}
function carStats()
{
	return {
		drivetrain:Drivetrain(),
		body:carBody(),
		interior:carInterior(),
		carDocs:carDocs(),
	};
}*/
function carPart(condition, originality){
	return {
		cond : condition,
		orig : originality,
		repaired:false
		//getCondition:function(){return repaired ? this.condition + 25 : this.condition;
	};
}

function Vehicle(Name, Make, Year, Price)
{
	this.fromJSON = function(str)
	{	//'static' method returning a Vehicle serialized from a JSON string
		//data object containing the essential struct of a vehicle
		var d = JSON.parse(str);
		return Vehicle(d.name,d.make,d.year,d._price);
	}
	var img = new Image()
	img.src = 'images/vehicle.jpg';	//ret.getFullPath();
	//returns a new vehicle object

	return {
		//pos:new Vector(VEHICLE_XPOS, VEHICLE_YPOS,0,0)
		_price:Price,	//original sale price on year made, does not change
		condition:0,
		originality:0,
		name : Name,	////node.attr('name'),
		make : Make,	//node.attr('make'),
		year : Year,	//parseInt(node.attr('year') ),
		id : '0',	//node.attr('id'),
		//_info: node.text(),
		//parts : [],	//only retain currently upgraded parts
		image : img,
		//
		getPrice : function()
		{	//calculates sale price based on age, condition and completed upgrades
			//var upgradeCost = 0;
			//for(var i = 0; i < parts.length; i++)
			//{
				//upgradeCost += parts[i].getPrice();
			//}
			return this._price; // + upgradeCost;
		},
		getInfo : function()
		{	//var node = xbdCars.getElementById(this._id);
			//return node.text;
			return 'Default Car Info';
		},
		displayInfo : function(){
			//context if from globals
			context.fillText(this.name, VEHICLE_XPOS + 40, 120);
			context.fillText("Value"+ this.price  ,VEHICLE_XPOS + 40, 140);
			context.fillText("Orig" + this.originality  ,VEHICLE_XPOS + 40, 160);
			context.fillText("Condition"+ this.condition  ,VEHICLE_XPOS + 40, 180);
//			Vehicle.draw = function()
//			{
//				context.drawImage(this.image,VEHICLE_XPOS,VEHICLE_YPOS);
//			}
		},
		getOriginality : function(){
			var ret = this.originality;
			/*for(var i = 0; i < MAX_PARTS; i++){
				var val = bfParts & (1 << i);
				if(val != 0){	//user's car has upgrades part
				//ret += parts[i].condition;
				}
			}*/
			return ret;
		},
		getCondition : function(){
			var ret = this.condition;
			/*for(var i = 0; i < MAX_PARTS; i++){
				var val = bfParts & (1 << i);
				if(val != 0){	//user's car has upgrades part
				//ret += parts[i].condition;
				}
			}*/
			return ret;
		},
		getFullName : function()
		{	//returns a string representing the 'proper' car name
			return this.make + ' ' + this.year + ' ' + this.name;
		},
		getFullPath : function()
		{	//returns the absolute url for the image path of this car on the server
			//return baseURL + 'images/vehicles/' + this.make + '/' + year + '/' + this.name + '.jpg';
			return '';
		},
		initParts : function()
		{	//loads parts
			//var thisXML = xmlDoc.ElementById(this.id);
			//if(this.parts.length != 0)
				//this.parts = [];	//reset parts array
			//var bfParts = ;	//bitfield representing which upgrades this car has aquired
			//for(var i = 0; i < MAX_PARTS; i++)
			//{	//var val = bfParts & (1 << i);
				//if(val != 0)
				//{	//user's car has upgrades part
					//var node = parts[val];
					//this.parts.append(carPart(node) );	//add upgrade to list
				//}
			//}
		},
		toJSON : function()
		{	//converts a vehicle to a JSON string, to be saved to local storage,
			//this is called by JSON.stringify and will be serialized
			return { 
				_price : this._price.toString(),
				condition : this.condition.toString(),
				originality : this.originality.toString(),
				name : this.name,
				make : this.make,
				year : this.year.toString(),
				id : this.id.toString()
				//'parts : '
				//_info: node.text(),
			};
		}
	};
}
//TEMPORARY
//xml data base of cars, loaded from server!
//This should work!!!!
/*
var dbStr =
"<Vehicle id=\'0x00DA86B0\'" +
	"name=\'Camaro RS/Z28 Sport Coupe\'" +
	"year=\'1969\'" +
	"make=\'Chevrolet\'" +
	"_price=\'7000\'>" +
	//"Default Car Info" +
"</Vehicle>" +
"<Vehicle id=\'0x00FA78C6\'" +
	"name=\'E-Type Series II 4.2 Roadster\'" +
	"year=\'1969\'" +
	"make=\'Jaguar\'" +
	"_price=\'25000\'>" +
	//"Vehicle info about important stuff" +
"</Vehicle>" +
"<Vehicle id=\'0x00A7B6C2\'" +
	"name=\'Sierra\'" +
	"year=\'1997\'" +
	"make=\'GMC\'>" +
	"_price=\'12000\'>" +
	//"Mah truck! Not yours!" +
"</Vehicle>";

var xmlDoc = $.parseHTML(dbStr);	//parseXML doesn't work
	carDoc = $(xmlDoc);	//jQuery(), converts html DOM to jQuery nodes
	
var cn = $('#0x00DA86B0', carDoc);
*/
var xdbCars = [
	Vehicle('E-Type Series II 4.2 Roadster', 'Jaguar', '1969', 25000),
	//Vehicle(cn.attr("name"), 'Chevrolet','1969', parseInt(cn.attr('_price') ) ),
	Vehicle('Camaro RS/Z28 Sport Coupe', 'Chevrolet','1969', 18000),
	Vehicle('Sierra', 'GMC', '1997', 12000)
	//...etc
];

/*
var Vehicle = function(imgSrc)	//xmlNode)
{
	Vector.call(Vehicle, VEHICLE_XPOS,  VEHICLE_YPOS, Vehicle.dx, Vehicle.dy);
	this.price = 0;
	this.condition = 0;
	this.originality = 0;
	this.name = '';
	this.make = '';
	this.year = '';
	this.id = 0;
	//parts = []	//only retain currently upgraded parts
	this.image = new Image();
	image.src = imgSrc;	//getFullPath();'images/vehicle.jpg';	//getFullPath
	//
	this.displayInfo = function(){
		context.fillText(this.name, VEHICLE_XPOS + 40, 120);
		context.fillText("Value"+ this.price  ,VEHICLE_XPOS + 40, 140);
		context.fillText("Orig" + this.originality  ,VEHICLE_XPOS + 40, 160);
		context.fillText("Condition"+ this.condition  ,VEHICLE_XPOS + 40, 180);
		Vehicle.draw = function() 
		{
			context.drawImage(this.image,VEHICLE_XPOS,VEHICLE_YPOS);
		}
	}
	this.getOriginality = function(){
		var ret = this.originality;
		/*for(var i = 0; i < MAX_PARTS; i++){
			var val = bfParts & (1 << i);
			if(val != 0){	//user's car has upgrades part
			//ret += parts[i].condition;
			}
		}
		return ret;
	}
	this.getCondition = function(){
		var ret = this.condition;
		/*for(var i = 0; i < MAX_PARTS; i++){
			var val = bfParts & (1 << i);
			if(val != 0){	//user's car has upgrades part
			//ret += parts[i].condition;
			}
		}
		return ret;
	}
	this.getFullPath = function(){
		//returns the absolute url for the image path of this car on the server
		//return baseURL + 'images/vehicles/' + this.make + '/' + year + '/' + this.name + '.jpg';
		return '';
	}
};
*/