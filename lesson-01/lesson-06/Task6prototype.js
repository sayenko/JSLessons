function Robot(){}
Robot.prototype.work = function() {
    console.log('I\'m a Robot - I just work');
}

function CoffeRobot(){}
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;
CoffeRobot.prototype.work = function (){
    console.log('I\'m CoffeRobot - I make coffee');
}

function RobotDancer(){}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
RobotDancer.prototype.work = function (){
    console.log('I\'m a RobotDancer - I\'m just dancing');
}

function RobotCoocker(){}
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;
RobotCoocker.prototype.work = function (){
    console.log('I\'m RobotCoocker - I\'m just cooking');
}

var roboArray = [
    new Robot(),
    new CoffeRobot(),
    new RobotDancer(),
    new RobotCoocker()
];
for (var robo in roboArray){
    roboArray[robo].work();
}