{
    
    //mapped types
    const arrofNumbers: number[] = [1, 4, 5];
    // const arrofStrings: string[] = ['1', '4', '5'];

    const arrofStrings : string[] = arrofNumbers.map((number) => number.toString())

    console.log(arrofStrings);
}