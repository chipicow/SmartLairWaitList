export default function Ember({ state = 'idle' }) {
  const images = {
    idle: '/images/ember-idle.png',
    typing: '/images/ember-typing.png',
    success: '/images/ember-success.png',
  }
  const src = images[state] || images.idle

  return (
    <div
      className="relative flex items-end justify-center mx-auto mb-8 transition-all duration-500 ease-out"
      style={{
        width: 'clamp(180px, 40vw, 280px)',
        height: 'clamp(160px, 35vw, 240px)',
        transform:
          state === 'typing'
            ? 'translateY(-8px) scale(1.05)'
            : state === 'success'
              ? 'translateY(-4px) scale(1.02)'
              : 'none',
      }}
    >
      <img
        src={src}
        alt={
          state === 'idle'
            ? 'Ember the fox mascot'
            : state === 'typing'
              ? 'Ember peeking curiously'
              : 'Ember celebrating'
        }
        className="w-full h-full object-contain drop-shadow-2xl"
      />
      {state === 'success' && (
        <div
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#FF8C42] animate-ping opacity-60"
          style={{ animationDuration: '1s' }}
        />
      )}
    </div>
  )
}
