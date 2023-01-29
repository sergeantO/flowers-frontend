const texts: { [ key:string ]: string } = {
    'привет': 'hello'
}

export function m(text: string) {
    if (texts[text]) {
        return texts[text]
    }
    return text
}