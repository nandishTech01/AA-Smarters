import React from 'react'

 function Alert(props) {
  const capitalize = (word) => {
    if (typeof word !== 'undefined' && word !== null) {  //first check karva k word che e empty to nathi ne then pachi lowercase  ma convert karse
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.substring(1);
    }
    return ''; // Return an empty string if word is undefined or null
  };

  //ahi pela word sivay badha aksar samll ma convert kari dese.

  return (
    //https://getbootstrap.com/docs/4.0/components/alerts/
        
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}

        </div>
  )
}

export default Alert
