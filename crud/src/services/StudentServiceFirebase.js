import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  serverTimestamp
} from 'firebase/firestore'

export const studentServiceFirebase = {
  getStudentById: async (firestoreDb, studentId) => {
    const studentDoc = await getDoc(doc(firestoreDb, 'student', studentId))

    if (!studentDoc.exists()) {
      console.log("No such document!");
      return;
    }

    return studentDoc.data()

  },
  list: async (firestoreDb) => {
    const students = []
    const querySnapshot = await getDocs(collection(firestoreDb, 'student'))
    querySnapshot.forEach((doc) => {
      students.push({ id: doc.id, ...doc.data() })
    })
    return students
  },
  create: async (firestoreDb, student) => {
    const docRef = await addDoc(collection(firestoreDb, 'student'), {
      ...student,
      createdAt: serverTimestamp()
    })
    return docRef.id
  },
  delete: async (firestoreDb, studentId) => {
    await deleteDoc(doc(firestoreDb, 'student', studentId))
  },
  edit: async (firestoreDb, studentId, student) => {
    await updateDoc(doc(firestoreDb, 'student', studentId), {
      ...student,
      updatedAt: serverTimestamp()
    })
  }
}