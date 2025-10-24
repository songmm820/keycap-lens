import '~/styles/App.css'
import router from '~/routers/RouterConfig.tsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '~/contexts/ThemeProvider'

const App = () => {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
