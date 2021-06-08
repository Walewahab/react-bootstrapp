import React from 'react';
import "./Footer.css";
import styled from "styled-components"

const Footer = () => {
    return (
       <FooterContainer className="main-footer">
           <div className="footer-middle">
           <div className="container">
               <div className="row">
                  {/*  column 1 */}
                  <div className="col-md-3 col-sm-6">
                      <h4>lorem ipsum</h4>
                      <ul className="list-unstyled">
                      <li>lorem ipsum</li>
                      <li>lorem ipsum</li>
                      <li>lorem ipsum</li>
                      <li>lorem ipsum</li>
                      </ul>
                  </div>
                  {/* end column 1 */}
                  {/*  column 2 */}
                  <div className="col-md-3 col-sm-6">
                      <h4>lorem ipsum</h4>
                      <ul className="list-unstyled">
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      </ul>
                  </div>
                  {/* end column 2 */}
                  {/*  column 3 */}
                  <div className="col-md-3 col-sm-6">
                      <h4>lorem ipsum</h4>
                      <ul className="list-unstyled">
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      </ul>
                  </div>
                  {/* end column 3 */}
                  {/*  column 4 */}
                  <div className="col-md-3 col-sm-6">
                      <h4>lorem ipsum</h4>
                      <ul className="list-unstyled">
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      <li><a href="#">lorem ipsum</a></li>
                      </ul>
                  </div>
                  {/* end column 4 */}
               </div>
                {/*  Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} City Guild App - All Rights
                    </p>
                </div>
           </div>
           </div>
       </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGray);
}

ul li a:hover {
    color: var(--mainLightGray);
}
`;