function Dog (options) {
let opts = options || {};
this.status = opts.status || "normal";
this.color = opts.color || "black";
// Sadie as Mason's
if (opts.owner === 'mason') {
  this.owner = 'sadie'
} else { opts.owner = {};}
//If Sadie's hunger is set to false, keept it that way and set the others to true??
if (opts.hungry === false) {
    this.hungry = false
  } else{ this.hungry = true

  };
};



export { Dog };
