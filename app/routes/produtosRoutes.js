const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Rota padrão</h1>
            </body>
        </html>
    `);
})

module.exports = router; // Exporte o roteador