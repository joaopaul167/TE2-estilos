import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
const Notas = ({navigation: {goBack}}) => {


  const [alunoSelecionado, setAluno] = useState("N/A");
  const [grauSelecionado, setGrau] = useState("N/A");
  const [nota, setNota] = useState(null);
  

  return (
    //é o que vai ser redenrizado

    <View style={{alignItems: 'center',justifyContent: 'space-evenly', flex:1}}>
      <View  style={{alignItems: 'center',justifyContent: 'space-evenly',width:'100%'}}>
        <Text style={styles.text}>Aluno</Text>
        <Picker
          style={{width:'80%'}}
          selectedValue={alunoSelecionado}
          onValueChange={(value, index) => setAluno(value)}
          mode="dropdown" // Android only
          >
          <Picker.Item label="Selecione o(a) Aluno(a)" value="N/A" />
          <Picker.Item label="João" value="João" />
          <Picker.Item label="Carla" value="Carla" />
          <Picker.Item label="Rafaela" value="Rafaela" />
                  
        </Picker>
      </View>
     


      <View  style={{alignItems: 'center',justifyContent: 'space-evenly',width:'100%'}}>
        <Text style={styles.text}>Grau</Text>
        <Picker
          style={{width:'80%'}}
          selectedValue={grauSelecionado}
          onValueChange={(value, index) => setGrau(value)}
          mode="dropdown" // Android only
          >
          <Picker.Item label="Selecione o Grau" value="N/A" />
          <Picker.Item label="Grau 1" value="Grau 1" />
          <Picker.Item label="Grau 2" value="Grau 2" />
          <Picker.Item label="Substituição" value="Substituição" />
          <Picker.Item label="Exame" value="Exame" />        
        </Picker>
      </View>
      

      <View  style={{alignItems: 'center',justifyContent: 'space-evenly',width:'100%'}}>
        <Text style={styles.text}>Nota</Text>
        <TextInput 
          style={{width:'80%', backgroundColor: '#ccc', borderRadius:10, elevation:5}}
          onChangeText={setNota}
          value={nota}
          selectTextOnFocus={true}
          keyboardType="numeric"
        />
      </View>
     


      <View style={{alignItems: 'center', justifyContent: 'space-evenly',width:'100%', height:'30%'}}>
        <TouchableOpacity onPress={() => goBack() } style={{backgroundColor:'red', width: '70%', alignItems:'center', justifyContent:'center', height:'30%', borderRadius:10, elevation:5}}>
          <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Cadastro realizado',
              `Aluno:${alunoSelecionado} Grau: ${grauSelecionado} Nota: ${nota}`,
              [
                {
                  text: 'Parabéns :)',
                  onPress: () => goBack(),
                },
              ],
            )
          }
          style={{backgroundColor:'dodgerblue', width: '70%', alignItems:'center', justifyContent:'center', height:'30%', borderRadius:10, elevation:5}}
          >
          <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//definir os estilos aqui
const styles = StyleSheet.create({
  text:{
    fontWeight:'bold', fontSize:15, alignSelf:'flex-start', marginLeft:'10%'
  }
});




export default Notas;
