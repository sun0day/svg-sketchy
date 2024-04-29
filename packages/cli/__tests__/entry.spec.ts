import { describe, expect, it } from 'vitest'
import { SVGSketcher } from '../dist/sketcher.js'

describe('test entry', () => {
  it('should import entry', () => {
    expect(new SVGSketcher().run).toBeInstanceOf(Function)
  })

  it('should require entry', () => {
    const { SVGSketcher } = require('../dist/sketcher.cjs')
    expect(new SVGSketcher().run).toBeInstanceOf(Function)
  })
})
