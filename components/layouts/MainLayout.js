
import Header from '../UI/Header/Header'
import { useStateContext } from '../UI/HBOProvider'
//This is the main layout for the Index, Create and Login pages that will display whatever is in the component

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