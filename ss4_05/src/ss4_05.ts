type Person ={
    name :string,
    age:number
}
type Employee ={
    employeeId :string
    department:string
}
type StaffMember =Person&Employee
let staff:StaffMember={
    name:`: Nguyễn Văn A `,
    age:24,
    employeeId:`jhd83`,
    department:`Kế toán`

}
function  printStaffInfo(staff:StaffMember){
    console.log(staff.name);
    console.log(staff.age);
    console.log(staff.employeeId);
    console.log(staff.department);
}
printStaffInfo(staff)