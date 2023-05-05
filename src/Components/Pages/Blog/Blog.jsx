import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaArrowDown } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {

    const options = {
        orientation: "landscape",
        unit: "px",
        formal: [400, 720]
    }

    return (



        <Container>

            <div className='mt-5 text-center' >
            <Pdf targetRef={ref} options={options} filename="Blog_Questions_part1.pdf">
                {({ toPdf }) => (
                    <Button onClick={toPdf} className="btn-danger">
                        Download pdf <FaArrowDown className="mx-1" />
                    </Button>
                )}
            </Pdf>
            </div>
            <div ref={ref}>
                <h4 className="mt-5 ">1. Tell us the differences between uncontrolled and controlled components.</h4>
                <p>
                    Controlled components are React components that are fully controlled by React state, while uncontrolled components are components that have their own internal state.<br></br>
                    In controlled components, the state of the component is managed by React, and all updates to the state are done through setState(). In uncontrolled components, the state is managed internally by the component and can be accessed using refs.<br></br>
                    Controlled components are more flexible and powerful, but they require more code. Uncontrolled components are simpler and require less code, but they are less flexible.
                </p>
                <h4 className="my-2 ">2. How to validate React props using PropTypes</h4>
                <p>
                    PropTypes is a package that allows you to define the types of the props that are passed to a React component.<br></br>
                    You can use PropTypes to validate the types of the props, as well as to ensure that the props have certain values.<br></br>
                    To use PropTypes, you need to import it from the 'prop-types' package and define the propTypes object in your component.
                </p>
                <h4 className="my-2 ">3. Tell us the difference between nodejs and express js.</h4>
                <p>
                    Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code on the server side.<br></br>
                    Express.js is a web application framework built on top of Node.js. It provides a set of tools and features that make it easier to build web applications.<br></br>
                    Node.js provides the core functionality for building web applications, while Express.js provides additional features such as middleware, routing, and templating.<br></br>
                    Node.js is a low-level platform, while Express.js is a high-level framework. You can use Node.js to build your own web application framework, but it would require a lot of work. Express.js provides a lot of the common features that you need for building web applications out-of-the-box.
                </p>
                <h4 className="my-2 ">4. What is a custom hook, and why will you create a custom hook?</h4>
                <p>
                    A custom hook is a JavaScript function that starts with the word 'use' and uses one or more of the built-in React hooks (such as useState, useEffect, useContext, etc.) to provide some custom functionality.<br></br>
                    You can create a custom hook to encapsulate some common logic that can be reused across multiple components. For example, if you have some complex state management logic that you need to use in multiple components, you can create a custom hook that encapsulates that logic and use it in the components.<br></br>
                    Custom hooks can also help you to keep your components more focused and simple. By moving some of the complex logic into a custom hook, you can keep your components more focused on their primary responsibilities.<br></br>
                    Creating a custom hook also makes it easier to test and debug your code, as you can test and debug the custom hook independently of the components that use it.
                </p>

            </div>
        </Container>
    );
};

export default Blog;