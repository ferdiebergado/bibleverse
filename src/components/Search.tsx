import { Input } from '@/components/ui/input'
import { useDebouncedEffect } from '@/lib/hooks'
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

    useDebouncedEffect(
        () => {
            if (searchTerm === '') {
                onClear()
                return
            }

            onSearch(searchTerm)
        },
        500,
        [searchTerm]
    )

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setSearchTerm(value)
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
