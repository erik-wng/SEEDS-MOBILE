  function handleNext() {
    if (isLast) {
      router.replace("/complete");
    } else {
      setStepIndex(stepIndex + 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        Step {stepIndex + 1} of {dummyRoutine.steps.length}
      </Text>

      <Text style={styles.stepText}>{step.text}</Text>

      <View style={styles.buttons}>
        <Pressable
          disabled={isFirst}
          onPress={() => setStepIndex(stepIndex - 1)}
          style={[styles.secondaryButton, isFirst && styles.disabled]}
        >
          <Text>Back</Text>
        </Pressable>

        <Pressable onPress={handleNext} style={styles.primaryButton}>
          <Text style={styles.primaryText}>{isLast ? "Finish" : "Next"}</Text>
        </Pressable>
      </View>
    </View>
  );
    const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "space-between",
    padding: 24, paddingVertical: 48
  },
  progress: { fontSize: 18, color: "#475569" },
  stepText: {
    fontSize: 34, fontWeight: "700",
    textAlign: "center", lineHeight: 44
  },
  buttons: { flexDirection: "row", gap: 12 },
  primaryButton: {
    flex: 1, backgroundColor: "#2563eb",
    padding: 16, borderRadius: 12, alignItems: "center"
  },
  primaryText: { color: "white", fontSize: 18, fontWeight: "600" },
  secondaryButton: {
    flex: 1, backgroundColor: "#e2e8f0",
    padding: 16, borderRadius: 12, alignItems: "center"
  },
  disabled: { opacity: 0.4 },
});

