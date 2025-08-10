import { Loader2Icon } from 'lucide-react'
import { Button } from './ui/button'

interface SearchButtonProps {
    isLoading: boolean
    handleClick?: () => void
}

export default function SearchButton({
    handleClick,
    isLoading,
}: SearchButtonProps) {
    return (
        <Button type="button" onClick={handleClick} disabled={isLoading}>
            {isLoading ? (
                <>
                    <Loader2Icon className="animate-spin" />
                    Searching
                </>
            ) : (
                'Search'
            )}
        </Button>
    )
}
