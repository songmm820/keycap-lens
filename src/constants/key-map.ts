// 键盘布局配置
export type Stabilizer = number | null

interface KeyCap {
    /** 全局唯一键名，如 "Q" "Enter" "Space" */
    id: string
    /** 横向起始坐标（单位 1u） */
    col: number
    /** 键帽占几 u */
    widthU: number
    /** 正面印字 */
    primary: string
    /** 上档印字，没有则为 null */
    shifted: string | null
    /** 卫星轴/平衡杆跨度（u），null=无卫星轴 */
    stabilizer: Stabilizer
}

interface Row {
    /** 行号，如 R0 R1... 对应自上而下 */
    rowId: string
    /** 行高（永远是 1u 可省略，留作扩展） */
    heightU: 1
    /** 本行所有键帽 */
    keys: KeyCap[]
}

interface KeyboardLayout {
    /** 布局名称，如 "60% ANSI" */
    name: string
    /** 1u 的实际毫米长度（绘图用，可省略） */
    uStep?: number
    /** 所有行 */
    rows: Row[]
}

/** 键盘布局 */
export const KEY_MAP_BASE: KeyboardLayout = {
    name: '60% ANSI',
    uStep: 19.05, // 1u = 19.05mm
    rows: [
        {
            rowId: 'R0', // 功能行
            heightU: 1,
            keys: [
                {
                    id: 'Esc',
                    col: 0,
                    widthU: 1,
                    primary: 'Esc',
                    shifted: '~',
                    stabilizer: null
                },
                {
                    id: 'F1',
                    col: 2,
                    widthU: 1,
                    primary: 'F1',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'F2',
                    col: 3,
                    widthU: 1,
                    primary: 'F2',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'F3',
                    col: 4,
                    widthU: 1,
                    primary: 'F3',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'F4',
                    col: 5,
                    widthU: 1,
                    primary: 'F4',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'F5',
                    col: 6.5,
                    widthU: 1,
                    primary: 'F5',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'F6',
                    col: 7.5,
                    widthU: 1,
                    primary: 'F6',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'F7',
                    col: 8.5,
                    widthU: 1,
                    primary: 'F7',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'F8',
                    col: 9.5,
                    widthU: 1,
                    primary: 'F8',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'F9',
                    col: 11,
                    widthU: 1,
                    primary: 'F9',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'F10',
                    col: 12,
                    widthU: 1,
                    primary: 'F10',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'F11',
                    col: 13,
                    widthU: 1,
                    primary: 'F11',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'F12',
                    col: 14,
                    widthU: 1,
                    primary: 'F12',
                    shifted: null,
                    stabilizer: null
                }
            ]
        },
        {
            rowId: 'R1', // 数字行
            heightU: 1,
            keys: [
                {
                    id: '`',
                    col: 0,
                    widthU: 1,
                    primary: '`',
                    shifted: '~',
                    stabilizer: null
                },
                {
                    id: '1',
                    col: 1,
                    widthU: 1,
                    primary: '1',
                    shifted: '!',
                    stabilizer: null
                },
                {
                    id: '2',
                    col: 2,
                    widthU: 1,
                    primary: '2',
                    shifted: '@',
                    stabilizer: null
                },
                {
                    id: '3',
                    col: 3,
                    widthU: 1,
                    primary: '3',
                    shifted: '#',
                    stabilizer: null
                },
                {
                    id: '4',
                    col: 4,
                    widthU: 1,
                    primary: '4',
                    shifted: '$',
                    stabilizer: null
                },
                {
                    id: '5',
                    col: 5,
                    widthU: 1,
                    primary: '5',
                    shifted: '%',
                    stabilizer: null
                },
                {
                    id: '6',
                    col: 6,
                    widthU: 1,
                    primary: '6',
                    shifted: '^',
                    stabilizer: null
                },
                {
                    id: '7',
                    col: 7,
                    widthU: 1,
                    primary: '7',
                    shifted: '&',
                    stabilizer: null
                },
                {
                    id: '8',
                    col: 8,
                    widthU: 1,
                    primary: '8',
                    shifted: '*',
                    stabilizer: null
                },
                {
                    id: '9',
                    col: 9,
                    widthU: 1,
                    primary: '9',
                    shifted: '(',
                    stabilizer: null
                },
                {
                    id: '0',
                    col: 10,
                    widthU: 1,
                    primary: '0',
                    shifted: ')',
                    stabilizer: null
                },
                {
                    id: '-',
                    col: 11,
                    widthU: 1,
                    primary: '-',
                    shifted: '_',
                    stabilizer: null
                },
                {
                    id: '=',
                    col: 12,
                    widthU: 1,
                    primary: '=',
                    shifted: '+',
                    stabilizer: null
                },
                {
                    id: 'Back',
                    col: 13,
                    widthU: 2,
                    primary: 'Backspace',
                    shifted: null,
                    stabilizer: null
                }
            ]
        },
        {
            rowId: 'R2', // Q 行
            heightU: 1,
            keys: [
                {
                    id: 'Tab',
                    col: 0,
                    widthU: 1.5,
                    primary: 'Tab',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'Q',
                    col: 1.5,
                    widthU: 1,
                    primary: 'Q',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'W',
                    col: 2.5,
                    widthU: 1,
                    primary: 'W',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'E',
                    col: 3.5,
                    widthU: 1,
                    primary: 'E',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'R',
                    col: 4.5,
                    widthU: 1,
                    primary: 'R',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'T',
                    col: 5.5,
                    widthU: 1,
                    primary: 'T',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'Y',
                    col: 6.5,
                    widthU: 1,
                    primary: 'Y',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'U',
                    col: 7.5,
                    widthU: 1,
                    primary: 'U',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'I',
                    col: 8.5,
                    widthU: 1,
                    primary: 'I',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'O',
                    col: 9.5,
                    widthU: 1,
                    primary: 'O',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'P',
                    col: 10.5,
                    widthU: 1,
                    primary: 'P',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: '[',
                    col: 11.5,
                    widthU: 1,
                    primary: '[',
                    shifted: '{',
                    stabilizer: null
                },
                {
                    id: ']',
                    col: 12.5,
                    widthU: 1,
                    primary: ']',
                    shifted: '}',
                    stabilizer: null
                },
                {
                    id: '\\',
                    col: 13.5,
                    widthU: 1.5,
                    primary: '\\',
                    shifted: '|',
                    stabilizer: null
                }
            ]
        },
        {
            rowId: 'R3', // A 行
            heightU: 1,
            keys: [
                {
                    id: 'Caps',
                    col: 0,
                    widthU: 1.75,
                    primary: 'CapsLock',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'A',
                    col: 1.75,
                    widthU: 1,
                    primary: 'A',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'S',
                    col: 2.75,
                    widthU: 1,
                    primary: 'S',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'D',
                    col: 3.75,
                    widthU: 1,
                    primary: 'D',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'F',
                    col: 4.75,
                    widthU: 1,
                    primary: 'F',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'G',
                    col: 5.75,
                    widthU: 1,
                    primary: 'G',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'H',
                    col: 6.75,
                    widthU: 1,
                    primary: 'H',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'J',
                    col: 7.75,
                    widthU: 1,
                    primary: 'J',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'K',
                    col: 8.75,
                    widthU: 1,
                    primary: 'K',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'L',
                    col: 9.75,
                    widthU: 1,
                    primary: 'L',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: ';',
                    col: 10.75,
                    widthU: 1,
                    primary: ';',
                    shifted: ':',
                    stabilizer: null
                },
                {
                    id: "'",
                    col: 11.75,
                    widthU: 1,
                    primary: "'",
                    shifted: '"',
                    stabilizer: null
                },
                {
                    id: 'Enter',
                    col: 12.75,
                    widthU: 2.25,
                    primary: 'Enter',
                    shifted: null,
                    stabilizer: null
                }
            ]
        },
        {
            rowId: 'R4', // 左 Shift 行
            heightU: 1,
            keys: [
                {
                    id: 'LShift',
                    col: 0,
                    widthU: 2.25,
                    primary: 'Left-Shift',
                    shifted: null,
                    stabilizer: 2.25
                },
                {
                    id: 'Z',
                    col: 2.25,
                    widthU: 1,
                    primary: 'Z',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'X',
                    col: 3.25,
                    widthU: 1,
                    primary: 'X',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'C',
                    col: 4.25,
                    widthU: 1,
                    primary: 'C',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'V',
                    col: 5.25,
                    widthU: 1,
                    primary: 'V',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'B',
                    col: 6.25,
                    widthU: 1,
                    primary: 'B',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'N',
                    col: 7.25,
                    widthU: 1,
                    primary: 'N',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'M',
                    col: 8.25,
                    widthU: 1,
                    primary: 'M',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: ',',
                    col: 9.25,
                    widthU: 1,
                    primary: ',',
                    shifted: '<',
                    stabilizer: null
                },
                {
                    id: '.',
                    col: 10.25,
                    widthU: 1,
                    primary: '.',
                    shifted: '>',
                    stabilizer: null
                },
                {
                    id: '/',
                    col: 11.25,
                    widthU: 1,
                    primary: '/',
                    shifted: '?',
                    stabilizer: null
                },
                {
                    id: 'RShift',
                    col: 12.25,
                    widthU: 2.75,
                    primary: 'Right-Shift',
                    shifted: null,
                    stabilizer: 2.75
                }
            ]
        },
        {
            rowId: 'R5', // 空格行
            heightU: 1,
            keys: [
                {
                    id: 'LCtrl',
                    col: 0,
                    widthU: 1.25,
                    primary: 'Left-Ctrl',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'LWin',
                    col: 1.25,
                    widthU: 1.25,
                    primary: 'Left-Win',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'LAlt',
                    col: 2.5,
                    widthU: 1.25,
                    primary: 'Left-Alt',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'Space',
                    col: 3.75,
                    widthU: 6.25,
                    primary: 'Space',
                    shifted: null,
                    stabilizer: 6.25
                },
                {
                    id: 'RAlt',
                    col: 10,
                    widthU: 1.25,
                    primary: 'Right-Alt',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'RWin',
                    col: 11.25,
                    widthU: 1.25,
                    primary: 'Right-Win',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'Menu',
                    col: 12.5,
                    widthU: 1.25,
                    primary: 'Menu',
                    shifted: null,
                    stabilizer: null
                },
                {
                    id: 'RCtrl',
                    col: 13.75,
                    widthU: 1.25,
                    primary: 'Right-Ctrl',
                    shifted: null,
                    stabilizer: null
                }
            ]
        }
    ]
}
