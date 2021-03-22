
// setTimeout(() => {
//     console.log('Hello there');
// }, 1000);

const getUserById = ( id, aCallback ) => {
    const user = {
        id,
        nombre: 'Carlitox'
    }

    setTimeout(() => {
        aCallback(user);
    }, 1500);
};

getUserById( 10, ( user ) => {
    console.log( user.id );
    console.log( user.nombre.toUpperCase() );
} );