import {city as cities} from '../constant';
export const getStringLocation=({cityId,districtId,wardId})=>{
    if(!cityId || !districtId){
        return null
    }
    const city = cities.filter(city=>city.id==cityId);
    const district = (city[0].district).filter(district=>district.id==districtId);
    
    if(!district[0].ward){
        return `${city[0].name} - ${district[0].name}`
    }
    const ward = district[0].ward.filter(ward=>ward.id==wardId);

    return `${city[0].name} - ${district[0].name} - ${ward[0].name}`;


}
