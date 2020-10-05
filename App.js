import React, {useState} from 'react';
import {Text} from 'react-native';

import PageOne from './PageOne';
import PageTwo from './PageTwo';

export default function App() {
  const [page, setPage] = useState(1);

  switch (page) {
    case 1:
      return <PageOne goToNextPage={() => setPage(2)} />;
    case 2:
      return <PageTwo goBack={() => setPage(1)} />;
    default:
      return <Text>No Page mapped for {page}</Text>;
  }
}
