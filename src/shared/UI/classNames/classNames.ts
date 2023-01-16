
type Mods = Record<string, boolean>

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional.filter(cls => Boolean(cls)),
        ...Object.entries(mods).filter(value => value)
    ]
        .join(' ')
}