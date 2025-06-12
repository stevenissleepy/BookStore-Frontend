import { useState } from "react"
import { SearchOutlined } from "@ant-design/icons"

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("")

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form role="search" method="get" class="home-search-form" action="#">
      <input type="text" placeholder="Search off book store.." value={query} onChange={handleInputChange} />
      <button type="submit" onClick={handleSubmit}>
        <SearchOutlined style={{ color: "#ffffff", fontSize: "20px" }} />
      </button>
    </form>
  )
}

export { SearchBox }
