import { MapPin } from "lucide-react";

const CitiesWeServe = () => {
  const cities = [
    "Houston, TX",
    "Humble, TX",
    "Huntsville, TX",
    "Jersey Village, TX",
    "College Station, TX",
    "Cypress, TX",
    "Channelview, TX",
    "Katy, TX",
    "Willis, TX",
    "Baytown, TX",
  ];

  return (
    <section className="py-12 section-padding bg-gradient-to-br from-[#FFF5EB] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D2030] mb-8 sm:mb-12 text-center lg:text-left">
          We offer grocery delivery in these cities
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-[#F6F7F8] hover:bg-[#FCFADE] transition-colors duration-300 cursor-pointer group"
                  >
                    <MapPin className="w-5 h-5 text-[#EC1A1C] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-[#343538] font-semibold text-sm sm:text-base">
                      {city}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-[#FCFADE] rounded-xl border-l-4 border-[#EC1A1C]">
                <p className="text-sm sm:text-base text-[#343538]">
                  <span className="font-bold">Don't see your city?</span> Contact
                  us to check if we deliver to your area!
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584631.7482837606!2d-95.5028368!3d29.7799865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Houston, TX Service Area Map"
                className="w-full h-full"
              />
            </div>

            <div className="mt-4 text-center lg:text-left">
              <p className="text-sm text-gray-600">
                Serving the greater Houston area and surrounding communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesWeServe;