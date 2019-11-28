import React from 'react';

import { View, FlatList, Text, SafeAreaView, Image,TouchableOpacity } from 'react-native';
import ScrollableView from 'react-native-scrollable-tab-view';


import TabBar from './TabBar';
import AppHeader from '../../../component/layout/AppHeader';
import BookingInfoComponent from '../../../component/layout/BookingInfoComponent';



//data
import { booking } from '../../../constant';
import Images from '../../../assets';


const AllData = booking;
const New = booking.filter(item => item.nameCus === 'DaVich Hoanggg')
const Inprocess = booking.filter(item => item.incurredFee > 10000)
const Cancel = booking.filter(item => item.deliveryFee > 200000);



class RenderItem extends React.Component {
    _renderEmptyScreen = () => {
        return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            <Image source={Images.IMG_CREATE_BOOKING} style={{width:110,height:110,marginBottom:20}}/>
            <Text style={{fontSize:15,color:'#a7a7a7',marginVertical:5}}>Bạn chưa có đơn hàng</Text>
            <Text style={{fontSize:20,color:'#0028a5',marginVertical:5}}>Tạo đơn hàng</Text>
        </View>)
    }

    render() {
        const { booking } = this.props;
        return (
            <View style={{ backgroundColor: '#f1f1f1', flex: 1 }}>
                <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    data={booking}
                    renderItem={({ item }) => <BookingInfoComponent booking={item} />}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={this._renderEmptyScreen}
                />
            </View>
        )
    }
}


class BookingScreen extends React.Component {

    render() {
        return (
            <ScrollableView
                renderTabBar={() => <TabBar />}
            >
                <RenderItem key={1} tabLabel={`All (${4})`} booking={AllData} />
                <RenderItem key={2} tabLabel="New" booking={New} />
                <RenderItem key={3} tabLabel="In process" booking={Inprocess} />
                <RenderItem key={4} tabLabel="Cancel" booking={Cancel} />
            </ScrollableView>

        )
    }
}


export default BookingScreen;

