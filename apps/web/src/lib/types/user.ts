// import type { FirestoreDataConverter, Timestamp } from 'firebase/firestore'
import type { Accent, Theme } from './theme'

export interface User {
  id: string
  bio: string | null
  name: string
  theme: Theme | null
  accent: Accent | null
  website: string | null
  location: string | null
  username: string
  photoURL: string
  image: string
  verified: boolean
  following: string[]
  followers: string[]
  //   createdAt: Timestamp
  //   updatedAt: Timestamp | null
  totalTweets: number
  totalPhotos: number
  pinnedTweet: string | null
  coverPhotoURL: string | null
}

export type EditableData = Extract<
  keyof User,
  'bio' | 'name' | 'website' | 'photoURL' | 'location' | 'coverPhotoURL'
>

export type EditableUserData = Pick<User, EditableData>

// export const userConverter: FirestoreDataConverter<User> = {
//   toFirestore(user) {
//     return { ...user }
//   },
//   fromFirestore(snapshot, options) {
//     const data = snapshot.data(options)
//     return { ...data } as User
//   },
// }
