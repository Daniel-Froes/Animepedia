import type { NextPage } from 'next'
import "bootstrap/dist/css/bootstrap.css";
import HeaderLogin from '../ui/components/header/headerLogin';
import FormCadastro from '../ui/components/forms/formCadastro';
import Footer from '../ui/components/footer/footer';



const Cadastro: NextPage = () => {
  return (
   <>   
      <HeaderLogin/>
      <FormCadastro/>
      <Footer/>
   </>
 
  )
}

export default Cadastro