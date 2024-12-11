import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DefaultLayoutAdmin from "../../../layout/DefaultLayoutAdmin";
import { BreadcrumbAdmin } from "../../../components";

const Lending = () => {
  const { id } = useParams();
  const [lending, setLending] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [transaction, setTransaction] = useState({
    amount: "",
    date: "",
    image: null,
  });

  const ITEMS_PER_PAGE = 5; // Number of transactions per page
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(ITEMS_PER_PAGE);

  // Summary cards data
    // Summary cards data
    const summaryCards = [
      {
        title: "Total Amount Paid",
        amount: "₹2,500", // Updated to Indian currency
        bgColor: "bg-success/10",
        textColor: "text-success",
      },
      {
        title: "Balance Remaining",
        amount: "₹7,500", // Updated to Indian currency
        bgColor: "bg-danger/10",
        textColor: "text-danger",
      },
      {
        title: "Next Payment Due",
        amount: "₹15,000", // Updated to Indian currency
        bgColor: "bg-warning/10",
        textColor: "text-warning",
      },
    ];
  
    // Dummy transaction data with image
    const dummyTransactions = [
      {
        id:"T4567",
        date: "2024-04-10",
        amount: "₹500", // Updated to Indian currency
        receipt: "/images/payment.jpeg", 
        comments: "paid on time"
      },
      {
        id:"T5567",
        date: "2024-04-15",
        amount: "₹300", // Updated to Indian currency
        receipt: "/images/payment2.jpeg", 
        comments: "paid on time"
      },
      {
        id:"T9867",
        date: "2024-04-20",
        amount: "₹700", // Updated to Indian currency
        receipt: "/images/payment3.jpeg", 
        comments: "paid on time"
      },
      {
        id:"T0967",
        date: "2024-04-25",
        amount: "₹200", // Updated to Indian currency
        receipt: "/images/payment4.jpeg", 
        comments: "paid on time"
      },
      {
        id:"T4567",
        date: "2024-04-10",
        amount: "₹500", // Updated to Indian currency
        receipt: "/images/payment.jpeg", 
        comments: "paid on time"
      },
      {
        id:"T5567",
        date: "2024-04-15",
        amount: "₹300", // Updated to Indian currency
        receipt: "/images/payment2.jpeg", 
        comments: "paid on time"
      },
      {
        id:"T9867",
        date: "2024-04-20",
        amount: "₹700", // Updated to Indian currency
        receipt: "/images/payment3.jpeg", 
        comments: "paid on time"
      },
      {
        id:"T0967",
        date: "2024-04-25",
        amount: "₹200", // Updated to Indian currency
        receipt: "/images/payment4.jpeg", 
        comments: "paid on time"
      },
    ];

  // Calculate total pages
  const totalPages = Math.ceil(dummyTransactions.length / ITEMS_PER_PAGE);

  // Calculate the current transactions
  const currentTransactions = dummyTransactions.slice(startIndex, endIndex);

  // Handle page change
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

  // Handle view receipt click
  const handleViewReceipt = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  // Modal component
  const ReceiptModal = ({ transaction, onClose }) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-2xl rounded-lg bg-white p-6 dark:bg-boxdark">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h3 className="mb-4 text-xl font-semibold">Transaction Receipt</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">Date: {transaction.date}</p>
              <p className="text-sm font-medium">Amount: {transaction.amount}</p>
            </div>
            <div className="flex justify-center">
              <img
                src={transaction.receipt}
                alt="Receipt"
                className="max-h-[500px] rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <DefaultLayoutAdmin>
      <BreadcrumbAdmin pageName="Edit Lending" />

      {/* Summary Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {summaryCards.map((card, index) => (
          <div key={index} className={`rounded-lg p-4 ${card.bgColor}`}>
            <h3 className="text-sm font-medium">{card.title}</h3>
            <p className={`text-2xl font-bold ${card.textColor}`}>
              {card.amount}
            </p>
          </div>
        ))}
      </div>

      {/* Customer & Loan Details */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-default dark:bg-boxdark">
          <h2 className="mb-4 text-xl font-semibold">Customer Details</h2>
          <div className="space-y-4">
          <div>
              <label className="mb-1 block text-sm font-medium">
                Customer ID {/* New field added */}
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-stroke p-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
                defaultValue="CUST12345" // Example default value
                disabled
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Customer Name
              </label>
              <input
                type="text"
                 className="w-full rounded-md border border-stroke p-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
                defaultValue="John Doe"
                disabled
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Contact Number
              </label>
              <input
                type="text"
                 className="w-full rounded-md border border-stroke p-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
                defaultValue="+1234567890"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-default dark:bg-boxdark">
          <h2 className="mb-4 text-xl font-semibold">Loan Details</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Loan Amount
              </label>
              <input
                type="text"
                 className="w-full rounded-md border border-stroke p-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
                defaultValue="$10,000"
                disabled
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Interest Rate
              </label>
              <input
                type="text"
                 className="w-full rounded-md border border-stroke p-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
                defaultValue="5%"
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add Transaction Form */}
      <div className="mt-6 rounded-lg bg-white p-6 shadow-default dark:bg-boxdark">
        <h2 className="mb-4 text-xl font-semibold">Add Transaction</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Amount</label>
            <input
              type="number"
               className="w-full rounded-md border border-stroke p-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
              value={transaction.amount}
              onChange={(e) =>
                setTransaction({ ...transaction, amount: e.target.value })
              }
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Date</label>
            <input
              type="date"
               className="w-full rounded-md border border-stroke p-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
              value={transaction.date}
              onChange={(e) =>
                setTransaction({ ...transaction, date: e.target.value })
              }
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium">
              Upload Receipt
            </label>
            <input
              type="file"
               className="w-full rounded-md border border-stroke p-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
              onChange={(e) =>
                setTransaction({ ...transaction, image: e.target.files[0] })
              }
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium">Comments</label>
            <input
              type="text"
              className="w-full rounded-md border border-stroke p-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
              value={transaction.comments} // New comments field
              onChange={(e) =>
                setTransaction({ ...transaction, comments: e.target.value })
              }
            />
          </div>
          <div className="md:col-span-2">
            <button className="rounded-lg bg-primary px-6 py-2 text-white hover:bg-opacity-90">
              Add Transaction
            </button>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="mt-6 rounded-lg bg-white p-6 shadow-default dark:bg-boxdark">
        <h2 className="mb-4 text-xl font-semibold">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-2 dark:bg-meta-4">
              <th className="px-4 py-4 text-left">Trasaction Id</th>
                <th className="px-4 py-4 text-left">Date</th>
                <th className="px-4 py-4 text-left">Amount</th>
                <th className="px-4 py-4 text-left">Receipt</th>
                <th className="px-4 py-4 text-left">Comments</th> 
              </tr>
            </thead>
            <tbody>
            {currentTransactions.map((transaction, index) => (
      <tr key={index}>
         <td className="px-4 py-4">{transaction.id}</td>
        <td className="px-4 py-4">{transaction.date}</td>
        <td className="px-4 py-4">{transaction.amount}</td>
        <td className="px-4 py-4">
          <button
            className="text-primary hover:underline"
            onClick={() => handleViewReceipt(transaction)}
          >
            View Receipt
          </button>
        </td>
        <td className="px-4 py-4">{transaction.comments}</td>
      </tr>
    ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-start items-center mt-4 flex-col md:flex-row md:justify-start'>
          <div className='flex space-x-2 py-4 text-white'> {/* Changed to text-white */}
                <button
                    disabled={currentPage === 1}
                    onClick={goToPrevPage}
                    className='py-2 px-6 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white dark:text-white dark:border-primary dark:hover:bg-primary dark:hover:text-white disabled:opacity-50'
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    return (
                        <div
                            key={i}
                            onClick={() => {
                                setCurrentPage(page);
                                setStartIndex((page - 1) * ITEMS_PER_PAGE);
                                setEndIndex(page * ITEMS_PER_PAGE);
                            }}
                            className={`py-2 px-4 rounded-lg border ${currentPage === page ? 'bg-primary text-white' : 'border-gray-2 text-black'}`}
                        >
                            {page}
                        </div>
                    );
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

      {/* Modal */}
      {showModal && (
        <ReceiptModal
          transaction={selectedTransaction}
          onClose={() => setShowModal(false)}
        />
      )}
    </DefaultLayoutAdmin>
  );
};

export default Lending;
