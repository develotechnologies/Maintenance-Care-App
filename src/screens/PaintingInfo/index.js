import React, { Fragment } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import VendorSection from '../../components/VendorSection';
import VendorDetails from '../../components/VendorDetails';
import { width } from 'react-native-dimension';
export default function PaintingInfo({ navigation: { goBack } }) {
  const data = [
    {label: 'Phone', value: '1745893437'},
    {label: 'Fax', value: '----------'},
    {label: 'Email', value: 'Xyz@gmail.com'},
    {label: 'Contact', value: '325844500'},
    {label: 'Address', value: '1073 Chappelle blvd'},
    {label: 'Address2', value: 'Nill'},
    {label: 'City', value: 'Edmontom'},
    {label: 'Stat/prov', value: 'AB'},
    {label: 'Zip', value: 't6w 3m 1'},
  ]
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Header hideActionIcon
      leadIcon
      leadingIcon={'angle-left'} onpressADD={() => goBack()}
        title={'Vendors Information'}
      />
      <View style={{marginTop:width(2)}}></View>
      <VendorSection 
      vendorLogo={require('../../assets/images/painting.png')}
      vendorTitle={'PAINTING'}
      />
      
      <View style={{ marginTop: width(2) }}></View>
      <ScrollView>
      <VendorDetails
        nameTitle={'Name'} detailTitle={'Foti'}
        data={data}
      />
</ScrollView>
    
    </SafeAreaView>
  );
}