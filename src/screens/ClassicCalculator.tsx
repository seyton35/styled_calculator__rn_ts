import { StyleSheet, View, Button, Text, Dimensions } from 'react-native'
import { useRef, useState } from 'react'

import Dial from '../components/Dial'
import CalcBtn from '../components/CalcBtn'
import { buttons } from '../../assets/buttonsAssets'
import PlusBtn from '../components/PlusBtn'

interface Params { }

const PLUS_BTN_HEIGHT_ASPECT = 2.333

export default function ClassicCalculator({ }: Params) {
    const window = Dimensions.get('window').width
    const paddingHorizontal = window / 10//TODO: fix this trash
    const btnSize = (window - paddingHorizontal) / 4

    const [dialNumber, setDialNumber] = useState(0)
    const firstNumber = useRef(0)
    const secondNumber = useRef(0)
    const currentFunction = useRef<null | string>(null)
    const dotPressed = useRef<boolean>(false)

    function calculate(symbol: string) {
        switch (symbol) {
            case '+':
                if (currentFunction.current == null) {
                    currentFunction.current = '+'
                    firstNumber.current = dialNumber
                    setDialNumber(secondNumber.current)
                } else {
                    setDialNumber(firstNumber.current + secondNumber.current)
                }
                break;

            default:
                break;
        }
    }

    function numPress(num: number) {
        let dialNum = 0
        if (dialNumber !== 0) {
            if (String(dialNumber).length < 8) {
                dialNum = Number(dialNumber + '' + num)
                setDialNumber(dialNum)
            }
        } else {
            setDialNumber(num)
        }
        console.log('dialNum', dialNum)

    }

    function btnPressed(symbol: string) {
        switch (symbol) {
            case '.':
                if (String(dialNumber).indexOf('.') == -1)
                    dotPressed.current = true
                break;

            default:
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Dial length={12} number={dialNumber} />

            <View style={[styles.keyBoard, { paddingHorizontal: paddingHorizontal / 6 }]}>
                <View style={styles.keyBoardRow}>
                    <CalcBtn size={btnSize} onPress={() => { setDialNumber(0) }}
                        src1={buttons.btn_clear} src2={buttons.btn_clear_pressed}
                    />
                    <CalcBtn size={btnSize} onPress={() => { setDialNumber(-789.32) }}
                        src1={buttons.btn_memory_plus} src2={buttons.btn_memory_plus_pressed}
                    />
                    <CalcBtn size={btnSize} onPress={() => { setDialNumber(dialNumber + 1) }}
                        src1={buttons.btn_memory_minus} src2={buttons.btn_memory_minus_pressed}
                    />
                    <CalcBtn size={btnSize} onPress={() => { console.log('9') }}
                        src1={buttons.btn_memory_read_clear} src2={buttons.btn_memory_read_clear_pressed}
                    />
                </View>
                <View style={styles.keyBoardRow}>
                    <CalcBtn size={btnSize} onPress={() => { setDialNumber(Number(String(dialNumber).slice(0, -1))) }}
                        src1={buttons.btn_clear_entry} src2={buttons.btn_clear_entry_pressed}
                    />
                    <CalcBtn size={btnSize} onPress={() => { }}
                        src1={buttons.btn_sqrt} src2={buttons.btn_sqrt_pressed}
                    />
                    <CalcBtn size={btnSize} onPress={() => { console.log('9') }}
                        src1={buttons.btn_percent} src2={buttons.btn_percent_pressed}
                    />
                    <CalcBtn size={btnSize} onPress={() => { console.log('9') }}
                        src1={buttons.btn_devide} src2={buttons.btn_devide_pressed}
                    />
                </View>
                <View style={styles.keyBoardRow}>
                    <CalcBtn size={btnSize} onPress={() => { numPress(7) }}
                        src1={buttons.btn_seven} src2={buttons.btn_seven_pressed}
                    />
                    <CalcBtn size={btnSize} onPress={() => { numPress(8) }}
                        src1={buttons.btn_eight} src2={buttons.btn_eight_pressed}
                    />
                    <CalcBtn size={btnSize} onPress={() => { numPress(9) }}
                        src1={buttons.btn_nine} src2={buttons.btn_nine_pressed}
                    />
                    <CalcBtn size={btnSize} onPress={() => { }}
                        src1={buttons.btn_times} src2={buttons.btn_times_pressed}
                    />
                </View>
                <View style={styles.keyBoardRow}>
                    <CalcBtn size={btnSize} onPress={() => { numPress(4) }}
                        src1={buttons.btn_four} src2={buttons.btn_four_pressed}
                    />
                    <CalcBtn size={btnSize} onPress={() => { numPress(5) }}
                        src1={buttons.btn_five} src2={buttons.btn_five_pressed}
                    />
                    <CalcBtn size={btnSize} onPress={() => { numPress(6) }}
                        src1={buttons.btn_six} src2={buttons.btn_six_pressed}
                    />
                    <CalcBtn size={btnSize} onPress={() => { }}
                        src1={buttons.btn_minus} src2={buttons.btn_minus_pressed}
                    />
                </View>
                <View style={styles.keyBoardRow}>
                    <View >
                        <View style={{ flexDirection: "row", }}>
                            <CalcBtn size={btnSize} onPress={() => { numPress(1) }}
                                src1={buttons.btn_one} src2={buttons.btn_one_pressed}
                            />
                            <CalcBtn size={btnSize} onPress={() => { numPress(2) }}
                                src1={buttons.btn_two} src2={buttons.btn_two_pressed}
                            />
                            <CalcBtn size={btnSize} onPress={() => { numPress(3) }}
                                src1={buttons.btn_three} src2={buttons.btn_three_pressed}
                            />
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 6 }}>
                            <CalcBtn size={btnSize} onPress={() => { numPress(0) }}
                                src1={buttons.btn_zero} src2={buttons.btn_zero_pressed}
                            />
                            <CalcBtn size={btnSize} onPress={() => { btnPressed('.') }}
                                src1={buttons.btn_dot} src2={buttons.btn_dot_pressed}
                            />
                            <CalcBtn size={btnSize} onPress={() => { console.log('3') }}
                                src1={buttons.btn_equals} src2={buttons.btn_equals_pressed}
                            />
                        </View>
                    </View>
                    <PlusBtn width={btnSize} height={btnSize * PLUS_BTN_HEIGHT_ASPECT}
                        onPress={() => { calculate('+') }}
                        src1={buttons.btn_plus} src2={buttons.btn_plus_pressed}
                    />

                </View>
            </View>


        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d4d4d4',
        paddingTop: 40,
    },
    header: {
        backgroundColor: '#222325',
        height: 120,
    },
    dial: {
        backgroundColor: '#959ba1',
        height: 30,

    },

    keyBoard: {

    },
    keyBoardRow: {
        paddingVertical: 3,
        flexDirection: 'row',
    },

})