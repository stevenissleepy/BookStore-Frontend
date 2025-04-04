import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "../pages/home"
import LoginPage from "../pages/login"
import ProfilePage from "../pages/profile"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* <Route path="/book/:id" element={<BookPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/rank" element={<RankPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/profile/:id" element={<OtherUserProfilePage />} />
          <Route path="/api-docs" element={<ApiPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
