import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

export const createUserDocument = async (uid, data) => {
  await setDoc(doc(db, 'users', uid), {
    ...data,
    createdAt: serverTimestamp(),
  })
}
