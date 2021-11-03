import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AlunoDB from './DB/AlunoDB';

const Perfil = ({route}) => {
  console.log(route);

  const [alunoSelecionado, setAluno] = useState('Selecione');

  let funcaoOrdenacaoPorNome = (a, b) => {
    a = a.nome.toLowerCase();
    b = b.nome.toLowerCase();
    return a < b ? -1 : a > b ? 1 : 0;
  };

  let alunos = AlunoDB.sort(funcaoOrdenacaoPorNome).map((aluno, idx) => (
    <Picker.Item label={aluno.nome} value={aluno.nome} key={idx} />
  ));

  const alunoCadastro = AlunoDB.find(aluno => aluno.nome === alunoSelecionado);

  return (

    <View style={{alignItems: 'center',justifyContent: 'flex-start', flex:1}}>
      <View  style={{alignItems: 'center',justifyContent:'space-evenly',width:'100%', marginTop:20}}>
        <Text style={styles.text}>Aluno</Text>
        <Picker
          style={{width:'80%'}}
          selectedValue={alunoSelecionado}
          onValueChange={(value, _) => setAluno(value)}
          mode="dropdown" // Android only
        >
          <Picker.Item label="Selecione" value="Selecione" />
          {alunos} 
        </Picker>
      </View>
     
      {alunoCadastro != null && (
        <>
          <View style={{flexDirection:'row', alignItems:'center', width:'90%', height:'20%' , marginTop:20}}>
            <Image
                style={{width: '40%', height: '100%'}}
                source={{uri: alunoCadastro.foto}}
              />
              <View style={{width: '60%', height: '100%', alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontWeight:'bold', fontSize:15, marginTop:20}}>Aluno:</Text>
                <Text style={{fontWeight:'bold', fontSize:20,  marginTop:20}}>{alunoCadastro.nome}</Text>
              </View>
          </View>
          
          <Text style={styles.text}>Data Nascimento:{alunoCadastro.dataNascimento}</Text>
          <Text style={styles.text}>Hobby:{alunoCadastro.hobby}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({ 
  text:{
  fontWeight:'bold', fontSize:15, alignSelf:'flex-start', marginLeft:'10%', marginTop:50
}});


export default Perfil;
