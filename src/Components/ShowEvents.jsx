
function ShowEvents() {
  return (
    <div className="text-center p-8 bg-gray-700 text-white">
      <h2 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Eventos Más Populares 
      </h2>

      <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4 " >
          <img
            src="https://mrindie.com/wp-content/uploads/2023/12/image_processing20230810-1030479-1rn5p5t.jpg"
            alt="gem"
            className="inline-block rounded shadow-lg border border-merino-400 "
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            EDC México 2024
          </h3>
          <p className="sm:text-lg mt-6">
            Use the LocaleData gem to download translations directly into your
            Ruby on Rails projects using the provided command line interface.
            Just create a project and follow the step-by-step instructions.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="https://www.sopitas.com/wp-content/uploads/2023/09/Ghost-Palacio-de-los-Deportes-2023.jpeg?resize=1024,1024"
            alt="project members"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Ghost B.C México 2023
          </h3>
          <p className="sm:text-lg mt-6">
            All LocaleData projects are private. Each project can have multiple
            collaborators with different roles and access permissions. You
            determine who can see and edit your translations. Just add admins,
            developers, translators and configure their access rights.
          </p>
        </div>
      </div>

    </div>
  );
}

export default ShowEvents;
