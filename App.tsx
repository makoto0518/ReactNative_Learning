/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'; //React Native の核。コンポーネント（画面の部品）を作るために必要なライブラリ。
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#000000' //背景色を黒にする

      }}>
      <Text style={{ color: '#ffffff' , fontSize: 20, fontWeight: 'bold'}}>Hello World こんにちは from Makoto</Text>
    </View>
  );
}