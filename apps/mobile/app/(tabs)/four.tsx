import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Editor } from "@repo/ui";
export default function Native() {
    return (
        <View style={ styles.container }>
            <Editor />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontWeight: "bold",
        marginBottom: 20,
        fontSize: 36,
    },
});
