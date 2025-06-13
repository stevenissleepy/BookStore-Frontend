import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "../pages/home"
import LoginPage from "../pages/login"
import RegisterPage from "../pages/register"
import ProfilePage from "../pages/profile"
import CartPage from "../pages/cart"
import OrderPage from "../pages/order"
import BookPage from "../pages/book"
import StatsPage from "../pages/stats"
import AdminHomePage from "../pages/admin_home"
import AdminBookPage from "../pages/admin_book"
import AdminBookManagePage from "../pages/admin_book_manage"
import AdminUserManagePage from "../pages/admin_user_manage"
import AdminOrderPage from "../pages/admin_order"
import AdminStatsPage from "../pages/admin_stats"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/stats" element={<StatsPage />} />

        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/book/:id" element={<AdminBookPage />} />
        <Route path="/admin/book-manage" element={<AdminBookManagePage />} />
        <Route path="/admin/user-manage" element={<AdminUserManagePage />} />
        <Route path="/admin/order" element={<AdminOrderPage />} />
        <Route path="/admin/stats" element={<AdminStatsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
