'use strict'
const mongoose=require('mongoose')
const Schema=mongoose.Schema
//para almacenar la contraseña con seguridad
// asi que la encriptamos con un algoritmo
//usamos la libreria bcrypt
const bcrypt=require ('bcrypt')
const crypto=require('crypto')

const UserSchema= new Schema({
    email:{type: String, unique:true, lowercase:true},
    displayName:String,
    avatar:String,
    password:{type:String, select:false},
    signupDate:{type:Date, default: Date.now()},
    lastLogin:Date
    })

    UserSchema.pre('save', (next)=>{
        console.log('estoy en pre1')
        let user= this
        console.log('pase el let user')
        //if (! this.isModified ('password'))         
          //  return next() ;      
    
        console.log('entre en pre3')
        console.log("aca el password: "+user.password)
        bcrypt.genSalt(10, (err,salt)=>{ console.log('aca1');
            if (err) return next(err)
            console.log('aca2');
            bcrypt.hash(user.password, salt, null, (err, hash)=>{
            
                if (err) return next(err)
                user.password=hash                
                console.log('user.password'+hash);
                next()
            })          
            console.log('despues de bcrypt');
        })
        console.log('aca4');
    })

    UserSchema.methods.gravatar=function(){
        console.log('estoy en gravatar1')
        if (!this.email) return 'https://gravatar.com/avatar/?s=200&d=retro'
        console.log('estoy en gravatar2')

        const md5=crypto.createHash('md5').update(this.email).digest('hex')
        console.log('estoy en gravatar3')
        return 'https://gravatar.com/avatar'+md5+'?s=200&d=retro'
    }
    module.exports = mongoose.model('User',UserSchema)
    