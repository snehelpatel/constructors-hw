import {it, expect} from "./test_lib";

// Constructors
// Only add code to *THIS* section!

//shift functions out of the instance and into the prototype.

function Human (option){
let opt = option || {};
this.alertness = opt.alertness || 0;

this.hasCoffee = opt.hasCoffee || false;
this.needsCoffee = opt.needsCoffee || true;


//allowing Coffee into Human
this.buy = function (purchase) {
  this.Coffee = purchase;
this.hasCoffee = true}
//ben drinking coffee


this.drink = function () {
this.alertness =+ 0.31
this.Coffee.full = false;
this.Coffee.empty = false;

//kenny/rodney

this.Coffee.carafs++;

if (this.Coffee.carafs === 3){
  this.Coffee.empty = true;
  this.alertness = 0.99;
    }
//end of Rodney's coffee
  }
//end of drink()
};
//end of Human 

function Coffee (options) {
  let opts = options || {};
this.full = true;
this.empty = true;
this.carafs = opts.carafs || 0;

}






// Do not ADD or MODIFY code below this line :D

it("should be sleepy at first", function () {
  let barry = new Human("Barry");
  expect(barry.alertness < 0.1).toBe(true);
});

it("needs coffee to wake up", function () {
  let marie = new Human("Marie");
  expect(marie.hasCoffee).toBe(false);
  expect(marie.needsCoffee).toBe(true);
});

it("can drink coffee to become more alive", function () {
  let ben = new Human("Ben");
  let omf = new Coffee("Orange Mocha Frappucino");
  // omf is full
  expect(omf.full).toBe(true);
// then ben buys it --still full
  ben.buy(omf);
//until he drinks it --not completely
  ben.drink();
// afterwhich his alertness increases to between 0.3 and 0.4
  expect(ben.alertness > 0.3 && ben.alertness < 0.4).toBe(true);
//after ben is done drinking coffee, omf isn't full or empty
  expect(omf.full).toBe(false);
  expect(omf.empty).toBe(false);
});

it("has coffee after buying it", function () {
  let daqunda = new Human("DaQunda");
  let cuban_blend = new Coffee("Fancy Cuban Blend");
  expect(daqunda.hasCoffee).toBe(false);
  daqunda.buy(cuban_blend);
  expect(daqunda.hasCoffee).toBe(true);
});

it("can drink all the coffee", function () {
  let kenny = new Human("Rodney");
  let tsmf = new Coffee("Triple Shot Mocha Frappucino");
  kenny.buy(tsmf);
  for(let i = 0; i < 3; i++) {
    kenny.drink();
  }
  expect(tsmf.empty).toBe(true);
  expect(kenny.alertness > 0.9).toBe(true);
});
