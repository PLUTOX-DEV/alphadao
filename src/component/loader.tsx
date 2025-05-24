import React from "react"

const Loader: React.FC = () => {

    return(
        <div className="fixed  w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-10">
        
             <img src="../Daologo.png" className="w-10 h-10 animate-spin-slow" alt="☯️"/>
             
        </div>
    )
}

export default Loader