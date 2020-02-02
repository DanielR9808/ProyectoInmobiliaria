const ObjectId = require('mongoose').Types.ObjectId; 
function immoMiddle(model){
    return async (req, res) =>{
        
       
        
        const results = {}
        //se enviara como resultado un objeto con 3 cosas next, previuos y el array de la data
    
            
        
        try {
            results = await model.find({_id: new ObjectId(req.params.id)})
            res.immo = results
            
          
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
}

module.exports = immoMiddle
