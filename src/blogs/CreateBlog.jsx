import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateBlog = () => {

    // 1. Create a new blog form: title, content, sector, author
    // 2. Create a state for each form field
    // 3. Update the input field to be required, set value as that of the state
    // 3.1 add an onChange event to update the state of the target field
    // 3.2 add a placeholder to the input field
    // 3.3 Display the states of the form fields below the form
    // 4. Create a submit button
    // 5. Add an onSubmit event to the form
    
    
    
   
    // 10. Clear the form after submission

    // 11: Add timeout to the form submission fetch API to simulate a slow network
    // 12. create a pending state for the submit button
    // 13. change the state of the button to pending when the form is submitted
    // 14.change the state of the button to active when the form is submitted
    // HW: add a spinner to the button when the state is pending
    
    const [title,setTitle ]=useState('');
    const [content,setContent]=useState('');
    const [sector,setSector]=useState('Health');
    const [author,setAuthor]=useState('');
    const [pending,setPending]=useState(false);
    const navigate=useNavigate();
    const postUrl='http://localhost:3099/blogs';


    // 6. Create a handleSubmit function to handle the form submission
    // 7. Prevent the default form submission

    function handleSubmitButton(event) {
        event.preventDefault();
        setPending(true);
    // 8. Create a blog object with the form field states
        const blog = {title,content,sector,author};
    // 9. Log the blog object to the console    
        console.log(blog);

     // 10 Make a POST request to the API with the blog object

     setTimeout(()=>{
        fetch(postUrl,{
            'method':'POST',
            'headers':{'Content-Type':'application/json'},
            'body':JSON.stringify(blog)
        })
        .then((res)=>{
            console.log('new blog added')
            setPending(false)
            // navigate('/blogs') //it redirects to blog page after blog added //

            navigate(2)
         })
        .catch((err)=>{
            console.log(err)
            setPending(false)
            });
        },5000);
    }
    return (
        <section>
            <h2>
                Create a new Blog
            </h2>
            <form  onSubmit={handleSubmitButton}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    placeholder="Enter the title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <br /> <br />
                <label>Content</label>
                <textarea
                    required
                    placeholder="Enter the content"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                >
                </textarea>
                <br /> <br />
                <label>Sector</label>
                <select
                    required
                    value={sector}
                    onChange={(e)=>setSector(e.target.value)}
                >
                    
                    <option value="Health">Health</option>
                    <option value="Finance">Finance</option>
                </select>
                <br /> <br />
                <label>Author</label>
                <input
                    type="text"
                    required
                    placeholder="Enter author name"
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                />
                <br /> <br />
                {!pending && <button>Add Blog</button>}
                {pending && <button disabled>Saving Post please wait</button>}
            </form>

            <h2>Input for form</h2>
            <p>Title: {title}</p>
            <p>Content : {content}</p>
            <p>Sector : {sector}</p>
            <p>Author is: {author}</p>
        </section>
    );
}

export default CreateBlog;



























/*

import { useState } from 'react';

const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [sector, setSector] = useState('Health');
    const [author, setAuthor] = useState('');
    const [pending, setPending] = useState(false);

    // 1. Create a new blog form: title, content, sector, author
    // 2. Create a state for each form field
    // 3. Update the input field to be required, set value as that of the state
    // 3.1 add an onChange event to update the state of the target field
    // 3.2 add a placeholder to the input field
    // 3.3 Display the states of the form fields below the form
    // 4. Create a submit button
    // 5. Add an onSubmit event to the form
    // 6. Create a handleSubmit function to handle the form submission
    // 7. Prevent the default form submission
    // 8. Create a blog object with the form field states
    // 9. Log the blog object to the console
    // 10 Make a POST request to the API with the blog object
    // 10. Clear the form after submission

    // 11: Add timeout to the form submission fetch API to simulate a slow network
    // 12. create a pending state for the submit button
    // 13. change the state of the button to pending when the form is submitted
    // 14.change the state of the button to active when the form is submitted
    // HW: add a spinner to the button when the state is pending

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, content, sector, author };
        console.log(blog);

        setPending(true);

        setTimeout(() => {
            fetch('http://localhost:3099/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                setPending(false);
                console.log('New Blog added');
            })
                .catch((err) => {
                    setPending(false);
                    console.log('Error: ', err);
                });
        }, 1000);

        // Clear the form after submission
        setTitle('');
        setContent('');
        setSector('Health');
        setAuthor('');
    }

    return (
        <section>
            <h2>
                Create a new Blog
            </h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Enter your blog title here'
                />
                <br /> <br />
                <label>Content</label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder='Enter your blog content here'
                >
                </textarea>
                <br /> <br />
                <label >Sector</label>
                <select
                    required
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                >
                    <option value="Health">Health</option>
                    <option value="Finance">Finance</option>
                </select>
                <br /> <br />
                <label>Author</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder='Enter the author name'
                />
                <br /> <br />
                {!pending && <button>Add Blog</button>}
                {pending && <button disabled>Adding Blog...</button>}
            </form>
            <h4>For Details</h4>
            <p>Title: {title}</p>
            <p>Content: {content}</p>
            <p>Sector: {sector}</p>
            <p>Author: {author}</p>
        </section>
    );
}

export default CreateBlog;


*/