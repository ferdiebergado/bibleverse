import { Input } from '@/components/ui/input'
import {
    useCallback,
    useState,
    type ChangeEvent,
    type KeyboardEvent,
} from 'react'
import SearchButton from './SearchButton'

interface SearchProps {
    placeHolder?: string
    onSearch: (searchTerm: string) => void
    onClear: () => void
}

export function Search({
    placeHolder = 'Search...',
    onSearch,
    onClear,
}: SearchProps) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchClick = useCallback(() => {
        onSearch(searchTerm)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onSearch])

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setSearchTerm(value)
        if (value === '') {
            onClear()
        }
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            onSearch(searchTerm)
        }
    }

    return (
        <div className="flex w-full max-w-sm items-center gap-2">
            <Input
                type="search"
                placeholder={placeHolder}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={searchTerm}
            />
            <SearchButton onClick={handleSearchClick} />
        </div>
    )
}
