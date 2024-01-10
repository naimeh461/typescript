{
    //promise

    const createpromise = () =>{
         return new Promise((resolve, reject)=>{
            const data: string = "something"
            if(data){
                resolve(data);
            }else{
                reject("failed to load data");
            }
         })   
    }

    // calling create promise function
    const showData =async () => {
        const data = await createpromise()   ;
        console.log(data);
    }

    showData();
}