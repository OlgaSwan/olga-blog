import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { firebaseApp } from 'src/shared/firebase-app'
import { v4 as uuid } from 'uuid'

const storage = getStorage(firebaseApp)

export const uploadPhoto = async (file: File): Promise<[string, string] | undefined> => {
  const id = uuid()
  const imageStorageRef = ref(storage, id)
  const result = await uploadBytes(imageStorageRef, file)
  try {
    return [await getDownloadURL(result.ref), id]
  } catch (error) {
    if (error instanceof Error) console.warn(error.message)
  }
}

export const deleteImageFromFirebase = async (input_value: string) => {
  const pathname = new URL(input_value).pathname
  const file_name = pathname.split('/')[5]
  const imageStorageRef = ref(storage, file_name)
  try {
    await deleteObject(imageStorageRef)
  } catch (error) {
    if (error instanceof Error) console.warn(error.message)
  }
}

