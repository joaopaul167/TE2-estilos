import React,{useState} from "react";
import {View,Image,Text,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const Home= (props) => {
    const navigation=useNavigation();
    

    return (

        <View style={{alignItems: 'center',justifyContent: 'space-evenly', flex:1}}>
             <Text style={{fontWeight: 'bold', fontSize:23}}>App - Cadastro de Alunos</Text>
             <TouchableOpacity
                onPress={()=>navigation.navigate('Cadastro')}
                style={styles.button}
            >
                <Text style={{fontWeight: 'bold', fontSize:18}}>Cadastro</Text>
            </TouchableOpacity>

            
             <TouchableOpacity
                onPress={()=>navigation.navigate('Notas')}              
                style={styles.button}
            >
                <Text style={{fontWeight: 'bold', fontSize:18}}>Notas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>navigation.navigate('Perfil')}             
                style={styles.button}            
            >
                <Text style={{fontWeight: 'bold', fontSize:18}}>Perfil do Aluno</Text>
            </TouchableOpacity>

        </View>

    );

    };

    const styles = StyleSheet.create({
        button:{
            backgroundColor:'white', width:'80%', alignItems: 'center', justifyContent: 'center', height:'10%', borderRadius:10, elevation:5
        }
      });
export default Home;