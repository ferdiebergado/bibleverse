import { Button } from '@/components/ui/button'
import { memo, type FC } from 'react'

interface SearchButtonProps {
    onClick: () => void
}

const SearchButton: FC<SearchButtonProps> = memo(({ onClick }) => {
    console.log('SearchButton re-rendered')
    return (
        <Button type="button" onClick={onClick}>
            Search
        </Button>
    )
})

export default SearchButton
