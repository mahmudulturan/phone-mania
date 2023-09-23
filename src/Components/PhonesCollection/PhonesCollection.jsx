import PropTypes from 'prop-types';
import PhoneCard from './PhoneCard';

const PhonesCollection = ({phones}) => {

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Our Phones Collection</h1>
            <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {
                    phones.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

PhonesCollection.propTypes = {
    phones: PropTypes.array.isRequired,

}

export default PhonesCollection;