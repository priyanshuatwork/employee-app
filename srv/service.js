const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

    const { Employee } = this.entities;   // ✅ FIXED

    this.before('CREATE', Employee, async (req) => {

        const data = req.data;

        if (!data.empId || !data.empName || !data.email || !data.role || !data.department || data.salary == null) {
            req.error(400, 'Please provide EMP ID, EMP name, Email ID, Role, Department, and Salary');
        }
    });
});