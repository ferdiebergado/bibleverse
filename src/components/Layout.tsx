import { Outlet, useNavigation } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import Spinner from './Spinner'
import ThemeProvider from './ThemeProvider'

export default function Layout() {
    const navigation = useNavigation()
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <Header />
            <main>
                <section>
                    {navigation.state === 'loading' ? <Spinner /> : null}
                    <Outlet />
                </section>
            </main>
            <Footer />
        </ThemeProvider>
    )
}
