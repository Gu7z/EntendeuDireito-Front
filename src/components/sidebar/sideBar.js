import React from "react";
import Sidebar from "react-sidebar";
import Footer from './sideButtons'

export function sideBarContent(){
    return(
        <div>aaaaaaaaaaa</div>
    )
}
export default function Side({isOpen, setOpen}){
    return(
        <Sidebar
            sidebar={
                <div style={{ width: 175, height: '100%', display: 'flex' }}>
                    <Footer></Footer>
                </div>
            }
            open={isOpen}
            onSetOpen={setOpen}
            styles={{ sidebar: { background: "white",position: 'fixed'} }}
            pullRight = {true}
        >
      </Sidebar>
    )
}
