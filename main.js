function preload() {
	mario_jump=loadSound("jump.wav")
	mario_kick=loadSound("kick.wav")
	mario_die=loadSound("mariodie.wav")
	mario_coin=loadSound("coin.wav")
	mario_gameover=loadSound("gameover.wav")
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
video=createCapture(VIDEO)
video.size(750,350)
video.parent("game_console")
poseNet=ml5.poseNet(video,modalLoaded)
poseNet.on('pose',gotPoses)
}
function gotPoses(results){
	if(results.length>0){
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		
	}
}
function modalLoaded(){
	console.log("modelLoaded!")
}

function draw() {
	game()
}






