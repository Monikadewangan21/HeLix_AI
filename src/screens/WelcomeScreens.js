import { View, Text, Image, TouchableOpacityBase, TouchableOpacityComponent } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";


export default function WelcomeScreens(){
    const navigation =useNavigation();
    return(
        <SafeAreaView className="flex justify-around flex-1 bg-white">
            <View className="space-y-2">
               <Text style={{fontSize: wp(10)}} className="font-bold text-center text-gray-700"> 
                    Jarvis
               </Text>
               
               <Text style={{fontSize: wp(4)}} className="font-semibold tracking-wider text-center text-gray-600">
                  The Funture is here, Powered by AI.
                </Text>
            </View>

            <View className="flex-row justify-center">
                 <Image source={require('../../assets/images/welcom.png')} style={{width:wp(75), height:wp(75)}} />
            </View>

            {/*Get Started Button */}
            <TouchableOpacity onPress={()=> navigation.navigate('Home')} className="p-4 mx-5 bg-emerald-900 rounded-2xl">
                <Text style={{fontSize: wp(6)}} className="text-2xl font-semibold text-center text-white">Get Started</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}