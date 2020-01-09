export default function SeederImmovables(n, preference, purchaseType, immovableType){
    let newPreferences = []
    const getRandom = (preference) =>{
        let random = Math.random() * preference.length
        for (let i = 0; i < random; i++){
            newPreferences.push(preference[Math.floor(Math.random() * preference.length)])
        }
    }
    newPreferences = getRandom(preference)
    let immovables = []
    for (let i = 0; i < n; i++) {
       let immovable = {
            Addres: "text",
            Bathrooms: Math.floor(Math.random() * 5),
            Bedrooms: Math.floor(Math.random() * 5),
            BuiltArea: Math.floor(Math.random() * 100) + "m2",
            BuiltTime:Math.floor( Math.random() * 5),
            CommonAreas : newPreferences,
            Currency : "COP",
            Details : "text",
            ImmovableType: immovableType[Math.floor(Math.random() * immovableType.length)],
            ImmovableState: purchaseType[Math.floor(Math.random() * purchaseType.length)],
            InCondo :"Si",
            IsBuilt: "Construido",
            KitchenType:"abierta",
            Levels:1,
            Neighbourhood:"Caobos",
            Parking:1,
            Zone:"Cucuta, Norte de Santander"

       }
        immovables.push(immovable)
    }

    return immovables
}
