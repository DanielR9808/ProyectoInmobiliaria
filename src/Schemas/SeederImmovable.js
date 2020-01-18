export default function SeederImmovable(n, ImmobavleTypes, CommonAreas, ImmovableStates, Adresses){
    let preference = []
    CommonAreas.forEach(element => {
        ((Math.floor(Math.random() * 10) + 1) > 5)? preference.push(element) : null  
    });
    const immovables =[]

    getAdType=()=>{
        return rand=Math.floor(Math.random()*(2-0));
    }
     
 
    for (let i = 0; i < n; i++) {
        const Immovable = {
            Adress: Adresses[Math.floor(Math.random() * Adresses.length)],
            Bathrooms: (Math.floor(Math.random() * 10) + 1),
            Bedrooms: (Math.floor(Math.random() * 10) + 1),
            BuiltArea: (Math.floor(Math.random() * 200) + 50),
            BuiltTime: (Math.floor(Math.random() * 10) + 1) + "años",
            CommonAreas: preference,
            Currency: "COP",
            Details: "texto aqui",
            ImmobavleType: ImmobavleTypes[Math.floor(Math.random() * ImmobavleTypes.length)],
            ImmovableNumber: (Math.floor(Math.random() * 200) + 50),
            ImmovableState: ImmovableStates[Math.floor(Math.random() * ImmovableStates.length)],
            InCondo: ((Math.floor(Math.random() * 10) + 1) > 5) ? true : false,
            IsBuilt: ((Math.floor(Math.random() * 10) + 1) > 5) ? true : false,
            KitchenType: "texto aqui",
            Levels: (Math.floor(Math.random() * 10) + 1),
            Neighbourhood: "texto aqui",
            Parking: (Math.floor(Math.random() * 10) + 1),
            RentCost: (Math.floor(Math.random() * 1003120) + 1213),
            BuyCost: (Math.floor(Math.random() * 1003120) + 1213),
            Zone: "texto aqui"
        }
        if(getAdType=0){
            Immovable.BuyCost=null;

        }else{
            Immovable.RentCost=null;
        }
        immovables.push(Immovable)
    }
    
    return immovables
}