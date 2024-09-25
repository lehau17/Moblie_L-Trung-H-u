import * as React from 'react';
import { Text, View, Button, Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const imgs = ['didong.jpg'];

function HomeScreen({ navigation, route }) {
  let mau = route.params?.mau;
  let id = route.params?.id;
  const [colorDT, setColorDT] = React.useState(mau);
  React.useEffect(() => {
    setColorDT(mau);
  }, []);
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#fff' }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Image source={require('didong.jpg')} />
        <Text>Điện thoại Vinfast 3 - Chính hãng</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('sao.jpg')}
            style={{ height: 20, width: 20 }}
          />
          <Image
            source={require('sao.jpg')}
            style={{ height: 20, width: 20 }}
          />
          <Image
            source={require('sao.jpg')}
            style={{ height: 20, width: 20 }}
          />
          <Image
            source={require('sao.jpg')}
            style={{ height: 20, width: 20 }}
          />
          <Image
            source={require('sao.jpg')}
            style={{ height: 20, width: 20 }}
          />
          <Text>(Xem 829 đánh giá)</Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
          }}>
          <Text style={{ fontWeight: 800 }}>1.799.790Đ</Text>
          <Text style={{}}>1.799.790Đ</Text>
        </Text>
      </View>
      <Text style={{ color: 'red', fontWeight: 600 }}>
        Ở đâu rẻ hơn hoàn tiền ?
      </Text>
      <Button
        title="4 màu - Chọn màu ->"
        color="red"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId } = route.params;
  const { otherParam } = route.params;
  const [color, setColor] = React.useState('blue');
  const hanlerClick = (color) => {
    setColor(color);
  };
  const colors = ['red', 'blue', 'black', 'green'];
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <Text>check color:{color}</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image
          source={require('didong.jpg')}
          style={{ height: 120, width: 120 }}
        />
        <View>
          <Text>Điện thoại vinfast chính hãng</Text>
        </View>
      </View>
      <View style={{ flex: 3, backgroundColor: 'gray', alignItems: 'center' }}>
        <Text style={{ width: '100%', textAlign: 'left' }}>
          Chọn 1 màu bên dưới
        </Text>
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          {colors.map((e, index) => {
            return (
                <TouchableOpacity                 onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate('Home', {
                    mau: e,
                    id: 'hehe',
                  });
                }} style={{minHeight:60, minWidth:80, backgroundColor:e}}>
  </TouchableOpacity>
              // <Button
              // color={e}
              // padding= 
              // "60"
              //   onPress={() => {
              //     /* 1. Navigate to the Details route with params */
              //     navigation.navigate('Home', {
              //       mau: e,
              //       id: 'hehe',
              //     });
              //   }}
              // />
            );
          })}
        </View>
      </View>
      <Button
        title="Chọn màu thành công"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Home', {
            mau: color,
            id: 'hehe',
          });
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
