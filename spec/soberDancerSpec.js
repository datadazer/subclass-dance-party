describe("soberDancer",function(){

  var soberDancer;
  var timeBetweenSteps = 10000;
  var clock;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    soberDancer = new makeSoberDancer(5, 10, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(soberDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("", function(){
  });
});

