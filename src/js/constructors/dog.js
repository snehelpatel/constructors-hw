function Dog (options) {
let opts = options || {};
this.status = opts.status || "normal";
this.color = opts.color || "black";
// All instances of dog have no owner properties, which reads as undefined? Need to give Sadie owner === 'mason' while leaving the other dog's undefined.  
if (opts.owner === 'mason') {
  this.owner = 'sadie'
} else { opts.owner}
//Since Sadie's hunger is set to false, keept it that way and set the others to true??
if (opts.hungry === false) {
    this.hungry = false
  } else{ this.hungry = true

  };
};

//shift functions out of the instance and into the prototype

export { Dog };
