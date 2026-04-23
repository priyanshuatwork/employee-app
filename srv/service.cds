using { employee.db as db } from '../db/schema';
using { northwind as ext } from './external/northwind';

service EmployeeService @(requires: 'authenticated-user') {
    @odata.draft.enabled
    entity Employees as projection on db.Employee;

    @readonly
    entity Customers as projection on ext.Customers;
}