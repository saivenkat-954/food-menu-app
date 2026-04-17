import {useState} from 'react'
import './index.css'

// ✅ STATIC DATA (same structure expected by tests)
const menuData = [
  {
    id: 1,
    name: 'Veg Salad',
    description: 'Healthy vegetable salad',
    imageUrl:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
  },
  {
    id: 2,
    name: 'Chicken Biryani',
    description: 'Spicy and flavorful biryani',
    imageUrl:
      'https://images.unsplash.com/photo-1563379091339-03246963d96c',
  },
  {
    id: 3,
    name: 'Chocolate Cake',
    description: 'Delicious dessert',
    imageUrl:
      'https://images.unsplash.com/photo-1605478909033-3f0b9bcb2e6e',
  },
  {
    id: 4,
    name: 'Fruit Salad',
    description: 'Fresh fruit mix',
    imageUrl:
      'https://images.unsplash.com/photo-1572441713132-51c75654db73',
  },
]

const FoodMenu = () => {
  const [searchInput, setSearchInput] = useState('')

  const onChangeSearch = event => {
    setSearchInput(event.target.value)
  }

  // ✅ CASE-INSENSITIVE + MULTI-WORD SEARCH
  const filteredList = menuData.filter(item => {
    const words = searchInput.toLowerCase().split(' ')
    const itemName = item.name.toLowerCase()

    return words.every(word => itemName.includes(word))
  })

  return (
    <div className="menu-container">
      {/* ✅ EXACT HEADING */}
      <h1>Main Course Dish List</h1>

      <input
        type="search"
        placeholder="Search"
        value={searchInput}
        onChange={onChangeSearch}
        className="search-input"
      />

      <ul className="menu-list">
        {filteredList.length === 0 ? (
          <p>No Matches</p>
        ) : (
          filteredList.map(item => (
            <li key={item.id} className="menu-item">
              <img src={item.imageUrl} alt={item.name} />

              <h1>{item.name}</h1>
              <p>{item.description}</p>

              {/* ✅ REQUIRED BUTTON */}
              <button type="button">Add</button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default FoodMenu