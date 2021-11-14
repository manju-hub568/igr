const mongoose = require('mongoose');

// mongodb+srv://AurumUser:latestPlacid@cluster0.icdds.mongodb.net/rera?retryWrites=true&w=majority

// mongodb+srv://rera:reraRERA@cluster0.p69ap.mongodb.net/rera?retryWrites=true&w=majority
// mongodb://localhost:27017/rera

mongoose.connect('mongodb://localhost:27017/revisedigr', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log('connection success');
}).catch((e) => {
    console.log(e);
})