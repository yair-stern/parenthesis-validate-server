const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());

app.post ('/api/validate', (req, res) => {
    if (searchText(req, res)) res.send(validate(req.body.text));    
});

//this function not necessary if the client can't omit "text"
function searchText(req, res) {
    if (req.body.text === undefined)
        res.status(400).send("error 400. missing text");
    else return true;
}

function validate (text) {
    let parenthesis = [...text];
    let j = 0; //counts the opened parenthesis
    for (let i=0; i<parenthesis.length; i++) {
        if ((parenthesis[i]==='(')||(parenthesis[i]==='[')||(parenthesis[i]==='{')) {
            parenthesis[j]=parenthesis[i];
            j++;
        }
        else {
            //the difference is Ascii: '('-')' = 1; '['-']', '{'-'}' = 2;
            if ((j>0)&&
                (parenthesis[i].charCodeAt()-parenthesis[j-1].charCodeAt()===1||
                parenthesis[i].charCodeAt()-parenthesis[j-1].charCodeAt()===2))
                j--;
            else return false;
        }
    }
    if (j===0) return true;
    else return false;
}


app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
