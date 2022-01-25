import { createHash } from 'crypto'
import { baseModelResolver } from '../base/base.resolver'
// import { Avocado } from './avocado.model'
import { Attributes, Avocado, PrismaClient } from '@prisma/client'

type ResolverContext = {
  orm: PrismaClient
}

export function findAll(
  parent: unknown,
  args: unknown,
  context: ResolverContext
): Promise<Avocado[]> {
  return context.orm.avocado.findMany()
}

// export function findOne(id: string): Avocado | null {
//   return avos[0]
// }

export const resolver: Record<
  keyof (Avocado & { attributes: Attributes }),
  (parent: Avocado & { attributes: Attributes }) => unknown
> = {
  id: (parent) => parent.id,
  sku: (parent) => parent.sku,
  name: (parent) => parent.name,
  price: (parent) => parent.price,
  image: (parent) => parent.image,
  attributes: (parent) => ({
    description: parent.attributes.description,
    shape: parent.attributes.shape,
    hardiness: parent.attributes.hardiness,
    taste: parent.attributes.taste,
  }),
}

// export function createAvo(
//   parent: unknown,
//   {
//     data,
//   }: { data: Pick<Avocado, 'name' | 'price' | 'image'> & Avocado['attributes'] }
// ): Avocado {
//   const currentLength = avos.length
//   const newAvo: Avocado = {
//     id: String(currentLength + 1),
//     sku: createHash('sha256')
//       .update(data.name, 'utf8')
//       .digest('base64')
//       .slice(-6),
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     deletedAt: undefined,
//     name: data.name,
//     price: data.price,
//     image: data.image,
//     attributes: {
//       description: data.description,
//       shape: data.shape,
//       hardiness: data.hardiness,
//       taste: data.taste,
//     },
//   }

//   avos.push(newAvo)
//   return newAvo
// }
