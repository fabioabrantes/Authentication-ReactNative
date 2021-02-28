import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

import {useAuth} from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const {logout, user} = useAuth();

  async function handleLogout() {
    logout();
  }
  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {Dashboard};
