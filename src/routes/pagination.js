function pagination(model) {
    return async (req, res, next) =>{
        
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const modelLength = await model.countDocuments()
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        
        const results = {}
        //se enviara como resultado un objeto con 3 cosas next, previuos y el array de la data
        if (endIndex < modelLength) {  
            results.next = {
                page: page+1,
                limit:limit
            }
        }
        if (startIndex > 0) {
            results.previous = {
                page:page -1,
                limit: limit
            }
        }
        try {
            results.results = await model.find().limit(limit).skip(startIndex).exec()
            res.paginatedresults = results
            next()
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
}

module.exports = pagination