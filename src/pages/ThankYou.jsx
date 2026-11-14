
import { Link } from 'react-router-dom'

function ThankYou() {
  return (
    <main
  id="main-content"
  className="flex min-h-screen flex-col items-center justify-center bg-light px-6 text-center text-charcoal"
>
      <div className="max-w-lg">
        <div className="mb-5 text-5xl">✓</div>

        <h1 className="mb-4 text-3xl font-bold">
          Thank You!
        </h1>

        <p className="mb-8">
          We appreciate you taking the time to share your feedback.
          Your opinion helps us improve.
        </p>

        <Link
          to="/"
          className="inline-block rounded-full bg-lime px-8 py-3 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default ThankYou
