import * as React from 'react'
import { FunctionComponent } from 'react'
import { SubwayLines } from '../../subwayLines'
import InterchangeInputs from './InterchangeInputs'

export type Props = {
    subwayLines: SubwayLines
}

const Root: FunctionComponent<Props> = (props) => {
    const { subwayLines } = props
    const lines = Object.keys(subwayLines)

    const headings = lines.map((line) => (
        <div key={`line-${line}`}>
            <div className={`line line-${line}`}>
                {line.toUpperCase()}
            </div>
        </div>
    ))

    const rows = lines.map((line) => {
        return (
            <React.Fragment key={`line-${line}`}>
                <div>
                    <div className={`line line-${line}`}>
                        {line.toUpperCase()}
                    </div>
                </div>
                <InterchangeInputs line={line} subwayLines={subwayLines} />
            </React.Fragment>
        )
    })

    return (
        <main className="container">
            <div />
            {headings}
            {rows}
        </main>
    )
}

export default Root
