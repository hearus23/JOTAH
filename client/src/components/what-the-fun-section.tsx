import qrCodeImage from "@assets/frame_1754986501435.png";

export default function WhatTheFunSection() {
  return (
    <section id="what-the-fun" className="py-20 bg-jotah-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            What the <span className="text-jotah-gold">Fun</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Scan the QR code below to discover something special from JOTAH
          </p>
          
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm">
              <img 
                src={qrCodeImage} 
                alt="JOTAH QR Code - What the Fun" 
                className="w-full h-auto rounded-lg"
              />
              <p className="text-jotah-dark font-semibold mt-4 text-center">
                Scan with your phone camera
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}