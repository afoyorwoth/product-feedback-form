
function FeedbackSummary({ ratings }) {
  return (
    <section className="mt-8 rounded-2xl bg-white p-6 text-dark shadow-lg">
      <h2 className="mb-4 text-xl font-bold">
        Your Feedback Summary
      </h2>

      <div className="space-y-3">
        {Object.entries(ratings).map(([category, rating]) => (
          <div
            key={category}
            className="flex items-center justify-between"
          >
            <span className="capitalize">{category}</span>
            <span className="font-semibold">
              {rating === 0 ? 'Not rated' : `${rating} / 5`}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeedbackSummary
