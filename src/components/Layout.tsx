import { Suspense } from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import Spinner from './Spinner'

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="grow">
                <section>
                    <Suspense fallback={<Spinner />}>
                        <Outlet />
                    </Suspense>
                </section>
            </main>
            <Footer />
        </div>
    )
}
