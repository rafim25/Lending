import React from 'react';
import { Link } from "react-router-dom";
import DefaultLayoutAdmin from '../../../../layout/DefaultLayoutAdmin';
import { BreadcrumbAdmin, ButtonOne, ButtonTwo, ButtonThree } from '../../..';

const SalaryDeductionSettingForm = () => {
  return (
    <DefaultLayoutAdmin>
      <BreadcrumbAdmin pageName='Salary Deduction Settings Form' />

      <div className='sm:grid-cols-2'>
        <div className='flex flex-col gap-9'>
          {/* <!-- Salary Deduction Settings Form --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
              <h3 className='font-medium text-black dark:text-white'>
                Salary Deduction Settings Form
              </h3>
            </div>
            <form action='#'>
              <div className='p-6.5'>
                <div className='mb-4.5 '>
                  <div className='w-full mb-4'>
                    <label className='mb-4 block text-black dark:text-white'>
                      Deduction <span className='text-meta-1'>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Enter deduction'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>

                  <div className='w-full mb-4'>
                    <label className='mb-4 block text-black dark:text-white'>
                      Deduction Amount <span className='text-meta-1'>*</span>
                    </label>
                    <input
                      type='number'
                      placeholder='Enter deduction amount'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>
                </div>

                <div className='flex flex-col md:flex-row w-full gap-3 text-center'>
                  <Link to="" >
                    <ButtonOne>
                      <span>Save</span>
                    </ButtonOne>
                  </Link>
                  <Link to="/admin/transaksi/setting-potongan-gaji/form-setting-potongan-gaji" >
                    <ButtonTwo>
                      <span>Reset</span>
                    </ButtonTwo>
                  </Link>
                  <Link to="/admin/transaksi/setting-potongan-gaji" >
                    <ButtonThree>
                      <span>Back</span>
                    </ButtonThree>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayoutAdmin>
  )
}

export default SalaryDeductionSettingForm;
