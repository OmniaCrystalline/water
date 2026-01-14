
function ServicesBar() {
  const services = [
    {
      title: "Emergency Repairs",
      image: "/1.png"
    },
    {
      title: "Drain Cleaning",
      image: "/2.png"
    },
    {
      title: "Water Heaters",
      image: "/3.png"
    },
    {
      title: "Leak Detection & More",
      image: "/4.png"
    }
  ];

  return (
    <section
      className="bg-footer-gradient text-white relative"
    >
      <div className='bg-gradient-to-r from-transparent via-gray-100 to-transparent w-full h-1'></div>
      <div className="relative max-w-7xl mx-auto px-6 z-10 py-5 relative">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center image-overlay animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {index > 0 && (
                <>
                  {/* Vertical divider for desktop */}
                  <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 h-5/6 bg-gradient-to-b from-transparent via-gray-200 to-transparent my-auto"></div>
                </>
              )}
              {/* Horizontal divider for mobile - under image (all images) */}
              <div className="lg:hidden absolute bottom-0 left-0 right-0 w-5/6 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-auto"></div>
              {/* Horizontal divider at bottom for desktop */}
              <div className="hidden lg:block absolute bottom-0 left-0 right-0 w-5/6 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-auto"></div>
              <img
                src={service.image}
                alt={service.title}
                className="w-80 h-auto object-cover block mt-auto block p-7 transition-all duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>

      </div>
      <div className='bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-50 w-full h-1'></div>

    </section>
  );
}

export default ServicesBar;
