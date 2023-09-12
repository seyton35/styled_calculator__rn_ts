import { Image, Pressable, StyleSheet, View } from 'react-native'
import { useState } from 'react'

const WIDTH_ASPECT = 1.046

interface Params {
    width: number,
    height: number,
    src1: any
    src2: any
    onPress: () => void
}

export default function PlusBtn({ height, width, onPress, src1, src2 }: Params) {
    const [touch, setTouch] = useState(false)
    const pressedButtonWidth = width / WIDTH_ASPECT
    const pressedButtonMargin = width - pressedButtonWidth
    const pressedButtonHeight = height - pressedButtonMargin

    return (
        <Pressable style={[styles.container, { marginHorizontal: width / 25 }]}
            onPress={onPress}
            onTouchStart={() => setTouch(true)}
            onTouchEnd={() => setTouch(false)}
        >
            {touch
                ? <Image style={[styles.image, {
                    width: pressedButtonWidth, height: pressedButtonHeight,
                    marginLeft: pressedButtonMargin, marginTop: pressedButtonMargin
                }]} source={src2} />
                : <Image style={[styles.image, { width: width, height: height }]} source={src1} />
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