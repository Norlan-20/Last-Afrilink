import React from 'react';
import { WebView } from 'react-native';

// import { Container } from './styles';

const Faq = () => {
  return (
      <WebView source={{
          uri: 'https://https://afrilinkbusiness.io/faq'
      }}/>
  );
}

export default Faq;