import { useEffect, useState } from "react";
import FavouriteItem from "./FavouriteItem";
import { useLoaderData } from "react-router-dom";

const Favourites = () => {
    const [favouriteItems, setFavouriteItems] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [displayCount, setDisplayCount] = useState(4)
    const [show, setShow] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0);
    const allPhones = useLoaderData();

    
    
    useEffect(()=>{
        const loadDataFromLs = JSON.parse(localStorage.getItem('favourites'))
        if(loadDataFromLs){
            const filterItems = allPhones.filter(phone => loadDataFromLs.includes(phone.id))
            setFavouriteItems(filterItems);
            const sum = favouriteItems.reduce((previousPrice, item) => previousPrice + item.price, 0);
            setTotalPrice(sum);
            setNotFound(true);
        }
        else{
            setNotFound(false)
        }
    },[allPhones, favouriteItems])
    const handleDeleteFavourites = ()=> {
        setFavouriteItems([])
        setNotFound(false)
        localStorage.setItem('favourites', JSON.stringify(null))
    }
    const handleShow = () => {
        setShow(!show)
        if(!show){
            setDisplayCount(favouriteItems.length)
        }
        else{
            setDisplayCount(4);
        }
    }

    return (
        <div className="min-h-[80vh]">
            {
                !notFound? <h1 className="flex justify-center items-center min-h-[70vh]">No Items Found</h1> : <div>
                    <div className="text-center my-4">
                        <button className="btn" onClick={handleDeleteFavourites}>Delete All Favourites</button>
                    </div>
                    <div className="text-center my-4">
                        <h3 className="font-medium">Total Price: {totalPrice}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
                        {
                            favouriteItems.slice(0, displayCount).map(phone => <FavouriteItem  key={phone.id} phone={phone}></FavouriteItem>)
                        }
                    </div>
                    <div className="text-center my-4">
                        
                        <button onClick={handleShow} className={`btn ${favouriteItems.length<=4 && 'hidden'}`}>{show? 'Show Less': 'Show All'}</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Favourites;