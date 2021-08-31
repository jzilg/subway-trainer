import * as React from 'react'
import { FunctionComponent, useEffect, useState } from 'react'

export type Props = {
    interchangeStation: string
    line: string
    currentLine: string
    applyInterchange: (x) => boolean
}

const InterchangeInput: FunctionComponent<Props> = (props) => {
    const {
        interchangeStation,
        line,
        currentLine,
        applyInterchange,
    } = props
    const [value, setValue] = useState('')
    const [valueIsCorrect, setValueIsCorrect] = useState(false)
    const disabled = line === currentLine || valueIsCorrect
    const className = [
        'input',
        valueIsCorrect ? 'input-correct' : ''
    ].join(' ')

    useEffect(() => {
        setValueIsCorrect(applyInterchange(value))
    }, [value])

    return (
        <input
            key={`${currentLine}-${line}-${interchangeStation}`}
            placeholder={`${currentLine.toUpperCase()} & ${line.toUpperCase()}?`}
            disabled={disabled}
            className={className}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    )
}

export default InterchangeInput
