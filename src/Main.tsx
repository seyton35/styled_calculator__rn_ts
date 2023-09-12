import { StyleSheet, Text, View } from 'react-native'
import ClassicCalculator from './screens/ClassicCalculator'

export default function Main() {
    return (
        <View style={styles.container}>
            <ClassicCalculator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})