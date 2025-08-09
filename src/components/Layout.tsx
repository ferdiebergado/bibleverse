import { Outlet, useNavigation } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import Spinner from './Spinner'

export default function Layout() {
    const navigation = useNavigation()
    return (
        <>
            <Header />
            <main>
                <section>
                    {navigation.state === 'loading' ? <Spinner /> : null}
                    <Outlet />
                </section>
            </main>
            <Footer />
        </>
    )
}
