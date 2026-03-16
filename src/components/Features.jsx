export default function Features() {
  const features = [
    {
      title: 'AI Receipt & PDF Extraction',
      description:
        'Upload receipts or statements and let our AI automatically extract transactions with perfect accuracy.',
      image: '/images/fox-reading.png',
      alt: 'Fox reading document',
    },
    {
      title: 'Shared Dashboards',
      description:
        'Visualize spending trends, category breakdowns, and monthly totals with your partner or group in real-time.',
      image: '/images/ember-success.png',
      alt: 'Fox pointing at charts',
    },
    {
      title: 'Predictive Insights',
      description:
        'AI forecasts spending trends, recurring expenses, and category growth to help you plan ahead.',
      image: '/images/fox-magnifier.png',
      alt: 'Fox with magnifying glass',
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl lg:text-5xl text-center mb-16"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#2C2C2C' }}
        >
          Everything you need to manage shared finances
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#F7F5F2] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 w-48 h-48 flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3
                className="text-2xl mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#2C2C2C' }}
              >
                {feature.title}
              </h3>
              <p
                className="opacity-70 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', color: '#2C2C2C' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
