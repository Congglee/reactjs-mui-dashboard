import type { Route } from './+types/index'
import DashboardContent from '@/components/dashboard/dashboard-content'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Dashboard' }]
}

export default function Dashboard() {
  return <DashboardContent />
}
