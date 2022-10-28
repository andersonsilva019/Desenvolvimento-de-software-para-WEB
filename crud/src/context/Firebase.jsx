import { createContext } from 'react'
import { db } from '../services/firebase'

export const FirebaseContext = createContext({});


export function FirebaseProvider({ children }) {

  return (
    <FirebaseContext.Provider value={{ db }}>
      {children}
    </FirebaseContext.Provider>
  )
}