import Link from 'next/link';
import Image from 'next/image';

export default function Category(props) {   
  return(
    <div>      
      <Link href={`/restaurants?category=${props.category.title}`}>        
        <a>
          <Image
            src={props.category.image_url}
            alt={props.title}
            width={300}
            height={200}
            className='px-1 clickable_effect'
          />
        </a>
      </Link>
      <p className='fw-bold'>{props.category.title}</p>
    </div>
  )
}