import { pathTransform } from '../path-transform'

it('path-transform', () => {
  const res = pathTransform('src\\entities')
  expect(res).toBe('src/entities')
})
