import { NavLink, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useReducer } from 'react'

const Home = lazy(() => import('./pages/Home'))
const FeedbackForm = lazy(() => import('./pages/FeedbackForm'))
const ThankYou = lazy(() => import('./pages/ThankYou'))
const ItemDetails = lazy(() => import('./pages/ItemDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))
import FeedbackSummary from './components/FeedbackSummary'
import { feedbackReducer, initialRatings } from './reducers/feedbackReducer'

function App() {
  const [ratings, dispatch] = useReducer(
    feedbackReducer,
    initialRatings
  )

  const navLinkStyle = ({ isActive }) =>
    `rounded-full px-4 py-2 font-semibold transition ${
      isActive
        ? 'bg-lime text-charcoal'
        : 'text-white hover:bg-white/10'
    }`

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-lime focus:p-3 focus:text-charcoal"
      >
        Skip to main content
      </a>

      <nav
        aria-label="Main navigation"
        className="flex flex-wrap items-center justify-center gap-3 bg-dark px-4 py-4"
      >
        <NavLink to="/" end className={navLinkStyle}>
          Home
        </NavLink>

        <NavLink to="/form" className={navLinkStyle}>
          Feedback Form
        </NavLink>

        <NavLink to="/thank-you" className={navLinkStyle}>
          Thank You
        </NavLink>
      </nav>

      <Suspense fallback={<p className="p-6 text-center">Loading page...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/form"
          element={
            <>
              <FeedbackForm ratings={ratings} dispatch={dispatch} />
              <FeedbackSummary ratings={ratings} />
            </>
          }
        />

        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/items/:itemId" element={<ItemDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App
