import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './StackNav';
import { AuthProvider } from './hooks/useAuth';
export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNav/>
      </AuthProvider>
    </NavigationContainer>
  );
}