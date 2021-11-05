/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image,Button, Dimensions, TouchableOpacity,Text,StatusBar } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const {height,width} = Dimensions.get("screen");

// import { Container } from './styles';

const Dots = ({selected})=>{
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    return(
        <View style={{width:6, height: 6, marginHorizontal: 3, backgroundColor}}/>
    )
}

const Next= ({...props}) => {
    return (
        <TouchableOpacity style={{marginHorizontal: 15}} {...props}>
            <Text>Next</Text>
        </TouchableOpacity> 
    )
}

const Skip= ({...props}) => {
    return (
        <TouchableOpacity style={{marginHorizontal: 15}} {...props}>
            <Text>Skip</Text>
        </TouchableOpacity> 
    )
}

const Done = ({...props}) => {
    return (
          <TouchableOpacity style={{marginHorizontal: 15}} {...props}>
            <Text>Done</Text>
        </TouchableOpacity> 
    )
}


const OnBoardingView = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
        <StatusBar hidden={false} barStyle="dark-content" backgroundColor = {"white"}/>
    <Onboarding
    DotComponent={Dots}
    NextButtonComponent={Next}
    SkipButtonComponent={Skip}
    DoneButtonComponent={Done}
    onDone={()=>navigation.replace("Bottom")}
    onSkip={()=>navigation.navigate("Bottom")}
    pages={[
      {
        backgroundColor: '#ffffff',
        image: <Image resizeMode="cover" style={{width: width * 0.7, height: height * 0.30 }} source={require('../assets/1.png')} />,
        title: 'Onboarding 1',
        subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#F5F5F5',
        image: <Image resizeMode="cover" style={{width: width * 0.7, height: height * 0.30 }} source={require('../assets/2.png')} />,
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#ffffff',
        image: <Image resizeMode="cover" style={{width: width * 0.7, height: height * 0.30 }} source={require('../assets/3.png')} />,
        title: 'Onboarding 3',
        subtitle: 'Done with React Native Onboarding Swiper',
    },
    ]}
  />
    </View>
    )
}

export default OnBoardingView;