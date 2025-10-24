import { useTheme } from '~/contexts/ThemeProvider'

const HomePage = () => {
    const { setTheme } = useTheme()

    return (
        <>
            <div className="w-full h-full bg-no-repeat bg-cover p-6">
                123
                <p>
                    <button onClick={() => setTheme('light')}>light</button>
                    <br />
                    <button onClick={() => setTheme('dark')}>dark</button>
                    <br />
                    <button onClick={() => setTheme('system')}>system</button>
                </p>
            </div>
        </>
    )
}

export default HomePage
