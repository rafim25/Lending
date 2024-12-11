import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from '../../components/molecules/NotFound'
import EmployeeDataForm from '../../components/molecules/Form/EmployeeDataForm'
import PositionDataForm from '../../components/molecules/Form/PositionDataForm'
// import EditLending from "../../components/molecules/Form/"
import SalaryDeductionSettingForm from '../../components/molecules/Form/SalaryDeductionSettingForm'
import {
  AdminLogin, AdminDashboard, EmployeeData, PositionData, AttendanceData, SalaryDeductionSetting, SalaryData, SalaryReport,
  AttendanceReport, PaySlip, AdminChangePassword, EmployeeLogin, EmployeeDashboard, EmployeeSalaryData, EmployeeChangePassword, Lending
} from '../../pages'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Admin Routes */}
      {/* Admin Login */}
      <Route exact path='/admin/login' element={<AdminLogin />} />
      <Route exact path='/' element={<AdminLogin />} />
      {/* Admin Dashboard */}
      <Route exact path='/admin/dashboard' element={<AdminDashboard />} />
      {/* Admin Master Data */}
      <Route path='/admin/master-data/employee-data' element={<EmployeeData />} />
      <Route path='/admin/master-data/employee-data/employee-form' element={<EmployeeDataForm />} />
      <Route path='/admin/master-data/position-data' element={<PositionData />} />
      <Route path='/admin/master-data/position-data/position-form' element={<PositionDataForm />} />
      {/* <Route path='/admin/master-data/position-data/lending/edit' element={<PositionDataForm />} /> */}
      <Route path='/admin/lending' element={<Lending />} />
      {/* Admin Transactions */}
      <Route path='/admin/transactions/attendance-data' element={<AttendanceData />} />
      <Route path='/admin/transactions/salary-deduction-setting' element={<SalaryDeductionSetting />} />
      <Route path='/admin/transactions/salary-deduction-setting/deduction-form' element={<SalaryDeductionSettingForm />} />
      <Route path='/admin/transactions/salary-data' element={<SalaryData />} />
      {/* Admin Reports */}
      <Route path='/admin/reports/salary-report' element={<SalaryReport />} />
      <Route path='/admin/reports/attendance-report' element={<AttendanceReport />} />
      <Route path='/admin/reports/pay-slip' element={<PaySlip />} />
      {/* Admin Settings */}
      <Route path='/admin/settings/change-password' element={<AdminChangePassword />} />

      {/* Employee Routes */}
      {/* Employee Login */}
      <Route exact path='/employee/login' element={<EmployeeLogin />} />
      {/* Employee Dashboard */}
      <Route exact path='/employee/dashboard' element={<EmployeeDashboard />} />
      {/* Employee Salary Data */}
      <Route exact path='/employee/salary-data' element={<EmployeeSalaryData />} />
      <Route exact path='/employee/settings/change-password' element={<EmployeeChangePassword />} />
      {/* Not Found Route */}
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes;
