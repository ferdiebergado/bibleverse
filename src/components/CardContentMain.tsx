import type { FC, ReactNode } from 'react'
import { CardContent } from './ui/card'

interface CardContentProps {
    children: ReactNode
}

const CardContentMain: FC<CardContentProps> = ({ children }) => {
    return (
        <CardContent className="flex flex-wrap gap-3 px-0">
            {children}
        </CardContent>
    )
}

export default CardContentMain
