import type { FC } from 'react'

interface ErrorMessageProps {
    error: Error
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error: { message } }) => {
    return <p className="text-destructive">Error: {message}</p>
}

export default ErrorMessage
