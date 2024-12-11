import { useState, useEffect } from 'react';
import DefaultLayoutAdmin from '../../../../layout/DefaultLayoutAdmin';
// import DataJabatanPeople from '../../../../Utils/DataJabatanPeople';
import { Link, useNavigate } from "react-router-dom";
import { BreadcrumbAdmin, ButtonOne } from '../../../../components';
import { FaRegEdit, FaPlus, FaHistory } from 'react-icons/fa'
import { BsTrash3 } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'

const ITEMS_PER_PAGE = 4;
const DataJabatanPeople = [
    {
      id: 1,
      customerName: "John Doe",
      lendingAmount: 10000,
      balanceRemaining: 7500,
      paidAmount: 2500,
      totalInterest: 1000,
      status: "Active"
    },
    {
      id: 2,
      customerName: "Jane Smith",
      lendingAmount: 5000,
      balanceRemaining: 0,
      paidAmount: 5000,
      totalInterest: 500,
      status: "Completed"
    },
    {
      id: 3,
      customerName: "Robert Johnson",
      lendingAmount: 15000,
      balanceRemaining: 15000,
      paidAmount: 0,
      totalInterest: 1500,
      status: "Active"
    },
    {
      id: 4,
      customerName: "Sarah Williams",
      lendingAmount: 8000,
      balanceRemaining: 4000,
      paidAmount: 4000,
      totalInterest: 800,
      status: "Active"
    },
    {
      id: 5,
      customerName: "Michael Brown",
      lendingAmount: 12000,
      balanceRemaining: 0,
      paidAmount: 12000,
      totalInterest: 1200,
      status: "Completed"
    },
    {
      id: 6,
      customerName: "Emily Davis",
      lendingAmount: 20000,
      balanceRemaining: 18000,
      paidAmount: 2000,
      totalInterest: 2000,
      status: "Active"
    }
  ];


const LendingDetails = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(ITEMS_PER_PAGE);
    const [dataJabatan, setDataJabatan] = useState([]);
    const navigate = useNavigate();

    const totalPages = Math.ceil(DataJabatanPeople.length / ITEMS_PER_PAGE);

    useEffect(() => {
        setDataJabatan(DataJabatanPeople.slice(startIndex, endIndex));
    }, [startIndex, endIndex]);

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
            setStartIndex((prev) => prev - ITEMS_PER_PAGE);
            setEndIndex((prev) => prev - ITEMS_PER_PAGE);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
            setStartIndex((prev) => prev + ITEMS_PER_PAGE);
            setEndIndex((prev) => prev + ITEMS_PER_PAGE);
        }
    };


    return (
        <DefaultLayoutAdmin>
            <BreadcrumbAdmin pageName='Lending Details' />
            <Link to="/admin/master-data/lending/add-lending" >
                <ButtonOne>
                    <span>Add Lending</span>
                    <span>
                        <FaPlus />
                    </span>
                </ButtonOne>
            </Link>
            <div className='rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mt-6'>
                <div className="flex justify-between items-center mt-4 flex-col md:flex-row md:justify-between">
                    <div className="relative flex-2 mb-4 md:mb-0">
                        <input
                            type='text'
                            placeholder='Type to search..'
                            className='rounded-lg border-[1.5px] border-stroke bg-transparent py-2 pl-10 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary left-0'
                        />
                        <span className='absolute left-2 py-3 text-xl'>
                            <BiSearch />
                        </span>
                    </div>
                </div>

                <div className='max-w-full overflow-x-auto py-4'>
                    <table className='w-full table-auto'>
                        <thead>
                            <tr className='bg-gray-2 text-left dark:bg-meta-4'>
                                <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                    Customer Name
                                </th>
                                <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                    Lending Amount
                                </th>
                                <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                    Balance Remaining
                                </th>
                                <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                    Paid Amount
                                </th>
                                <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                    Total Interest
                                </th>
                                <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                    Status
                                </th>
                                <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataJabatan.map((lending) => {
                                return (
                                    <tr key={lending.id}>
                                        <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                            <p className='text-black dark:text-white'>{lending.customerName}</p>
                                        </td>
                                        <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                            <p className='text-black dark:text-white'>${lending.lendingAmount}</p>
                                        </td>
                                        <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                            <p className='text-black dark:text-white'>${lending.balanceRemaining}</p>
                                        </td>
                                        <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                            <p className='text-black dark:text-white'>${lending.paidAmount}</p>
                                        </td>
                                        <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                            <p className='text-black dark:text-white'>${lending.totalInterest}</p>
                                        </td>
                                        <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                            <span className={`inline-block px-3 py-1 rounded-full ${
                                                lending.status === 'Active' 
                                                    ? 'text-success bg-success/10' 
                                                    : 'text-danger bg-danger/10'
                                            }`}>
                                                {lending.status}
                                            </span>
                                        </td>
                                        <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                            <div className='flex items-center space-x-3.5'>
                                                <button className='hover:text-black'>
                                                    <FaRegEdit className="text-primary text-xl hover:text-black dark:hover:text-white" />
                                                </button>
                                                <button className='hover:text-black'>
                                                    <BsTrash3 className="text-danger text-xl hover:text-black dark:hover:text-white" />
                                                </button>
                                                <button className='hover:text-black' onClick={() => navigate(`/admin/lending`)}>
                                                {/* onClick={() => navigate(`/admin/lending/${lending.id}`) */}
                                                    <FaHistory className="text-success text-xl hover:text-black dark:hover:text-white" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div className='flex justify-between items-center mt-4 flex-col md:flex-row md:justify-between'>
                    <div className='flex items-center space-x-2'>
                        <span className='text-gray-5 dark:text-gray-4 text-sm py-4'>
                            Showing {startIndex}-{endIndex} of {DataJabatanPeople.length} Data Jabatan
                        </span>
                    </div>
                    <div className='flex space-x-2 py-4'>
                        <button
                            disabled={currentPage === 1}
                            onClick={goToPrevPage}
                            className='py-2 px-6 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white dark:text-white dark:border-primary dark:hover:bg-primary dark:hover:text-white disabled:opacity-50'
                        >
                            Prev
                        </button>
                        {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                            const page = i + 1;
                            if (page === currentPage) {
                                return (
                                    <div
                                        key={i}
                                        className="py-2 px-4 rounded-lg border border-primary bg-primary text-white font-semibold hover:bg-primary dark:text-white dark:bg-primary dark:hover:bg-primary"
                                    >
                                        {page}
                                    </div>
                                );
                            } else if (page === 2 && currentPage > 4) {
                                return (
                                    <p
                                        key={i}
                                        className="py-2 px-4 border border-gray-2 dark:bg-transparent text-black font-medium bg-gray dark:border-strokedark dark:text-white"
                                    >
                                        ...
                                    </p>
                                );
                            } else if (page === totalPages - 1 && currentPage < totalPages - 3) {
                                return (
                                    <p
                                        key={i}
                                        className="py-2 px-4 border border-gray-2 dark:bg-transparent text-black font-medium bg-gray dark:border-strokedark dark:text-white"
                                    >
                                        ...
                                    </p>
                                );
                            } else if (
                                page === 1 ||
                                page === totalPages ||
                                (page >= currentPage - 1 && page <= currentPage + 1)
                            ) {
                                return (
                                    <div
                                        key={i}
                                        className="py-2 px-4 rounded-lg border border-gray-2 text-black dark:bg-transparent bg-gray font-medium dark:border-strokedark dark:text-white"
                                    >
                                        {page}
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={goToNextPage}
                            className='py-2 px-6 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white dark:text-white dark:border-primary dark:hover:bg-primary dark:hover:text-white disabled:opacity-50'
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </DefaultLayoutAdmin>
    )
}

export default LendingDetails;