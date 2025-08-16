import type { JSX } from 'react'

export type ContextProviderFactory<T> = (props: T) => JSX.Element

export interface Translation {
    identifier: string
    name: string
    language: string
    language_code: string
    license: string
}
