import NoResult from '@/components/NoResult'
import { Search } from '@/components/Search'
import type { Verse as VerseType } from '@/features/verse'
import Verse from '@/features/verse/Verse'
import { useState, type FC } from 'react'

interface VerseListProps {
    verses: VerseType[]
}

const VerseList: FC<VerseListProps> = ({ verses }) => {
    const [filteredVerses, setFilteredVerses] = useState(verses)

    const handleSearch = (searchTerm: string) => {
        const filteredVerses = verses.filter(({ text }) =>
            text.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
        setFilteredVerses(filteredVerses)
    }

    const handleClear = () => {
        setFilteredVerses(verses)
    }

    return (
        <>
            <Search
                placeHolder="Search verses..."
                onSearch={handleSearch}
                onClear={handleClear}
            />
            <div className="flex flex-wrap space-y-4 space-x-4">
                {filteredVerses.length === 0 ? (
                    <NoResult />
                ) : (
                    filteredVerses.map(({ verse, text }) => (
                        <Verse verse={verse} text={text} key={verse} />
                    ))
                )}
            </div>
        </>
    )
}

export default VerseList
