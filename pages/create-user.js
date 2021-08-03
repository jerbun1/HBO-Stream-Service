import Head from 'next/head'
import Image from 'next/image'
// import img from '../public/img/UiFace.jpg'
export default function CreateUser() {
  return (
   <div>
     <div className="create-user">
     <div className="create-user_top">
       <div className="create-user_logo"/>
       <span className="create-user_title">
         who is watching? 
       </span>
     </div>

      <div className="create-user_form">
      <Image alt="UI Face" className="create-user_user-img" src='/public/img/UiFace.jpg' width={160} height={160} />

          <div className="create-user_input-group">
            <label>Name</label>
            <input type="text" className="create-user_inputText"/>
            <div className="create-user_colors">
              <div className="create-user_color create-user_color--active"
              style={{background: 'rgb(2,0,36)',
                      background: 'linear-gradient(133deg, rgba(2,0,36,1) 0%, rgba(36,4,74,1) 0%, rgba(77,9,121,1) 49%, rgba(164,139,38,1) 100%)'}}/>
                      <div className="create-user_color"
              style={{background: 'rgb(199,26,26)',
                background: 'linear-gradient(158deg, rgba(199,26,26,1) 20%, rgba(32,31,214,1) 77%)'}}/>

<div className="create-user_color"
              style={{background: 'rgb(137,0,171)',
                background: 'linear-gradient(158deg, rgba(137,0,171,1) 11%, rgba(31,214,67,1) 95%)'}}/>

<div className="create-user_color"
              style={{background: 'rgb(0,0,0)',
                background: 'linear-gradient(56deg, rgba(0,0,0,1) 14%, rgba(214,212,31,1) 95%)'}}/>

<div className="create-user_color"
              style={{background: 'rgb(254,142,98)',
                background: 'linear-gradient(56deg, rgba(254,142,98,1) 32%, rgba(31,210,214,1) 95%)'}}/>

              

              
            </div>
          </div>

        
      </div>
      <div className="create-user_buttons">
        <button className="create-user_save">Save</button>
        <button className="create-user_cancel">Cancel</button>

      </div>
     </div>
   </div>
  )
}
