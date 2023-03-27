import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { createData, storeImg, storeMultipleImgs } from "../firebase/routes";
import { ensureUpload } from '../Utility/ensureUpload';
import { handleUpload } from '../Utility/handleUpload';

function ListingCreate() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false)

    const nav = useNavigate();

    const test = () => {
        // console.log(image)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        
        

        
        
        

        if (image.length > 1) {
            let prom = new Promise (async (resolve, reject) => {
                const data = await handleUpload(image, setUploading)
                if (data) {
                    resolve(data)
                } else {
                    reject(new Error("Promise error HandleUpload Logic"))
                }
                
            });
            prom.then(
                data => {
                console.log("Thisis the data:", data)
                    let obj = {
                        title: title,
                        price: price,
                        description: description,
                        location: location,
                        images: data
                    }
                    createData(obj);
                    nav("/home")
            },
            error => {
                console.error(error, "Whatever from ListingHandleSubmit")
            })
            
                    
                
            // await storeMultipleImgs(image)
            //     .then( async data => {
            //         console.log(data)
            //         let obj = {
            //             title: title,
            //             price: price,
            //             description: description,
            //             location: location,
            //             image: data
            //         }
            //         await createData(obj);
            //         console.log("ONTRACK")
            //     })
        }
        else {
            let tesst = await storeImg(image[0]);
            console.log(tesst)
        }



        // ensureUpload(uploading )
        // Send the listing data to firebase

        //testing img store
        // console.log(image)
        // storeImg(image);
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{uploading}</h1>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <br />
            <label htmlFor="price">Price:</label>
            <input
                type="number"
                id="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            <br />
            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <br />
            <label htmlFor="location">Location:</label>
            <input
                type="text"
                id="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
            />
            <br />
            <label htmlFor="image">Image:</label>
            <input
                type="file"
                id="image"
                multiple
                onChange={(event) => setImage(event.target.files)}
            />
            <br />
            <button type="submit">Create Listing</button>
            <button onClick={test}>Test</button>
        </form>
    );
}

export default ListingCreate