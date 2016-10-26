

#### Using Object Constructors and Prototypes

Dogs are Brit's favorite.

#####Constructors

Constructors create instances of objects.

Be mindful of safe mode and strict mode inconsistencies when using `this`.
In this assignment, `this` stayed in the constructor and referred to the instance being created.

#####Prototypes

Prototypes are object properties (sometimes with their own protos). They carry content that is available to all instances of that particular object. Keep in mind how the object is nested and what things are stored in which protos to know what actually has access to the content of the proto.  

I defined methods inside of constructor instead of in the prototype where functions don't have to exists in every instance of an object and run unnecessarily. Data for constructors. Methods for prototypes.

[Hello, Constructors!](http://tiy-snehelpatel-constructors-hw.surge.sh)
