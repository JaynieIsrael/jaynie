import { Text, View } from 'react-native';
import {styles} from './src/style/Styles.js'
import imge from './image.png'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={[
          styles.boxMain,
          {backgroundColor: '#1e3799'}
      ]}>
       
      <View style={[
        styles.iconArea,{ 
          backgroundColor: '#1abc9c',
          backgroundImage: `url(${imge})`, }
      ]}>
        
        </View>
        <Text style={styles.a}>Jaynie Israel</Text>
        <Text style={styles.aa}>BS Information Technology 4</Text>
      </View>
      <Text style={styles.aaa}>My Subjects</Text>
      <View style={[
          styles.rectangle,
          {backgroundColor: '#bdc3c7'}
      ]}>
         <Text style={styles.disFont}>ELEC 2</Text>
         <Text style={styles.disFont1}>Web Development/Web Enterprise{"\n"}Units: 3</Text>
      </View>
      <View style={[
          styles.rectangle,
          {backgroundColor: '#bdc3c7'}
      ]}>
         <Text style={styles.disFont}>ELEC 3</Text>
         <Text style={styles.disFont1}>Mobile Application{"\n"}Units: 3</Text>
      </View>
      <View style={[
          styles.rectangle,
          {backgroundColor: '#bdc3c7'}
      ]}>
         <Text style={styles.disFont}>IT 311</Text>
         <Text style={styles.disFont1}>Software Engineering{"\n"}Units: 3</Text>
      </View>
      <View style={[
          styles.rectangle,
          {backgroundColor: '#bdc3c7'}
      ]}>
         <Text style={styles.disFont}>IT 312</Text>
         <Text style={styles.disFont1}>Information Assurance and Security 2{"\n"}Units: 3</Text>
      </View>
      <View style={[
          styles.rectangle,
          {backgroundColor: '#bdc3c7'}
      ]}>
         <Text style={styles.disFont}>IT 313</Text>
         <Text style={styles.disFont1}>Quantitative Methods{"\n"}Units: 3</Text>
      </View>
      <Text style={styles.grndFont}>
        Click Here To See More
        </Text>
    </View>
  );
}


