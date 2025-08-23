import { CardAction } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import type { ChangeEvent, FC } from 'react'
import { useCallback, useState, type KeyboardEvent } from 'react'
import SearchButton from '../book/SearchButton'

interface SearchProps {
    placeHolder: string
    onSearch: (searchTerm: string) => void
    onClear: () => void
}

const Search: FC<SearchProps> = ({ placeHolder, onSearch, onClear }) => {
    const [inputValue, setInputValue] = useState('')

    const handleSearchClick = useCallback(() => {
        onSearch(inputValue)
    }, [onSearch, inputValue])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
        if (value === '') {
            onClear() // Call onClear when the input is empty
        }
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearchClick()
        }
    }

    return (
        <CardAction className="flex gap-3">
            <Input
                type="search"
                placeholder={placeHolder}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={inputValue}
            />
            <SearchButton onClick={handleSearchClick} />
        </CardAction>
    )
}

export default Search
