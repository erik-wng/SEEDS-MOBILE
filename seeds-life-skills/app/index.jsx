import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEEDS Life Skills</Text>
      <Text style={styles.subtitle}>Practice one task at a time.</Text>

      <Link href="/routines" style={styles.button}>
        View Routines
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24, gap: 20 },
  title: { fontSize: 32, fontWeight: "700" },
  subtitle: { fontSize: 18 },
  button: {
    backgroundColor: "#2563eb", color: "white",
    padding: 16, borderRadius: 12, textAlign: "center", fontSize: 18
  },
});
