"use client"
import React, { useState } from 'react'
import Link from 'next/link';

const Shorten = () => {
  const [url, setUrl] = useState('');
  const [shorturl, setShorturl] = useState('');
  const [generated, setGenerated] = useState();

  const generate = () => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl('');
        setShorturl('');
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);

        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg shadow-lg flex flex-col gap-6'>
      <h1 className=' font-bold text-2xl '>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input type="text" value={url} className='bg-white p-4 rounded-md focus:outline-purple-600 m-1' placeholder='Enter Your URL' onChange={e => { setUrl(e.target.value) }} />

        <input type="text" value={shorturl} className='p-4 bg-white rounded-md focus:outline-purple-600' placeholder='Enter Your Preferred Short URL Text' onChange={e => { setShorturl(e.target.value) }} />

        <button onClick={generate} className='bg-purple-500 text-white my-3 rounded-lg shadow-lg p-3 py-1 font-bold'>Generate</button>
      </div>
      {generated && <><span className='font-bold text-gray-600'>
        Your Link:</span> <code className='font-stretch-semi-condensed hover:underline hover:text-amber-600 text-blue-800'> <Link target="_blank" href={generated}>{generated}</Link>
        </code></>}
    </div>
  )
}

export default Shorten
