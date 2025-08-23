import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="grow">
                <section>
                    <Outlet />
                </section>
            </main>
            <Footer />
        </div>
    )
}
