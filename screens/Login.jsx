import { View, Text,Button } from 'react-native'
import React from 'react'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
    const {signInWithGoogle,user} = useAuth()
    console.log({user})
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Sign in with Google"
        onPress={async() => {
          await signInWithGoogle();
        }}
      />
    </View>
  )
}