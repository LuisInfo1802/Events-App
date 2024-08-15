function CardsEvents() {
  return (
    <>
      
      <h2 className=" font-sans font-bold text-white text-center text-3xl gap-8 sm:text-6xl mb-10 border-l-4 md:border-l-0 border-teal-950">
        Eventos proximos
      </h2>

      <div className="flex  flex-col  sm:flex-row sm:justify-center rounded">
        <div className="w-[380px] h-[424px] mt-10 first:mt-0 bg-gray-900 sm:mt-0 sm:mr-10 last:mr-0 rounded mb-10">
          <img
            className="w-[380px] h-[206px] rounded"
            src="https://www.infobae.com/new-resizer/cXU7S7zX40AWH1IVnseX2Ruem80=/992x1764/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/G57PJBDD4NGG7HYCZ3662MPBHU.jpg"
          ></img>

          <p className="text-center text-white text-4xl  mt-6">Ghost Band</p>
          <p className="text-center text-white text-2xl mt-5">
            Agosto 24 del 2024
          </p>
          <p className="text-center text-white text-4xl mt-4">Guadalajara</p>
        </div>
      </div>
    </>
  );
}

export default CardsEvents;
