function Person (options) {
  options = options || {};
  this.name = options.name;
//petting Sadie to status happy
  this.pet = function (dog) {dog.status = 'happy'};
//feeding Moonshine until hungry false
  this.feed = function (dog) {dog.hungry = false};
  //Who's cool
  if (options.cool === true) {
      this.cool = true
    } else{ this.cool = false

};

};

export { Person };
