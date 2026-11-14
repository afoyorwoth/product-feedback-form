
function Home() {
  return (
   <main
  id="main-content"
  className="min-h-screen bg-light px-6 py-12 text-charcoal"
>
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-card">
          Product Feedback
        </p>

        <h1 className="mb-4 text-4xl font-bold">
          Welcome to our Feedback Portal
        </h1>

        <p className="mb-8 max-w-2xl text-lg">
          Your feedback helps us understand your experience and improve
          our products.
        </p>

        <a
          href="/form"
          className="inline-block rounded-full bg-lime px-8 py-3 font-semibold text-charcoal hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
        >
          Give Feedback
        </a>
      </div>
    </main>
  )
}

export default Home
