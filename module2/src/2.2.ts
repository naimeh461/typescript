{
    //type alias
    type User1 = {
        name: string,
        age: number
    }


    type UserWithRole1  = User1 & {role: string}
    const user1 : UserWithRole1 = {
        name : "hasan",
        age: 10,
        role: "student"
    }


    //interface
    interface User2{
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role : string
    }

    const user2 : UserWithRole2 = {
        name : "naime",
        age: 30,
        role: "developer"
    }

    
    //alias for array
    type Roll = number[];
    const rollNumber1 : Roll = [1,2,3]
    
    //interface for array
    interface Roll2 {
       [index: number] : number  //index      
    } 
    const rollNumber2 : Roll2 = [1,2,3]

    //alias for function
    type Add =(num1: number , num2: number) => number
    const add: Add = (num1, num2) => num1+num2

    //interface for function1. 
    interface Add2 {(num1: number, num2: number) : number}
    const addIn: Add2 = (num1, num2) => num1+num2
    
}