
import './App.css';
import {useState} from "react"

export default function App() {
  const [data, setData] = useState({
    title: "",
    url: "",
    copyright: "",
    date: "",
    details: "",
  })

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
        setData({
          title: `"${data.title}"`,
          url: data.hdurl,
          copyright: `Taken by: ${data.copyright}`,
          date: `Date: ${data.date}`,
          details: data.explanation
        }); // When the data is fetched will set the url of the image from the api and set it to the url of the page
      });
  }

  return (
    <>
    <div className="App">
      <h1 className='heading'>NASA's picture of the day</h1>

      <button className='renderbtn' onClick={fetchImage}>
        Reveal NASA image of the day
      </button>
      <div>
        <h2>{data.title}</h2>
       <img alt='' className="nasaImg" src={data.url}/>
      </div>


    </div>
    <div className='mainTextSection'>
        <h3 className='copyright'>{data.copyright}</h3>
        <h3 className='date' >{data.date}</h3>
        <h3 className='details' >{data.details}</h3>
      </div>
    </>
  );
}
