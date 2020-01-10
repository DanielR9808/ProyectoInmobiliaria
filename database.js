const mongoose = require('mongoose');
const URI = "mongodb+srv://Ryu:Manga123@immovablecluster-1otk4.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URI)
  .then(db => { console.log("conexion a db"+db)})
  .catch(err => {console.log(err)})

module.exports = mongoose;
