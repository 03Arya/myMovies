"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/footer';
import Link from 'next/link';

export default function Movie() {
    const [movie, setMovie] = useState(null);
    const [casts, setCast] = useState([]);
    const [video, setVideo] = useState(null);

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=73ea132ff745a5ddfdf52978aa7204e1`);
            const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=73ea132ff745a5ddfdf52978aa7204e1`);
            const rating = await fetch(`https://api.themoviedb.org/3/movie/${id}/get-movie-certifications?api_key=73ea132ff745a5ddfdf52978aa7204e1`);
            const video = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=73ea132ff745a5ddfdf52978aa7204e1`);
            const data = await response.json();
            const videoData = await video.json()
            const officialTrailer = videoData.results.find((video) => video.name === 'Official Trailer');
            const castData = await castResponse.json();
            const topCasts = castData.cast.slice(0, 5);
            setMovie(data);
            setCast(topCasts);
            setVideo(officialTrailer)
            console.log(officialTrailer)
            console.log(videoData.results[0].key)
            console.log(video)
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <main className='max-w-md mx-auto'>
            <div>
                <div className='h-80'>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="w-screen max-w-md mx-auto h-80 max-h-80 block absolute" />
                    <div className='grid grid-cols-8 top-10 relative'>
                        <Link className='col-start-2' href='/'>
                            <FontAwesomeIcon className='text-white text-xl relative ' icon={faArrowLeft} />
                        </Link>
                        <input type="checkbox" id="switch" class="switch__checkbox" />
                        <label class="switch" for="switch"></label>
                    </div>
                    <a className='grid relative justify-center max-w-20 mx-auto top-48 text-white' href={`https://www.youtube.com/watch?v=${video && video.key}`}>
                        <FontAwesomeIcon className='bg-white ml-4 rounded-full p-4 text-black' icon={faPlay} />
                        Play Trailer</a>
                </div>
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