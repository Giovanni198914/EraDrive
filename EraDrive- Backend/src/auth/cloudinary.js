import multer from "multer"
import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"

const photoUpload = multer({
    storage: new CloudinaryStorage({
      cloudinary,
      params: {
        folder: "EraDrive"
      },
    }),
  }).single('photo');

  export default photoUpload