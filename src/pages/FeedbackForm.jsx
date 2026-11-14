import { useState } from 'react'

const ratingOptions = [1, 2, 3, 4, 5]

function RatingGroup({ title, name, value, error, onChange }) {
  return (
    <div>
      <div className="flex flex-col gap-4 rounded-full bg-white px-6 py-4 text-dark shadow-md sm:flex-row sm:items-center sm:justify-between">
<h2
  id={`${name}-label`}
  className="text-base font-semibold sm:w-1/4"
>
  {title}
</h2>
<div
  role="radiogroup"
  aria-labelledby={`${name}-label`}
  className="flex items-center justify-between gap-5 sm:w-2/4 sm:justify-center"
>
          {ratingOptions.map((number) => (
            <label
              key={number}
              className="flex cursor-pointer items-center justify-center"
            >
              <input
                type="radio"
                name={name}
                value={number}
                checked={value === number}
                onChange={() => onChange(name, number)}
                aria-label={`Rate ${title} ${number} out of 5`}
                className="peer sr-only"
              />

<span
  className={`h-3 w-3 rounded-full transition-all peer-focus-visible:ring-2 peer-focus-visible:ring-lime peer-focus-visible:ring-offset-2 ${
    value === number
      ? 'scale-150 bg-lime ring-2 ring-dark'
      : 'bg-dark hover:scale-125'
  }`}
/>
            </label>
          ))}

        </div>

        <span className="text-xs text-gray-500 sm:w-1/4 sm:text-right">
          1 — 5
        </span>

      </div>

      {error && (
        <p className="mt-2 px-4 text-sm text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function FeedbackForm({ ratings, dispatch }) {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleRatingChange = (name, value) => {
    dispatch({
      type: 'UPDATE_RATING',
      name,
      value,
    })

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }))

    setStatus('idle')
  }

  const validateForm = () => {
    const newErrors = {}

    if (ratings.comfort === 0) {
      newErrors.comfort = 'Please rate comfort.'
    }

    if (ratings.looks === 0) {
      newErrors.looks = 'Please rate looks.'
    }

    if (ratings.price === 0) {
      newErrors.price = 'Please rate price.'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validateForm()) {
      setStatus('idle')
      return
    }

    setStatus('submitting')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

 const handleReset = () => {
  dispatch({
    type: 'RESET_RATINGS',
  })

  setErrors({})
  setStatus('idle')
}

  return (
   <main
  id="main-content"
  className="flex min-h-screen items-center justify-center bg-gradient-to-br from-dark via-charcoal to-black px-4 py-12 text-white sm:px-8"
>
      <div className="w-full max-w-4xl">

        <div className="mb-8">
          <p className="mb-3 text-sm font-medium tracking-widest text-lime">
            PRODUCT QUESTIONNAIRE
          </p>

          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-600">
            <div className="h-full w-4/5 rounded-full bg-lime" />
          </div>

          <p className="mt-2 text-sm text-gray-400">
            QUESTION 4 OF 5
          </p>
        </div>

        <header className="mb-10">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            How important are these aspects for you?
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
            Rate the following aspects based on your preferences.
            Your feedback helps us understand what matters most
            when choosing shoes.
          </p>
        </header>

      
        <form onSubmit={handleSubmit} noValidate>

          <div className="space-y-6">

            <RatingGroup
              title="Comfort"
              name="comfort"
              value={ratings.comfort}
              error={errors.comfort}
              onChange={handleRatingChange}
            />

            <RatingGroup
              title="Looks"
              name="looks"
              value={ratings.looks}
              error={errors.looks}
              onChange={handleRatingChange}
            />

            <RatingGroup
              title="Price"
              name="price"
              value={ratings.price}
              error={errors.price}
              onChange={handleRatingChange}
            />

          </div>

          {status === 'success' && (
            <div
              className="mt-6 rounded-xl border border-lime bg-lime/10 p-5 text-lime"
              role="status"
            >
              <h3 className="font-bold">
                Thank you for your feedback!
              </h3>

              <p className="mt-1 text-sm">
                Your ratings have been successfully submitted.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div
              className="mt-6 rounded-xl border border-red-400 bg-red-400/10 p-5 text-red-200"
              role="alert"
            >
              Something went wrong. Please try again.
            </div>
          )}

          {status === 'submitting' && (
            <p className="mt-6 text-center text-lime" role="status">
              Submitting your feedback...
            </p>
          )}

          <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between">

            <button
              type="button"
              onClick={() => window.history.back()}
              className="rounded-full bg-blush px-9 py-3 font-semibold text-dark transition hover:opacity-80"
            >
              Back
            </button>

            {status === 'success' ? (
              <button
                type="button"
                onClick={handleReset}
                className="rounded-full bg-lime px-9 py-3 font-semibold text-dark transition hover:opacity-80"
              >
                Rate Again
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="rounded-full bg-lime px-9 py-3 font-semibold text-dark transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Feedback'}
              </button>
            )}

          </div>

        </form>

        <p className="mt-10 text-center text-xs text-gray-500">
          Thank you for helping us improve our products.
        </p>

      </div>
    </main>
  )
}

export default FeedbackForm
