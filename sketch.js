//const items = [knife, weapon];

bulletGroup =new Group();


const items = ['knife', 'necklace', 'scarf', 'stick', 'heartpiece', '???'];

var G=100


//Fusion Diolugue
fusiontext=0




//var diologue=0
talkval=0
var intro=1
var battlemode=3
var voidwor=5
var flippedlever=6
var gameover=0
var pressStart;
//Sound Picker
var BasicBattleTheme=20
var jukebox=20
//Healthbars 
var playerhp=100

var deaths=0

var gameState=3


function preload(){
down=loadAnimation("Down1.png", "Down2.png", "Down3.png", "Down4.png")
up = loadAnimation("Up1.png", "Up2.png","Up3.png","up4.png")
right = loadAnimation("Right1.png","Right2.png")
left = loadAnimation("Left1.png", "Left2.png")
VoidCit1 = loadImage("KkgLeverLeft.png")
LeverFlip = loadImage("BkgLeverRight.png")
pressStart = loadFont("PressStart2P-Regular.ttf")
SongOfTheVoid = loadSound("Void.wav")
battleTheme = loadSound("Basic Battle.wav")
stairImg = loadImage("Stairs.png")
pinkwolfidle=loadAnimation("IdleEnemyF1.png", "IdleEnemyF2.png")
fuseridle=loadImage("FuserIdle.png")
fuserSpeak=loadAnimation("FuserSpeakF1.png", "FuserSpeakF2.png")


//VoidCit2 = loadImage("")
//left=loadAnimation("Left1.png", "Left2.png")



//Animation

//Sounds

//PNG FILES
//
}

function setup() {
	createCanvas(windowWidth, windowHeight);





    //water=createSprite(400,500,100,150)
    //water.shapeColor="blue"
    Guide=createSprite(350,500, 10, 100)
    Guide.shapeColor="orange"
    player=createSprite(500,500,50,50)
    player.addAnimation("down", down)
    player.addAnimation("left", left)
    player.addAnimation("right", right)
    player.addAnimation("up", up)
    player.scale=5

    //FIGURE 1 (Friendly Npc)
    Figure1=createSprite(-30, 100, 50, 100)
    
    //Maintheme
    //SongOfTheVoid.loop();
    //battleTheme.loop()


    //water=createSprite(500, 650, 300, 100)

    reflection=createSprite(player.x, player.y, 50,50)
    reflection.addAnimation("down", down)
    reflection.addAnimation("left", left)
    reflection.addAnimation("right", right)
    reflection.addAnimation("up", up)
    reflection.scale=5
    reflection.visible=false
    playerColid=createSprite(player.x, player.y, player.width/2+20, 120)
    playerColid.visible=false
    //FIGURE 2(HOODED)
    figure2=createSprite(750, 400, 500, 500)
    figure2.scale=0.3
    figure2.addAnimation("pinkwolfidle", pinkwolfidle)
    figure2.changeAnimation("pinkwolfidle")
    figure2.frameDelay = 15

    figure2.visible=false

    //battleTheme.play()
    //enemy=createSprite(500, 500, 50,50)
    //enemy.shapeColor="red"
    //enemytracker=createSprite(enemy.x, enemy.y,150,150)
    //battle=new Battle();
    //appform=new Form();
    if(jukebox==20){
        battleTheme.play()
    }

    //PlayerHpSetup
    hpbaroutline=createSprite(player.x,player.y-90, 110, 30)
    hpbaroutline.shapeColor="white"

    redhpbar=createSprite(player.x, player.y, 100, 20)
    redhpbar.shapeColor="red"
    
    playerhealthbar=createSprite(player.x, player.y-20, playerhp, 20)
    playerhealthbar.shapeColor="lime"


    //Fuser
    bot=createSprite(120,300,80,120)
    bot.shapeColor="blue"
    bot.addAnimation("FuserSpeak", fuserSpeak)
    bot.addAnimation("FuserIdle", fuseridle)
    bot.scale=5.5
    bot.visible=false
    bot.changeAnimation("FuserIdle")
}


function draw() {  

    //Healthbar follows player
    playerhealthbar.x=player.x
    playerhealthbar.y=player.y-90
    hpbaroutline.x=player.x
    hpbaroutline.y=player.y-90
    redhpbar.x=player.x
    redhpbar.y=player.y-90
    playerhealthbar.width=playerhp
    textSize(15)
        //Text
        textSize(30)
        textFont(pressStart)
        
        noFill()
        stroke("green")
        text(playerhp + "/100", 20,20)



    //Font
    textFont(pressStart)
        //Gamestate5
    if(gameState==5){
        
    background(VoidCit1);
        
    //text("talkval:" + talkval, 100, 50)
        
    if(player.x < 350){
    Figure1.attractionPoint(0.1, 250, 100)
    }
    if(Figure1.x > 150){
        Figure1.setVelocity(0,0)
        textbox()
        textSize(12)
        text("Hello Distant Traveler...", 650, 600)
        }
    }
    text("Position of Figure1:" + Figure1.x + "," + Figure1.y, 100, 100)
    //Gamestate 5
    








    if(gameState==6){
    background(LeverFlip)
    textSize(12)
    //Moving Stairs
    stair=createSprite(455,388,500,500)
    stair.addImage(stairImg)
    stair.scale=1.8
    collider4str=createSprite(stair.x+0, stair.y+50, 550, 20)
    collider4str.rotation=45
    collider4str.visible=false
    player.collide(collider4str)
    if(player.x < 0){
        gameState=7
    }    
    

    //Interaction
    if(player.isTouching(Figure1)){
    textbox()
    textSize(15)
    text("We Have to leave...", 700,600)


    }
    







    }


















    //BATTLE MODE
    if(gameState==3){
        background(0)
        Guide.visible=false
        figure2.visible=true
        player.visible=true
        player.setVelocity(0,0)
        gameoverbutto=createSprite(200,500,50,50)
        //if(player.isTouching(gameoverbutto)){
        //    playerhp=playerhp-100
        //    deaths=deaths+1

        //}

//cube=createSprite(500,500,50,100)
//cube.rotation=player.x - cube.x - player.height/2, player.y - cube.y - player.widtg/2
//player.rotation=cube.x - player.x - cube.height/2, cube.y - player.y - cube.widtg/2

    playerhealthbar.visible=true
    hpbaroutline.visible=true
    redhpbar.visible=true




        //bullet()
    }
   //Battle Mode

   //gamestate 






   if(gameState===7){
    background("grey")
    bot.visible=true

    //Fuser Diolugue
    if(keyDown("ENTER") && player.isTouching(bot)){
    fusiontext=1
    }


    player.depth=+100
}

if(fusiontext=1){
    bot.changeAnimation("FuserSpeak")
    textbox()
    textSize(20)
    text("Hello World..", 700, 600)
    fill("white")
}






//if(keyDown("1")){
    //items.push("bun");
//}

//console.log(items[1,2,3,4,5])





    playerColid.x=player.x
    playerColid.y=player.y


    //GAME OVER SCREEN
    if(playerhp==0){
        gameState=0
    }
    if(gameState==0){
        background(0)
        fill("white")
        textSize(50)
        text("GAMEOVER", 550, 200)
        console.log(deaths)
        textSize(20)
        if(deaths==1){
        text("You may have lost once, but you can try again.", 300, 300)
        }

        if(deaths==2){
            text("You can always try again.", 500, 300)
            }
            
        if(deaths==3){
            text("Your going to get through it.", 460, 300)
            }
                
        if(deaths==4){
            text("Oh. Your still playing...?", 480, 300)
            }
                
        if(deaths==5){
            text("Gonna be here a while..?", 500, 300)
            }
                
        if(deaths==6){
            text("I'm bored.. Imma leave", 500, 300)
            }
    

        text("It seems that your journey has ended...", 380, 250)
        
        text("Try Again...?", 610, 450)

        //noFill()
        noFill()
        textSize(19)
        stroke("purple")
        strokeWeight(1)
        text("Yes", 530, 550)
        yesopt=createSprite(550,550, 80,50)
        yesopt.visible=false
        if(mousePressedOver(yesopt)){
            gameState=3
            playerhp=100
            player.visible=true
            player.x=500
            player.y=500
        }
        if(mouseIsOver(yesopt)){
            stroke("white")
            text("Yes", 530, 550)
        }
        

        player.visible=false
        Figure1.visible=false
        figure2.visible=false
        playerhealthbar.visible=false
        redhpbar.visible=false
        hpbaroutline.visible=false
        gameoverbutto.visible=false
    }









    console.log("gameState=" + gameState)


    //fill("blue")
    //text("350 X", 350, 440)


    //REFLECTION
    //reflection.mirrorY(-1)
    //player.collide(water)
    //if(reflection.isTouching(water)){
    //reflection.visible=true    
    //} else {
    //    reflection.visible=false
    //}

    //reflection.x=player.x
    //reflection.y=player.y+160



    
    player.debug=true
    
    //player.mirrorY(-1)

    //DEFAULT OPTIONS FOR PLAYER
    player.setVelocity(0,0)
    player.frameDelay = 15

    if(keyDown("UP_ARROW")){
        player.changeAnimation("up", up)
        player.velocityY=-5
        reflection.changeAnimation("up", up)
    }
    if(keyDown("RIGHT_ARROW")){
        player.changeAnimation("right", right)
        player.velocityX=5
        reflection.changeAnimation("right", right)
    }
    if(keyDown("DOWN_ARROW")){
        player.changeAnimation("down", down)
        player.velocityY=5
        reflection.changeAnimation("down", down)
    }
    if(keyDown("LEFT_ARROW")){
        player.changeAnimation("left", left)
        player.velocityX=-5
        reflection.changeAnimation("left", left)
    }
    
    //SPRINT
    if(keyDown("UP_ARROW" && "SHIFT")){
        player.changeAnimation("up", up)
        player.velocityY=-10
        reflection.changeAnimation("up", up)
    }
    if(keyDown("RIGHT_ARROW")){
        player.changeAnimation("right", right)
        player.velocityX=5
        reflection.changeAnimation("right", right)
    }
    if(keyDown("DOWN_ARROW")){
        player.changeAnimation("down", down)
        player.velocityY=5
        reflection.changeAnimation("down", down)
    }
    if(keyDown("LEFT_ARROW")){
        player.changeAnimation("left", left)
        player.velocityX=-5
        reflection.changeAnimation("left", left)
    }
    
    
    drawSprites();
    
}


    

function textbox(){
        fill(0)
        blackbox=rect(windowWidth/2-240, 500, 600, 200)
        fill("white")
        
        //Edges
        noStroke();
        rect(windowWidth/2-240, 500, 10, 200)
        rect(windowWidth/2+350, 500, 10, 200)
        rect(windowWidth/2-240, 500, 600, 10)
        rect(windowWidth/2-240, 700, 600, 10)

        Next=createSprite(1100, 680, 20, 20)

        //Text
        textSize(30)
        textFont(pressStart)
        
        //noFill()
        //stroke("green")
        //text(playerhp + "/100", 20,20)

        //Interactive Clicking
        textSize(12)
//        if(keyDown("ENTER")){
//        talkval=talkval+1
//        }
//        if(talkval==1){
//            text("It is Nice to meet you...", 100, 100)
//        }
//        if(talkval==2){
//            text("You new to this area...?", 100, 100)
//        }
//        if(talkval==3){
//            text("Oh, thats Interesting.", 100, 100)
//        }
//        if(talkval==4){
//            text("I will flip this lever and you can come Up...", 100, 100)
//        }
//        if(talkval==4 && keyDown("ENTER")){
//        gameState=6
//        talkval=talkval+1
//        }
//        if(talkval==5){
//        text
//        }

    }
//function gswap(){
//    if (frameCount%300===0){
//      bullets.destroy()
//}
//}

function bullet(){
    if (frameCount%15===0){
      bullettype.add(bullets)
      bullets =createSprite(850, 0, 50, 50)
      bullets.velocityY =+15
      bullets.x =Math.round(random(0, 1000))
      if(bullets.isTouching(player)){
          playerhp=playerhp-100
      }
    }
}