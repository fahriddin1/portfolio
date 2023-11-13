import React, { useState } from 'react'
import Imgg from '../img/rasm.png'
import Img1 from '../img/nature1.webp'
import Img2 from '../img/nature2.webp'
import Img3 from '../img/nature3.webp'
import Img6 from '../img/case.webp'
import Img7 from '../img/python.png'
import Img8 from '../img/code.webp'
import Img9 from '../img/smm.jpg'
import Img10 from '../img/smdsein.webp'
import Img11 from '../img/smmdsein.webp'
import Img12 from '../img/all.webp'
import Img13 from '../img/lowcode.webp'
import Img14 from '../img/p.webp'
import Img15 from '../img/c.webp'
import Img16 from '../img/allof.jpg'
import Img17 from '../img/fitness.webp'
import Img18 from '../img/progrm.webp'
// import Img19 from '../img/instagram.png'
// import Img20 from '../img/telgram.png'
// import Img21 from '../img/youtube.png'

const Portfolio1 = () => {
  const [num, setNum] = useState(0)
  const handleNum = (p) =>{
    setNum(p)
  }
     
    
  return (
     <div className='container'> 
         <nav className='navbar'>
          <img src={Imgg} alt="" className='f-leader' />
           <h1 className='nav-logo'>edya</h1>
             <div className='a-leader'>
                <a className='a-desc' href="#">Home</a> 
                <a className='a-desc' href="#">About</a>
                <a className='a-desc' href="#">Work</a>
                <a className='a-desc' href="#">Service</a>
                <a className='a-desc' href="#">Contact</a>
                <a className='a-desc' href="#">Blog</a>
                <input className='search-desc' type="search" placeholder="Search" aria-label="Search" />
             </div>
             <button className='search-l' type="submit">Search</button>
         </nav>
         <div className='introduce'>
          <div className="left">
             <h1 className='hi-desc'>Hi there</h1>
             <h1 className='name-desc'> I`m   <span className="salom"> Xolmuhammedov Fahriddin</span> </h1>
             <h1 className='intro-desc'>Web Developer</h1>
                <button className='ish-desc'> Hire me</button>
          </div>

               <div className='right'>
                   <img src={num === 1 ? Img1 : num === 2 ? Img2 : Img3 } alt=""  className='round'/>
                    
                         
               </div>
               <div className='three-img'>
                <img src={Img1} alt="" onClick={()=>handleNum(1)} className='point-l'/>
                <img src={Img2} alt="" onClick={()=>handleNum(2)} className='point-l'/>
                <img src={Img3} alt="" onClick={()=>handleNum(3)} className='point-l'/>
               </div>
         </div>
         <div className='about-me'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            <div className="imgnum">
              <img src={Img6} alt="" className='me-l'/>
            </div>
            <div className="about">
              <h1>About me</h1>
              <p >I'm web developer based in Digital city</p>
              <p className='p-leader'>
              I am a self-taught front-end developer based in Andijan, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
                </p>
                <p className='p-desc'>
                    Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks
                </p>
                <button className='btn-desc'>Menu</button>
            </div>
          </div>
         <div className='expr-l'>                                                                                                                                                                                                                                                                                                                                                                                                                           
          <h1 className='respon-desc'>Field of knowledge</h1>
              <div className='three-d'>
              <div className='desc-1'>
                <img src={Img7} alt="" className='img-all'/>
                 <h1>python</h1>
                 <p>
                  I know the python not good but i know 
                  in the school we learn that`s why I say know 
                  but not well 
                 </p>
              </div>
              <div className='desc-2'>
                <img src={Img8} alt="" className='img-all' />
                 <h1>vs-code</h1>
                 <p>I know the vs code this kind of coding 
                   I learn in the Digital city 
                   in the Digital city my teacher is Fayzullo teacher 
                   I think these teacher the best  best teacher 
                 </p>
              </div>
              <div className='desc-3'>
                <img src={Img9} alt="" className='img-all' />
                 <h1>smm</h1>
                 <p>I know the python not good but i know 
                  in the school we learn that`s why I say know 
                  but not well</p>
              </div>
              </div>
         </div>
         <div className='recen-l'>
          <h1 className='recenr'>Recent work</h1>
          <p className='pl-desc'>Lorem ipsum dolor sit amet
             consectetur adipisicing elit
             . Repellat praesentium non voluptatem
              odio officiis, hic exercitationem illo 
              aspernatur nobis. Incidunt?</p>
                <div className='recen-l'>
                  <img src={Img10} alt=""  className='recen-desc' />
                  <img src={Img11} alt=""  className='receb-l'/>
                  <img src={Img12} alt=""  className='recenm-l'/>
                  <img src={Img13} alt=""  className='recew-l'/>
                  <img src={Img14} alt=""  className='recen-m'/>
                  <img src={Img15} alt=""  className='recen-end'/>
                  </div>                                           
                  <div className='btn-l'>
                  <button className='recen-btn'>View all</button>
                  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
         </div>
         <div className='my-interests'>
          <div>
            <h1 className='h1-element'>My interests</h1>
          </div>
                <div className='three-element'>
                <div className='two-ele'>
                <img src={Img16} alt="" className='iphone' />
                <p>I interest in collect the best thing in the world like iphone, mac, dollar</p>
                </div>
                 <div className='two-ele'>
                 <img src={Img17} alt="" className='iphone' />
                 <p>I  love playing wrestling and i must be bodybuilding </p>
                 </div>
                   <div className='third-el'> 
                   <img src={Img18} alt="" className='iphone'/>
                    <p>I really love IT like this python, vs code, smm, and earn a lot of money</p>
                   </div>
                </div>
                
         </div>
         <div className='footer'>
         <h1 className='tanisg'>The end of the my web page</h1>
         <p className='p-lorem'>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Nesciunt fuga, omnis sunt saepe
           distinctio itaque.</p>

           <div className='icon'>
              <a href="https://instagram.com/fahriddin__great_britan?igshid=NzZlODBkYWE4Ng=="  className='insta'>instagram</a>
              <a href="https://t.me/fedya_24_007"  className='teleg'>telegram</a>
              <a href="https://youtube.com/@xolmuhammedov_zdes?si=tWOt362zrKOM3WuE" className='youtu'>youtube</a>
           </div>
         </div> 
          <div className='user-name'>
            <div className='user-desc'>
              <h1 className='send-me'>Send me</h1>
              <input type="Email" placeholder='Username' className='email-claa'/> <br />
              <input type="Password" placeholder='Password' className='pasword-clas' />           
              <textarea  cols="30" rows="10"></textarea>
              <button className='butt-l'> <a href="mailto:f748743@gmail.com" className='list-none'>Submit</a> </button>                     
            </div>
         </div>
     </div>
  )
}

export default Portfolio1