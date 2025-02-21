import React from 'react';
import {TextInput} from 'react-native';

const SearchBar: React.FC = () => {
  return (
    <TextInput
      placeholder="search center"
      style={{
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 5,
        marginBottom: 10,
      }}
    />
  );
};
 export default SearchBar;