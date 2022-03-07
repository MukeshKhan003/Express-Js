const express = require('express');
const path = require('path');

const app = express();

//Render application First Step
// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

//static method
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
    console.log(`Server startd ${PORT}`);
});
