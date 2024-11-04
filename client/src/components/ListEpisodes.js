import React, { useEffect, useState } from 'react'
import Moment from 'moment';

import EditEpisode from './EditEpisode';


const ListEpisodes = () => {

    const [episodes, setEpisodes] = useState([]);

    //delete episode function

    const deleteEpisode = async (id) => {
        try {
            const deleteEpisode = await fetch(`http://localhost:5000/episodes/${id}`, {
                method: "DELETE"
            })
            setEpisodes(episodes.filter(episode => episode.episodes_id !== id));
        } catch (err) {
            console.error(err.message)
        }
    }



    const getEpisodes = async () => {
        try {
            const response = await fetch("http://localhost:5000/episodes")
            const jsonData = await response.json()
            setEpisodes(jsonData)
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getEpisodes();
    }, [])

    return (
        <div>
            <ul>
                {episodes.map(episode => (
                    <li key={episode.episodes_id}>
                        <div className="container">
                            <div className="flex container">
                                <div className="w-50">
                                    <img src={episode.image} alt={episode.title} className="mr-5" />
                                </div>
                                <div className="w-50">
                                    <strong>{episode.title}</strong>
                                    <p><strong>Season: </strong>{episode.season}</p>
                                    <p><strong>Episode: </strong>{episode.episode}</p>
                                    <p><strong>Director: </strong>{episode.director}</p>
                                    <p><strong>Writer: </strong>{episode.writer}</p>
                                    <p><strong>Airdate: </strong>{Moment(episode.airdate).format("MM/DD/YYYY")}</p>
                                    <p><strong>Viewers: </strong>{episode.viewers}</p>
                                </div>
                            </div>
                            <div className="w-100">
                                <p className="mt-5"><strong>Synopsis:</strong></p>
                                {episode.synopsis}
                            </div>
                            <div className="flex space-x-1 mt-5 mb-5">
                                <EditEpisode />
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteEpisode(episode.episodes_id)}>Delete</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListEpisodes