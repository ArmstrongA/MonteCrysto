import {Link} from 'react-router-dom';
import React from 'react';

export default (args) => {

if(args.onOff){
return(

  <section className="notifications-tab">
    <h3 >Funds Available</h3>
    <h2 className="notifications-subtitle-with-value"> {args.currentUser.funds_usd ? args.currentUser.funds_usd : 0 } USD</h2>
    <br></br>
    <h3>Messages</h3>
    <h2>0</h2>
  </section>

);
}else{
  return(
    <div>
    </div>
  );
}

};
