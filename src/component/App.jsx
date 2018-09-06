import React from "react";
import ReactDOM from "react-dom";
import main from './main.css';
const App = () => {
  return (
    <div className="body">
      <p>React here!</p>
      <p>Well, you made it to the end. Congratulations!! 🎉 Now that you know the basics (and a little more) of Webpack for React, you can go ahead and keep exploring and learning more advanced features and techniques.

Thank you for reading and I hope you enjoyed it. If you have any questions, suggestions or corrections let me know in the comments below. Don’t forget to give this article a Share and some Claps 👏👏.</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));