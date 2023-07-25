import React from 'react'

const Context = React.createContext({
  darkTheme: false,
  sidebarId: '',
  savedVideos: [],
  toggleTheme: () => {},
  addVideos: () => {},
  changeSidebarId: () => {},
})

export default Context
