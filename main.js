var canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}


function keypressed(e) {


    keypressed = e.keyCode;
    console.log(keypressed);
}


if(keyPressed == keypressed>='90' && keypressed<='65') {

	new_image('Alpkey.png');
	console.log("Alpkey.png");
}


if(keyPressed == keypressed>='57' && keypressed<='48') {

	new_image('numkey.png');
	console.log("numkey.png");
}


if(keyPressed == keypressed>='40' && keypressed<='37') {

	new_image('Arrkey.png');
	console.log("Arrkey.png");
}


if(keyPressed == '17') {

	new_image('spkey.png');
	console.log("spkey.png");
}


if(keyPressed =='18') {

	new_image('spkey.png');
	console.log("spkey.png");
}
	

if(keyPressed == '27') {

	new_image('spkey.png');
	console.log("spkey.png");
}

if(keyPressed == '16') {

	new_image('otherkey.png');
	console.log("otherkey.png");
}


if(keyPressed == '8') {

	new_image('otherkey.png');
	console.log("otherkey.png");
}


if(keyPressed == '13') {

	new_image('otherkey.png');
	console.log("otherkey.png");
}
