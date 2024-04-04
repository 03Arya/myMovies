import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTape } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="grid grid-cols-3 pt-4">
            <FontAwesomeIcon className='text-indigo-900 max-w-6 w-6 h-6 max-h-6 mx-auto' icon={faTape} />
            <FontAwesomeIcon className=' max-w-6 w-6 h-6 max-h-6 mx-auto' icon={faBookmark} />
            <FontAwesomeIcon className=' max-w-6 w-6 h-6 max-h-6 mx-auto' icon={faBookmark} />
            <Link href="/" className='bg-black w-96 h-1 mt-5 mb-1'>

            </Link>
        </footer>
    )
}