/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * console blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace console {
    /**
     * TODO: 電圧を表示する（基準電圧,アナログ読み取り値）
     * @param ref 基準電圧。, eg: 2048
     * @param ana アナログ値。, eg: 493
     */
    //% block
    export function DispalyVolt(ref: number, ana: number): void {
        let volt = 0
        if (ana < 600) {
            volt = 2900
        } else {
            volt = (ref * 1023) / ana
        }

        if (volt >= 3000) {
            led.plot(2, 2)
        } else {
            led.unplot(2, 2)
        }

        if (volt >= 2900) {
            led.plot(2, 3)
        } else {
            led.unplot(2, 3)
        }

        if (volt >= 2800) {
            led.plot(2, 4)
        } else {
            led.unplot(2, 4)
        }
    }
    /**
     * TODO: 速度を表示する(左速度,右速度)
     * @param left 左の速度。, eg: 50
     * @param right 右の速度。, eg: 50
     */
    //% block
    export function DispalySpeed(left: number, right: number): void {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 2; j++) {
                led.unplot(j, i)
            }
            for (let j = 3; j < 5; j++) {
                led.unplot(j, i)
            }
        }

        if (left >= 100) left = 99
        if (left <= -100) left = -99
        if (right >= 100) right = 99
        if (right <= -100) right = -99

        let l_level = Math.trunc(left / 10)
        let l_mod = Math.trunc(left) % 10
        let r_level = Math.trunc(right / 10)
        let r_mod = Math.trunc(right) % 10

        switch (l_level) {
            case 0: break
            case -9:
                led.plot(1, 4)
            case -8:
                led.plot(0, 3)
            case -7:
                led.plot(1, 3)
            case -6:
                led.plot(0, 2)
            case -5:
                led.plot(1, 2)
            case -4:
                led.plot(0, 1)
            case -3:
                led.plot(1, 1)
            case -2:
                led.plot(0, 0)
            case -1:
                led.plot(1, 0)
                break;
            case 9:
                led.plot(1, 0)
            case 8:
                led.plot(0, 1)
            case 7:
                led.plot(1, 1)
            case 6:
                led.plot(0, 2)
            case 5:
                led.plot(1, 2)
            case 4:
                led.plot(0, 3)
            case 3:
                led.plot(1, 3)
            case 2:
                led.plot(0, 4)
            case 1:
                led.plot(1, 4)
                break;
        }
        if (l_level > 0) {
            led.plotBrightness((1 - l_level) % 2, (-1 - l_level) / 2, l_mod * 25)
        } else {
            led.plotBrightness((1 + l_level) % 2, (9 - l_level) / 2, l_mod * 25)
        }

        switch (r_level) {
            case 0: break
            case -9:
                led.plot(3, 4)
            case -8:
                led.plot(4, 3)
            case -7:
                led.plot(3, 3)
            case -6:
                led.plot(4, 2)
            case -5:
                led.plot(3, 2)
            case -4:
                led.plot(4, 1)
            case -3:
                led.plot(3, 1)
            case -2:
                led.plot(4, 0)
            case -1:
                led.plot(3, 0)
                break;
            case 9:
                led.plot(3, 0)
            case 8:
                led.plot(4, 1)
            case 7:
                led.plot(3, 1)
            case 6:
                led.plot(4, 2)
            case 5:
                led.plot(3, 2)
            case 4:
                led.plot(4, 3)
            case 3:
                led.plot(3, 3)
            case 2:
                led.plot(4, 4)
            case 1:
                led.plot(3, 4)
                break;
        }
        if (r_level > 0) {
            led.plotBrightness(4 - ((1 - r_level) % 2), (-1 - r_level) / 2, r_mod * 25)
        } else {
            led.plotBrightness(4 - ((1 + r_level) % 2), (9 - r_level) / 2, r_mod * 25)
        }
    }
}
