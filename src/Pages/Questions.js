import React,{useState}from 'react'
import "../Pages/Questions.css"

function Questions() {
    const [question1,setQuestion1]=useState(true)

function toggle1(){
    setQuestion1(!question1)
}

const paragraph1 = (<p>This website offrers the visitors a chance to know what shows people recommend. When you visit the movies category from the side bare, you'll see all the movie listings with their description, ratings, genre and when you tap on the image poster, you'll be directed on where to start watching it from.</p>)

  return (
   <>
   <div className="question1">
    <button onClick={toggle1} className="questionBtn1">
        <h1 className="myquestion1">
            What is this website about?
        </h1>
    </button>
    {question1 ? <p>{paragraph1}</p> : null}
   </div>
   
   
   </>
  )
}

export default Questions