﻿//
//Creates a Spritesheet
//datatype {string} - Path to the image.
//datatype {number} - Width (in px) of each frame.
//datatype {number} - Height (in px) of each frame.
//
function SpriteSheet(path, frameWidth, frameHeight) 
{
  this.image = new Image();
  this.frameWidth = frameWidth;
  this.frameHeight = frameHeight;

  // calculate the number of frames in a row after the image loads
  var self = this;
  this.image.onload = function() 
  {
    self.framesPerRow = Math.floor(self.image.width / self.frameWidth);
  };

  this.image.src = path;
}

//Creates an animation from a spritesheet.
//datatype {SpriteSheet} - The spritesheet used to create the animation.
//datatype {number}      - Number of frames to wait for before transitioning the animation.
//datatype {array}       - Range or sequence of frame numbers for the animation.
//datatype{boolean}     - Repeat the animation once completed.
 
