import React from 'react'

function Alert(props) {
      const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.toString().charAt(0).toUpperCase() + lower.slice(1); //ahi pela word sivay badha aksar samll ma convert kari dese.
    }

  return (
    //https://getbootstrap.com/docs/4.0/components/alerts/
        
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}

export default Alert
