export default function SeederImmovable(n, ImmovableTypes, CommonAreas, ImmovableStates, Adresses){
    let preference = []
    CommonAreas.forEach(element => {
        ((Math.floor(Math.random() * 10) + 1) > 5)? preference.push(element) : null  
    });
    const immovables =[]

    /*getAdType=()=>{
        var rand
        rand=Math.floor(Math.random()*(2-0));
        return rand
    }*/
     
    for (let i = 0; i < n; i++) {
        const Immovable = {
            Adress: Adresses[Math.floor(Math.random() * Adresses.length)],
            Bathrooms: (Math.floor(Math.random() * 10) + 1),
            Bedrooms: (Math.floor(Math.random() * 10) + 1),
            BuiltArea: (Math.floor(Math.random() * 200) + 50),
            BuiltLevel:(Math.floor(Math.random() * 10) + 6),
            BuiltTime: (Math.floor(Math.random() * 10) + 1) + "años",
            BuyCost: (Math.floor(Math.random() * 1003120) + 1213),
            CommonAreas: preference,
            Currency: "COP",
            Details: "texto aqui",
            ImmobavleType: ImmovableTypes[Math.floor(Math.random() * ImmovableTypes.length)],
            ImmovableNumber: (Math.floor(Math.random() * 200) + 50),
            ImmovableState: ImmovableStates[Math.floor(Math.random() * ImmovableStates.length)],
            InCondo: ((Math.floor(Math.random() * 10) + 1) > 5) ? true : false,
            IsBuilt: ((Math.floor(Math.random() * 10) + 1) > 5) ? true : false,
            KitchenType: "texto aqui",
            Levels: (Math.floor(Math.random() * 10) + 1),
            Neighbourhood: "texto aqui",
            Parking: (Math.floor(Math.random() * 10) + 1),
            PrivateArea:((Math.floor(Math.random() * 200) + 50)+40),
            ProjectId:"AEI0U1",
            RentCost: (Math.floor(Math.random() * 1003120) + 1213),
            ShortDetails:"Inmueble en venta, algun lugar",
            WebId:"1U0OIEA",
            Zone: "texto aqui"
        }
        /*if(getAdType()=0){
            Immovable.BuyCost=null;

        }else{
            Immovable.RentCost=null;
        }*/
        immovables.push(Immovable)  
    }
    
    return immovables
}