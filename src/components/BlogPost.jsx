import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogPost(){

    const {id}=useParams(); //useParam recupera variables del path
    const BASE_URL="https://jsonplaceholder.typicode.com/"
    const [post,setPost]=useState({});
    const [autor,setAutor]=useState({});

    useEffect(()=>{
        fetch(BASE_URL+"posts/"+id)
        .then(resp=>resp.json())
        .then(resp=>setPost(resp));
       
    },[])

    return(
        <>
            <h1>Post</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </>
    )
}export{BlogPost}


// fetch(BASE_URL+"users/"+user.userId)
       // .then(resp=>resp.json())
       // .then(resp=>setAutor(resp))        