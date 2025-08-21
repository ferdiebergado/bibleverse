import { Suspense, type FC } from 'react'
import RandomVerse from './features/randomVerse/RandomVerse'
import RandomVerseSkeleton from './features/randomVerse/Skeleton'
import Search from './features/searchVerse/Search'

const Home: FC = () => {
    return (
        <>
            <Suspense fallback={<RandomVerseSkeleton />}>
                <RandomVerse />
            </Suspense>
            <Search />
        </>
    )
}

export default Home
