function Robot(){
    var self = this;
    self.work = function() {
        console.log('I\'m a Robot - I just work');
    }
}

function CoffeRobot(){
    var self = this;
    Robot.call(this);
    self.work = function (){
        console.log('I\'m CoffeRobot - I make coffee');
    }
}

function RobotDancer(){
    var self = this;
    Robot.call(this);
    self.work = function (){
        console.log('I\'m a RobotDancer - I\'m just dancing');
    }
}

function RobotCoocker(){
    var self = this;
    Robot.call(this);
    self.work = function (){
        console.log('I\'m RobotCoocker - I\'m just cooking');
    }
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