const AppError = require("./appError")
const multer = require("multer")

// const multerStorage = (entity) => {
//     return multer.diskStorage({
//         destination: (req, file, cb) => {
//             //the first argument is err if not then it's null
//             cb(null, `${publicFolder}/${entity}`)
//         },
//         filename: (req, file, cb) => {
//             cb(null, `${Date.now()}_${entity}-${file.originalname}`)
//         }
//     });
// }
const multerStorage = multer.memoryStorage();
// const publicFolder = "public/images"

//multer will only accepts image 
//using mimetype image/imageExtension
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image"))
        cb(null, true)
    else
        cb(new AppError("Not an image, please upload only Images", 400), false)
}


const uploadUserImageConfiguration = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})


const uploadPostImageConfiguration = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})



const uploadUserImage = uploadUserImageConfiguration.single("media")
const uploadPostImage = uploadPostImageConfiguration.single("media")


module.exports = {
    uploadUserImage, uploadPostImage
}