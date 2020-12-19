import "./App.css"
import randoService from "./services/randoService"
import React, { useState, useEffect } from "react"

const App = () => {
  const [randot, setRandot] = useState("")

  useEffect(() => {
    randoService
      .getRandot()
      .then((response) => {
        console.log(response.data)
        setRandot(response.data.quote)
      })
      .catch(() => {
        alert("Epic fail from getRando App")
      })
  }, [])

  const handleButton = () => {
    randoService
      .getRandot()
      .then((response) => {
        setRandot(response.data.quote)
      })
      .catch(() => {
        alert("Epic fail from getRandot ")
      })
  }

  return (
    <div>
      <h1 className="ml-5 mt-5">
        <b>Kanye Quotes</b>
      </h1>
      <div className="box1 d-flex flex-column align-items-center justify-content-around">
        <div className="box2 styles p-4 d-flex justify-content-center align-items-center">
          {randot}
        </div>
        <br />
        <div className="d-flex justify-content-center flex-end">
          <button className="button styles" onClick={handleButton}>
            Random
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
