import { useContext, useEffect, useState } from 'react'
import './MenuItem.css'
import { useParams } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { CartContext } from '../../context/Cart';

const MenuItem = ({showMessage}) => {
    const [filteredMenuItems, setFilteredMenuItems] = useState([])
    const params = useParams();

    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

    useEffect(() => {
        if(params.category == null || params.category == "all"){
            setFilteredMenuItems(menuItems)
        } else {
            setFilteredMenuItems(menuItems.filter((item) => item.category.toLowerCase() == params.category.toLowerCase()))
        }
    }, [params.category])

    const menuItems = [
        {id: 1, name: "Buffalo Cauliflower Wings", price: "10.55", 
            description: "This veggie riff on buffalo chicken wings cooked in the oven.", img: "https://cdn.loveandlemons.com/wp-content/uploads/2022/10/buffalo-cauliflower-recipe.jpg", category: "Appetizers"},
        {id: 2, name: "Deviled Eggs", price: "12.55", description: "Garnished with chopped chives, dill, and/or smoked paprika for a fun and festive look.", img: "https://cdn.loveandlemons.com/wp-content/uploads/2024/03/deviled-eggs.jpg", category: "Appetizers"},
        {id: 3, name: "Stuffed Mushrooms", price: "13.00", description: "Bite-sized appetizers are flavorful, filled with panko bread crumbs, pine nuts, parsley, sun-dried tomatoes, and cheese.", img: "https://cdn.loveandlemons.com/wp-content/uploads/2019/12/stuffed-mushrooms-1.jpg", category: "Appetizers"},
        {id: 4, name: "Jalapeño Poppers", price: "8.53", description: "Filled with Greek yogurt filling instead of a traditional cream cheese one.", img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/09/jalapeno-poppers-1.jpg", category: "Appetizers"},
        {id: 5, name: "Caprese Skewers", price: "10.55", description: "Colorful skewers drizzled with an easy balsamic reduction for a pop of sweet and tangy flavor.", img: "https://cdn.loveandlemons.com/wp-content/uploads/2021/08/caprese-skewers-1.jpg", category: "Appetizers"},
        {id: 6, name: "Taquitos", price: "9.99", description: "Crispy tortilla shells surround a gooey filling of meaty jackfruit, cheese, and refried beans.", img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/01/taquitos-recipe.jpg", category: "Appetizers"},

        {id: 7, name: "Grill", price: "40.92", description: "Crispy tortilla shells surround a gooey filling of meaty jackfruit, cheese, and refried beans.", img: "https://st2.depositphotos.com/1194063/7135/i/450/depositphotos_71351499-stock-photo-grill.jpg", category: "Pizza"},

        {id: 9, name: "Grill", price: "40.92", description: "Crispy tortilla shells surround a gooey filling of meaty jackfruit, cheese, and refried beans.", img: "https://st2.depositphotos.com/1194063/7135/i/450/depositphotos_71351499-stock-photo-grill.jpg", category: "Burgers"},
        {id: 10, name: "Beef", price: "10.55", description: "Crispy tortilla shells surround a gooey filling of meaty jackfruit, cheese, and refried beans.", img: "https://images.immediate.co.uk/production/volatile/sites/30/2024/03/AirFryerBeefJoint-a7e998e.jpg", category: "Burgers"},

        {id: 11, name: "Grill", price: "40.92", description: "Crispy tortilla shells surround a gooey filling of meaty jackfruit, cheese, and refried beans.", img: "https://st2.depositphotos.com/1194063/7135/i/450/depositphotos_71351499-stock-photo-grill.jpg", category: "Pasta"},
        {id: 12, name: "Beef", price: "10.55", description: "Crispy tortilla shells surround a gooey filling of meaty jackfruit, cheese, and refried beans.", img: "https://images.immediate.co.uk/production/volatile/sites/30/2024/03/AirFryerBeefJoint-a7e998e.jpg", category: "Pasta"},

        {id: 13, name: "Grill", price: "40.92", description: "Crispy tortilla shells surround a gooey filling of meaty jackfruit, cheese, and refried beans.", img: "https://st2.depositphotos.com/1194063/7135/i/450/depositphotos_71351499-stock-photo-grill.jpg", category: "Fish"},
        {id: 14, name: "Beef", price: "10.55", description: "Crispy tortilla shells surround a gooey filling of meaty jackfruit, cheese, and refried beans.", img: "https://images.immediate.co.uk/production/volatile/sites/30/2024/03/AirFryerBeefJoint-a7e998e.jpg", category: "Fish"},

        {id: 15, name: "Grill", price: "40.92", description: "Crispy tortilla shells surround a gooey filling of meaty jackfruit, cheese, and refried beans.", img: "https://st2.depositphotos.com/1194063/7135/i/450/depositphotos_71351499-stock-photo-grill.jpg", category: "Grill"},
        {id: 16, name: "Beef", price: "10.55", description: "Crispy tortilla shells surround a gooey filling of meaty jackfruit, cheese, and refried beans.", img: "https://images.immediate.co.uk/production/volatile/sites/30/2024/03/AirFryerBeefJoint-a7e998e.jpg", category: "Grill"},

        {id: 17, name: "Grill", price: "40.92", description: "Crispy tortilla shells surround a gooey filling of meaty jackfruit, cheese, and refried beans.", img: "https://st2.depositphotos.com/1194063/7135/i/450/depositphotos_71351499-stock-photo-grill.jpg", category: "Drinks"},
        {id: 18, name: "Beef", price: "10.55", description: "Crispy tortilla shells surround a gooey filling of meaty jackfruit, cheese, and refried beans.", img: "https://images.immediate.co.uk/production/volatile/sites/30/2024/03/AirFryerBeefJoint-a7e998e.jpg", category: "Drinks"},
    ]

    const isMenuItemInCart = (menuItem) => {
        let exists = 0;
        let cartItemFound = null;
        cartItems.forEach(cartItem => {
            if(menuItem.id == cartItem.id ){
                console.log(menuItem.name)
                exists = cartItem.quantity;
                cartItemFound = cartItem;
            }
        })

        if (exists == 0)
            return <span className="material-symbols-rounded menu-item-add-icon" onClick={() => addToCart(menuItem)}>add</span>
        else {
            return <div className='menu-item-exists'>
                <span className="material-symbols-rounded inner-icon" onClick={() => removeFromCart(menuItem)}>remove</span>
                <span>{cartItemFound.quantity}</span>
                <span className="material-symbols-rounded inner-icon" onClick={() => addToCart(menuItem)}>add</span>
            </div>
        }
    }

    return <div className='menu-items-container'>
        {
            showMessage ?
            <h3>Menu Items - <span  style={{textDecoration: "underline"}}>{params.category != null ? params.category.toUpperCase() : "ALL"}</span></h3>
            : null
        }
        <div className='menu-items-grid'>
        {
            filteredMenuItems.map((item) => {
                return <div className='menu-item' key={item.id}>
                    <div className='image-container'>
                        <span className="menu-item-type">{item.category}</span>
                        <img src={item.img} alt={item.name} />
                        {
                            isMenuItemInCart(item)
                        }
                        
                    </div>
                    <div className='text-container'>
                        <p style={{textAlign: "center", margin: "10px 0", fontWeight: "500"}}>{item.name}</p>
                        <p style={{textAlign: "justify", margin: "10px 0", padding: "0 10px", fontSize: "12px"}}>{item.description}</p>
                    </div>

                    <div className='price-container'>
                        <p style={{textAlign: "start", margin: "10px 0", fontWeight: "500"}}>${item.price}</p>
                    </div>
                </div>
            })
        }
        </div>
        <hr />
    </div>
}

export default MenuItem;