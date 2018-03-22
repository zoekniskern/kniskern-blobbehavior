function resize(){
    //get canvas variables
    var canvas = document.getElementById('maincanvas');
    var ctx = canvas.getContext('2d');
    
    init();
    
    function init(){
        //call resize when window is changed
        window.addEventListener('resize', resizeCanvas, false);
        
        //draw the canvas initially
        resizeCanvas();
    }
    
    //debugResize()
    //Use to confirm resize is working
    function debugResize(){
        ctx.strokeStyle = 'red';
        ctx.lineWidth = '5';
        ctx.strokeRect(0,0,window.innerWidth, window.innerHeight);
    }
    
    //resizeCanvas()
    function resizeCanvas(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        //set height and width of app.main inside resize
        app.main.width = canvas.width;
        app.main.height = canvas.height;
        debugResize();
    }
};