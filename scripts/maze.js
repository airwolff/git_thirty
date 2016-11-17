"use strict";
console.log('maze');

function Maze(width, height) {
	this.width = width;
	this.height = height;
	this.startX = null;
	this.startY = null;
	this.starOrientation = null;
	this.endX = null;
	this.endY = null;
}

this.directions = ['north', 'east', 'south', 'west'];
this.spaces = [];

var x, y;
for (x = 1; x <= width; x += 1) {
	this.spaces[x] = [];
	for (y = 1; y <= height; y += 1) {
		this.spaces[x][y] = new MazeSpace(this.directions);
	}
}

Maze.prototype.setStart = function (x, y, orientation) {
	this.startX = x;
	this.startY = y;
	this.startOrientation = orientation;
}
