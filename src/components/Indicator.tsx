import { StyleSheet, View, Image, } from 'react-native'

import { segments } from '../../assets/segmentAssets'
import { useEffect, useState } from 'react';

const ASPECT_RATIO = 2.41

interface Params {
    symbol: string | number,
    height: number,
    comma?: boolean,
    dot?: boolean
}

export default function Indicator({ symbol, comma, dot, height }: Params) {
    const width = height / ASPECT_RATIO
    const segHeight = height / 5 * 4
    const segWidth = segHeight / ASPECT_RATIO

    const [seg_a, setSeg_a] = useState(false)
    const [seg_b, setSeg_b] = useState(false)
    const [seg_c, setSeg_c] = useState(false)
    const [seg_d, setSeg_d] = useState(false)
    const [seg_e, setSeg_e] = useState(false)
    const [seg_f, setSeg_f] = useState(false)
    const [seg_g, setSeg_g] = useState(false)

    function drawSegments(symbol: string | number) {
        symbol = String(symbol)
        switch (symbol) {
            case '1':
                setSeg_a(false)
                setSeg_b(true)
                setSeg_c(true)
                setSeg_d(false)
                setSeg_e(false)
                setSeg_f(false)
                setSeg_g(false)
                break;
            case '2':
                setSeg_a(true)
                setSeg_b(true)
                setSeg_c(false)
                setSeg_d(true)
                setSeg_e(true)
                setSeg_f(false)
                setSeg_g(true)
                break;
            case '3':
                setSeg_a(true)
                setSeg_b(true)
                setSeg_c(true)
                setSeg_d(true)
                setSeg_e(false)
                setSeg_f(false)
                setSeg_g(true)
                break;
            case '4':
                setSeg_a(false)
                setSeg_b(true)
                setSeg_c(true)
                setSeg_d(false)
                setSeg_e(false)
                setSeg_f(true)
                setSeg_g(true)
                break;
            case '5':
                setSeg_a(true)
                setSeg_b(false)
                setSeg_c(true)
                setSeg_d(true)
                setSeg_e(false)
                setSeg_f(true)
                setSeg_g(true)
                break;
            case '6':
                setSeg_a(true)
                setSeg_b(false)
                setSeg_c(true)
                setSeg_d(true)
                setSeg_e(true)
                setSeg_f(true)
                setSeg_g(true)
                break;
            case '7':
                setSeg_a(true)
                setSeg_b(true)
                setSeg_c(true)
                setSeg_d(false)
                setSeg_e(false)
                setSeg_f(false)
                setSeg_g(false)
                break;
            case '8':
                setSeg_a(true)
                setSeg_b(true)
                setSeg_c(true)
                setSeg_d(true)
                setSeg_e(true)
                setSeg_f(true)
                setSeg_g(true)

                break;
            case '9':
                setSeg_a(true)
                setSeg_b(true)
                setSeg_c(true)
                setSeg_d(true)
                setSeg_e(false)
                setSeg_f(true)
                setSeg_g(true)
                break;
            case '0':
                setSeg_a(true)
                setSeg_b(true)
                setSeg_c(true)
                setSeg_d(true)
                setSeg_e(true)
                setSeg_f(true)
                setSeg_g(false)
                break;
            case '-':
                setSeg_a(false)
                setSeg_b(false)
                setSeg_c(false)
                setSeg_d(false)
                setSeg_e(false)
                setSeg_f(false)
                setSeg_g(true)
                break;
            default:
                setSeg_a(false)
                setSeg_b(true)
                setSeg_c(true)
                setSeg_d(false)
                setSeg_e(true)
                setSeg_f(true)
                setSeg_g(true)
                break;
        }
    }

    useEffect(() => {
        drawSegments(symbol)
    }, [symbol])


    return (
        <View style={[styles.container, {}]}>
            <View style={[
                styles.segmentsBar,
                {
                    width: width, height: height,
                }
            ]}>
                {seg_a && <Image style={[styles.segment, { width: segWidth, height: segHeight, top: height / 10 }]} source={segments.seg_a} />}
                {seg_b && <Image style={[styles.segment, { width: segWidth, height: segHeight, top: height / 10 }]} source={segments.seg_b} />}
                {seg_c && <Image style={[styles.segment, { width: segWidth, height: segHeight, top: height / 10 }]} source={segments.seg_c} />}
                {seg_d && <Image style={[styles.segment, { width: segWidth, height: segHeight, top: height / 10 }]} source={segments.seg_d} />}
                {seg_e && <Image style={[styles.segment, { width: segWidth, height: segHeight, top: height / 10 }]} source={segments.seg_e} />}
                {seg_f && <Image style={[styles.segment, { width: segWidth, height: segHeight, top: height / 10 }]} source={segments.seg_f} />}
                {seg_g && <Image style={[styles.segment, { width: segWidth, height: segHeight, top: height / 10 }]} source={segments.seg_g} />}
                {dot && <Image style={[styles.segment, { width: segWidth, height: segHeight, top: height / 10 }]} source={segments.dot} />}
                {comma && <Image style={[styles.segment, { width: segWidth, height: segHeight, top: height / 10 }]} source={segments.comma} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    segmentsBar: {
    },
    segment: {
        position: 'absolute',
    }
})