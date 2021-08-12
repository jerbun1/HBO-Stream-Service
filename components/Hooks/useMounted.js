import { useEffect, useState } from "react";

//Hooks let you use react features without making a class
//This file is used for hooks so to check if the app has mounted or not
export const useMounted = () => {
  //Here is State Hook with the hasMounted variable with the setHasMounted function
  const [hasMounted, setHasMounted] = useState(false);

  //Here is the useEffect Hook to set the function to true if app is mounted

  // Example of mounting in React.js Here, componentDidMount is a method called automatically by React when a component is rendered.
  // The concept is that you're telling ReactJS, "please take this thing, this comment box or spinning image or whatever it is I want on the browser page, and go ahead and actually put it on the browser page. When that's done, call my function that I've bound to componentDidMount so I can proceed."
  https: useEffect(() => {
    setHasMounted(true);
  }, []);
  return { hasMounted };
};
