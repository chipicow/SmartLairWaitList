import { useState, useEffect } from 'react'
import { addToWaitlist, getWaitlistCount } from '../lib/supabase'
import Ember from './Ember'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [count, setCount] = useState(null)

  useEffect(() => {
    getWaitlistCount().then(setCount)
  }, [])

  const refreshCount = () => {
    getWaitlistCount().then(setCount)
  }

  const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(value)
  }

  const handleChange = (e) => {
    const value = e.target.value
    setEmail(value)
    setError('')
    setStatus(value.length > 0 ? 'typing' : 'idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    try {
      const { error: sbError } = await addToWaitlist(email.trim().toLowerCase())

      if (sbError) {
        if (sbError.code === '23505') {
          setError('This email is already on the waitlist!')
        } else {
          setError(sbError.message || 'Something went wrong. Please try again.')
        }
        setStatus('typing')
        return
      }

      setStatus('success')
      setEmail('')
      refreshCount()
    } catch (err) {
      console.error('Waitlist error:', err)
      const msg =
        err?.message?.includes('Supabase')
          ? 'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env'
          : 'Unable to connect. Please check your connection and try again.'
      setError(msg)
      setStatus('typing')
    }
  }

  const emberState =
    status === 'loading' ? 'typing' : status === 'success' ? 'success' : status === 'typing' ? 'typing' : 'idle'

  return (
    <section
      id="waitlist"
      className="py-20 px-6 bg-gradient-to-br from-[#3AAFA9] to-[#2d8c87] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF8C42] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-12 lg:p-16 relative">
          {/* Peeking mascot - shows state */}
          <div className="absolute -top-20 -right-4 lg:-right-12 w-40 lg:w-52">
            <Ember state={emberState} />
          </div>

          <div className="max-w-xl">
            <h2
              className="text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#2C2C2C' }}
            >
              Be the first to get early access to SmartLair
            </h2>
            <p
              className="text-lg mb-2 opacity-70"
              style={{ fontFamily: 'Inter, sans-serif', color: '#2C2C2C' }}
            >
              Join our waitlist and be among the first to experience seamless shared expense tracking.
            </p>
            <p
              className="text-base mb-8 font-semibold"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#3AAFA9' }}
            >
              {count === null
                ? 'Join others on the waitlist'
                : count === 0
                  ? 'Be the first to join!'
                  : count === 1
                    ? 'Join 1 other on the waitlist'
                    : `Join ${count.toLocaleString()} others on the waitlist`}
            </p>

            {status === 'success' ? (
              <div className="py-6 px-6 rounded-2xl bg-[#E8F5F4] border-2 border-[#3AAFA9]/40">
                <p className="text-lg font-semibold" style={{ color: '#2C2C2C' }}>
                  You&apos;re on the list!
                </p>
                <p className="text-sm mt-1 opacity-80" style={{ color: '#2C2C2C' }}>
                  We&apos;ll notify you as soon as SmartLair is ready.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={() => !email && setStatus('idle')}
                  onFocus={() => email && setStatus('typing')}
                  placeholder="Enter your email"
                  disabled={status === 'loading'}
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#3AAFA9] outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  autoComplete="email"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 rounded-full text-white transition-all hover:scale-105 hover:shadow-xl whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{
                    backgroundColor: '#FF8C42',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>
            )}
            {error && (
              <p className="mt-4 text-red-600 text-sm" role="alert">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
