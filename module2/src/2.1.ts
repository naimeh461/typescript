{
    //type assertion
    // let anything : any;
    // anything = "Next Level Web Developer"

    // anything = 222;
    // (anything as number)

    const kgToGm = (value:string | number) : string | number | undefined => {
        if(typeof value === "string"){
            const convertedValue  = parseFloat(value)
            return convertedValue
        }
        if(typeof value === "number"){
            return value* 1000 / 3500
        }
    }

    const result1 =  kgToGm(1000) as number
    const result2 =  kgToGm("1000") as string
    console.log(result1, result2)
}