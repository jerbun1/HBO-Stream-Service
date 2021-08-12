
import Header from '../UI/Header/Header'
//This is the main layout of a index page that will display whatever is in the component

const MainLayout = (props) => {
  return(<div style={{
    background: 'linear-gradient(135deg, rgba(0,0,0,1) 55%, rgba(119,30,135,1) 100%)', minHeight: '100vh', backgroundAttachment: 'fixed'
  }} key={props}>
    <Header />

    <section className="content-container">
      {props.children}
    </section>
  </div>)
}

export default MainLayout;