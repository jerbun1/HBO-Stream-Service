import Head from 'next/head'
import Image from 'next/image'
import { useStateContext } from '../components/UI/HBOProvider';
import ls from 'local-storage'
import {v4} from 'uuid'
import Router from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import Login from '../components/UI/Login/Login';

const LoginPage = ()=> {
return(
    <Login/>
)
  
}

export default LoginPage 

