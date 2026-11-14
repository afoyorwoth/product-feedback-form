
import { useParams, Link } from 'react-router-dom'

function ItemDetails() {
  const { itemId } = useParams()

  return (
   <main
  id="main-content"
  className="min-h-screen bg-light px-6 py-12 text-charcoal"
>
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-card">
          Item Details
        </p>

        <h1 className="mb-4 text-3xl font-bold">
          Item #{itemId}
        </h1>

        <p className="mb-8">
          You are viewing the details for item {itemId}.
        </p>

        <Link
          to="/"
          className="font-semibold underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}

export default ItemDetails
