using employee.db as db from '../db/schema';

service EmployeeService @(requires: 'authenticated-user') {
    @odata.draft.enabled
    entity Employee as projection on db.Employee;
}