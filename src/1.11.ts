{//ternary operator || optional chaning || nullish coalescing operator


    const age: number = 18;

    const isAdult = age >= 18 ? "adult" : "not adult"
    console.log({ isAdult })

    //nullish coalescing operator
    //null/ undefined   ---> desicion making

   // const isAuthenticatted  = null ; false value null or undefined    

    const isAuthenticatted = "" //nullish coalescing operator only work for null or undefined if not null or undefined the return the value.

    // const result1 = isAuthenticatted ?? "Guest";  
    // const result2 = isAuthenticatted ? isAuthenticatted : "Guest" ; 
    // console.log({result1})
    // console.log({result2})


    type User = {
        name : string;
        address :  {
            city : string;
            road: string;
            presentAddress : string;
            permannentAddress?: string 
        }
    }

    const user:User = {
        name: "Perisain",
        address:  {
            city: "ctg",
            road: "Awesome Road",
            presentAddress: "ctg town"
        }
    }

    const permannentAddress = user?.address?.permannentAddress ?? "No Permanet Address";
    console.log({permannentAddress})
}