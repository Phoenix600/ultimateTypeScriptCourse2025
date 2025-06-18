/**
 * There are Two Types Of Classes:
 *  1. Concrete Class  : Class Whose Object Can Be Created
 *  2. Abstract Class  : Class Whose Object Can Not Be Created
 *
 * There are Two Types Of Functions:
 * 1. Concrete Methods : Fully Implemented Functions
 * 2. Abstract Methods : Implementation less functions
 *
 *
 */

// Abstract Class
abstract class KFC
{
    abstract order():void;
    abstract payment():void;
    abstract cook():void;
    abstract delivery():void;
    abstract rating():void;
}

// Concrete Class
class VasudevNagarKFC extends KFC
{
    order(): void {
        console.log("Placing Order At VasudevNagarKFC.");
    }
    
    payment(): void {
       console.log("Payment At VasudevNagarKFC.");
    }
    
    cook(): void {
        console.log("Cooking Chicken At VasudevNagarKFC.");
    }
    
    delivery(): void {
        console.log("Delivering Chicken From VasudevNagarKFC.");
    }

    rating(): void {
        console.log("Giving Rating To VasudevNagarKFC.");
    }
    
}

let myKFC:KFC = new VasudevNagarKFC();
myKFC.cook();