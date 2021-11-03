import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
const Cadastro = ({navigation: {goBack}}) => {
  //printar route
  //console.log(route)

  //const {numeroSelecionado}=route.params

  //hooks
  const [codigo, setCodigo] = useState(null);
  const [nome, setNome] = useState(null);
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [open, setOpen] = useState(false); //abre e fecha o modal data..default fechado

  return (
    //é o que vai ser redenrizado

    <View style={{alignItems: 'center',justifyContent: 'space-evenly', flex:1}}>
      <View style={{alignItems: 'center',justifyContent: 'space-evenly',width:'100%'}}>
        <Text style={styles.text}>Código:</Text>
        <TextInput
          style={{width: '80%', backgroundColor: '#ccc', borderRadius:10, elevation:5}}
          onChangeText={setCodigo}
          value={codigo}
          selectTextOnFocus={true}
          keyboardType="numeric"
        />
      </View>
      <View style={{alignItems: 'center',justifyContent: 'space-evenly',width:'100%'}}>
        <Text style={styles.text}>Nome</Text>
        <TextInput
          style={{width: '80%', backgroundColor: '#ccc', borderRadius:10, elevation:5}}
          onChangeText={setNome}
          value={nome}
          selectTextOnFocus={true}
        />
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',width:'100%'}}>
        <Text >Data Nascimento: </Text>
        <Button title={dataNascimento.toDateString()} style={{backgroundColor:'dodgerblue', borderRadius:10}} onPress={() => setOpen(true)}  />
      </View>
      <DatePicker
          modal
          open={open}
          mode={'date'}
          locale="pt-BR"
          style={{width: 250, backgroundColor: '#ccc'}}
          date={dataNascimento}
          onConfirm={date => {
            setOpen(false);
            setDataNascimento(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      <View style={{alignItems: 'center', justifyContent: 'space-evenly',width:'100%', height:'30%'}}>
        <TouchableOpacity onPress={() => goBack() } style={{backgroundColor:'red', width: '70%', alignItems:'center', justifyContent:'center', height:'30%', borderRadius:10, elevation:5}}>
          <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Cadastro realizado',
              `Código:${codigo} Nome: ${nome} Data Nascimento: ${dataNascimento}}`,
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
export default Cadastro;
