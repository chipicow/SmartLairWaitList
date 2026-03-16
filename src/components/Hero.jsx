export default function Hero({ onJoinWaitlist }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F7F5F2] to-[#E8F5F4] px-6 py-20">
      {/* Geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#3AAFA9] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#FF8C42] opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#3AAFA9] opacity-5 rotate-45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1
            className="text-5xl lg:text-6xl xl:text-7xl mb-6"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#2C2C2C' }}
          >
            Turn Shared Expenses into Insights
          </h1>
          <p
            className="text-xl lg:text-2xl mb-8 opacity-80"
            style={{ fontFamily: 'Inter, sans-serif', color: '#2C2C2C' }}
          >
            Upload receipts, PDFs, or speak your expenses. Your shared dashboard does the rest.
          </p>
          <button
            onClick={onJoinWaitlist}
            className="px-8 py-4 rounded-full text-white text-lg transition-all hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: '#FF8C42',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            Join the Waitlist
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-80 lg:w-96 xl:w-[500px] animate-float">
            <img
              src="/images/ember-idle.png"
              alt="SmartLair mascot"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
