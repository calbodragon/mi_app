 const aboutMe=[{name:'cristhiam bohorquez'}];

 const study=[{school:'upb'},{university:'nacional'},{tecnology:'sena'},{diplomat:'pedagogia infantil'},{diplomat:'frontend'}];

 const experiecia=[{templobelen:'promagrmador web'},{betatestingamer:'istructivo de testing'}];

const express= require('express');
const app = express();
const path=require('path');
//
app.get('/', function (req,res){
    res.send(study);

})

app.get('/page',(req, res)=>{
    res.sendfile(path.join(__dirname+'/public/index.html'))
});


// 
app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
});
 