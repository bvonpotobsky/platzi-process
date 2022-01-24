import { GraphQLScalarType, Kind } from 'graphql'

export const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'Represents a date time object',
  serialize(value) {
    return value.toISOString() // Convert outgoing Dat to ISOString for JSON
  },
  parseValue(value) {
    return new Date(value)
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)) // Convert hard-coded AST sstring string to
    }
    return null // Invalid hard-coded value(not an intenger)
  },
})
