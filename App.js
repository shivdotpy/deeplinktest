import React, {useEffect} from 'react';
import {Linking} from 'react-native';
import AppCOntainer from './routes/navigation';
import DeepLinking from 'react-native-deep-linking';

const prefix = 'deeplinktest://'

const App = () => {

  const handleUrl = (event) => {
    console.log('handle url', event)
  }

  useEffect(() => {
    DeepLinking.addScheme('deeplinktest://');
    Linking.addEventListener('url', handleUrl);

    DeepLinking.addRoute('/Dashboard/:id', (response) => {
      console.log({ response });
      console.log('wow')
    });

    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('url', url)
        // Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));

  }, [])
  return (
      <AppCOntainer uriPrefix={prefix} />
  );
};

export default App;
