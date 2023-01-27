import './usuarios.css';
import { useState } from 'react';

export default function ListUser(props){
    let [mensagem, setMensagem] = useState('')
    const [usuarios, setUsuarios] = useState(['Usuario 1','Usuario 2'])
    const limiteUser = 4

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
    function changeColor(e){
        const elementoAtivo = e
        elementoAtivo.addClass
    }
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
                        <div className='user' ativo={} onClick={changeColor}>
                            <h3 key={usuario.id}>{usuario}</h3> 
                        </div>
                    </>
                )
            })}
        </div>
    </>
    )
    
}