"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer';

export default function Movie() {
    const [movie, setMovie] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=73ea132ff745a5ddfdf52978aa7204e1`);
            const data = await response.json();
            setMovie(data);
            console.log(data)
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
            </div>
            <Footer />
        </main>
    );
}