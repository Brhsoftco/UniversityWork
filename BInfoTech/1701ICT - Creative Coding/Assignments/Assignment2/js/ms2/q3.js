///////////////////////////////////////
/// DEBUG MODE ////////////////////////
///////////////////////////////////////
var DEBUG_MODE = false;
var COPYRIGHT_TEXT = "Copyright © BRH Media (Baeleigh Harris) 2021";

////////// CRUCIAL VALUES STORAGE
var CURRENT_WAVE = 0;
var CURRENT_SCORE = Array(2);
var CURRENT_HIGHSCORE = Array(2);
var FOOTER_BAR_BUFFER = 50;
var SPAWN_Y_LOCATION = 0;
var TURRET_ANGLE_CORRECTION = 35;
var FANCY_FONT = null;
var FRAME_COUNTER = 0;
var FRAME_LIMTIER = 320;

//ANIMATION NAMES
var ANIM_IDLE   = "st";
var ANIM_ACTIVE = "eg";

class VideoManager {

    constructor() {
        this.loadedMediaFiles = [];
        this.mediaIsPlaying = false;
        this.mediaIsVisible = false;
        this.currentMediaFile = 0;
        this.mediaCanvasLocation = {
            pointX: 0,
            pointY: 0
        };
    }
}

class AudioProvider {
    constructor() {

        this.loadedAudioFiles = [];
        this.playingAudioFiles = [];
        this.loadedMenuMusic = [];
        this.loadedMusicFiles = [];
        this.currentMenuMusicFile = 0;
        this.currentMusicFile = 0;
        this.audioIsPlaying = false;
        this.musicIsPlaying = false;
    }

    playSfx(index) {

        //validation
        if (this.loadedAudioFiles.length > index) {

            //locate the file in question
            let sfx = this.loadedAudioFiles[index];

            //append sfx to playing list
            this.playingAudioFiles.push(sfx);

            //play the file
            this.playingAudioFiles[this.playingAudioFiles.length - 1].play();
        }
    }

    cleanUpSfx() {

        //go through each file in the list
        for (var i = 0; i < this.playingAudioFiles.length; i++) {

            //grab the file in question
            let sfx = this.playingAudioFiles[i];

            //playing?
            if (!sfx.isPlaying() && !sfx.isPaused()) {

                //clear it away
                this.playingAudioFiles.splice(i, 1);
            }
        }
    }
}

class SpriteProvider {

    constructor() {
        this.loadedSpriteImages = [];
        this.loadedTurretSprites = [];
        this.loadedMissileSprites = [];
        this.loadedExplosionSprites = [];
        this.loadedCitySprites = [];
    }
}

//STATE MANAGER - DO NOT (!!!) MODIFY THIS
var CURRENT_STATE = "LOADING";
var VIDEO_MANAGER = new VideoManager();
var SPRITE_MANAGER = new SpriteProvider();
var SOUND_MANAGER = new AudioProvider();

//loading screen config
var LOADING_VIDEO_PLAYING = false;
var LOADING_VIDEO_ENABLED = true;

//main menu screen config
var MENU_MEDIA_PLAYING = false;
var MENU_MEDIA_ENABLED = false;

//play button sprite
var LAUNCH_BLOCKADE_BUTTON = null;

//bomb cursor
var DEFENSIVE_CURSOR = null;

//game screen config
var GAME_MEDIA_PLAYING = false;
var GAME_MEDIA_ENABLED = false;

//temporary storage of JSON information
var JSON_SCORING_DATA = {};

function preload() {

    //load scoring data
    JSON_SCORING_DATA = loadJSON("data/resources/scoring.json");

    //load custom font
    FANCY_FONT = loadFont("data/resources/font.ttf");

    //preload all resources
    resourcesSetup();
}

function resourcesSetup() {

    //backdrop image (for game scene)
    var gameBackdrop = loadImage("data/resources/sprites/backdrop.tex");

    //setup logo image
    var logoImage = loadImage("data/resources/sprites/logo.tex");

    //setup highscore image
    var highscore = loadImage("data/resources/sprites/highscore.tex");

    //setup score image
    var score = loadImage("data/resources/sprites/score.tex");

    //setup city image
    var skyscraper = loadImage("data/resources/sprites/skyscraper.tex");

    //setup defensive cursor
    var cursor = loadImage("data/resources/sprites/target.tex");
    var cursorEngaged = loadImage("data/resources/sprites/target_engaged.tex");

    //setup start image
    var startButton = loadImage("data/resources/sprites/startButton.tex");
    var startButtonHover = loadImage("data/resources/sprites/startButton_hover.tex");

    //load turret images
    var turretLeft = loadImage("data/resources/sprites/leftFacingTurret.tex");
    var turretRight = loadImage("data/resources/sprites/rightFacingTurret.tex");
    var turretLeftEngaged = loadImage("data/resources/sprites/leftFacingTurretEngaged.tex");
    var turretRightEngaged = loadImage("data/resources/sprites/rightFacingTurretEngaged.tex");

    //setup play button sprite
    LAUNCH_BLOCKADE_BUTTON = createSprite((width / 2) - (startButton.width / 2),
            (height / 2) + (startButton.height * 2), startButton.width, startButton.height);
    LAUNCH_BLOCKADE_BUTTON.debug = DEBUG_MODE;
    LAUNCH_BLOCKADE_BUTTON.mouseActive = true;
    LAUNCH_BLOCKADE_BUTTON.setDefaultCollider();

    //apply sprite images
    LAUNCH_BLOCKADE_BUTTON.addImage(ANIM_IDLE, startButton);
    LAUNCH_BLOCKADE_BUTTON.addImage("hv", startButtonHover);
    LAUNCH_BLOCKADE_BUTTON.changeAnimation(ANIM_IDLE);

    //append images
    SPRITE_MANAGER.loadedSpriteImages.push(logoImage);
    SPRITE_MANAGER.loadedSpriteImages.push(startButton);
    SPRITE_MANAGER.loadedSpriteImages.push(startButtonHover);
    SPRITE_MANAGER.loadedSpriteImages.push(highscore);
    SPRITE_MANAGER.loadedSpriteImages.push(score);
    SPRITE_MANAGER.loadedSpriteImages.push(cursor);
    SPRITE_MANAGER.loadedSpriteImages.push(cursorEngaged);
    SPRITE_MANAGER.loadedSpriteImages.push(turretLeft);
    SPRITE_MANAGER.loadedSpriteImages.push(turretRight);
    SPRITE_MANAGER.loadedSpriteImages.push(turretLeftEngaged);
    SPRITE_MANAGER.loadedSpriteImages.push(turretRightEngaged);
    SPRITE_MANAGER.loadedSpriteImages.push(skyscraper);
    SPRITE_MANAGER.loadedSpriteImages.push(gameBackdrop);

    //load menu audio
    SOUND_MANAGER.loadedMenuMusic.push(loadSound("data/resources/audio/music/menuMusic01.mp3"));
    SOUND_MANAGER.loadedMenuMusic.push(loadSound("data/resources/audio/music/menuMusic02.mp3"));

    //load game music
    SOUND_MANAGER.loadedMusicFiles.push(loadSound("data/resources/audio/music/gameMusic01.mp3"));
    SOUND_MANAGER.loadedMusicFiles.push(loadSound("data/resources/audio/music/gameMusic02.mp3"));

    //load SFX
    SOUND_MANAGER.loadedAudioFiles.push(loadSound("data/resources/audio/sfx/turretBlast.mp3"));
}

function randomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
    }
    return result;
}

function highScoreLoad() {

    //highest-scoring player
    var jp = JSON_SCORING_DATA.scoringSchema.scoringData.highscores[0];

    //load data directly into high score array
    CURRENT_HIGHSCORE = [
        jp.playerName,
        jp.score
    ];

    //setup current score (always nil)
    CURRENT_SCORE = [
        randomString(10),
        0
    ]
}

function setup() {

    //create the base canvas
    var canvas = createCanvas(720, 480);

    //assign to correct render area
    canvas.parent("render");

    //for turret rotation, we use degrees
    angleMode(DEGREES);

    //load JSON scores
    highScoreLoad();

    //create loading video
    var loading = createVideo("data/resources/video/loadingScreen.mp4");
    loading.size(width, height);
    loading.hide();
    VIDEO_MANAGER.loadedMediaFiles.push(loading);

    //create menu video loop
    var menu = createVideo("data/resources/video/menuMedia.mp4");
    menu.size(width, height);
    menu.hide();
    VIDEO_MANAGER.loadedMediaFiles.push(menu);
}

function backgroundMusicEngine_GameStart() {

    //play first music file
    SOUND_MANAGER.loadedMusicFiles[0].play();

    //add handler
    SOUND_MANAGER.loadedMusicFiles[0].onended(backgroundMusicEngine_GameFinishedHandler);

    //reassign new index
    SOUND_MANAGER.currentMusicFile = 0;
}

function backgroundMusicEngine_GameFinishedHandler(elt) {

    //new content index
    let toPlay = SOUND_MANAGER.currentMusicFile + 1;

    if (SOUND_MANAGER.loadedMusicFiles.length > toPlay) {

        //play new content
        SOUND_MANAGER.loadedMusicFiles[toPlay].play();

        //add handler
        SOUND_MANAGER.loadedMusicFiles[toPlay].onended(backgroundMusicEngine_GameFinishedHandler);

        //reassign new index
        SOUND_MANAGER.currentMusicFile = toPlay;
    } else {

        //jump back to first file
        SOUND_MANAGER.loadedMusicFiles[0].play();

        //add handler
        SOUND_MANAGER.loadedMusicFiles[0].onended(backgroundMusicEngine_GameFinishedHandler);

        //reassign new index
        SOUND_MANAGER.currentMusicFile = 0;
    }
}

function backgroundMusicEngine_MenuStart() {

    //play first music file
    SOUND_MANAGER.loadedMenuMusic[0].play();

    //add handler
    SOUND_MANAGER.loadedMenuMusic[0].onended(backgroundMusicEngine_MenuFinishedHandler);

    //reassign new index
    SOUND_MANAGER.currentMenuMusicFile = 0;
}

function backgroundMusicEngine_MenuStop() {

    //stop current background music
    SOUND_MANAGER.loadedMenuMusic[SOUND_MANAGER.currentMenuMusicFile].onended(function () {});
    SOUND_MANAGER.loadedMenuMusic[SOUND_MANAGER.currentMenuMusicFile].stop();
    SOUND_MANAGER.currentMenuMusicFile = 0;
}

function backgroundMusicEngine_GameStop() {

    //stop current background music
    SOUND_MANAGER.loadedMusicFiles[SOUND_MANAGER.currentMusicFile].onended(function () {});
    SOUND_MANAGER.loadedMusicFiles[SOUND_MANAGER.currentMusicFile].stop();
    SOUND_MANAGER.currentMusicFile = 0;
}

function backgroundMusicEngine_MenuFinishedHandler(elt) {

    //new content index
    let toPlay = SOUND_MANAGER.currentMenuMusicFile + 1;

    if (SOUND_MANAGER.loadedMenuMusic.length > toPlay) {

        //play new content
        SOUND_MANAGER.loadedMenuMusic[toPlay].play();

        //add handler
        SOUND_MANAGER.loadedMenuMusic[toPlay].onended(backgroundMusicEngine_MenuFinishedHandler);

        //reassign new index
        SOUND_MANAGER.currentMenuMusicFile = toPlay;
    } else {

        //jump back to first file
        SOUND_MANAGER.loadedMenuMusic[0].play();

        //add handler
        SOUND_MANAGER.loadedMenuMusic[0].onended(backgroundMusicEngine_MenuFinishedHandler);

        //reassign new index
        SOUND_MANAGER.currentMenuMusicFile = 0;
    }
}

function drawGameScene() {

    //tint background
    tint(255, 150);

    //draw background
    image(SPRITE_MANAGER.loadedSpriteImages[SPRITE_MANAGER.loadedSpriteImages.length - 1], 0, 0);

    //remove tint
    noTint();

    //draw footer buffer
    fill(0);
    stroke(0);
    rect(0, height - FOOTER_BAR_BUFFER, width, FOOTER_BAR_BUFFER);

    //draw highscore buffer
    fill(100);
    stroke(100);
    rect(width - 150, height - FOOTER_BAR_BUFFER, 150, FOOTER_BAR_BUFFER, 20, 0, 0, 20);

    //draw highscore image
    var hsResized = SPRITE_MANAGER.loadedSpriteImages[3];
    hsResized.resize(50, 0);
    image(hsResized, width - 150 + 15, (height - 15) - (hsResized.height));

    //draw text in high-score buffer
    stroke("#fff700")
    fill("#fff700");
    textSize(12);

    //fields
    var player = CURRENT_HIGHSCORE[0];
    var score = CURRENT_HIGHSCORE[1];

    //calculate width of text values for alignment
    var wName = textWidth(player);

    //calculate positions for player high score text
    var playerTextX = width - wName - 12;
    var playerTextY = height - 12;

    //draw player name
    text(player, playerTextX, playerTextY);

    //draw score
    stroke(255);
    fill(255);
    textSize(16);

    //calculate width of text values for alignment
    var wScore = textWidth(score);

    //calculate positions for score text
    var scoreTextX = width - wScore - 12;
    var scoreTextY = height - 12 - 16;

    //draw score
    text(score, scoreTextX, scoreTextY);

    //draw left score buffer
    fill(100);
    stroke(100);
    rect(0, height - FOOTER_BAR_BUFFER, 300, FOOTER_BAR_BUFFER, 0, 20, 20, 0);

    //draw score image
    var resized = SPRITE_MANAGER.loadedSpriteImages[4];
    resized.resize(0, 20);
    image(resized, 15, (height - 15) - (resized.height));

    //draw player score
    stroke("#fff700")
    fill("#fff700");
    textSize(26);

    //measure text width
    var scoreWidth = textWidth(CURRENT_SCORE[1]);

    //calculate positioning
    var currentScoreX = 15 + resized.width + scoreWidth;
    var currentScoreY = (height - 16);

    //draw text
    text(CURRENT_SCORE[1], currentScoreX, currentScoreY);

    //move the cursor with the mouse
    DEFENSIVE_CURSOR.position.x = mouseX;
    DEFENSIVE_CURSOR.position.y = mouseY;

    //get the turrets
    var leftTurret = SPRITE_MANAGER.loadedTurretSprites[0];
    var rightTurret = SPRITE_MANAGER.loadedTurretSprites[1];

    //animation status
    if (DEFENSIVE_CURSOR.mouseIsPressed) {

        //engaged cursor
        DEFENSIVE_CURSOR.changeAnimation(ANIM_ACTIVE);

        //engaged turrets
        leftTurret.changeAnimation(ANIM_ACTIVE);
        rightTurret.changeAnimation(ANIM_ACTIVE);

        //play turret SFX
        SOUND_MANAGER.loadedAudioFiles[0].play();
    }
    else {

        //stationary turrets
        leftTurret.changeAnimation(ANIM_IDLE);
        rightTurret.changeAnimation(ANIM_IDLE);
        
        //stationary cursor
        DEFENSIVE_CURSOR.changeAnimation(ANIM_IDLE);
    }

    if (!GAME_MEDIA_PLAYING && GAME_MEDIA_ENABLED) {
        backgroundMusicEngine_GameStart();
        GAME_MEDIA_PLAYING = true;
    }

    //rotate turrets to target
    var trajectories = calculateTurretTraj();

    //rotate them
    leftTurret.rotation = trajectories[0] - TURRET_ANGLE_CORRECTION;
    rightTurret.rotation = -(trajectories[1] - TURRET_ANGLE_CORRECTION);

    //finalise the draw routine by drawing all sprites
    drawSprites();
}

function calculateTurretTraj() {
    
    //get the turrets
    var leftTurret = SPRITE_MANAGER.loadedTurretSprites[0];
    var rightTurret = SPRITE_MANAGER.loadedTurretSprites[1];

    //turret trajectory anchor point
    var turretAnchorX = mouseX;
    var turretAnchorY = leftTurret.position.y;
    
    //adjacent sides
    var leftTrajAdj = leftTurret.position.x - turretAnchorX;
    var rightTrajAdj = turretAnchorX - rightTurret.position.x;

    //opposite side (they both share an opposite side)
    var trajOpposite = turretAnchorY - mouseY;

    //angle calculation!
    var rightFacingAngle = atan(trajOpposite / rightTrajAdj);
    var leftFacingAngle = atan(trajOpposite / leftTrajAdj);

    //return results
    return [leftFacingAngle, rightFacingAngle];
}

function spawnCycle() {


}

function setupCities() {

    //amount of cities to spawn
    let cities = 7;

    //spawn increment
    let incrementX = 50;

    //spawn offset
    let offsetX = 150;

    //get the correct image
    let cityImage = SPRITE_MANAGER.loadedSpriteImages[11];
    cityImage.resize(0, 100);

    //start spawning
    for (var i = 0; i < cities; i++) {

        //create the sprite
        var newCity = createSprite(offsetX, (height - FOOTER_BAR_BUFFER) - (cityImage.height / 2), cityImage.width, cityImage.height);
        newCity.addImage(ANIM_IDLE, cityImage);
        newCity.setDefaultCollider();

        //add to the list
        SPRITE_MANAGER.loadedCitySprites.push(newCity);

        //increment
        offsetX += (incrementX + cityImage.width);
    }
}

function drawMainMenu() {
    tint(255, 126);
    image(VIDEO_MANAGER.loadedMediaFiles[1], 0, 0);
    noTint();
    image(SPRITE_MANAGER.loadedSpriteImages[0],
        (width / 2) - (SPRITE_MANAGER.loadedSpriteImages[0].width / 2),
        (height / 4) - (SPRITE_MANAGER.loadedSpriteImages[0].height / 2));

    //reset sprite position
    LAUNCH_BLOCKADE_BUTTON.position.x = (width / 2);
    LAUNCH_BLOCKADE_BUTTON.position.y = (height / 2) + (height / 4);

    if (!MENU_MEDIA_PLAYING && MENU_MEDIA_ENABLED) {
        VIDEO_MANAGER.loadedMediaFiles[1].loop();
        backgroundMusicEngine_MenuStart();
        MENU_MEDIA_PLAYING = true;
    }

    if (LAUNCH_BLOCKADE_BUTTON.mouseIsOver) {

        LAUNCH_BLOCKADE_BUTTON.changeAnimation("hv");

    } else {

        LAUNCH_BLOCKADE_BUTTON.changeAnimation(ANIM_IDLE);
    }

    if (LAUNCH_BLOCKADE_BUTTON.mouseIsPressed) {

        //launch BLOCKADE
        startGame();
    }

    drawSprites();
}

function setupTurrets() {

    //get turrent images
    var leftTurretImage = SPRITE_MANAGER.loadedSpriteImages[7];
    var rightTurretImage = SPRITE_MANAGER.loadedSpriteImages[8];
    var leftTurretImageEngaged = SPRITE_MANAGER.loadedSpriteImages[9];
    var rightTurretImageEngaged = SPRITE_MANAGER.loadedSpriteImages[10];

    //turret positions
    var leftTurretX = width - (leftTurretImage.width / 2);
    var leftTurretY = (height - FOOTER_BAR_BUFFER) - (leftTurretImage.height / 2);
    var rightTurretX = rightTurretImage.width / 2;
    var rightTurretY = (height - FOOTER_BAR_BUFFER) - (rightTurretImage.height / 2);

    //create left turret
    var leftTurret = createSprite(leftTurretX, leftTurretY, leftTurretImage.width, leftTurretImage.height);
    leftTurret.addImage(ANIM_IDLE, leftTurretImage);
    leftTurret.addImage(ANIM_ACTIVE, leftTurretImageEngaged);
    leftTurret.changeAnimation(ANIM_IDLE);
    leftTurret.setDefaultCollider();

    //create right turret
    var rightTurret = createSprite(rightTurretX, rightTurretY, rightTurretImage.width, rightTurretImage.height);
    rightTurret.addImage(ANIM_IDLE, rightTurretImage);
    rightTurret.addImage(ANIM_ACTIVE, rightTurretImageEngaged);
    rightTurret.changeAnimation(ANIM_IDLE);
    rightTurret.setDefaultCollider();

    //save sprites to the manager
    SPRITE_MANAGER.loadedTurretSprites = [];
    SPRITE_MANAGER.loadedTurretSprites.push(leftTurret);
    SPRITE_MANAGER.loadedTurretSprites.push(rightTurret);
}

function setupCursor() {

    //get images used for cursor
    var cursor = SPRITE_MANAGER.loadedSpriteImages[5];
    var cursorEngaged = SPRITE_MANAGER.loadedSpriteImages[6];

    //setup the cursor sprite
    DEFENSIVE_CURSOR = createSprite(mouseX, mouseY, cursor.width, cursor.height);
    DEFENSIVE_CURSOR.addImage(ANIM_IDLE, cursor);
    DEFENSIVE_CURSOR.addImage(ANIM_ACTIVE, cursorEngaged);
    DEFENSIVE_CURSOR.changeAnimation(ANIM_IDLE);
    DEFENSIVE_CURSOR.setDefaultCollider();

    //turn on mouse tracking for the cursor
    DEFENSIVE_CURSOR.mouseActive = true;
}

function startGame() {

    //stop menu music
    backgroundMusicEngine_MenuStop();

    //for missile defense
    setupTurrets();

    //setup destructible cities
    setupCities();

    //for interaction with the missiles
    setupCursor();

    //stop video playback
    VIDEO_MANAGER.loadedMediaFiles[1].stop();

    //disable start sprite
    LAUNCH_BLOCKADE_BUTTON.remove();

    LOADING_VIDEO_PLAYING = false;
    LOADING_VIDEO_ENABLED = false;
    MENU_MEDIA_ENABLED = false;
    MENU_MEDIA_PLAYING = false;
    GAME_MEDIA_ENABLED = true;
    GAME_MEDIA_PLAYING = false;
    CURRENT_STATE = "GAME";
}

function drawLoadingScreen() {
    image(VIDEO_MANAGER.loadedMediaFiles[0], 0, 0);
    if (!LOADING_VIDEO_PLAYING && LOADING_VIDEO_ENABLED) {
        VIDEO_MANAGER.loadedMediaFiles[0].onended(handleLoadingDone);
        VIDEO_MANAGER.loadedMediaFiles[0].play();
        LOADING_VIDEO_PLAYING = true;
    }
}

function handleLoadingDone(elt) {
    LOADING_VIDEO_PLAYING = false;
    LOADING_VIDEO_ENABLED = false;
    MENU_MEDIA_ENABLED = true;
    MENU_MEDIA_PLAYING = false;
    GAME_MEDIA_PLAYING = false;
    GAME_MEDIA_ENABLED = false;
    CURRENT_STATE = "COPYRIGHT";
}

function drawCopyrightScreen() {

    //validation
    if (FRAME_COUNTER >= FRAME_LIMTIER) {

        LOADING_VIDEO_PLAYING = false;
        LOADING_VIDEO_ENABLED = false;
        MENU_MEDIA_ENABLED = true;
        MENU_MEDIA_PLAYING = false;
        GAME_MEDIA_PLAYING = false;
        GAME_MEDIA_ENABLED = false;
        CURRENT_STATE = "MAIN_MENU";
    }
    else {

        //copyright text setup
        textSize(12);
        fill(255);
        stroke(255);
        textFont(FANCY_FONT);

        //measure text (for location on-screen)
        let w = textWidth(COPYRIGHT_TEXT);

        //calculate positions
        let textX = (width / 2) - (w / 2);
        let textY = (height - 12);

        //draw copyright text
        text(COPYRIGHT_TEXT, textX, textY);

        //increment frame counter
        FRAME_COUNTER += 1;
    }
}

function draw() {
    background(0);

    switch (CURRENT_STATE) {
    case "LOADING":
        drawLoadingScreen();
        break;
    case "MAIN_MENU":
        drawMainMenu();
        break;
    case "GAME":
        drawGameScene();
        break;
    case "COPYRIGHT":
        drawCopyrightScreen();
        break;
    }
}