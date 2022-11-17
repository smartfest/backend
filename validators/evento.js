const {check} = require('express-validator') 
const {validateResult}=require('../helpers/validateHelper')


/*titulo:String,
    fecha_evento:{type:Date},
    horario_inicio:Date,
    descripcion:String,
    flyer:String,
    redes_sociales: [{ red: String, link: String }] ,     
    create_date:{type:Date, default: Date.now()},
    create_lastup:Date,
    id_usuario:Number,
    estado:{type: Number, default:1},
*/

const validateCreate=[
        check('titulo')
            // .exists().withMessage('exists es falsooooooo. No me fallesssss')
            //.notEmpty().withMessage("El titulo es requerido")
            .custom((value,{ req })=>{
                if (value === "")
                {
                    throw new Error('El titulo del evento no puede estar vacio');
                }
                return true;
            }),
        /*check('horario_inicio')
            .exists()
            .isNumeric()
            .custom((value,{req,})=>{
                if (value < 18 || value >40)
                {
                    throw new Error('Rango de edad debe ser entre 18 y 40')
                }
                return true
            })
            ,

        check('email')
            .exists()
            .isEmail(),*/
        (req,res,next) =>{
            validateResult(req,res,next)
        }
]
module.exports={validateCreate}