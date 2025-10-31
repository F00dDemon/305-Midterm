import express from 'express';

const app = express();

const PORT = 3006;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.render('home');

});

app.post('/submit-flight', (req, res) =>{
    res.render('thankyou');

});

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`);

}); 