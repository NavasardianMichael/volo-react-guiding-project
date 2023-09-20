export type NormalizedShape<T extends { id: string }> = {
  byId: Record<T['id'], T>
  allIds: T['id'][]
}
