"use client"

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Movies() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=73ea132ff745a5ddfdf52978aa7204e1');
            const data = await response.json();
            setMovie(data.results);
            console.log(data.results);
        };

        fetchData();
    }, []);

    if (!movie) {
        return <div>Loading...</div>;
    }
    return (
        <>
            {movie.map((movie) => (
                <div>
                    <a href="" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="max-w-40 rounded-md shadow-lg" width="150" height="200" />
                        <p className='py-2 font-bold'>{movie.title}</p>
                        <div className='flex gap-2'>
                            <FontAwesomeIcon className='text-amber-400 max-w-4' icon={faStar} />
                            <span className='text-black text-xs'>{movie.vote_average}/10 IMDb</span>
                        </div>
                    </a>
                </div>

            ))}
        </>
    );
}