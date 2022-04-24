import axios from "axios";

async function uploadimg(file) {
  const fd = new FormData();
  fd.set("key", "663c09b925876925e4457bca273af1f8");
  fd.append("image", file);
  const res = await axios.post("https://api.imgbb.com/1/upload", fd);
  return {
    success: 1,
    file: {
      url: res.data.data.image.url,
    },
  };
}

export default uploadimg;
