import { Abc } from './abc'
import { Pqr } from './pqr'

import css from './main.css'

const pqr = new Pqr()

const abc = new Abc(pqr)
abc.toAbc()
