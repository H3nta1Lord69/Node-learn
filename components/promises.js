let employess = [{
    id: 1,
    nombre: 'Carlitox'
}, 
{
    id: 2,
    nombre: 'Alberticox'
}, 
{
    id: 3,
    nombre: 'Nicolax'
}];
 
let salarys = [{
    id: 1,
    salary: 1000
}, 
{
    id: 2,
    salary: 2000
}];
 
let getEmployee = (id) => {

    return new Promise((resolve, reject) => {

        let employessDB = employess.find(employee => employee.id === id);

        !employessDB 
        ? reject(`No existe un empleado con el ID ${id}`) 
        : resolve(employessDB)
    });

};
 
let getSalary = (employee) => {

    return new Promise((resolve, reject) => {

        let salarysDB = salarys.find(salary => salary.id === employee.id);

        !salarysDB 
        ? reject(`No se encontro un salario para el empleado: ${employee.nombre}`) 
        : resolve({

            nombre: employee.nombre,
            salary: salarysDB.salary,
            id: employee.id

        });
    });
};
 
getEmployee(2)
    .then(employee => {
    return getSalary(employee);
    })
    .then(resp => {
        console.log(`EL salario de ${resp.nombre} es de ${resp.salary}`);
    })
    .catch((err) => console.log(err));