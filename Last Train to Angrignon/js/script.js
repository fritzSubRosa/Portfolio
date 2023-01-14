/**
Last Train to Angrignon
An Annoyance by Stephen Friedrich
*/

/* Page Number Index
0 = Main Screen
1 = Prices Screen

*/

"use strict";
let pageNumber = 0;
let index = 0;
let welcomePhrase = ["Daħħal","Eingang","Tulla sisään","Belép","입력하다","این ماشین خرابهارد"]; // Order: Maltese, German, Finnish, Hungarian, Korean, Persian, English*
let chooseOption = ["Agħżel għażla", "Laufen wäre schneller","Valitse vaihtoehto","Kérjük, válasszon egy lehetőséget","옵션을 선택해주세요","تو انتخابی نداری"];
let promptOpus = ["Poġġi l-karta tiegħek kullimkien","Setzen Sie die OPUS-Karte egal wohin","Laita korttisi minne tahansa","Helyezze a kártyáját bárhová","카드를 아무데나 두세요","کارت خود را در هر جایی قرار دهید"];
let newCard = ["Kard OPUS rikarikabbli","Nachladbare OPUS-Karte","Uudelleenladattava OPUS-kortti","Újratölthető OPUS kártya","충전식 OPUS 카드","کارت OPUS قابل شارژ مجدد"];
let oldCard = ["Kard OPUS li tintuża darba","Einweg-OPUS-Karte","Kertakäyttöinen OPUS-kortti","Egyszer használatos OPUS","일회용 OPUS 카드","باید پیاده روی کنی"];
let pricesTitle = ["Ix-xorti t-tajba","Hals- und Beinbruch!","Onnea!", "Sok szerencsét","행운을 빕니다","موفق باشید"];
let giveUp = ["Taqta 'qalbek","Aufgeben","Luovuttaa","Felad","포기하다","دست برداشتن از"];
let nevermind = ["Tagħtix kas","Scheiß drauf","Vittu kaikki","Nem fontos","신경 쓰지 마,بیخیال"];
let omegaBit = ["-9999 Vjaġġ, Żona Ω","-9999 Fahrt, Zone Ω","-9999 Matkaa, vyöhyke Ω","-9999 utazás, Ω zóna","-9999 트립, 구역 Ω","-9999 سفر، منطقه Ω"];
let loveOfGod = ["Għall-imħabba ta 'alla agħtini biljett","Um Gottes willen gib mir ein Ticket","Jumalan rakkaudesta anna minulle lippu","Isten szerelmére adj jegyet","신의 사랑을 위해 티켓을 주세요","به عشق خدا به من بلیط بده"];
let zoneBGag = ["Kull fejn tkun ZoneB, naħseb","Wo zum Teufel ist ZoneB überhaupt","Missä helvetissä on Zone B","Hol a pokolban van a B zóna?","도대체 B구역은 어디에","کجای جهنم منطقه B است"];
let heightMove = 375;
let widthMove = 850;
let smallPrint = 32;
let futilityTimer = 0;
let priceSpam = 0;
let opus;
let stm;
let noButton;
let hasMoved = false;
let price = 49;

function preload(){
  opus = loadImage('/assets/images/place_opus.png');
  stm = loadImage('/assets/images/stm.png');
  let darkBlue;
  let orange;
  let white;
  let lightBlue;
}

/**
Description of setup
*/
function setup() {
  createCanvas (1600,900);
  mainScreen();
}

/**
Description of draw()
*/
function draw() {
}

function mainScreen(){
  let darkBlue = color (3,49,170);
  let orange = color(225,117,73);
  let lightBlue = color(137,205,240);
  let lightOrange = color(241,194,175);
  let backgroundBlue = color(66,194,255);

  background(backgroundBlue); // Background color
  pageNumber = 0;

  //Orange Header
  fill(orange);
  noStroke();
  rect(0,0,1600,200);
  fill(darkBlue); // Dark blue accent
  rect(800,500,800,400); // Blue square bottom left
  fill(lightOrange);
  textSize(64);
  text("Last Train to Angrignon",25,100);
  textSize(32);
  text("An Annoyance by Stephen Friedrich", 25,150);
  text("Navigate with Arrow Keys, Mouse, Spacebar, and Patience",25,190);

  // Light blue subheader
  fill(lightBlue);
  noStroke();
  rect(0,200,1600,100);

  // Welcome phrase
  textAlign(CENTER);
  fill (darkBlue);
  textSize(64);
  text(welcomePhrase[index],800,275);
  textAlign(LEFT);


  // Dark blue subheader
  fill(3,49,170);
  rect(150,370,1300,75);

  // Place Opus Card
  textSize(36);
  fill(255,255,255);
  text(promptOpus[index],550,420);

  // Place Opus image
  image(opus,200,325,275,350);

  //Choose Option text
  fill(255,255,255);
  textSize(32);
  text(chooseOption[index],850,550);

  //Bottom left button
  fill(225,117,73);
  rect(100,740,400,100);
  triangle(100,740,100,840,50,790); // Dimensions: 100 long angle, 50 short angle

  // Language Selector
  textSize(32);
  fill(255,255,255);
  text("English",100,800);

  //Bottom right button
  fill(225,117,73);
  rect(1100,740,400,100);
  triangle(1500,740,1500,840,1550,790);
  fill(255,255,255);
  text(oldCard[index],1120,800);

  // Top right button
  fill(225,117,73);
  rect(1100,600,400,100);
  triangle(1500,600,1500,700,1550,650);
  fill(255,255,255);
  if (noButton != true){
    textSize(smallPrint);
    text(newCard[index],1120,660);
  }

}

function languageGag(){
  index++;
  if(index == chooseOption.length){
    index = 0;
  }
  mainScreen();
}

function pricesScreen(){
  let darkBlue = color (3,49,170);
  let orange = color(225,117,73);
  let lightBlue = color(137,205,240);
  let lightOrange = color(241,194,175);
  let white = color (255,255,255);
  let price = 49;
  let priceSpam = 0;

  pageNumber = 1;
  background (3,49,170);
  fill(orange);
  rect(0,0,1600,200);

  //Header
  fill(white);
  textSize(48);
  text(pricesTitle[index], 100, 100);

  // Return button
  fill(orange);
  rect(100,740,400,100);
  triangle(100,740,100,840,50,790); // Dimensions: 100 long angle, 50 short angle

  // Return Text
  textSize(32);
  fill(255,255,255);
  text(nevermind[index],100,800);

  // End button
  fill(orange);
  rect(1100,740,400,100);
  triangle(1500,740,1500,840,1550,790);

  // End Text
  fill(white);
  text(giveUp[index], 1120, 800);

  // Gag 1 (click) - disappears
  fill(white);
  rect(850,375,650,100);
  triangle(1500,375,1500,475,1575,425);
  fill(0,0,0);
  text("ZoneA - 1 Trip",875,425);
  text("3,50 $",1375,460);

  // gag 2 (down) - preposterous price and eldritch text
  fill(white);
  rect(850,575,650,100);
  triangle(1500,575,1500,675,1575,625);
  fill(0,0,0);
  text(omegaBit[index],875,625);
  text("b̴̗͕̣̯͑̓̾͆̈ͅl̸̡͙͎̬̦̦͍̲̠̾͊ͅơ̸̡̨̻͎̻͍͚͇̭͍̯̻̺̪͐̂̀͋̌̓͒͑̇̀͊̈͑̈́ơ̸̧̩̋̾̐̓̉̅̃̇͆͠͠ḑ̶̛̲͎͍͖̺͎͖͓̠̂̉͑̀̌̐̓̇͐̾̅̈̀ $",1375,650);

  // gag 3 (space) - duplicates
  fill (white);
  rect(100,375,650,100);
  triangle(100,375,100,475,25,425);
  fill(0,0,0);
  text(loveOfGod[index], 100,420);
  text("9,,,,,,, $",600,460);

  // gag 4 (up) - price spirals out of control
  fill (white);
  rect(100,575,650,100);
  triangle(100,575,100,675,25,625);
  fill(0,0,0);
  text(zoneBGag[index],100,625);
  text(price+",99 $",600,650);
  }

function endingScreen(){
  let darkBlue = color (3,49,170);
  let orange = color(225,117,73);
  let lightBlue = color(137,205,240);
  let lightOrange = color(241,194,175);
  let white = color (255,255,255);
  let backgroundBlue = color(66,194,255);
  background(darkBlue);
  fill(orange);
  noStroke();
  rect(0,0,1600,200);
  fill(lightBlue);
  rect(0,200,1600,100);
  fill(darkBlue);
  textAlign(CENTER);
  textSize(64);
  text("Le Métro est fermé",800,275);
  fill(255,255,255);
  textSize(48);
  text("Le Métro va réouvrir à 5h30", 800, 400);
  text("Merci d'avoir utilisé la STM", 800, 500);
  image(stm,1300,700,200,100);
  textAlign(LEFT);
  textSize(36);
  text("Immobilité Collective", 950, 730);
}

function keyReleased(){
  if(keyCode === RIGHT_ARROW)
    {
      if (pageNumber == 0){
          pricesScreen();
      } else if (pageNumber == 1 && futilityTimer > 2){
          endingScreen();
      }
    } else if (keyCode === LEFT_ARROW)
    {
      if (pageNumber == 0){
          languageGag();
      } else if (pageNumber == 1){
          mainScreen();
      }
    } else if (keyCode === DOWN_ARROW){
      if (pageNumber == 1){
        fill(0,0,0);
        strokeWeight(1)
        stroke(255, 87, 51);
        rect(850,575,650,100);
        triangle(1500,575,1500,675,1575,625);
        noStroke();
        fill(255,87,51);
        text(omegaBit[index],875,625);
        text("b̴̗͕̣̯͑̓̾͆̈ͅl̸̡͙͎̬̦̦͍̲̠̾͊ͅơ̸̡̨̻͎̻͍͚͇̭͍̯̻̺̪͐̂̀͋̌̓͒͑̇̀͊̈͑̈́ơ̸̧̩̋̾̐̓̉̅̃̇͆͠͠ḑ̶̛̲͎͍͖̺͎͖͓̠̂̉͑̀̌̐̓̇͐̾̅̈̀ $",1375,650);
        fill(0,0,0);
        futilityTimer++;
      }
    } else if (keyCode === UP_ARROW){
      if (pageNumber == 0){
        smallPrint = smallPrint - 8;
        if (smallPrint == 0) {
            noButton = true;
          }
        mainScreen();
      } else if (pageNumber == 1){
        futilityTimer++;
        fill(0,0,0);
        for(priceSpam;priceSpam<400;priceSpam++){
            text(price+",99 $",random(1600),random(900));
            price++;
            }
        }
    } else if (keyCode === 32) {
      if (pageNumber == 1) {
        let heightCoord = random (900);
        let widthCoord = random (1600);
        noStroke();
        fill (255,255,255);
        rect(widthCoord,heightCoord,650,100);
        triangle(widthCoord+1,heightCoord,widthCoord+1,(heightCoord+100),(widthCoord-50),(heightCoord+50));
        fill(0,0,0);
        text(loveOfGod[index],widthCoord,heightCoord+45);
        text("9,,,,,,, $",widthCoord+500,heightCoord+85);
        futilityTimer++
      }
    }
}

function mouseReleased(){
  if(pageNumber == 1){
    fill(3,49,170);
    rect(825,375,775,150);
    futilityTimer++;
  }
}
