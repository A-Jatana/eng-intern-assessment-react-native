import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Interface defining the expected properties for StopWatchButton
interface StopWatchButtonProps {
  title: string;
  onPress: () => void;
}

// StopWatchButton functional component
export default function StopWatchButton({ title, onPress }: StopWatchButtonProps) {
  return (
    // Touchable area that triggers onPress function
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

// Styles for the button and text
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c0dce4',
    padding: 10,
    borderRadius: 3,
    marginHorizontal: 45,
    marginBottom: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
