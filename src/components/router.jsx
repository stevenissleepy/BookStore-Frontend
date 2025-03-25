import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "../pages/home"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/book/:id" element={<BookPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/rank" element={<RankPage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/:id" element={<OtherUserProfilePage />} />
            <Route path="/api-docs" element={<ApiPage />} /> */}
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
