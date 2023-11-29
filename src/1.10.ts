{
    type FontendDeveloper = "fakibazDeveloper" | "juniorDeveloper"
    type fullstackDeveloper = "frontendDeveloper" | "experDeveloper"

    type Developer = FontendDeveloper | fullstackDeveloper
    const newDeveloper: FontendDeveloper = "juniorDeveloper"
}
{
    //union types


    type User = {
        name: string;
        email: string;
        gender: "male" | "female"
        bloodGroup?: "O+" | "A+" | "AB+"
    }

    const user1: User = {
        name: "Naime",
        email: "naimeh461@gmail.com",
        gender: "male"
    }

    type FrontendDeveloper = {
        skills : string[];
        desiganation1 : "Forntend Developer"
    }

    type BackendDeveloper = {
        skills: string[];
        desination2: "Backend Developer"
    }

    type FullStackDeveloper =  FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper : FullStackDeveloper = {
        skills : ["HTML", "CSS" , "Express"],
        desiganation1 : "Forntend Developer",
        desination2 : "Backend Developer"
    }
}