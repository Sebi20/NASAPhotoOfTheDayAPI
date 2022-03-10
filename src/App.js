
import './App.css';
import {useState} from "react"

export default function App() {
  const [url, setUrl] = useState(""); // This represents the url of the image
  const [copyright, setRights] = useState(""); // This represents the copyright of the image

  function fetchImage() {
    //The fetch method uses a url to get the data from the api and turns it into a response
    //if the response is sucessful then I use the .json function to turn the response into an object.
    fetch("https://api.nasa.gov/planetary/apod?api_key=szlRkS4z8F18ogUB1pvvgrAMCGNc4yKDkQ24PTvM")
    .then((response) => {
      if (!response.ok) {
        console.log("ohh no 😕. They shut me off from the API");
        document.write("ohh no😕");
        } // End of if statement
        return response.json();
      })
      .then((data) => {
        setUrl(data.hdurl); // When the data is fetched will set the url of the image from the api and set it to the url of the page
      });
  }

  return (
    <div className="App">
      <h1>NASA's picture of the day</h1>

      <button className='renderbtn' onClick={fetchImage}>
        Reveal NASA image of the day
      </button>
      <div>
       <img alt='' className="nasaImg" src={url} />
      </div>
    </div>
  );
}
