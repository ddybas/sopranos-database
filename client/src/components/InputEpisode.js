import React, { useState } from 'react'
import axios from "axios";



const InputEpisode = () => {

    const [season, setSeason] = useState("")
    const [episode, setEpisode] = useState("")
    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [writer, setWriter] = useState("")
    const [airdate, setAirdate] = useState("")
    const [viewers, setViewers] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const [image, setImage] = useState("")


    const uploadImage = (files) => {
        const formData = new FormData()
        formData.append("file", files[0])
        formData.append("upload_preset", "yhgt3onq")

        axios.post("https://api.cloudinary.com/v1_1/ddpvcgcpd/image/upload", formData).then((cloudinaryResponse) => {
            console.log(cloudinaryResponse.data.url);
            setImage(cloudinaryResponse.data.url)
        });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = { season, episode, title, director, writer, airdate, viewers, synopsis, image };
            const response = await fetch("http://localhost:5000/episodes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response)
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <div className="border-t-4 border-black mt-5">
                <form className="w-full mt-5" onSubmit={onSubmitForm}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-season">
                                Season
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-season" type="text" value={season} onChange={e => setSeason(e.target.value)} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-episode">
                                Episode
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-episode" type="text" value={episode} onChange={e => setEpisode(e.target.value)} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-title">
                                Title
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-director">
                                Director
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-director" type="text" value={director} onChange={e => setDirector(e.target.value)} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-writer">
                                Writer
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-writer" type="text" value={writer} onChange={e => setWriter(e.target.value)} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-airdate">
                                Airdate
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-airdate" type="text" value={airdate} onChange={e => setAirdate(e.target.value)} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-viewers">
                                Viewers
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-viewers" type="text" value={viewers} onChange={e => setViewers(e.target.value)} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="file_input" type="file" onChange={(e) => { uploadImage(e.target.files) }} />
                        </div>

                        <div className="w-full md:w px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-synopsis">
                                Synopsis
                            </label>
                            <textarea id="about" name="about" rows="30" className="aappearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={synopsis} onChange={e => setSynopsis(e.target.value)}></textarea>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-3 mt-2">Add</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default InputEpisode