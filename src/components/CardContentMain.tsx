import type { FC, ReactNode } from 'react'
import { CardContent } from './ui/card'

interface CardContentProps {
    children: ReactNode
}

const CardContentMain: FC<CardContentProps> = ({ children }) => {
    return <CardContent className="flex flex-col">{children}</CardContent>
}

export default CardContentMain
