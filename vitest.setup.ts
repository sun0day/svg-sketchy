import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'
import { afterAll, beforeAll, vi } from 'vitest'

beforeAll(async () => {
  globalThis.TMP = resolve(process.cwd(), 'packages/cli/tmp')
  globalThis.FIXTURE = resolve(process.cwd(), 'packages/cli/__tests__/fixtures')
  globalThis.readFixtures = async (file: string) => {
    return readFile(resolve(globalThis.FIXTURE, file), 'utf8')
  }
  globalThis.EXT = {
    svg: '.svg',
    dot: '.dot',
    mmd: '.mmd',
  }
  globalThis.EXT_CONTENT = {
    svg: await globalThis.readFixtures('a.svg'),
    dot: await globalThis.readFixtures('a.dot'),
    mmd: await globalThis.readFixtures('a.mmd'),
  }
  globalThis.reset = () => {
    vi.resetModules()
    vi.clearAllMocks()
  }
  globalThis.mockArgv = (argvs: string[]) => {
    process.argv = process.argv.slice(0, 2).concat(argvs)
  }
  globalThis.createSvgs = async (num: number, type: 'svg' | 'dot' | 'mmd' = 'svg') => {
    const svgs: string[] = []

    await Promise.all(
      Array.from({ length: num }).fill(0).map(
        (_, index) => {
          const file = `${index + Date.now()}`
          svgs.push(file)

          return writeFile(
            resolve(globalThis.TMP, `${file}${globalThis.EXT[type]}`),
            globalThis.EXT_CONTENT[type],
          )
        },
      ),
    )

    return () => {
      return Promise.all(svgs.map((file) => {
        return readFile(resolve(globalThis.TMP, `${file}.svg`), { encoding: 'utf8' })
      }))
    }
  }
  globalThis.initTmp = async () => {
    await rm(globalThis.TMP, { recursive: true, force: true }).catch(() => {})
    await mkdir(globalThis.TMP).catch(() => {})
  }
  globalThis.waitForRejection = async (cb: () => void) => {
    return new Promise((_, reject) => {
      const innerHandler = (err: Error) => {
        process.off('unhandledRejection', innerHandler)
        reject(err)
      }

      process.on('unhandledRejection', innerHandler)
      cb()
    })
  }
})

afterAll(() => {
  rm(globalThis.TMP, { recursive: true, force: true }).catch((_) => {})
})
