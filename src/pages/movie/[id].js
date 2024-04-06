"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer';

export default function Movie() {
    const [movie, setMovie] = useState(null);
    const [casts, setCast] = useState([]);

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=73ea132ff745a5ddfdf52978aa7204e1`);
            const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=73ea132ff745a5ddfdf52978aa7204e1`);
            const rating = await fetch(`https://api.themoviedb.org/3/movie/${id}/get-movie-certifications?api_key=73ea132ff745a5ddfdf52978aa7204e1`);
            const data = await response.json();
            const castData = await castResponse.json();
            const topCasts = castData.cast.slice(0, 5);
            setMovie(data);
            setCast(topCasts);
            console.log(data)
            console.log(casts)
            console.log(rating)
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }



    return (
        <main>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className=" w-screen rounded-md shadow-lg" height="240" />
                <p className='py-2 font-bold'>{movie.title}</p>
                <div className='flex gap-2'>
                    <FontAwesomeIcon className='text-amber-400 max-w-4' icon={faStar} />
                    <span className='text-black text-xs'>{movie.vote_average}/10 IMDb</span>
                </div>
                <div className='flex space-x-2 pb-2'>
                    {movie.genres.slice(0, 3).map((genre) => (
                        <p key={genre.id} className='text-xs m-0 w-30 text-center text-blue-400 bg-indigo-200 rounded-full py-1 px-5 leading-3 max-h-10'>{genre.name}</p>
                    ))}
                </div>
                <p>Length {movie.runtime}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie}`} alt="" />
                <p>Language {movie.original_language}</p>
                <p>Description {movie.overview}</p>
                <div>
                    {casts.map((cast) => {
                        return (
                            <p key={cast.cast_id}>{cast.name}</p>
                        )
                    })}

                </div>
            </div>
            <Footer />
        </main>
    );
}