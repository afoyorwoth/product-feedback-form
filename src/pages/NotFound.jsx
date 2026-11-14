function NotFound() {
  return (
    <main
  id="main-content"
  className="flex min-h-screen flex-col items-center justify-center bg-light px-6 text-center text-charcoal"
>
      <h1 className="mb-4 text-6xl font-bold">404</h1>

      <h2 className="mb-3 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <a
        href="/"
        className="rounded-full bg-lime px-6 py-3 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
      >
        Return Home
      </a>
    </main>
  )
}

export default NotFound
