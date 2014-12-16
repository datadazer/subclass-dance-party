var makeSoberDancer = function(top, left, timeBetweenSteps) {
  // run makeDancer with 'this' set to an instance of makeSoberDancer
  makeDancer.call(this, top, left, timeBetweenSteps);
};

// create an object that delegates to the object at .prototype of makeDancer and assign it to the sober .prototype property
makeSoberDancer.prototype = Object.create(makeDancer.prototype);
makeSoberDancer.prototype.constructor = makeSoberDancer;
makeSoberDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // custom sober rocking back and forth awkwardly
  // ... this.$node.doSomething
};
