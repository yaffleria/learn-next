import { render, screen } from '@testing-library/react'
import Index from '../src/pages/index'
import '@testing-library/jest-dom'
 
describe('App', () => {
  it('메뉴가 렌더링 되어야 한다.', () => {
    const { getByRole } = render(<Index />)
    const menu = getByRole('navigation', {
      name: 'fastcampus'
    })
    expect(menu).toBeInTheDocument()
  })
  it('배너가 렌더링 되어야 한다', () => {
    const { getByRole } = render(<Index />)
    const banner = getByRole('banner', {
      name: ''
    })
    expect(banner).toBeInTheDocument()
  })
  it('강의 목록이 렌더링 되어야 한다.', () => {
    const { getByTitle } = render(<Index />)
    const lectureList = getByTitle('lectureList', {
      name: ''
    })
    expect(lectureList).toBeInTheDocument()
  })
})
