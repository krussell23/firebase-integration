import { signOut } from "@firebase/auth";
import {auth} from "libs/firebase"
import useAuthState from '@/libs/hooks/userAuthState';
import styled from 'styled-components';
import { IoPersonCircleSharp } from "react-icons/io5";

const LoginStatus = styled.figure`
   display:flex;
   gap:0.5rem;
   justify-content: center;
   align-items: center;
   line-height:0.65rem;
   vertical-align: center;
   box-shadow: 0 0 2px 1px rgba(0,0,0,0.25);
   padding:0.125rem 0.5rem;
   border-radius:3px;
   cursor: pointer;
 
   width:120px;
  
    img{
        border-radius:50%;
    }
 
   figcaption{
       text-align:center;
       font-size: 9px;
     
   
       p:first-child{
           font-weight:600;
         
       }
       p:last-child{
           <font-weight:80></font-weight:80>0;         
       }
    }
   
` 

 function UserLoginStatus({size, color, status, ...props}) {
     const authState = useAuthState();
     function onLogOut (){
         signOut(auth).then(()=> console.log("user signed out"))
     }
   
      if(authState){
       return( <LoginStatus onClick={onLogOut}>
         <img src={authState.photoURL} width="30px" height="30px"/>
        <figcaption>
            <p>User Proifle</p>
            <p>{authState.displayName}</p>
        </figcaption>
     
        </LoginStatus>)
      }


      return( <LoginStatus onClick={onLogOut}>
        <IoPersonCircleSharp size={size || "1.75rem"} color={color} />  
       <figcaption>
           <p>Status</p>
           <p>please login</p>
       </figcaption>
       </LoginStatus>)
   
}

export default UserLoginStatus