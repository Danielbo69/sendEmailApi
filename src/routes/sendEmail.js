const { Router, request } = require('express');
const router = Router();
const nodemailer = require('nodemailer');
const { env } = ("process");
require('dotenv').config();
const bodyParser = require('body-parser')
    // const emails = require('../emails.json');
    // parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
router.use(bodyParser.json())

router.get('/', (req, res) => {
    // res.json(emails);
});

router.post('/', async(req, res) => {
    // console.log(req.body);
    const transporte = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: process.env.TRANSPORTER_USER,
            pass: process.env.TRANSPORTER_PASSWORD
        }
    });

    try {
        const body = req.body;
        console.log(body)
        const content = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!--Bootstrap-->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        </head>

        <body style="background-color: #ccc">
    <div class="container" style="
        width: 100%;
        height: 100%;
        padding: 20px;
        background-color: #ccc;
    ">
        <div class="container">
            <div class="row">
                <div style="width: 100%; background-color: #fff">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="col-lg-8">
                            <h4 class="card-title" style="margin: 10px;">Name / Nombre:</h4>
                            <h4 class="card-title" style="margin: 10px;">Email / Correo:</h4>
                            <h4 class="card-title" style="margin: 10px;">Phone / Telefono:</h4>
                            <h4 class="card-title" style="margin: 10px;">Date / Fecha:</h4>
                            <h4 class="card-title" style="margin: 10px;">Adress / Dirección:</h4>
                            <h4 class="card-title" style="margin: 10px;">Type Event / Tipo de Evento:</h4>
                        </div>
                        <div class="col-lg">
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.name}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.email}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.phone}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.dateEvent}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.adress}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.typeEvent}</h4>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="col-lg-8">
                            <h4 class="card-title" style="margin: 10px;">Start / Inicio:</h4>
                            <h4 class="card-title" style="margin: 10px;">End / Final:</h4>
                            <h4 class="card-title" style="margin: 10px;">Ages / Edades:</h4>
                            <h4 class="card-title" style="margin: 10px;">indoor-Outdoor / Interior-Exterior:</h4>
                            <h4 class="card-title" style="margin: 10px;">Areas:</h4>
                            <h4 class="card-title" style="margin: 10px;">Package / Paquete:</h4>
                        </div>
                        <div class="col-lg">
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.startEvent}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.endEvent}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.ages}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.inOutdoor}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.areas}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.package}</h4>
                        </div>
                    </div> 
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="col-lg">
                            <h4 class="card-title" style="margin: 10px;">Packages Colors / Color de Paquete:</h4>
                            <h4 class="card-title" style="margin: 10px;">Extras:</h4>
                            <h4 class="card-title" style="margin: 10px;">Ball Pit / Piscina de Pelotas:</h4>
                            <h4 class="card-title" style="margin: 10px;">Balls Color / Color de las Pelotas:</h4>
                            <h4 class="card-title" style="margin: 10px;">Customize It / Personalizado:</h4>
                            <h4 class="card-title" style="margin: 10px;">Additional Details / Detalles Adicionales:</h4>
                        </div>
                        <div class="col-lg">
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.packagesColors}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.packagExtras}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.ballPit}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.ballColor}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.CustomizeIt}</h4>
                            <h4 class="card-subtitle mb-2 text-muted" style="margin: 10px;">${body.additionalDetails}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
        
        </html>`
        if (!req.body) {
            const info = await transporte.sendMail({
                from: `Soft Play ${process.env.TRANSPORTER_USER}`,
                to: 'danielboscanramos@gmail.com',
                subject: `New Event - Nuevo Evento | ${body.name}`,
                html: content
            })
            if (!info.error) {
                return res.send("Correo enviado")
            } else {
                return res.send(error)
            }
        } else {
            return res.send("Hubo un error")
        }
    } catch (error) {
        return res.send(error)
    }
})

module.exports = router;