// Main Layout 布局

import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="w-full h-full flex flex-col">
            {/* 路由页面渲染区域 */}
            <div className="@container flex-1">
                <Outlet />
            </div>

            {/* 底部导航栏 */}
            <nav className="bg-[#131319] h-10 flex justify-end py-1.5 px-6">
                {/* 左侧导航栏 */}
                <div className="h-full flex-1 flex items-center gap-2"></div>

                {/* 右侧导航栏 */}
                <div className="h-full flex gap-4"></div>
            </nav>
        </div>
    )
}

export default MainLayout
