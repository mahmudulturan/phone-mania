import PropTypes from "prop-types";
import Swal from "sweetalert2";

const PhoneDetail = ({ phone }) => {
  const { id, image, phone_name, brand_name, price } = phone;

  const handleFavourites = () => {
    const favouriteItemsArray = [];
    const favouriteItems  = JSON.parse(localStorage.getItem("favourites"))
    if (!favouriteItems) {
      favouriteItemsArray.push(id);
      localStorage.setItem("favourites", JSON.stringify(favouriteItemsArray));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added To Favourites...",
        showConfirmButton: false,
        timer: 1500,
      });
    } 
    else {
        const isExist = favouriteItems.find((item) => item == id);
        if (!isExist) {
          favouriteItemsArray.push(...favouriteItems, id)
          localStorage.setItem("favourites", JSON.stringify(favouriteItemsArray));
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added To Favourites...",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        else{
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Already Added...",
            showConfirmButton: false,
            timer: 1500,
          });
        }        
    }
  };
  return (
    <div className="min-h[80vh] flex justify-center items-center">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            alt={`image of ${phone_name}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            ${price}
          </p>
          <span className="inline-block">
            <button
              onClick={handleFavourites}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              Add to favourites
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
PhoneDetail.propTypes = {
  phone: PropTypes.object.isRequired,
};

export default PhoneDetail;
