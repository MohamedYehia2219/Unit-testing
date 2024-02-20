const {User} = require("../lab2")

describe("User class", ()=>{
    let user;
    beforeEach(()=>{ user = new User("mohamed","123456")})

    //test add to cart method
    describe("add to cart fn",()=>{
        it("test logic of add to cart fn ", ()=>{
            let objProduct = jasmine.createSpyObj(["getId"]);
            user.addToCart(objProduct);
            expect(user.cart.length).toEqual(1)
        })
    })

    //test calculateTotalCartPrice function
    describe("test calculateTotalCartPrice", ()=>{
        it("test logic",()=>{
            let objProduct = jasmine.createSpyObj(["getId"]);
            objProduct.price=100;
            user.addToCart(objProduct);
            expect(user.calculateTotalCartPrice()).toEqual(jasmine.any(Number))
            expect(user.calculateTotalCartPrice()).toEqual(100)
        })
    })

    //test checkout function
    describe("test checkout", ()=>{
        it("test logic",()=>{
            let objPaymentModel = jasmine.createSpyObj(["goToVerifyPage","returnBack","isVerify"]);
            objPaymentModel.isVerify.and.callFake(()=>{
                return true;
            })
            user.checkout(objPaymentModel);
            expect(objPaymentModel.goToVerifyPage).toHaveBeenCalledTimes(1);
            expect(objPaymentModel.returnBack).toHaveBeenCalledTimes(1);
            expect(objPaymentModel.isVerify).toHaveBeenCalledTimes(1);
            expect(user.checkout(objPaymentModel)).toEqual(true);
        })
    })
})//class
