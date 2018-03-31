//https://www.redblobgames.com/maps/terrain-from-noise/

"use strict";

var app = app || {};

app.terrain = (function(){
	console.log("terrain.js module loaded");
    
   
    var canvas;
    var ctx;
    var mapWidth;
    var mapHeight;
    var tileSize;
    var value = []; 
    
    function init(){
        this.canvas = document.getElementById('maincanvas');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
    }
    
    function setColor(){
        for(var y=0; y<this.mapHeight; y++){
            for(var x; x<this.mapWidth; x++){
                var ny = y/this.mapHeight - 0.5;
                var nx = x/this.mapWidth - 0.5;
                value[y][x] = noise(this.nx,this.ny);
            }
        }
    }
    
    return{
        init: init
    };
        
    
}());