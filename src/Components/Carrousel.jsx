import {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';



function Carrousel()
{
    const slides = [
        {
          url: 'https://ca-times.brightspotcdn.com/dims4/default/267ead8/2147483647/strip/true/crop/6720x4480+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0b%2F86%2F29e75f7e449daba1c767ae7aa073%2Fphoto-2022-08-07-3-41-54-am.png',
        },
        {
          url: 'https://www.revolvermag.com/wp-content/uploads/2023/09/13/lede-re-imperatour2023usa_losangeles02_ryanchang-32-2.jpg',
        },
        {
          url: 'https://spaces.rocksound.tv/uploads/2023/07/sleeptoken2.jpg',
        },
    
        {
          url: 'https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/82/2020/09/10120536/EDCMEX2020_0228_201114-04793_IME_768x440.jpg',
        },
        {
          url: 'https://www.sopitas.com/wp-content/uploads/2020/04/Daft-Punk.jpg?resize=1200,623',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [artist, setArtis]=useState('¡Este atento a las nuevas fechas!');
      const [date,setDate]=useState('');
      const [description,setDesciption]=useState('');

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
      return (
        <div className='max-w-[1900px] h-[780px] w-full m-auto py-5 px-4 relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative '
          >
            
            <div className='absolute bottom-0 rounded-2xl opacity-75 left-1/2 transform  -translate-x-1/2 bg-black m-w-[1400px] h-[150px] w-full'>
              
              <h1 className='text-white text-5xl absolute bottom-20 left-1/2 transform  -translate-x-1/2 font-semibold'>{artist}</h1>
              <p className='text-white text-xl md:text-4xl absolute bottom-3 left-1/2 transform  -translate-x-1/2 text-center font-semibold'>Proximamente más información</p>
              </div>
           

          </div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2 text-white'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
        


      );
}


export default Carrousel