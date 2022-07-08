import type { NextPage } from 'next'
import "bootstrap/dist/css/bootstrap.css";
import HeaderLogin from '../ui/components/header/headerLogin';
import FormLogin from '../ui/components/forms/formLogin';
import Footer from '../ui/components/footer/footer';



const Login: NextPage = () => {
  return (
   <>   
      <HeaderLogin/>
      <FormLogin/>
      <Footer/>
   </>
 
  )
}

export default Login