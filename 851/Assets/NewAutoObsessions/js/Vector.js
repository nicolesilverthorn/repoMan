﻿//vehicle 'class' and any other api
//
//A vector for 2d space.
 
// datatype {integer} x - Center x coordinate.
// datatype {integer} y - Center y coordinate.
// @datatype {integer} dx - Change in x.
// datatype {integer} dy - Change in y.
function Vector(x, y, dx, dy) 
{
  // position
  this.x = x || 0;
  this.y = y || 0;
  // direction
  this.dx = dx || 0;
  this.dy = dy || 0;
}


// Move the player advance the vectors position by dx,dy
Vector.prototype.advance = function() 
{
  this.x += this.dx;
  this.y += this.dy;
};