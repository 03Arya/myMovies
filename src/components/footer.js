import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTape } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
    return (
        <footer className="grid grid-cols-3 py-4">
            <FontAwesomeIcon className='text-indigo-900 max-w-6 w-6 h-6 max-h-6 mx-auto' icon={faTape} />
            <FontAwesomeIcon className=' max-w-6 w-6 h-6 max-h-6 mx-auto' icon={faBookmark} />
            <FontAwesomeIcon className=' max-w-6 w-6 h-6 max-h-6 mx-auto' icon={faBookmark} />
        </footer>
    )
}