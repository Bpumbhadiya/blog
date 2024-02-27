const BLOG = require('../model/blog');

exports.adddata = async function (req,res,next) {
    try {
        if(!req.body.title || !req.body.discription ||!req.body.image ||!req.body.catagory ||
            !req.body.user  ){
                throw new Error("plz enter valid fields")
            }

            const data = await BLOG.create(req.body)
            res.status(201).json({
                status : "successfull",
                message : " Blog created",
                data : data
            }) 
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.alldata = async function (req,res,next) {
    try {
        const data =   await BLOG.find(req.body).populate('catagory').populate('user')
        res.status(200).json({
            status: "successfull",
            message : "blogs found",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.delete = async function (req,res,next) {
    try {
        await BLOG.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status : "successfull",
            message : "blog deleted"
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.update = async function (req,res,next) {
    try {
        const data = await BLOG.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            status : "successfull",
            message : "blog updated"
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}