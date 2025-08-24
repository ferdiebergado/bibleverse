import RandomVerse from '@/features/randomVerse/RandomVerse'
import SkeletonRandomVerse from '@/features/randomVerse/SkeletonRandomVerse'
import SearchVerse from '@/features/searchVerse/SearchVerse'
import { Suspense, type FC } from 'react'

const Home: FC = () => {
    return (
        <>
            <Suspense fallback={<SkeletonRandomVerse />}>
                <RandomVerse />
            </Suspense>
            <SearchVerse />
        </>
    )
}

export default Home
