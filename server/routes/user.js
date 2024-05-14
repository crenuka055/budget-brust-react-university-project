import express from 'express'
import bcryt from 'bcrypt'
const router = express.Router();
import {User} from '../models/User.js'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

// SignUp
router.post('/signup', async (req, res) => {
    const {username, email, password} = req.body;
    const user = await User.findOne({email})
    if(user) {
        return res.json({message: "User already existed"})
    }

    const hashpassword = await bcryt.hash(password, 10)
    const newUser = new User({
        username,
        email,
        password: hashpassword,
    })

    await newUser.save()
    return res.json({status: true, message: "record registed"})
})

// Login
router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user)
        return res.json({message: "User isn't registered"})

    const validPassword = await bcryt.compare(password, user.password)
    if(!validPassword)
        return res.json({message: "Password is incorrect."})

    const token = jwt.sign({username: user.username}, process.env.KEY, {expiresIn: '1h'})
    res.cookie('token', token, {httpOnly: true, maxAge: 360000})  //maxAge expire in 1hr(360000), will expire from he cookies || httpOnly: this is for the security purpose that no one can  access the token from JavaScript, If you don't add this then they will able to access it from the javascript code. (it's only access just through http request)
    return res.json({status: true, message: "Login successfully"})

})

// Forget Password
router.post('/forget-password', async (req, res) => {
    const {email} = req.body;
    try {
        const user = await User.findOne({email})

        if(!user) 
            return res.json({message: "User didn't registered!"})

            const token = jwt.sign({id: user._id}, process.env.KEY, {expiresIn: '5m'})

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'crenuka055@rku.ac.in',
                  pass: 'lhjv aosy bqmo jjvo'
                //   cvtg ipot chna rait
                }
              });

              const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E")
            //   var mailOptions = {
            //         from: '"Reset Password Now! 🔥🔥" <crenuka055@rku.ac.in>',
            //         to: email,
            //         subject: 'Reset Password',
            //         text: 'http://localhost:5173/resetPassword/${encodedToken}'
            //   };
              
              var mailOptions = {
                from: '"Forget Password!? 👻🔥" <crenuka055@rku.ac.in>',
                to: email,
                subject: 'Reset Password',
                text: 'http://localhost:5173/resetpassword/'+ token
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                //   console.log(error);
                    return res.json({message: "Error occured:  During sending the mail!"})
                } else {
                //   console.log('Email sent: ' + info.response);
                    return res.json({status: true, message: "email sent"})
                }
              });

    } catch(err) {
        console.log(err)
    }
});

// Reset Password
router.post('/reset-password/:token', async (req, res) => {
    const {token} = req.params;
    const {password} = req.body;
    
    try {
        const decoded = await jwt.verify(token, process.env.KEY);
        const id = decoded.id;
        const hashPassword = await bcryt.hash(password, 10)
        await User.findByIdAndUpdate({_id: id}, {password: hashPassword})
        return res.json({status: true, message: "Updated Password!"})
    } catch(err) {
        // console.log(err)
        return res.json("Invalid token")
    }
})

const verifyUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token) {
            return res.json({status: false, message: "no token"});
        }
        const decoded = await jwt.verify(token, process.env.KEY);
        next()
    } catch(err) {
        return res.json(err)
    }
}

router.get('/verify', verifyUser, (req, res) => {
    return res.json({status: true, message: "authorized"})
});


router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({status: true})
})

export {router as UserRouter}