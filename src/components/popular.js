"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Popular() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=73ea132ff745a5ddfdf52978aa7204e1');
            const data = await response.json();
            const movies = data.results.slice(0, 20);
            const movieDetails = await Promise.all(movies.map(async (movie) => {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=73ea132ff745a5ddfdf52978aa7204e1`);
                const data = await response.json();
                return { ...movie, runtime: data.runtime, genres: data.genres };
            }));
            setMovies(movieDetails);
            console.log(movieDetails);
        };

        fetchData();
    }, []);

    if (!movies) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {movies.map((movie) => {
                const hours = Math.floor(movie.runtime / 60);
                const minutes = movie.runtime % 60;
                return (
                    <Link key={movie.id} href={`/movie/${movie.id}`} passHref>
                        <div className="grid gap-3 grid-cols-3">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="max-w-30 rounded-md shadow-lg" width="95" height="120" />
                            <div className='col-span-2'>
                                <p className='dark:text-white transition duration-500 font-bold pb-2'>{movie.title}</p>
                                <div className='flex gap-2 pb-2'>
                                    <FontAwesomeIcon className='text-amber-400 max-w-4' icon={faStar} />
                                    <span className='text-gray-400 text-xs'>{movie.vote_average}/10 IMDb</span>
                                </div>
                                <div className='flex space-x-2 pb-2 pr-2 max-w-60'>
                                    {movie.genres.slice(0, 3).map((genre) => (
                                        <p key={genre.id} className='text-xs m-0 w-30 text-center text-blue-400 bg-indigo-200 rounded-full py-1 px-5 leading-3 max-h-10'>{genre.name}</p>
                                    ))}
                                </div>
                                <div className='flex gap-2'>
                                    <FontAwesomeIcon className='max-w-4' icon={faClock} />
                                    <span className='text-black text-xs'>{hours}h {minutes}m</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </>
    );
}