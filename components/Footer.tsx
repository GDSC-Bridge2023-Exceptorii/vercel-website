import React from 'react';

const Footer: React.FC = () => {
  const style: React.CSSProperties = {
    margin: '0 1em 0em 1em'
  };

  const style2: React.CSSProperties = {
    padding: '1em 1em 1em 1em'
  };

  return (
    <footer className="Footer" style={{backgroundColor: 'black'}}>
      <div style= {style}>
      <div style= {style2}>
      <div  style={{color: 'white'}}>
        <div>Contact Information</div>
        <div>e-mail: ssss@sssss.gmail</div>
        <div>instagram: @000000</div>
        <div>phone:000-xxx-yyyy</div> 
        <div>FAQ</div>
      Copyright &copy; Exceptorii 2023
      </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
