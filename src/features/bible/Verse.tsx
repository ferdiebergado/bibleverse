import { Card, CardContent, CardTitle } from '@/components/ui/card'

interface VerseProps {
    verse: number
    text: string
    book?: string
    chapter?: number
}

export default function Verse({ verse, text, book, chapter }: VerseProps) {
    return (
        <Card className="w-full px-4 shadow-md md:w-96">
            <CardTitle className="p-2">
                {book ? `${book} ` : ''}
                {chapter ? `Chapter ${chapter.toString()} ` : ''}Verse {verse}
            </CardTitle>
            <CardContent className="p-2 text-justify italic">
                {text}
            </CardContent>
        </Card>
    )
}
