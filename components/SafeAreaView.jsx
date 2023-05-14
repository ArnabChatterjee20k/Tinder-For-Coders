import React from 'react'
import { StatusBar, View } from 'react-native'
import useNoHeader from '../hooks/useNoHeader';


export default function SafeAreaView({children,className}) {
    const gap = StatusBar.currentHeight+5;
    useNoHeader()
  return (
    <View style={{paddingTop:gap}} className={className}>
        {children}
    </View>
  )
}