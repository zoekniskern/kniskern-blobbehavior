//http://www.emanueleferonato.com/2011/05/17/using-cellular-automata-to-generate-random-land-and-water-maps-with-flash/

var app = app || {};

app.terrain = ((ctx,width,height) {
    ctx: ctx,
    water: 0,
    land: 1,
    iterations: 8,
    ratio: undefined,
    mapWidth: width,
    mapHeight: height,
    tileSize: 10,
    landArray: [],
    newLandArray: [],
    
    generateMap: function(){
        this.landOrWater();
        this.drawMap();
    },
    
    drawMap: function(){
        for(var i=0; i<this.mapWidth; i++){
            for(var j=0; j<this.mapWidth; j++){
                switch(this.landArray[i][j]){
                    case water:
                        this.drawWater(i,j);
                        break;
                    case land:
                        this.drawLand(i,j);
                        break;
                }
            }
        }
    },
        
    landOrWater: function(){
        for(var i=0; i < this.mapWidth; i++){
            this.landArray[i]=new Array();
            this.newLandArray[i]=new Array();
            for(var j=0; j<this.mapWidth;j++){
                if(Math.random()<this.ratio){
                    this.landArray[i][j]=this.land;
                } else{
                    this.landArray[i][j]=this.water;
                }
            }
        }
        for(i=1; i<this.iterations;i++){
            //iterate again
        }
    },
        
    drawLand: function(col, row){
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.tileSize*col,this.tileSize*row, this.tileSize);
    },
        
    drawWater: function(col, row){
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.tileSize*col,this.tileSize*row, this.tileSize);
    },
        
    iterateLand: function(){
        
    },
        
    adjacentLand: function(){
        
    }
        
    
})();