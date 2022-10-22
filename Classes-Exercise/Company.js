class Company{
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error('Invalid input!')
        } else{
            let employee = {name, salary, position};

            if (!this.departments.hasOwnProperty(department)) {
                this.departments[department] = [];
            }

            this.departments[department].push(employee);
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }

    bestDepartment(){
        let bestAvgSalary = 0;
        let bestDepartment = '';
        let company = Object.entries(this.departments)

        for (const [department, employees] of company) {
            let totalSalary = 0;
            for (const employee of employees) {
                totalSalary += Number(employee.salary);
            }

            let avgSalary = totalSalary / employees.length;

            if (avgSalary > bestAvgSalary) {
                bestAvgSalary = avgSalary;
                bestDepartment = department;
            }
        }

        let sortedEmployees = this.departments[bestDepartment].sort((a,b) => {
            return b.salary - a.salary == 0 ? a.name.localeCompare(b.name) : b.salary - a.salary
        }).map(x => `${x.name} ${x.salary} ${x.position}`).join('\n');

        return `Best Department is: ${bestDepartment}\nAverage salary: ${bestAvgSalary.toFixed(2)}\n${sortedEmployees}`;
    }
}