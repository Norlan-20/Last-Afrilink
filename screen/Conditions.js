import React from 'react';
import { WebView } from 'react-native-webview';

// import { Container } from './styles';

const Conditions = () => {
  return (
    <WebView source={{
        uri: 'https://afrilinkbusiness.io/conditions-d-utilisation'
      }}/>
  );
}

export default Conditions;