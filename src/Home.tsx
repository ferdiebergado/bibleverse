import { Suspense, type FC } from 'react'
import Spinner from './components/Spinner'
import RandomVerse from './features/randomVerse/RandomVerse'
import Search from './features/searchVerse/Search'

const Home: FC = () => {
    return (
        <>
            <Suspense fallback={<Spinner />}>
                <RandomVerse />
            </Suspense>
            <Search />
        </>
    )
}

export default Home
