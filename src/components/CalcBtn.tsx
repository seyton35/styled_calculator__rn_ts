import { Image, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'

const BUTTON_ASPECT = 1.046

interface Params {
    onPress: () => void,
    src1: any
    src2: any
    size: number
}

export default function CalcBtn({ onPress, src1, src2, size }: Params) {
    const [touch, setTouch] = useState(false)
    const pressedButtonSize = size / BUTTON_ASPECT
    const pressedButtonMargin = size - pressedButtonSize

    return (
        <Pressable style={[styles.container, { marginHorizontal: size / 25 }]}
            onPress={onPress}
            onTouchStart={() => setTouch(true)}
            onTouchEnd={() => setTouch(false)}
        >
            {touch
                ? <Image style={[styles.image, {
                    width: pressedButtonSize, height: pressedButtonSize,
                    marginLeft: pressedButtonMargin, marginTop: pressedButtonMargin
                }]} source={src2} />
                : <Image style={[styles.image, { width: size, height: size }]} source={src1} />
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
    }
})