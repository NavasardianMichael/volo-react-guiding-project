import { FC, LazyExoticComponent, Suspense } from 'react'
import { Loader } from 'components/shared/loader/main'

export const WithSuspense = (Component: LazyExoticComponent<FC>) => {

  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  )
}