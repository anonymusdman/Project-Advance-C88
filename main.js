var canvas = new fabric.Canvas('myCanvas');
var width_car = 30;
var height_car = 30;
var car_x = 10;
var car_y = 10;
var car;
var car_image;
var steve_y = 40;
var steve_x = 10;
var steve_object;
var steve_height = 60;
var steve_width = 60;
function carUpdate() {
    fabric.Image.fromURL("tunedsupra2.jpg", function(Img){
    car = Img;
    car.scaleToWidth(width_car);
    car.scaleToHeight(height_car);
    car.set({
        top:car_y,
        left:car_x
    });
    canvas.add(car);
});
}
function NewImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        car_image = Img;
        car_image.scaleToWidth(width_car);
        car_image.scaleToHeight(height_car);
        car_image.set({
        top:steve_y,
        left:steve_x
    });
    canvas.add(car_image);
});
}
function NewPlayer() {
    fabric.Image.fromURL("steve i guess.png", function(Img){
        steve_object = Img;
        steve_object.scaleToWidth(steve_width);
        steve_object.scaleToHeight(steve_height);
        steve_object.set({
        top:steve_y,
        left:steve_x
    });
    canvas.add(steve_object);
});
}
window.addEventListener("keydown", keydown_event);
function keydown_event(e) {
    keypressed = e.keyCode;
    if(e.shiftKey == true && keypressed == '80'){
        width_car = width_car + 10;
        height_car = height_car + 10;
        document.getElementById("current_width").innerHTML = width_car;
        document.getElementById("current_height").innerHTML = height_car;
    }
    if(e.shiftKey == true && keypressed == '77'){
        width_car = width_car - 10;
        height_car = height_car - 10;
        document.getElementById("current_width").innerHTML = width_car;
        document.getElementById("current_height").innerHTML = height_car;
    }
    if(keypressed == '70'){
        NewImage('silviabumper.png');
    }
    if(keypressed == '68'){
        NewImage('silviabackbumper.png');
    }
    if(keypressed == '66'){
        NewImage('supraParts.png');
    }
    if(keypressed == '80'){
        NewPlayer();
    }
    if(keypressed == '38'){
        up();
    }
    if(keypressed == '40'){
        down();
    }
    if(keypressed == '37'){
        left();
    }
    if(keypressed == '39'){
        right();
    }
    function up(){
        if(steve_y >= 0){
            steve_y = steve_y - height_car;
            canvas.remove(steve_object);
            NewPlayer();
        }
    }
    function down(){
        if(steve_y <= 600){
            steve_y = steve_y + height_car;
            canvas.remove(steve_object);
            NewPlayer();
        }
    }
    function right(){
        if(steve_x <= 800){
            steve_x = steve_x + width_car;
            canvas.remove(steve_object);
            NewPlayer();
        }
    }
    function left(){
        if(steve_x >= 0){
            steve_x = steve_x - width_car;
            canvas.remove(steve_object);
            NewPlayer();
        }
    }
}