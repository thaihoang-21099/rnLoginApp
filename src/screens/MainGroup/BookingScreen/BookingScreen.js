import React from 'react';

import { View, FlatList, Text, SafeAreaView } from 'react-native';
import ScrollableView from 'react-native-scrollable-tab-view';


import TabBar from './TabBar';
import AppHeader from '../../../component/layout/AppHeader';
import BookingInfoComponent from '../../../component/layout/BookingInfoComponent';



//data
import { booking } from '../../../constant';



const AllData = booking;
const New = booking.filter(item => item.nameCus === 'DaVich Hoanggg')
const Inprocess = booking.filter(item => item.incurredFee > 10000)
const Cancel = booking.filter(item => item.deliveryFee > 200000);



class RenderItem extends React.Component {
    render() {
        const { booking } = this.props;
        return (
            <View style={{ backgroundColor: '#f1f1f1' }}>
                <FlatList
                    data={booking}
                    renderItem={({ item }) => <BookingInfoComponent booking={item} />}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={() => (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>No data found</Text>
                        </View>

                    )}
                />
            </View>
        )
    }
}


class BookingScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        //header: null
        // header: <AppHeader
        //     onPressBack={() => navigation.pop()}
        //     title='Booking man' />
    });

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

