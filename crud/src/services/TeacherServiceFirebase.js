import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  serverTimestamp,
  query,
  onSnapshot
} from 'firebase/firestore'

export const teacherServiceFirebase = {
  getTeacherById: async (firestoreDb, teacherId) => {
    const teacherDoc = await getDoc(doc(firestoreDb, 'teacher', teacherId))

    if (!teacherDoc.exists()) {
      console.log("No such document!");
      return;
    }

    return teacherDoc.data()

  },
  list: async (firestoreDb) => {
    const teachers = []
    const querySnapshot = await getDocs(collection(firestoreDb, 'teacher'))
    querySnapshot.forEach((doc) => {
      teachers.push({ id: doc.id, ...doc.data() })
    })
    return teachers
  },
  create: async (firestoreDb, teacher) => {
    const docRef = await addDoc(collection(firestoreDb, 'teacher'), {
      ...teacher,
      createdAt: serverTimestamp()
    })
    return docRef.id
  },
  delete: async (firestoreDb, teacherId) => {
    await deleteDoc(doc(firestoreDb, 'teacher', teacherId))
  },
  edit: async (firestoreDb, teacherId, teacher) => {
    await updateDoc(doc(firestoreDb, 'teacher', teacherId), {
      ...teacher,
      updatedAt: serverTimestamp()
    })
  },
  listOnSnapshot: (firestoreDb, cb) => {
    const q = query(collection(firestoreDb, 'teacher'))
    return onSnapshot(q, (querySnapshot) => {
      const teachers = []
      querySnapshot.forEach((doc) => {
        teachers.push({ id: doc.id, ...doc.data() })
      })
      cb(teachers)
    })
  }
}