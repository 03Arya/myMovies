"use client"

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Movies() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=db8f29ba6e1e44b8b22e02c5def38a8e');
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
                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'  key={movie.id}>
                    <Link href={`/movie/${movie.id}`} passHref>
                    
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="max-w-40 rounded-md shadow-lg" width="150" height="200" />
                        <p className='dark:text-white transition duration-500 py-2 font-bold'>{movie.title}</p>
                        <div className='flex gap-2'>
                            <FontAwesomeIcon className='text-amber-400 max-w-4' icon={faStar} />
                            <span className='text-gray-400 text-xs'>{movie.vote_average}/10 IMDb</span>
                        </div>
                    </Link>
                </div>

            ))}
        </>
    );
}