import React from 'react'

function About() {
    return (
        <>
        <div className='container'>
            <div>
                <h1>About this CRUD </h1>
            </div>
            <hr/>
            <div>
                <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/crud.png" alt="CRUD image"/>
            </div>
            <div>
                <h1>What is CRUD?</h1>
                <ul>
                    <li>CRUD refers to the four basic operations a software application should be able to perform – Create, Read, Update, and Delete.</li>
                    <li>In such apps, users must be able to create data, have access to the data in the UI by reading the data, update or edit the data, and delete the data.</li>
                    <li>In full-fledged applications, CRUD apps consist of 3 parts: an API (or server), a database, and a user interface (UI).</li>
                    <li>The API contains the code and methods, the database stores and helps the user retrieve the information, while the user interface helps users interact with the app.</li>
                    <li>You can make a CRUD app with any of the programming languages out there. And the app doesn’t have to be full stack – you can make a CRUD app with client-side JavaScript.</li>
                    <li>In fact, the app with which I will be showing you how create, read, update and delete operations work is made with client-side JavaScript.</li>
                    <li>Each letter in the CRUD acronym has a corresponding HTTP request method.</li>
                </ul>
                <b>CRUD Operation	HTTP Request Method</b>
                 <pre>Create   Post</pre>
                 <pre>Read     GET</pre>
                 <pre>Update   PUT or PATCH</pre>
                 <pre>Delete   DELETE</pre> 
                 <hr/>          
            </div>
            <div>
                <h2>You can think about CRUD in this way:</h2>
                <ul>
                    <li>You create a social account and fill in your information - <code>CREATE</code></li>
                    <li>You get access to the information you entered and people can search for you – <code>READ</code></li>
                    <li>You get a new job at Google and changed your employment status to employed – <code>UPDATE</code></li>
                    <li>You get tired of social media toxicity and delete your account - <code>DELETE</code></li>
                </ul>
            </div>
        </div>
        </>
        
    )
}

export default About
