// const { v2 } = require ('cloudinary');
// const fs = require ('fs')
//  //const cloudinary=v2

//  console.log(process.env.CLOUDINARY_CLOUD_NAME)
//  v2.config({
// cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
// api_key:process.env.CLOUDINARY_API_KEY ,
// api_secret:process.env.CLOUDINARY_API_SECRET
// });
// //uploading image to cloudinary

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) {
//             return null;
//         }
//         const response = await v2.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         });
//         return response;
//     } catch (error) {
//         // Use fs.unlinkSync instead of fs.unlink and handle the error
//         try {
//             fs.unlinkSync(localFilePath);
//         } catch (unlinkError) {
//             console.error("Error while unlinking file:", unlinkError);
//         }
//         return null;
//     }
// };

// module.exports={uploadOnCloudinary}

const { v2 } = require('cloudinary');
const fs = require('fs');

// Function to configure Cloudinary
const configureCloudinary = () => {
  // Check if required environment variables are set
  if (
    !process.env.CLOUDINARY_CLOUD_NAME ||
    !process.env.CLOUDINARY_API_KEY ||
    !process.env.CLOUDINARY_API_SECRET
  ) {
    console.error('Cloudinary environment variables are not set.');
    return false;
  }

  // Configure Cloudinary
  v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  return true;
};

// Function to upload image to Cloudinary
const uploadOnCloudinary = async localFilePath => {
  try {
    // Ensure Cloudinary is configured
    if (!configureCloudinary()) {
      return null;
    }

    // Check if localFilePath is provided
    if (!localFilePath) {
      console.error('Local file path is not provided.');
      return null;
    }

    // Upload image to Cloudinary
    const response = await v2.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error.message);

    // Handle unlinking local file
    try {
      if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
      }
    } catch (unlinkError) {
      console.error('Error while unlinking local file:', unlinkError);
    }

    return null;
  }
};

const deleteFromCloudinary = async avatarUrl => {
  try {
    // Ensure Cloudinary is configured
    if (!configureCloudinary()) {
      return false;
    }

    // Extract public ID from the Cloudinary URL
    const publicId = avatarUrl.split('/').pop().split('.')[0];

    // Delete image from Cloudinary
    const response = await v2.uploader.destroy(publicId);

    return response.result === 'ok';
  } catch (error) {
    console.error('Error deleting image from Cloudinary:', error.message);
    return false;
  }
};

module.exports = { uploadOnCloudinary, deleteFromCloudinary };
