import { describe, it, expect } from 'vitest'
import { tmdbImage } from '@/utils/image'

describe('tmdbImage', () => {
  it("construit l'adresse d'une image TMDB", () => {
    expect(tmdbImage('/abc.jpg')).toBe('https://image.tmdb.org/t/p/w342/abc.jpg')
    expect(tmdbImage('/abc.jpg', 'w1280')).toBe('https://image.tmdb.org/t/p/w1280/abc.jpg')
  })

  it("renvoie null s'il n'y a pas d'image", () => {
    expect(tmdbImage(null)).toBeNull()
  })
})
