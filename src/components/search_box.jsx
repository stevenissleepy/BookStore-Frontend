import { SearchOutlined } from "@ant-design/icons"

function SearchBox() {
  return (
    <form role="search" method="get" class="home-search-form" action="#">
      <input type="text" placeholder="Serach  off book store.." />
      <button type="submit">
        <SearchOutlined style={{ color: "#ffffff", fontSize:"20px" }} />
      </button>
    </form>
  )
}

export { SearchBox }
