import Footer from "../footer/footer";
import Header from "../header/header";


function TermosUso() {
    return (
      <>
      <Header />
      <main className="mt-5 mb-5">
        <div>
            <h1>1.Termos</h1>
            <p className="text-termos">Ao acessar ao site <a href="/">Animepedia</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>
        </div>
        <div>
            <h1>2.Uso de Licença</h1>
            <p className="text-termos">É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Animepedia , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: </p>
            <div className="paragrafo-termos">
                <p>1.modificar ou copiar os materiais;</p>
                <p>2.usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</p>
                <p>3.tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Animepedia; </p>
                <p>4.remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</p>
                <p>5.ou transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</p>
            </div>
            <p className="text-termos">Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Animepedia a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>
        </div>
        <div>
            <h1>3.Isenção de responsabilidade</h1>
            <p className="text-termos">1.Os materiais no site da Animepedia são fornecidos 'como estão'. Animepedia não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
            <p className="text-termos">2.Além disso, o Animepedia não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</p>
        </div>
        <div>
            <h1>4.Limitações</h1>
            <p className="text-termos">Em nenhum caso o Animepedia ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Animepedia, mesmo que Animepedia ou um representante autorizado da Animepedia tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você</p>
        </div>
        <div>
            <h1>5.Precisão dos materiais</h1>
            <p className="text-termos">Os materiais exibidos no site da Animepedia podem incluir erros técnicos, tipográficos ou fotográficos. Animepedia não garante que qualquer material em seu site seja preciso, completo ou atual. Animepedia pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Animepedia não se compromete a atualizar os materiais.</p>
        </div>
        <div>
            <h1>6.Links</h1>
            <p className="text-termos">O Animepedia não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Animepedia do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>
        </div>
        <div>
            <h3>Modificações</h3>
            <p className="text-termos">O Animepedia pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
        </div>
        <div>
            <h3>Lei aplicável</h3>
            <p className="text-termos">Estes termos e condições são regidos e interpretados de acordo com as leis do Animepedia e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
        </div>
      </main>
      <Footer />
      </>
    
      
  );
}

export default TermosUso;