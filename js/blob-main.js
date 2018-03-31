//main script for blobs

'use strict'

var app = app || {};

app.main = {
    //PROPERTIES
    width: undefined,
    height: undefined,
    canvas: undefined,
    ctx: undefined,
    animationID:0,
    //BLOB ITSELF
    blob: {
        start_radius: 10,
        max_radius: 20,
        speed: undefined,
        health: 0,
        agressive: [1,2]       
    },
    blobs: [],
    numBlobs: 0,
    gameState: undefined,
    game_state: {
        start: 0,
        play: 1,
        restart: 2
    },
    terrain: undefined,
    
    //METHODS
    
    //Init()
    init: function(){
        //console.log("init called");
        this.canvas = document.getElementById('maincanvas');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        
        this.ctx = this.canvas.getContext('2d');
        
        this.gameState = this.game_state.start;
        
        this.terrain = 
        
        //reset function works as base setting
        this.reset();
        
        //start loop
        this.update();
    },
    
    reset: function(){
        this.numBlobs = 0;
    },
    
    update: function(){
        //call update with requestAnimationFrame
        this.animationID = requestAnimationFrame(this.update.bind(this));
        
        //move blobs
        
        //background
        resize();
        //call function to generate terrain once blobs can "eat"
        //for now
        this.ctx.fillStyle = "lightgreen";
        this.ctx.fillRect(0,0,this.width, this.height);
    }
}