import React from 'react';

function WithStorageListener(Component) {
  return function WrappedComponent(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
      if(change.key === 'TODOS_V1') {
        console.log(change, 'hubo cambios');
        setStorageChange(true);
      }
    })

    const toggleShow = ()=> {
      props.sincronize();
      setStorageChange(false)
    }
    
    return (
        <Component
          show={storageChange}
          toggleShow={toggleShow}
        />
    );
  };
}

export default WithStorageListener;