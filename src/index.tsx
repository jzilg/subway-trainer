import * as React from 'react'
import { render } from 'react-dom'
import subwayLines from '../subwayLines'
import Root from './components/Root'
import './style.css'

render(<Root subwayLines={subwayLines} />, document.getElementById('root'))
