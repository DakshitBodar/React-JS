import axios from "axios";

const uploadimage = async(filedata) =>{
    let imagedata = new FormData();

    imagedata.append('file', filedata);
    imagedata.append('upload_preset', 'megamart');
    imagedata.append('cloude_name', 'dum3ayegy');

    let res = await axios.post (`https://api.cloudinary.com/v1_1/dum3ayegy/image/upload`, imagedata)
    return res.data.secure_url;

}

export default uploadimage;