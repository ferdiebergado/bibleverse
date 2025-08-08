import { Outlet, useNavigation } from 'react-router'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
    const navigation = useNavigation()
    return (
        <>
            <Header />
            <main>
                <section>
                    {navigation.state === 'loading' ? (
                        <p className="mt-auto py-6 text-center">Loading...</p>
                    ) : (
                        <Outlet />
                    )}
                </section>
            </main>
            <Footer />
        </>
    )
}
