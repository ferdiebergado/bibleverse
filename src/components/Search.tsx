import { Input } from '@/components/ui/input'
import { useState, type ChangeEvent, type KeyboardEvent } from 'react'

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

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setSearchTerm(value)
        if (value === '') {
            onClear()
            return
        }
        onSearch(value)
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            onSearch(searchTerm)
        }
    }

    return (
        <div className="mb-4 flex w-full max-w-3xs items-center gap-2">
            <Input
                type="search"
                placeholder={placeHolder}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={searchTerm}
            />
        </div>
    )
}
