import type { Route } from './+types/home'
import Button from '@mui/material/Button'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
  return (
    <div>
      <Button variant='contained'>Hello world</Button>
      Hello World
    </div>
  )
}
