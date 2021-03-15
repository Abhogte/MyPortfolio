import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>
           {/* <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1> */}
            <span><h1 style={{fontsize: "30px"}}>Visitor's Count</h1></span>
           
            <img src="https://hitwebcounter.com/counter/counter.php?page=7764185&style=0010&nbdigits=5&type=page&initCount=0" title="Free Counter" Alt="web counter"   border="0" />                            
                                              
           <ul>

            <li>If you like my work, or you want to give a feedback, collabrate with me or I am in your thoughts or just want to say Hi!, Please feel free to contact me on the Given Contact Information.♥️</li>
           </ul>

           <ul className="copyright">
              <li>&copy; Copyrights &copy; 2021 Aditya Dattatray Bhogte. All Rights Reserved </li>
              <li>Design by <a title="Styleshout" href="https://www.linkedin.com/in/adityabhogte/">Aditya Dattatray Bhogte</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
