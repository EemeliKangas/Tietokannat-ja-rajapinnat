const express = require('express');
const app = express();
app.use(express.json()); //pitää, olla jotta voidaan käyttää post-metodia
app.use(express.urlencoded({extended: false}))

app.get('/', //"etusivu"
    function(request, response){
        response.send('Bish Bash Bosh');
        console.log("Aamuja komentoriviltä");
    }
);

app.use( //Middleware kutsutaan
    function(req,res,next){ //middlewarea käytetään esim. logeihin ja virheenkäsittelyyn
        console.log('Yleinen middleware kutsuttu, suoritetaan aina');
        next();
    }
);

app.get('/example', 
    function(request,response){
        response.send('Esimerkki');
        console.log('Esimerkki');
    }
);

app.use(
    function(req,res,next){
        console.log('Tervehdys-middleware');
        next();
    }
);

app.get('/example/:name', //esimerkki get-syntaksista
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);

app.get('/example2/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

app.post('/', //esimerkki post-syntaksista
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

app.listen(3000,
    function() {
        console.log('Server running on port 3000');
    }
);