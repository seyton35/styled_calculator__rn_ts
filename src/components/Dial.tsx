import { StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import Indicator from './Indicator'

interface Params {
    number: number,
    length: number,
}

export default function Dial({ number, length }: Params) {
    const [dialValue, setDialValue] = useState<string[]>([])
    useEffect(() => {
        const arr = String(number).split('')
        setDialValue(arr)        
    }, [number])


    function drawDial() {
        const dial = []
        for (let i = 0; i < dialValue.length; i++) {
            const el = dialValue[i]
            if (el == '.') {
                dial[i - 1] = <Indicator height={100} symbol={dialValue[i - 1]} key={i - 1} dot />
                continue
            }
            dial.push(<Indicator height={100} symbol={el} key={i} />)

        }
        
        return dial
    }

    return (
        <View style={styles.container}>
            {/* {dialValue.map((val, key) => {
                return (
                    <Indicator height={100} symbol={val} key={key} />
                )
            })} */}
            {drawDial()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#b2b4b3',
    },
})