import { useLocation } from 'react-router-dom'

export const useUserIdFromPath = () => {
  const { pathname } = useLocation()
  return pathname.split('/')[2]
}
