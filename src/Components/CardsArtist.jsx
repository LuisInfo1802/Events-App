import { IoLogoYoutube } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

function CardArtist() {
  return (
    <div class="w-full h-screenpx-10 pt-10 text-white">
      <p className="text-center text-white text-5xl font-bold">
        Sobre nuestros artistas..
      </p>

        
        <div className="flex  flex-col  sm:flex-row sm:justify-center ">

      {/*Aqui comienza el card */}
      <div class="relative   max-w-sm mx-auto mt-24 ">
        <div class="rounded overflow-hidden shadow-md bg-gray-700">
          <div class="absolute -mt-20 w-full flex justify-center">
            <div class="h-32 w-32">
              <img
                src="https://pbs.twimg.com/profile_images/1795586183483060229/WPRjzwQu_400x400.jpg"
                class="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div class="px-6 mt-16">
            <h1 class="font-bold text-3xl text-center mb-1">Ghost</h1>
            <p class="text-gray-200 text-sm text-center">
              Band, Rock
            </p>
            <p class="text-center text-gray-300 text-base pt-3 font-normal text-ju">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam vero perferendis, dolorum ratione excepturi ducimus voluptatem ipsam doloremque vel temporibus volu
            </p>
            <div class="w-full flex justify-center pt-5 pb-5">
              <a href="#" class="mx-5">
                <div aria-label="Youtube">
                  <IoLogoYoutube />
                </div>
              </a>
              <a href="#" class="mx-5">
                <div aria-label="Twitter">
                  <BsTwitterX />
                </div>
              </a>
              <a href="#" class="mx-5">
                <div aria-label="Instagram">
                  <FiInstagram />
                </div>
              </a>
            </div>
          </div>
          </div>
        </div>



        {/*Segundo card */}
        <div class="relative mt-16 mb-32 max-w-sm mx-auto mt-24 ">
        <div class="rounded overflow-hidden shadow-md bg-gray-700">
          <div class="absolute -mt-20 w-full flex justify-center">
            <div class="h-32 w-32">
              <img
                src="https://pbs.twimg.com/profile_images/1795586183483060229/WPRjzwQu_400x400.jpg"
                class="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div class="px-6 mt-16">
            <h1 class="font-bold text-3xl text-center mb-1">Ghost</h1>
            <p class="text-gray-200 text-sm text-center">
              Band, Rock
            </p>
            <p class="text-center text-gray-300 text-base pt-3 font-normal text-ju">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam vero perferendis, dolorum ratione excepturi ducimus voluptatem ipsam doloremque vel temporibus volu
            </p>
            <div class="w-full flex justify-center pt-5 pb-5">
              <a href="#" class="mx-5">
                <div aria-label="Youtube">
                  <IoLogoYoutube />
                </div>
              </a>
              <a href="#" class="mx-5">
                <div aria-label="Twitter">
                  <BsTwitterX />
                </div>
              </a>
              <a href="#" class="mx-5">
                <div aria-label="Instagram">
                  <FiInstagram />
                </div>
              </a>
            </div>
          </div>
          </div>
        </div>
        


         {/*Segundo card */}
         <div class="relative mt-16 mb-32 max-w-sm mx-auto mt-24 ">
        <div class="rounded overflow-hidden shadow-md bg-gray-700">
          <div class="absolute -mt-20 w-full flex justify-center">
            <div class="h-32 w-32">
              <img
                src="https://pbs.twimg.com/profile_images/1795586183483060229/WPRjzwQu_400x400.jpg"
                class="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div class="px-6 mt-16">
            <h1 class="font-bold text-3xl text-center mb-1">Ghost</h1>
            <p class="text-gray-200 text-sm text-center">
              Band, Rock
            </p>
            <p class="text-center text-gray-300 text-base pt-3 font-normal text-ju">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam vero perferendis, dolorum ratione excepturi ducimus voluptatem ipsam doloremque vel temporibus volu
            </p>
            <div class="w-full flex justify-center pt-5 pb-5">
              <a href="#" class="mx-5">
                <div aria-label="Youtube">
                  <IoLogoYoutube />
                </div>
              </a>
              <a href="#" class="mx-5">
                <div aria-label="Twitter">
                  <BsTwitterX />
                </div>
              </a>
              <a href="#" class="mx-5">
                <div aria-label="Instagram">
                  <FiInstagram />
                </div>
              </a>
            </div>
          </div>
          </div>
        </div>
        

        









        
      </div>



        
    </div>
  );
}

export default CardArtist;
