import PropTypes from "prop-types";
const PhoneCard = ({ phone }) => {
    const {id, image, phone_name, brand_name, price, rating} = phone;
  return (
    <div>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {brand_name}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="btn w-full"
            type="button">
            See Datails
          </button>
        </div>
      </div>
    </div>
  );
};

PhoneCard.propTypes = {
  phone: PropTypes.object.isRequired,
};

export default PhoneCard;
