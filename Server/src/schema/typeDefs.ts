import { gql } from 'apollo-server-express';

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This type defines the queryable fields for table in our data source.
  type Book {
    title: String
    author: String
  }

  type Vector {
    x: Float
    y: Float
    z: Float
  }

  type Size {
    height: Float
    width: Float 
  }

  type Mesh {
    taskName: String
    meshName: String
    url: String
    fileName: String
  }
  
  type NpcFrames {
    name: String
    time: Int
    rotateY: Int
    distance: Int
  }

  type AnimationStyle {
    timePerFrame: Int
    loop: String
    frames: [NpcFrames]
  }

  type Npc {
    key: Int
    posCurrent: Vector
    rotCurrent: Vector
    url: String
    file: String
    scalNpc: Int
    moveStyle: AnimationStyle
  }

  type Teleport {
    name: String
    size: Size
    position: Vector
    linkto: String
    rotate: Int
  }

  type LoadScene {
    url: String
    fileName: String
  }

  type Scenes {
    key: Int
    name: String
    genericSky: String
    loadScene: LoadScene
    meshtasks: [Mesh]
    teleports: [Teleport]
    npc: [Npc]
  }

  type CountryList {
    key: Int
    name: String
    thumbnail: String
    status: Boolean
  }

  type Avatar {
    id: Int
    name: String
    location: String
    value: String
    thumbnail: String
    position: Vector
    rotation: Vector
    scale: Vector
    cameraPosition: Vector
    buttonId: String
  }
  type AvatarInfo {
    avatarList: [Avatar]
    meshtasks: [Mesh]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    books: [Book]
    countryList: [CountryList]
    avatarDb: AvatarInfo
    frames: [NpcFrames]
    scenes: [Scenes]
  }

  # The "Mutation" type is special: it provide available query for working with database
  # clients can execute, along with the return type for each.
  input BookInput {
    title: String,
    author: String
  }

  type Mutation {
    addBook(title: String, author: String): [Book]
  }

  

`;
export default typeDefs;