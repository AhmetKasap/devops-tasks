const jwt = require('jsonwebtoken')
const Admin = require('../models/admin')
require('dotenv').config()
const bcrypt = require('bcrypt');
const Blog = require('../models/blog')


const getAdmin = (req,res) => {
    res.render('admin/admin')
}

const createToken = async(id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:'1d'})
}

const loginAdmin = async (req,res) =>{
   
    const checkUser = await Admin.findOne({name : req.body.name})

    if(checkUser && await bcrypt.compare(req.body.password, checkUser.password)) {
        console.log("giriş başarılı")
        const token = await createToken(checkUser._id)
        console.log(token)
        res.cookie('jsonwebtoken', token, {httpOnly : true, maxAge : 1000*60*60*24}) //* cookie ismi, oluşturulan token, özellikler
        res.redirect('/addBlog')
    }
    else{
        res.redirect('/admin')
    }
}


const getBlog = (req,res) => {
    res.render('admin/add-blog')
}

const postBlog = (req,res) => {
    const blog = new Blog(req.body)
    blog.save()
}

const getAllBlog = (req,res) => {
    Blog.find().then(blogs => {
        res.render('admin/all-blog', {blogs})
    })
    
}

const deleteBlog = (req,res) => {
    

    Blog.findByIdAndDelete(req.params.id).then(data => {
        res.redirect('/allBlog')
    })
}








module.exports = {
    getAdmin,loginAdmin,getBlog,postBlog, getAllBlog,deleteBlog
}