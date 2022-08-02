import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, res) {
    res(null, "uploads");
  },
  filename: function (req, file, res) {
    const imageProfile = Date.now() + "_" + file.originalname;
    res(null, imageProfile);
  },
});

const upload = multer({ storage: storage });

export default upload;
