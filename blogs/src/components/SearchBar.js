import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const SearchBar = ({label= ""}) => {
  const allPosts = useSelector((state) => state.post.posts);
  const searchBarRef = useRef(null);

  const [query, setQuery] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const closeDropdown = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const handleSearch = (event) => {
    setQuery(event.target.value);
    setIsDropdownOpen(true);
  };

  const content = allPosts
    .filter((post) => {
      if (query === "") {
        return post;
      } else if (post?.title.toLowerCase().includes(query?.toLowerCase())) {
        return post;
      }
      return false;
    })
    .map((post) => (
      <div className="card p-2" key={post.id}>
        <h6>{post.title}</h6>
        <p>{post.author}</p>
      </div>
    ));

  return (
    <form className="position-relative" role="search" ref={searchBarRef}>
        {label !== "" && <label htmlFor="search" className="form-label">{label}</label>}
      <input
        onChange={handleSearch}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        id="search"
      />
      {isDropdownOpen && (
        <div
          className="position-absolute w-100 overflow-y-scroll z-1"
          style={{ maxHeight: 200 }}
        >
          <div className="bg-white">{content}</div>
        </div>
      )}
      {/* <button className="btn btn-outline-success" type="submit">
        Search
      </button> */}
    </form>
  );
};

export default SearchBar;
