import { Suspense, type FC } from 'react'
import RandomVerse from './features/randomVerse/RandomVerse'
import RandomVerseSkeleton from './features/randomVerse/Skeleton'
import SearchVerse from './features/searchVerse/SearchVerse'

const Home: FC = () => {
    return (
        <>
            <Suspense fallback={<RandomVerseSkeleton />}>
                <RandomVerse />
            </Suspense>
            <SearchVerse />
        </>
    )
}

export default Home
