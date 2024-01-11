{
    //conditional type

    type a1 = number 
    type b1 = undefined

    type x= a1 extends null ? true : false  //conditional type
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

    type sheikh = {
        bike : string;
        car: string;
        ship: string;
    }

    //car ase kina /bike ase kina /ship kina /tractor ase kina

    type checkVehicle <T> = T extends keyof sheikh ? true : false;
    type HasPlane = checkVehicle<"plane">  //false
    type Hascar = checkVehicle<"car">      //true
}