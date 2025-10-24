import { useEffect } from 'react'
import { KEY_MAP_BASE } from '~/constants/key-map'

const HomePage = () => {
    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            console.log(e.key)
        })
    }, [])

    return (
        <>
            <div className="w-full h-full bg-no-repeat bg-cover p-6">
                <div className="flex flex-col gap-2">
                    {KEY_MAP_BASE.rows.map((row) => {
                        // 1. 算真实列数
                        const lastCol = row.keys.reduce(
                            (max, k) => Math.max(max, k.col + k.widthU),
                            0
                        )
                        const totalCols = Math.ceil(lastCol * 4)

                        console.log('totalCols', totalCols)

                        return (
                            <div
                                key={row.rowId}
                                className="grid gap-x-2 gap-y-1 w-full"
                                style={{
                                    gridTemplateColumns: `repeat(${totalCols}, 1fr)`
                                }}
                            >
                                {row.keys.map((key) => (
                                    <div
                                        key={key.id}
                                        className="cursor-pointer border border-blue-600 rounded-md h-10 flex items-center justify-center"
                                        style={{
                                            gridColumnStart:
                                                Math.round(key.col * 4) + 1,
                                            gridColumnEnd: `span ${Math.round(key.widthU * 4)}`
                                        }}
                                    >
                                        {key.primary}
                                    </div>
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default HomePage
