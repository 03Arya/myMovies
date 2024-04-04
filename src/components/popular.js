import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export default function Popular() {
    return (
        <div className="grid grid-cols-3">
            <img src="https://placehold.co/85x120" className="max-w-30 rounded-md shadow-lg" width="85" height="120" />
            <div className='col-span-2'>
                <p className='font-bold pb-2'>SpiderMan</p>
                <div className='flex gap-2 pb-2'>
                    <FontAwesomeIcon className='text-amber-400 max-w-4' icon={faStar} />
                    <span className='text-black text-xs'>9/10 IMDb</span>
                </div>
                <div className='flex space-x-2 pb-2'>
                    <p className='text-xs text-blue-400 bg-indigo-200 rounded-full py-1 px-3'>HORROR</p>
                    <p className='text-xs text-blue-400 bg-indigo-200 rounded-full py-1 px-3'>HORROR</p>
                    <p className='text-xs text-blue-400 bg-indigo-200 rounded-full py-1 px-3'>HORROR</p>
                </div>
                <div className='flex gap-2'>
                    <FontAwesomeIcon className='max-w-4' icon={faClock} />
                    <span className='text-black text-xs'>2h 34m</span>
                </div>
            </div>

        </div>
    )
}