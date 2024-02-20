const {capitalizeTextFirstChar, createArray, random} =require('../lab1')

//first problem
describe(" capitalizeTextFirstChar fn",()=>{
    it("takes a string, return type will be a string", ()=>{
        expect(capitalizeTextFirstChar("any sting")).toEqual(jasmine.any(String))
    })

    it("takes a string and return it after capitalize it",()=>{
        expect(capitalizeTextFirstChar("unit testing")).toEqual("Unit Testing")
    })
})

//second problem
describe(" createArray fn",()=>{
    it("test that the return value of type array", ()=>{
        expect(createArray(3)).toEqual(jasmine.any(Array))
    })

    it("test if we pass 2 it will return array of length 2 and test it includes 1",()=>{
        expect(createArray(2)).toHaveSize(2)
        expect(createArray(2)).toContain(1)
    })

    it("test if we pass 3 it will return array of length 3 and test it doesn't include 3",()=>{
        expect(createArray(3)).toHaveSize(3)
        expect(createArray(3)).not.toContain(3)
    })
})

//third problem
describe(" random fn",()=>{
    it("test that the return value is a number", ()=>{
        expect(random(1,10)).toEqual(jasmine.any(Number))
    })

    it("test if we pass 5,7 it will return a number >= 5 and <= 7",()=>{
        expect(random(5,7)).toBeGreaterThanOrEqual(5)
        expect(random(5,7)).toBeLessThanOrEqual(7)
    })

    it("test if we pass 3 it will return NaN",()=>{
        expect(random(3)).toBeNaN()
    })
})
