const Blog = require('../models/blog')


const getCategoriey = (req,res) => {
    const categories = req.params.category

    Blog.find().then(blogs => {
        res.render('categories', {categories, blogs})

    })
}

const index = (req,res) => {
    Blog.find().then(data => {
        res.render('index', {data})
    })


    
}

const getContact = (req,res) => {
    res.render('contact')
}

const detailsPage = async (req,res) => {
    const blogId = req.params.detailsId
    console.log(blogId)

    Blog.findById(blogId).then(blogs => {
        res.render('details-page', {blogs})
    }).catch(err => {
        console.log(err)
    })
    


    
}

const categoryDetails =  (req,res) => {
    const detailsId = req.params.id
    const category = req.params.category

    Blog.find().then(blogs => {
        res.render('categories-details', {blogs, detailsId ,category })
    })
}






module.exports = {
    getCategoriey, getContact,index,detailsPage,categoryDetails
}