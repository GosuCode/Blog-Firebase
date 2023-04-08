import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'

const CreatePost = ({ isAuth }) => {

    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    const navigate = useNavigate()

    const postsCollectionRef = collection(db, "posts")

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        })
        navigate('/')
    }

    useEffect(() => {
        if (!isAuth) {          //block prohibited users
            navigate("/login")
        }
    }, []);
    return (
        <div className='bg-green-500'>
            <div>
                <h2>Create a Post</h2>
                <div className='p-2'>
                    <label htmlFor="title">Title: </label>
                    <input type="text" placeholder='Your title'
                        onChange={(event) => {
                            setTitle(event.target.value)
                        }}
                        className='rounded-md focus:outline-none' />
                </div>
                <div>
                    <label htmlFor="post">Post: </label>
                    <textarea placeholder='Your thoughts'
                        onChange={(event) => {
                            setPostText(event.target.value)
                        }}
                        className='rounded-md focus:outline-none' />
                </div>
                <button className='bg-yellow-400 rounded-md p-1' onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost
