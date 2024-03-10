// In a separate file like firebaseStorage.js
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '$lib/firebase.js'; // Adjust the path as necessary



// @ts-ignore
export const uploadResume = async (file,doctitle) => {
    const storageRef = ref(storage, `${doctitle}/${new Date().getTime()}-${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
};

// @ts-ignore
export const uploadImage = async (file) => {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
};

// @ts-ignore
export const getResumes = async (folderName) => {
    const listRef = ref(storage, `${folderName}/`);
    try {
        const response = await listAll(listRef);
        return response.items; // An array of file references
    } catch (error) {
        console.error("Error fetching resumes: ", error);
        throw error;
    }
};

// @ts-ignore
export const getFileURLs = async (fileRefs) => {
    // @ts-ignore
    return Promise.all(fileRefs.map((ref) => getDownloadURL(ref)));
};