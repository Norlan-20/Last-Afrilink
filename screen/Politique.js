import React from 'react';
import { WebView } from 'react-native-webview';

// import { Container } from './styles';

const Politique = () => {
  return (
      <WebView source={{
          uri: 'https://afrilinkbusiness.io/politique-de-confidentialite'
      }}/>
  );
}

export default Politique;