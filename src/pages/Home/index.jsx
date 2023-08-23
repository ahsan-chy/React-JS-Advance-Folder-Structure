import React from 'react'
import styles from './home.module.css'
import { Button, Inputs, Modal, ToolTip } from '@/components'
import { Header, Footer, Navbar } from '@/layout'

const index = () => {
  return (
    <div className={styles.root}>
      <Header />
      Home Pag
      <br/>
      {/* <Button/>
      <Inputs/>
      <Modal/>
      <ToolTip/> */}
    </div>
  )
}

export default index
