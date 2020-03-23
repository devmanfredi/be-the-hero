const express = require('express')

const app = express();

app.get('', (request, response) => {
    return response.json({
        event: 'Semana Omini Stack',
        aluno: 'Heuler Manfredi'
    })
});


app.listen(3333);