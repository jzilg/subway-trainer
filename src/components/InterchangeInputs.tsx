import * as React from 'react'
import { FunctionComponent, useState } from 'react'
import { SubwayLines } from '../../subwayLines'
import InterchangeInput from './InterchangeInput'

export type Props = {
    line: string
    subwayLines: SubwayLines
}

const InterchangeInputs: FunctionComponent<Props> = (props) => {
    const { line: currentLine, subwayLines } = props
    const lines = Object.keys(subwayLines)

    const elements = lines.map((line) => {
        if (
            parseInt(currentLine.replace('u', '')) > parseInt(line.replace('u', '')) ||
            line === currentLine
        ) {
            return <div className="column-blank" />
        }

        const interchangeStations = subwayLines[currentLine][line] ?? []

        const [answers, setAnswers] = useState(interchangeStations.map((interchangeStation) => {
                return {
                    station: interchangeStation,
                    resolved: false,
                }
            })
        )

        const applyInterchange = (appliedInterchange) => {
            const correctAnswer = answers.find((answer) => {
                return answer.station.toLowerCase() === appliedInterchange.toLowerCase() && !answer.resolved
            })

            if (correctAnswer !== undefined) {
                setAnswers(answers.map((answer) => {
                    return {
                        ...answer,
                        resolved: answer.station.toLowerCase() === appliedInterchange.toLocaleLowerCase(),
                    }
                }))
            }

            return correctAnswer !== undefined
        }

        const inputElements = interchangeStations.map((interchangeStation) => {
            return (
                <InterchangeInput
                    key={interchangeStation}
                    interchangeStation={interchangeStation}
                    line={line}
                    currentLine={currentLine}
                    applyInterchange={applyInterchange}
                />
            )
        })


        return (
            <div key={line} className="column">
                {inputElements}
            </div>
        )
    })

    return (
        <>
            {elements}
        </>
    )
}

export default InterchangeInputs
