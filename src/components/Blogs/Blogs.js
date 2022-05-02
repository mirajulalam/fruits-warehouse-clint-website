import React from 'react';
import question1 from '../../Images/question.png';
import question3 from '../../Images/question3.jfif';
const Blogs = () => {
    return (
        <div>
            <div className='text-center '>
                <img style={{ width: "400px" }} src={question1} alt="" />
            </div>
            <h3>Question No1: Difference between javascript and node.js?</h3>
            <h5>No1: javascript</h5>
            <p>Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.Javascript is used in frontend development.	Some of the javascript frameworks are RamdaJS, TypedJS, etc.It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++.
            </p>
            <h5>No2: node.js</h5>
            <p>NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript.Nodejs is used in server-side development.Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.Nodejs is written in C, C++ and Javascript.</p>
            <h3>Question No2: When should you use nodejs and when should you use mongodb?</h3>
            <h5>No1:  I should use node.js</h5>
            <p>Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
            <h5>No2: I should use monbodb</h5>
            <p>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
            <div className='text-center '>
                <img style={{ width: "400px" }} src={question3} alt="" />
            </div>
            <h3>Question No3: Differences between sql and nosql databases?</h3>
            <h5>No1: sql</h5>
            <p>SQL databases are relational.SQL databases use structured query language and have a predefined schema.SQL databases are vertically scalable.SQL databases are table-based.SQL databases are better for multi-row transactions.</p>
            <h5>No2: nosql</h5>
            <p>NoSQL databases are non-relational.NoSQL databases have dynamic schemas for unstructured data.while NoSQL databases are horizontally scalable.NoSQL databases are document, key-value, graph, or wide-column stores.NoSQL is better for unstructured data like documents or JSON.</p>
        </div>
    );
};

export default Blogs;