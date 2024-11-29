import Image from 'next/image';

interface CardProps{
    step: string;
    howTo: string;
    imageSrc:string;
}
export default function Card({
    step,
    howTo,
    imageSrc
}: CardProps){
    return(
        <div className='flex flex-col card'>
            <div className='mt-8 font-semibold'><p>{step}</p></div>
            <div className='w-2/3 text-center font-semibold mt-3 mb-3'><p>{howTo}</p></div>
            <div className="flex justify-center w-[150px] h-[150px] items-center rounded-lg overflow-hidden relative"> <Image src={imageSrc} alt="solar panel" fill={true} style={{objectFit: 'cover',}}/></div>
        </div>
    )
}