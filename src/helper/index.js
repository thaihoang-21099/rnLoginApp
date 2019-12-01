import { city as cities } from '../constant';
import { StackActions, NavigationActions } from 'react-navigation';


export const getStringLocation = ({ cityId, districtId, wardId }) => {
    if (!cityId || !districtId) {
        return null
    }
    const city = cities.filter(city => city.id == cityId);
    const district = (city[0].district).filter(district => district.id == districtId);

    if (!district[0].ward) {
        return `${city[0].name} - ${district[0].name}`
    }
    const ward = district[0].ward.filter(ward => ward.id == wardId);

    return `${city[0].name} - ${district[0].name} - ${ward[0].name}`;


}

export const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' đ'
}

export const hanldeResetStackAction = (navigation,routeName)=>{
    const resetAction = StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({routeName})],
      });
      navigation.dispatch(resetAction);
}