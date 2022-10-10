import React from "react";

const Blog = () => {
  return (
    <div className="my-10">
        <h1 className="text-6xl font-bold my-10">FAQ's</h1>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-9/12 mx-auto"
      >
        <div className="collapse-title text-xl font-medium">
        what is the purpose of the react router ?
        </div>
        <div className="collapse-content">
          <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-9/12 mx-auto"
      >
        <div className="collapse-title text-xl font-medium">
        How does context API work ?
        </div>
        <div className="collapse-content">
          <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-9/12 mx-auto"
      >
        <div className="collapse-title text-xl font-medium">
        usehref hook in react
        </div>
        <div className="collapse-content">
          <p>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the Link component in react-router-dom to see how it uses useHref internally to determine its own href value.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
