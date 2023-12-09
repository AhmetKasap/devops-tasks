'use client'

import { useEffect, useState } from "react"


export default function Home() {

  const [countries, setCountries] = useState()

  const [countriesName, setCountriesName] = useState()


  useEffect(() => {
    
  const countriesApi = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countriesName}`, {
        method : 'GET'
    })
    const data = await response.json()
    setCountries(data)
  }
  countriesApi()

  },[countriesName])

  console.log("countries",countries)
  
  return (
    <>
      <div className="w-1/2 mx-auto flex flex-col justify-center items-center m-4">
        <h1 className="text-white font-roboto text-5xl text-center">Ülke İsmi Girin</h1>

        <input onChange={(e) => setCountriesName(e.target.value)} type="text"  className=" h-10 w-1/2 border outline-none font-roboto p-2 mt-4 rounded-lg"/>

      
        {
          countries && countries.length >0 && countries.map(data => {
            return(
              <>
                <div className="text-white mt-8 border-2 w-1/2 rounded-lg m-5 p-5 border-slate-700">
                  <p className="m-2">  Ulke İsmi :   <b className="font-roboto text-blue-500"> {data.name.common} </b> </p>
                  <p className="m-2">  Kıta  : <b className="font-roboto text-blue-500">{data.region}</b>  </p>
                  <p className="m-2">  Başkent : <b className="font-roboto text-blue-500">{data.capital} </b> </p>
                  <img className="w-full rounded-lg mt-4" src={data.flags.png}/>
                </div>
              </>
            )
          })
        }

      </div>  

    </>
  )
}
