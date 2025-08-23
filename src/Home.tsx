import { type FC } from 'react'
import RandomVerse from './features/randomVerse/RandomVerse'
import SearchVerse from './features/searchVerse/SearchVerse'

const Home: FC = () => {
    return (
        <>
            <RandomVerse />
            <SearchVerse />
        </>
    )
}

export default Home
