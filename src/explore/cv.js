import { Checkbox, FileInput, Label } from "flowbite-react";
import { Textarea, Card } from "flowbite-react";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import badehestore, { imageDb } from "../componets/firebase-admin/firebaseAdmin";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
import { Button } from "flowbite-react";
import Swal from 'sweetalert2';
export default function Cv(){
    
    
    // firebase uploading 
    // const [img,setImg] =useState('');
    // const [imgUrl,setImgUrl] =useState([]);

    // const handleClick = () =>{
    //  if(img !==null){
    //     const imgRef =  ref(imageDb,`files/${v4()}`)
    //     uploadBytes(imgRef,img).then(value=>{
    //         console.log(value)
    //         getDownloadURL(value.ref).then(url=>{
    //             setImgUrl(data=>[...data,url])
    //         })
    //     })
    //  }
    // }
    const [img, setImg] = useState(null);
    const [imgUrl, setImgUrl] = useState([]);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [id, setId] = useState('');
    const [show, setShow] = useState(false);
    const [val, setVal] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dbVal = await getDocs(collection(badehestore, "cv"));
                setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            } catch (error) {
                console.error("Error fetching documents: ", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const images = await listAll(ref(imageDb, "files"));
                const urls = await Promise.cv(images.items.map(async (item) => {
                    const url = await getDownloadURL(item);
                    return url;
                }));
                setImgUrl(urls);
            } catch (error) {
                console.error("Error fetching images: ", error);
            }
        };
        fetchImages();
    }, []);

    const handleCreate = async () => {
        try {
            // Upload image if it exists
            let imageUrl = '';
            if (img) {
                const imgRef = ref(imageDb, `files/${v4()}`);
                const snapshot = await uploadBytes(imgRef, img);
                imageUrl = await getDownloadURL(snapshot.ref);
            }
    
            // Display Swal confirmation dialog
            const confirmCreate = await Swal.fire({
                title: fname,
                text: lname,
                imageUrl: imgUrl,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Create",
                cancelButtonText: "Cancel",
                reverseButtons: true
            });
    
            // Proceed with document creation if the user confirms
            if (confirmCreate.isConfirmed) {
                await addDoc(collection(badehestore, "cv"), { Btitle: fname, Bsubtitle: lname, thePicture: imageUrl });
                setFname("");
                setLname("");
                setImgUrl('');
            }
        } catch (error) {
            console.error("Error creating document: ", error);
        }
    };
    const handleDelete = async (id) => {
        try {
            // Show confirmation dialog using Swal.fire()
            const confirmDELETE = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            });
    
            // Proceed with deletion if user confirms
            if (confirmDELETE.isConfirmed) {
                // Show success message after deletion
                await Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
    
                // Delete the document
                await deleteDoc(doc(badehestore, "cv", id));
            }
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    const handleEdit = (id, Btitle, Bsubtitle) => {
        setFname(Btitle);
        setLname(Bsubtitle);
        setId(id);
        setShow(true); // Set show state to true to display the editing fields
    };
    

    const handleUpdate = async () => {
        try {
            // Display a confirmation dialog with the values to be updated
            const confirmUpdate = await Swal.fire({
                title: fname,
                text: lname,
                imageUrl: imgUrl,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Update",
                cancelButtonText: "Cancel",
                reverseButtons: true
            });
    
            // Proceed with the update if the user confirms
            if (confirmUpdate.isConfirmed) {
                // Perform the update operation
                const updateData = doc(badehestore, "cv", id);
                await updateDoc(updateData, { Btitle: fname, Bsubtitle: lname, thePicture: imgUrl });
                setShow(false);
                setFname("");
                setLname("");
                setImgUrl("");
    
                // Show success message after update
                await Swal.fire({
                    title: "Updated!",
                    text: "Your changes have been saved.",
                    icon: "success"
                });
            }
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };
    // const handleUpdate = async () => {
    //     try {
    //         const updateData = doc(badehestore, "cv", id);
    //         await updateDoc(updateData, { Btitle: fname, Bsubtitle: lname, thePicture: imgUrl });
    //         setShow(false);
    //         setFname("");
    //         setLname("");
    //         setImgUrl('');
    //     } catch (error) {
    //         console.error("Error updating document: ", error);
    //     }
    // };



    return(
        <div className="grid place-content-center items-center mt-5">
            <h1 className="text-4xl font-bold text-center uppercase mt-8  "> update a blog on explore services</h1>
            <h3 className="text-4xl font-bold text-center  mt-4  ">Cv making blogs</h3>
            {/* file upload */}
            <div className="flex w-full items-center justify-center mt-8">
                    <Label
                        htmlFor="dropzone-file"
                        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <svg
                            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <FileInput id="dropzone-file" onChange={(e)=>setImg(e.target.files[0])} className="hidden" />
                    </Label>
            </div>
            {/* write text */}
                <div className=" flex justify-around mt-8 ml-14 ">
                    <div className="">
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value="Your updated content" />
                            </div>
                        <Textarea id="comment" placeholder="write a content or title of the blog" className="w-96" required rows={6}
                        value={fname} onChange={(e) => setFname(e.target.value)}
                          />
                    </div>
                    {/* add more */}
                    <div className="">
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value="add more subtitle" />
                            </div>
                        <Textarea id="comment" placeholder="add  more subtitle and content" className="w-96" required rows={6} 
                        value={lname} onChange={(e) => setLname(e.target.value)} 
                        />
                    </div>
                    {/* <button onClick={handleClick}>Upload</button> */}
                    {/* submit */}
                    
           
                   
            </div>
            <div className="flex gap-5 items-center ml-32">
            {!show? <Button onClick={handleCreate} outline gradientDuoTone="purpleToPink">
              Create
           </Button> :
            <Button onClick={handleUpdate} outline gradientDuoTone="purpleToPink">
                Update
            </Button>
             }
            </div>
            {/* view your update */}
            <h1 className="text-4xl font-bold text-center uppercase mt-10  ">Preview updated blog</h1>
            {/* render card */}
            <div className="mt-8 ml-14 grid place-content-center grid-cols-4 gap-4 ">
                {val.map((cardUpdate) =>(
                    <div className="grid">
                    
                        <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={cardUpdate.thePicture}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {cardUpdate.Btitle}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                            {cardUpdate.Bsubtitle}
                            </p>
                       </Card>
                        <div className="flex gap-5">
                        <Button gradientDuoTone="purpleToPink" onClick={() => handleDelete(cardUpdate.id)} >Delete</Button>
                        <Button gradientDuoTone="purpleToPink" onClick={() => handleEdit(cardUpdate.id, cardUpdate.Btitle, cardUpdate.Bsubtitle)}>Edit</Button>
                            {/* <button className="bg-rose-800 rounded-lg text-white"  onClick={handleDelete}>Delete</button>
                            <button className="bg-purple-800 rounded-lg text-white"  onClick={handleEdit}>Edit</button> */}

                        </div>
            </div>
                ))}
                
                

            </div>
           
        </div>
    );
}