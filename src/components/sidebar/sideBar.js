import React from "react";
import Sidebar from "react-sidebar";
import SideButton from './sideButtons'

export default function Side({isOpen, setOpen}){

    var zidex = isOpen ? 1 : -1

    return(
        <Sidebar
            sidebar={
                <div style={{ width: 175, height: '100%', display: 'flex' }}>
                    <SideButton setOpen={setOpen}></SideButton>
                </div>
            }
            open={isOpen}
            onSetOpen={setOpen}
            styles={{ sidebar: { background: "white",position: 'fixed'}, root: {zIndex: {zidex}} }}
            pullRight = {true}
        >
      </Sidebar>
    )
}
