import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Quiz from "../Pages/Quiz"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:option" element={<Quiz />} />
    </Routes>
  )
}

export default AllRoutes