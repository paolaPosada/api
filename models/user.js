'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Encriptar contraseñas
const bccrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

const UserSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    displayName: String,
    avatar: String,
    password: { type: String, select: false },
    singUpDate: { type: Date, default: Date.now() },
    lastLoguin: Date
})

UserSchema.pre('save', (next) => {
    let user = this
    //if (!user.isModified('password')) return next()

    bccrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)

        bccrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return next(err)
            this.password = hash
            next()
        })
    })
})

UserSchema.methods.gravatar = function (size) {
    if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`
    
    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', UserSchema)