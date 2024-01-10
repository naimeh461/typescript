{
    // type script type
    // const rollNumber : number[] = [3, 6, 8]
    // const mentors : string [] = ["Mr. X", "Mr. Y",  "Mr. Z"]
    // const boolArray : boolean[] = [true, false, true]

    //generics
    const rollNumber: Array<number> = [3, 6, 8]
    const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"]
    const boolArray: Array<boolean> = [true, false, true]

    //type GenericArray<param> = Array<param> 
    type GenericArray<t> = Array<t>
    const rollNumber1: GenericArray<number> = [3, 6, 8]
    const mentors1: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"]

    const user: GenericArray<{ name: string; age: number }> = [
        {
            name: "mezba",
            age: 100
        },
        {
            name: 'jhankar mahabub',
            age: 110
        }
    ]

    //generic tuple
    type GenericTuple<X, Y> = [X, Y]
    const manush: GenericTuple<string, string> = ["Mr. X", "Mr.y"]

    //another example
    const UserWithID: GenericTuple<number, { name: string, email: string }> = [1234, { name: "yeasin", email: "a@gmail.com" }]
}