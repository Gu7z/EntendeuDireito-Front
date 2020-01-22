import React, { useEffect } from "react";
import Sidebar from "react-sidebar";
import SideButton from './sideButtons'

export default function Side({isOpen, setOpen}){

    var zidex

    if (isOpen) {
        zidex = 1
    }else{
        zidex = -1
    }

    return(
        <Sidebar
            sidebar={
                <div style={{ width: 175, height: '100%', display: 'flex' }}>
                    <SideButton setOpen={setOpen}></SideButton>
                </div>
            }
            open={isOpen}
            onSetOpen={setOpen}
            styles={{ sidebar: { background: "white",position: 'fixed'}, root: {zIndex: zidex} }}
            pullRight = {true}
        >
      </Sidebar>
    )
}
