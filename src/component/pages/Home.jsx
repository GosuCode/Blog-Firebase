import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore'
import { auth, db } from '../../firebase-config'

const Home = ({ isAuth }) => {
    const [post, setPost] = useState([])
    const postsCollectionRef = collection(db, "posts")

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getPosts()
    }, [])

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc)
    }
    return (
        <div>
            {
                post.map((val, i) => {
                    return <div key={i}>
                        <div>
                            {val.title}
                        </div>
                        {!isAuth && val.author.id === auth.currentUser.uid &&
                            <div>
                                <button onClick={() => { deletePost(val.id) }} className='bg-red-600 py-1 px-4'>X</button>
                            </div>
                        }
                        <div>
                            {val.postText}
                        </div>
                        <h3>{val.author.name}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default Home
