// pages/about.js (with animations)




export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F5F1EA] via-[#D9C8B4] to-[#F0E6D2] animate-gradientBG">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="relative text-center animate__animated animate__fadeIn animate__delay-1s">
            {/* Header Section */}
            <h2 className="text-sm uppercase tracking-widest text-[#7A5B3B] mb-4 font-semibold opacity-70">
              Welcome to
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#2E1C2C] leading-tight mb-6">
               Healthy Wave 
              <span className="block mt-2 text-[#D49A00] font-serif">Skin Care Clinic.</span> {/* Luxurious gold */}
              <sup className="text-lg md:text-xl font-normal text-[#6A4E23] ml-2">
                By Dr. Kunwar Deep & Dr. Amanjeet Handa
              </sup>
            </h1>

            {/* Elegant Divider */}
            <div className="mt-6 w-40 h-[3px] bg-gradient-to-r from-[#D8B68D] to-[#D49A00] mx-auto rounded-full shadow-lg"></div>

            {/* Subtext */}
            <p className="mt-8 text-[#4B2F20] text-lg md:text-xl tracking-wide font-light max-w-xl mx-auto">
            Where opulence blends with transformative skincare, enhancing your beauty with timeless sophistication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
