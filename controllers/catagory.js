const CATAGORY = require('../model/catagory');

exports.add = async function (req,res,next) {
    try {

        if(!req.body.name || !req.body.images){
            throw new Error("plz enter valid field")
        }
        const data = await CATAGORY.create(req.body)

        res.status(201).json({
            status : "successfull",
            message : " catagory created",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.all = async function (req,res,next) {
    try {
        // console.log(req.body);
        
        const data = await CATAGORY.find(req.body)

        res.status(200).json({
            status: "successfull",
            message: "catagory found",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.deldata = async function (req,res,next) {
    try {
        await CATAGORY.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status : "successfull",
            message : "catagory deleted"
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message: error.message
        })
    }
}

exports.updatdata = async function (req,res,next) {
    try {
        await CATAGORY.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            status: "successfull",
            message : "catagory updated"
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}