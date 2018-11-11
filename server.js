const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/get_best_algo', (req, res) => {
    var mat_to_solve = req.body.matrix;
    console.log(mat_to_solve.mit);
    res.send({res: 1});
});

app.listen(port, () => console.log(`Listening on port ${port}`));