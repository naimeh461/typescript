{
    //type Alias object
    type Student = {
            name : string;
            age: number;
            gender : string;
            contactNo? : string;
            address: string;
        
    }
    const student1 : Student = {
        name: "Mazher",
        age: 50,
        gender : "male", 
        contactNo: "017123232242",
        address: "ctg",
    }

    const student2 : Student = {
        name: "Mir",
        age: 40,
        gender: "male",
        address: "dhaka"
    }

      //type Alias for variable 
      type UserName  = string;
      type IsAdmin = boolean;

      const userName : UserName = "rohim"
      const isAdmin : IsAdmin = true  


      //type Alias for function 
      type Add = (num1: number , num2: number ) => number;
      const add : Add = (num1, num2) => num1+num2
}