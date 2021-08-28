
import Header from '../UI/Header/Header'
import { useStateContext } from '../UI/HBOProvider'
//This is the main layout of a index page that will display whatever is in the component
// 'linear-gradient(135deg, rgba(0,0,0,1) 55%, rgba(119,30,135,1) 100%)', minHeight: '100vh', backgroundAttachment: 'fixed'
// 'linear-gradient(135deg, rgba(0,0,0,1) 55%, rgba(119,30,135,1) 100%)'
const MainLayout = (props) => {
  const globalState = useStateContext();

  return(<div style={{
    background: globalState.changeBackground, minHeight: '100vh', backgroundAttachment: 'fixed'
  }} key={props}>
<Header/>
    <section className="content-container">
      {props.children}
    </section>
  </div>)
}

export default MainLayout;