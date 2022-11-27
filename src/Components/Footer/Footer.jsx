
import CustomNav from "../NavBar/CustomNav"

const Footer = () => {
    return ( 
      <div className="sticky-bottom">
          <div>
              <footer className="text-center text-lg-start bg-light text-muted">
   
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
     
          </section>

          <section>
            <div className="container text-center text-md-start mt-5">
             
              <div className="row mt-3">
             
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />Cerveceria
                  </h6>
                  <p>
                    Todo lo que necesitas en un solo lugar
                  </p>
                </div>
              
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
               
                  <h6 className="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
        
                  <p>
                    <a href="#!" className="text-reset">React</a>
                  </p>
                
          
                </div>
               
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <div >
                <CustomNav/>
            </div>
                </div>
               
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  
                  <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                  </h6>
                  <p><i className="fas fa-home me-3" /> Buenos Aires</p>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    cervezapatagonia@gmail.com.ar
                  </p>
                  <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
                  <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
                </div>
               
              </div>
              
            </div>
          </section>
         
          <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
            © 2022 Copyright
                    </div>
          
        </footer>
      
          </div>
       </div> 
     );
}
 


export default Footer;