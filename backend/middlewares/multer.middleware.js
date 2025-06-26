import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../configs/cloudinary.config.js";

const profileStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "user/profile/pic",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const uploadProfile = multer({ storage: profileStorage });

export default uploadProfile;
