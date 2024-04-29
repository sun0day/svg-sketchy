import { describe, expect, it } from 'vitest'
import { SVGSketcher } from '../dist/sketcher.js'

describe('test entry', () => {
  it('should import entry', () => {
    expect(SVGSketcher).not.toBeUndefined()
  })

  it('should require entry', () => {
    const { SVGSketcher } = require('../dist/sketcher.cjs')
    expect(SVGSketcher).not.toBeUndefined()
  })
})
