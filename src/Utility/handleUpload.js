import { getStorage,uploadBytes, ref, getDownloadURL } from "firebase/storage";



export async function handleUpload(imgs, setUploading) {
    
    const storage = getStorage();
    
    const data = []
    
    for ( let i = 0; i < imgs.length; i++){
        const storageRef = ref(storage, `/files/${imgs[i].name}`);
        uploadBytes(storageRef, imgs[i]).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            getDownloadURL(storageRef) 
                .then(url => {
                    console.log(url, "Data:", data)
                    data.push(url)
                })
            
        });
    }
    setUploading(false)
    console.log("Loading off" , data)
    return data;
}
// 'file' comes from the Blob or File API
