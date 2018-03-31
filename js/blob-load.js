"use strict";

//if app exists use existing copy
//or create new empty object literal

var app = app || {};

window.onload = function(){
    //resize();
    app.terrain.init();
    app.main.terrain = app.terrain;
    app.main.init();
}
