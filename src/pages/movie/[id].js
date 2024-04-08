"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
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
            console.log(topCasts);

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
                    <div className='grid grid-cols-8 top-8 relative'>
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
                <section className='px-6'>
                    <div className='grid grid-cols-6 pt-6'>
                        <p className='font-bold text-xl col-span-4'>{movie.title}</p>
                        <FontAwesomeIcon className='col-start-6 text-2xl' icon={faBookmark} />
                    </div>

                    <div className='flex gap-2 py-3'>
                        <FontAwesomeIcon className='text-amber-400 max-w-4' icon={faStar} />
                        <span className='text-black text-xs'>{movie.vote_average}/10 IMDb</span>
                    </div>
                    <div className='flex space-x-2 pb-2'>
                        {movie.genres.slice(0, 3).map((genre) => (
                            <p key={genre.id} className='text-xs m-0 w-30 text-center text-blue-400 bg-indigo-200 rounded-full py-1 px-5 leading-3 max-h-10'>{genre.name}</p>
                        ))}
                    </div>
                    <div className='grid grid-cols-3 py-2'>
                        <p className='text-gray-400'>Length</p>
                        <p className='text-gray-400'>Language</p>
                        <p className='text-gray-400'>Rating</p>
                        <p>{movie.runtime}</p>
                        <p>{movie.original_language}</p>
                        <p>{movie.rating}</p>
                    </div>
                    <p className='text-indigo-950 font-semibold text-2xl'>Description </p>
                    <p className='text-gray-400 pb-3'>{movie.overview}</p>
                    <section className='grid grid-cols-5 gap-3 py-4'>
                        <div className='col-span-5 grid grid-cols-2'>
                            <p className='text-indigo-950 font-semibold text-2xl'>Cast</p>
                            <button className="basis-1/4 max-w-40 w-20 px-2 border-2 text-sm border-gray-400 text-gray-400 rounded-full justify-self-end">See more</button>

                        </div>
                        {casts.map((cast) => {
                            return (
                                <div key={cast.cast_id}>
                                    <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} className='w-16 h-24 rounded-md' />
                                    <p className='text-xs font-medium'>{cast.name}</p>
                                </div>
                            )
                        })}

                    </section>
                </section>
            </div>
            <footer className="grid grid-cols-3 pt-4">
                <Link href="/" className='bg-black w-full h-1 mt-5 mb-1 col-start-2'>
                </Link>
            </footer>
        </main>
    );
}