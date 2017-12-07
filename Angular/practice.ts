var myNum: number =  5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4];
var myObj: object = { name:'Bill'};
var anythingVariable: any = "Hey";
var nythingVariable: any = 25; 
var arrayOne: Array<boolean> = [true, false, true, true]; 
var arrayTwo: Array<any> = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };

// object constructor
class MyNode {
    val: number = 0;
    _priv: number;
    
    constructor(val: number) {
        this.val = val
    };
    otherFunction(){
        this._priv = 10;
    };
};

var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction(): void{
    console.log("Hello World");
    return;
}
function sendingErrors(): never{
	throw new Error('Error message');
}