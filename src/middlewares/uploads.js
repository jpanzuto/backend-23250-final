import multer from "multer";

function uploadFile() {
  const storage = multer.diskStorage({
    destination: function (req, file, res) {
      res(null, "uploads");
    },
    filename: function (req, file, res) {
      const fileName = Date.now() + "_" + file.originalname;

      res(null, fileName);
    },
  });

  const upload = multer({ storage: storage }).single("fileName");
  return upload;
}
export default uploadFile();
