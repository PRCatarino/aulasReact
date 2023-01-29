import './usuarios.css';
import { useState } from 'react';

export default function ListUser(props){
    let [mensagem, setMensagem] = useState('')
    const [usuarios, setUsuarios] = useState(['Usuario 1','Usuario 2'])
    const limiteUser = 4
    const [select, setSelect] = useState(false)

    function changeList(){

       if(usuarios.length < limiteUser){

           setUsuarios((prevUser)=>{
              const newList = [...prevUser]
              newList.push(`Usuario ${usuarios.length + 1}`)

              return newList
           })

       }else{
           setMensagem('Limite atingido')
       }
       
    }
    function changeColor(){
        setSelect(true)
    }
    console.log(select)
    return(
        <>
        <div>
            <div class="groupAdd">
                <button onClick={()=>{changeList()}}>Adicionar Usuario</button>
                <p className='limite'>{mensagem}</p>
            </div>
            {usuarios.map((usuario)=>{
                return (
                    <>
                        <div className='user' onClick={changeColor}>
                            <h3 key={usuario}>{usuario}</h3> 
                        </div>
                    </>
                )
            })}
        </div>
    </>
    )
    
}