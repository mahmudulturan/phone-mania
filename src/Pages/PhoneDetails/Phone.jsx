import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetail from "./PhoneDetail";

const Phone = () => {
    const [phone, setPhone] = useState({});
    const {id} = useParams()
    const phoneId = parseInt(id)
    const phones = useLoaderData();
    useEffect(()=>{
        const findPhone = phones?.find((phone) => phone.id == phoneId);
        setPhone(findPhone)
    },[phoneId, phones])
    return (
        <div>
            <PhoneDetail phone={phone}></PhoneDetail>
        </div>
    );
};

export default Phone;