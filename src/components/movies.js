import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Movies() {
    return (
        <div>
            <a href="">
                <img src="https://placehold.co/150x200" className="max-w-40 rounded-md shadow-lg" width="150" height="200" />
                <p className='py-2 font-bold'>SpiderMan</p>
                <div className='flex gap-2'>
                    <FontAwesomeIcon className='text-amber-400 max-w-4' icon={faStar} />
                    <span className='text-black text-xs'>9/10 IMDb</span>
                </div>
            </a>
        </div>
    )
}